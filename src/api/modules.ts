import axios from 'axios'

const endpoint = 'https://conduit.productionready.io/api'

export const apiInstance = axios.create({
    baseURL: endpoint
})

export const toQueryString = <T extends string>(
    obj: Record<string, T>
): string =>
    Object.entries(obj)
        .map(pair => pair.map(encodeURIComponent).join('='))
        .join('&')
