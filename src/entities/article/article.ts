import * as Entities from '~/entities'

export type Article = {
    slug: string
    title: string
    description: string
    body: string
    tagList: Entities.Tag[]
    createdAt: string
    updatedAt: string
    favorited: boolean
    favoritesCount: number
    author: Entities.User
}
