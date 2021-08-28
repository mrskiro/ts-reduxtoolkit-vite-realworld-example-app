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
