import axios from 'axios'
import { BASE_URL } from '~/constants'

export const createNewUser = async (params: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/registrations`, params)
    return response
  } catch (error) {
    console.error('Error fetching registrations:', error)
    throw error
  }
}
