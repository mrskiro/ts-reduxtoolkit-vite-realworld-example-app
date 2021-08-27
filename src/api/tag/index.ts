import { AxiosResponse } from 'axios'
import { apiInstance } from '~/api/instance'
import * as Entities from '~/entities'

export const getTags = async (): Promise<
    AxiosResponse<{ tags: Entities.Tag[] }>
> => {
    const response = await apiInstance.get<
        void,
        AxiosResponse<{ tags: Entities.Tag[] }>
    >('tags')

    return response
}
