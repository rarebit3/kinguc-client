import Axios from 'axios'

//still doesn't work, heroku always thinks it's in development
// let BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://kinguc-server.herokuapp.com'

let BASE_URL = 'https://kinguc-server.herokuapp.com'

const Client = Axios.create({ baseURL: BASE_URL })

console.log(process.env.NODE_ENV)

Client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export default Client