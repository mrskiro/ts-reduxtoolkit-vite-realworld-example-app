import { AxiosResponse } from 'axios'
import { apiInstance } from '~/api/instance'
import * as Entities from '~/entities'

type RegisterArg = {
    name: string
    email: string
    password: string
}

export const register = async (
    arg: RegisterArg
): Promise<AxiosResponse<{ user: Entities.Me }>> => {
    const response = await apiInstance.post<
        RegisterArg,
        AxiosResponse<{ user: Entities.Me }>
    >('users', { user: arg })

    return response
}

type LoginArg = {
    email: string
    password: string
}

export const login = async (arg: LoginArg) => {
    const response = await apiInstance.post<
        LoginArg,
        AxiosResponse<{ user: Entities.Me }>
    >('users/login', { user: arg })

    return response
}
