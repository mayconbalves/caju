import axios from 'axios'

export const createNewUser = (params: any) => {
  const headers = {
    'Content-Type': 'application/json'
  }

  axios
    .post(`${import.meta.env.VITE_API_URL}/registrations`, params, {
      headers
    })
    .then((response) => console.log(response))
}
