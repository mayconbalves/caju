import axios from 'axios'

export const createNewUser = async (params: any) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/registrations`, params)
    return response
  } catch (error) {
    console.error('Error fetching registrations:', error)
    throw error
  }
}
