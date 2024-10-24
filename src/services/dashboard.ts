import axios from 'axios'
import { BASE_URL } from '~/constants'
import { logError } from '~/utils/'

export const getAllRegisters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/registrations`)
    return response.data
  } catch (error) {
    logError('Error fetching registrations:', error)
    throw error
  }
}

export const deleteRegister = async (id: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/registrations/${id}`)
    return response.status === 200
  } catch (error) {
    logError('Error deleting registration:', error)
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
    logError('Error updating registration:', error)
    throw error
  }
}

export const getRegistrationByDocumentId = async (cpf: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/registrations`, {
      params: { cpf }
    })

    if (response.status === 200) {
      if (response.data.length > 0) {
        return response.data
      } else {
        return []
      }
    }
  } catch (error) {
    logError('Error fetching registration by CPF:', error)
    throw error
  }
}
