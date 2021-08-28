import { AxiosResponse } from 'axios'
import * as Modules from '~/api/modules'
import * as Entities from '~/entities'

export const getTags = async (): Promise<
    AxiosResponse<{ tags: Entities.Tag[] }>
> => {
    const response = await Modules.apiInstance.get<
        void,
        AxiosResponse<{ tags: Entities.Tag[] }>
    >('tags')

    return response
}
