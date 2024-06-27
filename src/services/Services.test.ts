import axios from 'axios'
import {
  deleteRegistrationsById,
  fetchAllRegistrations,
  fetchRegistrationsByDocumentId,
  newUserRegistrations,
  updateStatusRegistrations
} from '../services'

jest.mock('axios')

describe('Services', () => {
  const mockData = [{ id: '1', name: 'Test User' }]

  afterEach(() => {
    jest.clearAllMocks()
  })

  // Teste para fetchAllRegistrations
  describe('fetchAllRegistrations', () => {
    it('fetches registrations successfully', async () => {
      const mockedAxios = axios as jest.Mocked<typeof axios>
      mockedAxios.get.mockResolvedValueOnce({ data: mockData })

      const data = await fetchAllRegistrations()
      expect(data).toEqual(mockData)
    })

    it('handles error when fetching registrations', async () => {
      const mockedAxios = axios as jest.Mocked<typeof axios>
      const errorMessage = 'Network Error'
      mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage))

      const error = await fetchAllRegistrations()
      expect(error).toEqual(new Error(errorMessage))
    })
  })

  // Teste para fetchRegistrationsByDocumentId
  describe('fetchRegistrationsByDocumentId', () => {
    it('fetches registrations by document id successfully', async () => {
      const documentId = '12345678900'
      const mockedAxios = axios as jest.Mocked<typeof axios>
      mockedAxios.get.mockResolvedValueOnce({ data: mockData })

      const data = await fetchRegistrationsByDocumentId(documentId)
      expect(data).toEqual(mockData)
    })

    it('handles error when fetching registrations by document id', async () => {
      const documentId = '12345678900'
      const mockedAxios = axios as jest.Mocked<typeof axios>
      const errorMessage = 'Not Found'
      mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage))

      const error = await fetchRegistrationsByDocumentId(documentId)
      expect(error).toEqual(new Error(errorMessage))
    })
  })

  // Teste para deleteRegistrationsById
  describe('deleteRegistrationsById', () => {
    it('deletes registration successfully', async () => {
      const id = '1'
      const mockedAxios = axios as jest.Mocked<typeof axios>
      mockedAxios.delete.mockResolvedValueOnce({ status: 200 })

      mockedAxios.get.mockResolvedValueOnce({ data: mockData })
      const data = await deleteRegistrationsById(id)
      expect(data).toEqual(mockData)
    })

    it('handles error when deleting registration', async () => {
      const id = '1'
      const mockedAxios = axios as jest.Mocked<typeof axios>
      const errorMessage = 'Internal Server Error'
      mockedAxios.delete.mockRejectedValueOnce(new Error(errorMessage))

      const error = await deleteRegistrationsById(id)
      expect(error).toEqual(new Error(errorMessage))
    })
  })

  // Teste para updateStatusRegistrations
  describe('updateStatusRegistrations', () => {
    it('updates status of registration successfully', async () => {
      const id = '1'
      const status = 'APPROVED'
      const mockedAxios = axios as jest.Mocked<typeof axios>
      mockedAxios.patch.mockResolvedValueOnce({ status: 200 })

      mockedAxios.get.mockResolvedValueOnce({ data: mockData })
      const data = await updateStatusRegistrations(id, status)
      expect(data).toEqual(mockData)
    })

    it('handles error when updating status of registration', async () => {
      const id = '1'
      const status = 'APPROVED'
      const mockedAxios = axios as jest.Mocked<typeof axios>
      const errorMessage = 'Unauthorized'
      mockedAxios.patch.mockRejectedValueOnce(new Error(errorMessage))

      const error = await updateStatusRegistrations(id, status)
      expect(error).toEqual(new Error(errorMessage))
    })
  })

  // Teste para newUserRegistrations
  describe('newUserRegistrations', () => {
    const newUser = {
      admissionDate: '2023-01-01',
      email: 'test@example.com',
      employeeName: 'Test User',
      documentId: '12345678900'
    }

    it('creates new user registration successfully', async () => {
      const mockedAxios = axios as jest.Mocked<typeof axios>
      mockedAxios.post.mockResolvedValueOnce({ status: 201 })

      mockedAxios.get.mockResolvedValueOnce({ data: mockData })
      const data = await newUserRegistrations(newUser)
      expect(data).toEqual(mockData)
    })

    it('handles error when creating new user registration', async () => {
      const mockedAxios = axios as jest.Mocked<typeof axios>
      const errorMessage = 'Bad Request'
      mockedAxios.post.mockRejectedValueOnce(new Error(errorMessage))

      const error = await newUserRegistrations(newUser)
      expect(error).toEqual(new Error(errorMessage))
    })
  })
})
