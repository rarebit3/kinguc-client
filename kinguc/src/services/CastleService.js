import Client from './api'

export const GetCastles = async () => {
  try {
    const res = await Client.get('api/castle')
    return res.data
  } catch (error) {
    throw error
  }
}

export const SearchCastles = async (searchQuery) => {
  try {
    const res = await Client.get(`api/castle/search?keyword=${searchQuery}`)
    console.log('axios call', res.data)
    return res.data
  } catch (error) {
    throw error
  } 
}

export const AddCastle = async (data) => {
  try {
    const res = await Client.post('/auth/registercastle', data)
    return res.data
  } catch (error) {
    throw error
  }
}