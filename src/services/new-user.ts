import axios from 'axios'

export const createNewUser = (params: any) => {
  axios
    .post(`${import.meta.env.VITE_API_URL}/registrations`, params)
    .then((response) => console.log(response))
}
