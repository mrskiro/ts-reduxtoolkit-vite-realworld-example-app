import axios from 'axios'

const endpoint = 'https://conduit.productionready.io/api'

export const apiInstance = axios.create({
    baseURL: endpoint
})
