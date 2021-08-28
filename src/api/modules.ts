import axios from 'axios'

const endpoint = 'https://conduit.productionready.io/api'

const token = localStorage.getItem('token')
export const authHeaders = {
    Authorization: `Token ${token}`
}

export const apiInstance = axios.create({
    baseURL: endpoint
})

export const toQueryString = <T, U>(obj: Partial<Record<keyof T, U>>): string =>
    Object.entries(obj)
        .map(pair => pair.map(v => encodeURIComponent(v as string)).join('='))
        .join('&')
