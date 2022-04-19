import Client from './api'

export const GetUser = async () => {
    try {
      const res = await Client.get('api/user')
      return res.data
    } catch (error) {
      throw error
    }
  }