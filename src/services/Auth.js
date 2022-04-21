import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
  
    localStorage.setItem('token', res.data.token)

    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdatePassword = async (data, userId) => {
  try {
    const res = await Client.put(`/auth/update/${userId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteUser = async (userId) => {
  try {
    const res = await Client.delete(`/auth/delete/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}
