import Button from '@/components/Buttons'
import { IconButton } from '@/components/Buttons/IconButton'
import TextField from '@/components/TextField'
import routes from '@/router/routes'
import { newUserRegistrations } from '@/services'
import { documentIdMask, documentIdValidation } from '@/utils/DocumentIdHelpers'
import { validateEmail } from '@/utils/EmailValidator'
import { validateEmployeeName } from '@/utils/EmployeeNameValidator'
import React, { useState } from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'
import { Card, Container } from './styles'

const NewUserPage = () => {
  const history = useHistory()

  const [values, setValues] = useState({
    employeeName: '',
    email: '',
    documentId: '',
    admissionDate: ''
  })

  const [fieldErrors, setFieldErrors] = useState({
    employeeName: { error: false, message: '' },
    email: { error: false, message: '' },
    documentId: { error: false, message: '' },
    admissionDate: { error: false, message: '' }
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValues((prevValues) => ({ ...prevValues, [name]: value }))

    if (name === 'employeeName') {
      if (!validateEmployeeName(value)) {
        setFieldErrors((prevErrors) => ({
          ...prevErrors,
          [name]: {
            error: true,
            message: 'O nome precisa ter pelo menos 2 letras e um espaço.'
          }
        }))
      } else {
        setFieldErrors((prevErrors) => ({
          ...prevErrors,
          [name]: { error: false, message: '' }
        }))
      }
    } else if (name === 'email') {
      if (!validateEmail(value)) {
        setFieldErrors((prevErrors) => ({
          ...prevErrors,
          [name]: { error: true, message: 'E-mail inválido.' }
        }))
      } else {
        setFieldErrors((prevErrors) => ({
          ...prevErrors,
          [name]: { error: false, message: '' }
        }))
      }
    } else if (name === 'documentId') {
      if (!documentIdValidation(value)) {
        setFieldErrors((prevErrors) => ({
          ...prevErrors,
          [name]: { error: true, message: 'CPF inválido.' }
        }))
      } else {
        setFieldErrors((prevErrors) => ({
          ...prevErrors,
          [name]: { error: false, message: '' }
        }))
      }
    }
  }

  const handleSubmit = () => {
    if (
      !fieldErrors.employeeName.error &&
      !fieldErrors.email.error &&
      !fieldErrors.documentId.error &&
      values.employeeName &&
      values.email &&
      values.documentId
    ) {
      newUserRegistrations(values)
      history.push(routes.dashboard)
    }
  }

  const hasErrors = Object.values(fieldErrors).some((field) => field.error)
  const areRequiredFieldsEmpty =
    !values.employeeName || !values.email || !values.documentId

  return (
    <Container>
      <Card>
        <IconButton
          onClick={() => history.push(routes.dashboard)}
          aria-label="back"
        >
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <TextField
          placeholder="Nome"
          label="Nome"
          name="employeeName"
          value={values.employeeName}
          onChange={handleChange}
          error={
            fieldErrors.employeeName.error
              ? fieldErrors.employeeName.message
              : ''
          }
        />
        <TextField
          placeholder="Email"
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={fieldErrors.email.error ? fieldErrors.email.message : ''}
        />
        <TextField
          placeholder="CPF"
          label="CPF"
          name="documentId"
          value={documentIdMask(values.documentId)}
          onChange={handleChange}
          error={
            fieldErrors.documentId.error ? fieldErrors.documentId.message : ''
          }
        />
        <TextField
          label="Data de admissão"
          name="admissionDate"
          type="date"
          value={values.admissionDate}
          onChange={handleChange}
          error={
            fieldErrors.admissionDate.error
              ? fieldErrors.admissionDate.message
              : ''
          }
        />
        <Button
          onClick={handleSubmit}
          disabled={hasErrors || areRequiredFieldsEmpty}
        >
          Cadastrar
        </Button>
      </Card>
    </Container>
  )
}

export default NewUserPage
