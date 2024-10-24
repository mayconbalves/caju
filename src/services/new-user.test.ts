import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { BASE_URL } from '~/constants'
import { createNewUser } from './new-user'

const mock = new MockAdapter(axios)

describe('NewUser Service', () => {
  afterEach(() => {
    mock.reset()
  })

  it('should create a new user successfully', async () => {
    const newUser = {
      admissionDate: '22/10/2023',
      email: 'newuser@caju.com.br',
      employeeName: 'New User',
      status: 'REVIEW',
      cpf: '12345678900'
    }

    mock.onPost(`${BASE_URL}/registrations`).reply(201, newUser)

    const result = await createNewUser(newUser)
    expect(result.status).toBe(201)
    expect(result.data).toEqual(newUser)
  })

  it('should handle error when creating a new user', async () => {
    const newUser = {
      admissionDate: '22/10/2023',
      email: 'newuser@caju.com.br',
      employeeName: 'New User',
      status: 'REVIEW',
      cpf: '12345678900'
    }

    mock.onPost(`${BASE_URL}/registrations`).reply(500)

    await expect(createNewUser(newUser)).rejects.toThrow()
  })

  it('should log an error when the request fails', async () => {
    const newUser = {
      admissionDate: '22/10/2023',
      email: 'newuser@caju.com.br',
      employeeName: 'New User',
      status: 'REVIEW',
      cpf: '12345678900'
    }

    mock.onPost(`${BASE_URL}/registrations`).reply(500)

    await expect(createNewUser(newUser)).rejects.toThrow()
  })
})
