import Client from './api'

export const GetCastles = async () => {
  try {
    const res = await Client.get('/castles')
    return res.data
  } catch (error) {
    throw error
  }
}