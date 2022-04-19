import Client from './api'

export const GetRegions = async () => {
  try {
    const res = await Client.get('api/region')
    return res.data
  } catch (error) {
    throw error
  }
}