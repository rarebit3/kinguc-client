import Client from './api'

export const GetCastles = async () => {
  try {
    const res = await Client.get('api/castle')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCastle = async (id) => {
  try {
    const res = await Client.get(`api/castle/${id}`)
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

export const DemolishCastle = async (id) => {
  try {
    const res = await Client.delete(`api/castle/${id}`)
    return res.data
  } catch (err) {
    throw err
  }
}

export const UpdateCastle = async (data, id) => {
  try {
    const res = await Client.put(`api/castle/${id}`, data)
    return res.data
  } catch (err) {
    throw err
  }
}