import axios from 'axios'

export const getAllRegisters = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/registrations`)
    return response.data
  } catch (error) {
    console.error('Error fetching registrations:', error)
    throw error
  }
}

export const deleteRegister = async (id: string) => {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/registrations/${id}`)
    if (response.status === 200) {
      return getAllRegisters()
    }
  } catch (error) {
    console.error('Error deleting registration:', error)
    throw error
  }
}

export const updateRegistrationStatus = async (registration: any, status: string) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/registrations/${registration.id}`,
      {
        ...registration,
        status
      }
    )
    if (response.status === 200) {
      return getAllRegisters()
    }
  } catch (error) {
    console.error('Error updating registration:', error)
    throw error
  }
}

export const getRegistrationByDocumentId = async (documentId: string) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/registrations`, {
      params: { cpf: documentId }
    })

    console.log('Data from API:', response.data)

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
