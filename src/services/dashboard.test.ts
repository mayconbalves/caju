import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { BASE_URL } from '~/constants'
import {
  deleteRegister,
  getAllRegisters,
  getRegistrationByDocumentId,
  updateRegistrationStatus
} from './dashboard'

const mock = new MockAdapter(axios)

describe('Registration Service', () => {
  afterEach(() => {
    mock.reset()
  })

  it('should fetch all registrations', async () => {
    const registrations = [
      {
        id: '3',
        admissionDate: '22/10/2023',
        email: 'luiz@caju.com.br',
        employeeName: 'Luiz Filho',
        status: 'REPROVED',
        cpf: '56642105087'
      },
      {
        id: '1',
        admissionDate: '22/10/2023',
        email: 'filipe@caju.com.br',
        employeeName: 'Filipe Marins',
        status: 'REVIEW',
        cpf: '78502270001'
      },
      {
        id: '2',
        admissionDate: '22/10/2023',
        email: 'jose@caju.com.br',
        employeeName: 'José Leão',
        status: 'APPROVED',
        cpf: '78502270001'
      }
    ]

    mock.onGet(`${BASE_URL}/registrations`).reply(200, registrations)

    const result = await getAllRegisters()
    expect(result).toEqual(registrations)
  })

  it('should delete a registration', async () => {
    const id = '3'
    mock.onDelete(`${BASE_URL}/registrations/${id}`).reply(200)

    const result = await deleteRegister(id)
    expect(result).toBe(true)
  })

  it('should update registration status', async () => {
    const registration = {
      id: '3',
      admissionDate: '22/10/2023',
      email: 'luiz@caju.com.br',
      employeeName: 'Luiz Filho',
      status: 'REPROVED',
      cpf: '56642105087'
    }
    const newStatus = 'APPROVED'

    mock.onPut(`${BASE_URL}/registrations/${registration.id}`).reply(200)

    const result = await updateRegistrationStatus(registration, newStatus)
    expect(result).toBe(true)
  })

  it('should fetch registration by document ID', async () => {
    const cpf = '56642105087'
    const registrations = [
      {
        id: '3',
        admissionDate: '22/10/2023',
        email: 'luiz@caju.com.br',
        employeeName: 'Luiz Filho',
        status: 'REPROVED',
        cpf: cpf
      }
    ]

    mock.onGet(`${BASE_URL}/registrations`, { params: { cpf } }).reply(200, registrations)

    const result = await getRegistrationByDocumentId(cpf)
    expect(result).toEqual(registrations)
  })

  it('should return an empty array if no registration found by document ID', async () => {
    const cpf = '00000000000'

    mock.onGet(`${BASE_URL}/registrations`, { params: { cpf } }).reply(200, [])

    const result = await getRegistrationByDocumentId(cpf)
    expect(result).toEqual([])
  })

  it('should handle errors when fetching registrations', async () => {
    mock.onGet(`${BASE_URL}/registrations`).reply(500)

    await expect(getAllRegisters()).rejects.toThrow()
  })

  it('should handle errors when deleting a registration', async () => {
    const id = '3'
    mock.onDelete(`${BASE_URL}/registrations/${id}`).reply(500)

    await expect(deleteRegister(id)).rejects.toThrow()
  })

  it('should handle errors when updating registration status', async () => {
    const registration = { id: '3' }
    const newStatus = 'APPROVED'

    mock.onPut(`${BASE_URL}/registrations/${registration.id}`).reply(500)

    await expect(updateRegistrationStatus(registration, newStatus)).rejects.toThrow()
  })

  it('should handle errors when fetching registration by document ID', async () => {
    const documentId = '56642105087'
    mock.onGet(`${BASE_URL}/registrations`, { params: { cpf: documentId } }).reply(500)

    await expect(getRegistrationByDocumentId(documentId)).rejects.toThrow()
  })
})
