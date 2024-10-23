import axios from 'axios'
import { BASE_URL } from '~/constants'

export const getAllRegisters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/registrations`)
    return response.data
  } catch (error) {
    console.error('Error fetching registrations:', error)
    throw error
  }
}

export const deleteRegister = async (id: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/registrations/${id}`)
    return response.status === 200
  } catch (error) {
    console.error('Error deleting registration:', error)
    throw error
  }
}

export const updateRegistrationStatus = async (registration: any, status: string) => {
  try {
    const response = await axios.put(`${BASE_URL}/registrations/${registration.id}`, {
      ...registration,
      status
    })
    return response.status === 200
  } catch (error) {
    console.error('Error updating registration:', error)
    throw error
  }
}

export const getRegistrationByDocumentId = async (documentId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/registrations`, {
      params: { cpf: documentId }
    })

    if (response.status === 200) {
      if (response.data.length > 0) {
        return response.data
      } else {
        console.error('No registration found')
        return []
      }
    }
  } catch (error) {
    console.error('Error fetching registration by CPF:', error)
    throw error
  }
}
