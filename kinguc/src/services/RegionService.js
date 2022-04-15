import Client from './api'

export const GetRegions = async () => {
  try {
    const res = await Client.get('/regions')
    return res.data
  } catch (error) {
    throw error
  }
}