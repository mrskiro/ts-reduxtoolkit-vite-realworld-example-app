import { AxiosResponse } from 'axios'
import { apiInstance } from '~/api/instance'
import * as Entities from '~/entities'

type Arg = {
    name: string
    email: string
    password: string
}
export const register = async (
    user: Arg
): Promise<AxiosResponse<{ user: Entities.Me }>> => {
    const response = await apiInstance.post<
        Arg,
        AxiosResponse<{ user: Entities.Me }>
    >('users', { user })

    return response
}
