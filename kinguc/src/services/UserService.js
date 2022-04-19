import Client from './api'

export const GetUser = async (userId) => {
    try {
      const res = await Client.get(`api/user/${userId}`)
      return res.data
    } catch (error) {
      throw error
    }
  }