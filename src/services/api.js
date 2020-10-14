import axios from 'axios'

const api = axios.create({
    //baseURL: 'https://admin.umnovoolhar.art.br/'
    baseURL: 'http://localhost:1339'
})

export default api