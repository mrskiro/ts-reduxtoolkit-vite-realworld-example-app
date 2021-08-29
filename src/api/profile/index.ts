import { AxiosResponse } from 'axios'
import * as Modules from '~/api/modules'
import * as Entities from '~/entities'

type GetProfileResponse = {
    profile: Entities.Profile
}

export const getProfile = async (
    username: Entities.Profile['username']
): Promise<AxiosResponse<GetProfileResponse>> => {
    const response = await Modules.apiInstance.get<
        void,
        AxiosResponse<GetProfileResponse>
    >(`profiles/${username}`)

    return response
}

type FollowResponse = {
    profile: Entities.Profile
}

export const follow = async (
    username: Entities.Profile['username']
): Promise<AxiosResponse<FollowResponse>> => {
    const response = await Modules.apiInstance.post<
        void,
        AxiosResponse<FollowResponse>
    >(`profiles/${username}/follow`, {}, { headers: Modules.makeHeaders() })

    return response
}

type UnFollowResponse = {
    profile: Entities.Profile
}

export const unFollow = async (
    username: Entities.Profile['username']
): Promise<AxiosResponse<UnFollowResponse>> => {
    const response = await Modules.apiInstance.delete<
        void,
        AxiosResponse<UnFollowResponse>
    >(`profiles/${username}/follow`, { headers: Modules.makeHeaders() })

    return response
}
