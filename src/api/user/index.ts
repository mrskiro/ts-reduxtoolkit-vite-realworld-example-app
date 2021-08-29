import { AxiosResponse } from 'axios'
import * as Modules from '~/api/modules'
import * as Entities from '~/entities'

type RegisterArg = {
    name: string
    email: string
    password: string
}

export const register = async (
    arg: RegisterArg
): Promise<AxiosResponse<{ user: Entities.Me }>> => {
    const response = await Modules.apiInstance.post<
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
    const response = await Modules.apiInstance.post<
        LoginArg,
        AxiosResponse<{ user: Entities.Me }>
    >('users/login', { user: arg })

    return response
}

export const getMe = async () => {
    const response = await Modules.apiInstance.get<
        LoginArg,
        AxiosResponse<{ user: Entities.Me }>
    >('user', { headers: Modules.authHeaders })

    return response
}
