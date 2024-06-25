import axios from 'axios'
import { NewUserProps } from './types'

export const fetchAllRegistrations = async () => {
  try {
    const response = await axios.get('http://localhost:3000/registrations')
    return response.data
  } catch (error) {
    return error
  }
}

export const fetchRegistrationsByDocumentId = async (documentId: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/registrations?cpf=${documentId}`
    )
    return response.data
  } catch (error) {
    return error
  }
}

export const deleteRegistrationsById = async (id: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/registrations/${id}`
    )
    if (response.status === 200) return await fetchAllRegistrations()
  } catch (error) {
    return error
  }
}

export const updateStatusRegistrations = async (id: string, status: string) => {
  const handleStatus = (status: string) => {
    const changeStatus: any = {
      Reprovar: 'REPROVED',
      Aprovar: 'APPROVED',
      Revisar: 'REVIEW'
    }

    return changeStatus[status] || status
  }

  try {
    const response = await axios.patch(
      `http://localhost:3000/registrations/${id}`,
      {
        status: handleStatus(status)
      }
    )
    if (response.status === 200) {
      return await fetchAllRegistrations()
    }
  } catch (error) {
    return error
  }
}

export const newUserRegistrations = async (params: NewUserProps) => {
  try {
    const response = await axios.post(`http://localhost:3000/registrations/`, {
      admissionDate: params.admissionDate,
      email: params.email,
      employeeName: params.employeeName,
      status: 'REVIEW',
      cpf: params.documentId
    })
    if (response.status === 201) {
      return await fetchAllRegistrations()
    }
  } catch (error) {
    return error
  }
}
