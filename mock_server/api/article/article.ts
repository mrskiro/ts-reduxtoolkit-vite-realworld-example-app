import { rest } from 'msw'
import * as Modules from '../../modules'

export const getArticles = rest.get(
    Modules.makePath('/articles'),
    (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                articles: [
                    {
                        slug: 'how-to-train-your-dragon',
                        title: 'How to train your dragon',
                        description: 'Ever wonder how?',
                        body: 'It takes a Jacobian',
                        tagList: ['dragons', 'training'],
                        createdAt: '2016-02-18T03:22:56.637Z',
                        updatedAt: '2016-02-18T03:48:35.824Z',
                        favorited: false,
                        favoritesCount: 0,
                        author: {
                            username: 'jake',
                            bio: 'I work at statefarm',
                            image: 'https://i.stack.imgur.com/xHWG8.jpg',
                            following: false
                        }
                    },
                    {
                        slug: 'how-to-train-your-dragon-2',
                        title: 'How to train your dragon 2',
                        description: 'So toothless',
                        body: 'It a dragon',
                        tagList: ['dragons', 'training'],
                        createdAt: '2016-02-18T03:22:56.637Z',
                        updatedAt: '2016-02-18T03:48:35.824Z',
                        favorited: false,
                        favoritesCount: 0,
                        author: {
                            username: 'jake',
                            bio: 'I work at statefarm',
                            image: 'https://i.stack.imgur.com/xHWG8.jpg',
                            following: false
                        }
                    }
                ],
                articlesCount: 2
            })
        )
    }
)

export const getArticlesFeed = rest.get(
    Modules.makePath('/articles/feed'),
    (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                articles: [
                    {
                        slug: 'feed',
                        title: 'is feed',
                        description: 'Ever wonder how?',
                        body: 'It takes a Jacobian',
                        tagList: ['dragons', 'training'],
                        createdAt: '2016-02-18T03:22:56.637Z',
                        updatedAt: '2016-02-18T03:48:35.824Z',
                        favorited: false,
                        favoritesCount: 0,
                        author: {
                            username: 'jake',
                            bio: 'I work at statefarm',
                            image: 'https://i.stack.imgur.com/xHWG8.jpg',
                            following: false
                        }
                    }
                ],
                articlesCount: 2
            })
        )
    }
)

export const favorite = rest.post(
    Modules.makePath('/articles/:slug/favorite'),
    (req, res, ctx) => {
        const { slug } = req.params

        return res(
            ctx.status(200),
            ctx.json({
                article: {
                    slug,
                    title: 'How to train your dragon',
                    description: 'Ever wonder how?',
                    body: 'It takes a Jacobian',
                    tagList: ['dragons', 'training'],
                    createdAt: '2016-02-18T03:22:56.637Z',
                    updatedAt: '2016-02-18T03:48:35.824Z',
                    favorited: true,
                    favoritesCount: 1,
                    author: {
                        username: 'jake',
                        bio: 'I work at statefarm',
                        image: 'https://i.stack.imgur.com/xHWG8.jpg',
                        following: false
                    }
                }
            })
        )
    }
)
