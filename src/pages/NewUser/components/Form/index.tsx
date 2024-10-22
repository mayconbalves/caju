import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '~/components/Buttons'
import ConfirmationModal from '~/components/ConfirmModal'
import Loader from '~/components/Loader'
import TextField from '~/components/TextField'
import { useToast } from '~/contexts/Toast/useToast'
import routes from '~/router/routes'
import { createNewUser } from '~/services/new-user'
import { cpfMask } from '~/utils'
import { FormData, FormErrors } from './types'
import { validateField } from './validator'

const NewUserForm = () => {
  const history = useHistory()
  const [load, setLoad] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    employeeName: '',
    email: '',
    documentId: '',
    admissionDate: '',
    status: 'REVIEW'
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const { showToast } = useToast()

  const goToHome = () => {
    history.push(routes.dashboard)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors: FormErrors = {}
    Object.keys(formData).forEach((field) => {
      const errorMessage = validateField(field, formData[field as keyof FormData])
      if (errorMessage) {
        newErrors[field as keyof FormErrors] = errorMessage
      }
    })

    setErrors(newErrors)

    const hasErrors = Object.values(newErrors).some((error) => error !== '')
    if (!hasErrors) {
      setIsModalOpen(true)
    }
  }

  const handleConfirmSubmit = async () => {
    setIsModalOpen(false)
    setLoad(true)

    try {
      await createNewUser(formData)
      showToast('Usuário criado com sucesso!', 'success')
      goToHome()
    } catch {
      showToast('Erro ao criar o usuário.', 'error')
    } finally {
      setLoad(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <TextField
          placeholder="Nome"
          label="Nome"
          name="employeeName"
          value={formData.employeeName}
          onChange={handleInputChange}
          error={errors.employeeName}
        />
        <TextField
          placeholder="Email"
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
        />
        <TextField
          placeholder="CPF"
          label="CPF"
          name="documentId"
          value={cpfMask(formData.documentId)}
          onChange={handleInputChange}
          error={errors.documentId}
        />
        <TextField
          label="Data de admissão"
          type="date"
          name="admissionDate"
          value={formData.admissionDate}
          onChange={handleInputChange}
          error={errors.admissionDate}
        />
        <Button type="submit">Cadastrar</Button>
        {load && <Loader />}
      </form>

      <ConfirmationModal
        isOpen={isModalOpen}
        message="Tem certeza que deseja submeter este formulário?"
        onConfirm={handleConfirmSubmit}
        onCancel={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default NewUserForm
