import * as Entities from '~/entities'

export type Comment = {
    id: string
    createdAt: string
    updatedAt: string
    body: string
    author: Entities.Profile
}
