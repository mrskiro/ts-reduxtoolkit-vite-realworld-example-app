import axios from 'axios'

const endpoint = 'https://conduit.productionready.io/api'

const apiInstance = axios.create({
    baseURL: endpoint
})

export const extraArgument = {
    api: {}
}
