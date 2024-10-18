import axios from 'axios'

export const getAllRegisters = async () => {
  try {
    const response = await axios.get('http://localhost:3000/registrations')
    return response.data
  } catch (error) {
    console.error('Error fetching registrations:', error)
    throw error
  }
}

export const deleteRegister = async (id: string) => {
  try {
    const response = await axios.delete(`http://localhost:3000/registrations/${id}`)
    if (response.status === 200) {
      return getAllRegisters()
    }
  } catch (error) {
    console.error('Error delete registrations:', error)
    throw error
  }
}

export const updateRegistrationStatus = async (registataion: any, status: string) => {
  try {
    const response = await axios.put(`http://localhost:3000/registrations/${registataion.id}`, {
      ...registataion,
      status
    })
    if (response.status === 200) {
      return getAllRegisters()
    }
  } catch (error) {
    console.error('Error delete registrations:', error)
    throw error
  }
}

export const getRegistrationByDocumentId = async (documentId: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/registrations`, {
      params: { cpf: documentId }
    })

    if (response.status === 200 && response.data.length > 0) {
      return response.data[0]
    } else {
      console.error('No registration found')
      return null
    }
  } catch (error) {
    console.error('Error fetching registration by CPF:', error)
    throw error
  }
}
