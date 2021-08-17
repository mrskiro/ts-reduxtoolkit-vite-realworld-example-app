import { apiInstance } from '~/api/instance'
import * as Entities from '~/entities'

export const RegisterUser = async (user: {
    name: string
    email: string
    password: string
}): Promise<{ user: Entities.Me }> => {
    const response = await apiInstance.post('users', { user })
    return response.data
}
