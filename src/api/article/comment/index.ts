import { AxiosResponse } from 'axios'
import * as Modules from '~/api/modules'
import * as Entities from '~/entities'

type GetCommentsResponse = {
    comments: Entities.Comment[]
}

export const getComments = async (
    slug: Entities.Article['slug']
): Promise<AxiosResponse<GetCommentsResponse>> => {
    const response = await Modules.apiInstance().get<
        void,
        AxiosResponse<GetCommentsResponse>
    >(`articles/${slug}/comments`)

    return response
}

type CommentResponse = {
    comment: Entities.Comment
}

export const addComment = async ({
    slug,
    body
}: {
    slug: Entities.Article['slug']
    body: Entities.Comment['body']
}): Promise<AxiosResponse<CommentResponse>> => {
    const response = await Modules.apiInstance().post<
        void,
        AxiosResponse<CommentResponse>
    >(`articles/${slug}/comments`, { comment: { body } })

    return response
}

export const deleteComment = async ({
    slug,
    id
}: {
    slug: Entities.Article['slug']
    id: Entities.Comment['id']
}): Promise<AxiosResponse> => {
    const response = await Modules.apiInstance().delete<void>(
        `articles/${slug}/comments/${id}`
    )
    return response
}
