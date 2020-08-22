import axios from 'axios'

const api = axios.create({
    baseURL: 'https://admin.umnovoolhar.art.br/'
})

export default api