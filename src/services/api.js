import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:1339'
})

export default api