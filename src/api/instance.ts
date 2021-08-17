import axios from 'axios'
import { RegisterUser } from '~/api/user'

const endpoint = 'https://conduit.productionready.io/api'

export const apiInstance = axios.create({
    baseURL: endpoint
})

const me = {
    RegisterUser
}

export const extraArgument = {
    api: {
        me
    }
}
