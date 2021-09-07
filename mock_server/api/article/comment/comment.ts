import { rest } from 'msw'
import * as Modules from '../../../modules'
import * as Entities from '../../../../src/entities'

export const getComments = rest.get(
    Modules.makePath('/articles/:slug/comments'),
    (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                comments: [
                    {
                        id: 1,
                        createdAt: '2016-02-18T03:22:56.637Z',
                        updatedAt: '2016-02-18T03:22:56.637Z',
                        body: 'It takes a Jacobian',
                        author: {
                            username: 'jake',
                            bio: 'I work at statefarm',
                            image: 'https://i.stack.imgur.com/xHWG8.jpg',
                            following: false
                        }
                    },
                    {
                        id: 2,
                        createdAt: '2016-02-18T03:22:56.637Z',
                        updatedAt: '2016-02-18T03:22:56.637Z',
                        body: 'It takes a Jacobian2',
                        author: {
                            username: 'jake',
                            bio: 'I work at statefarm',
                            image: 'https://i.stack.imgur.com/xHWG8.jpg',
                            following: false
                        }
                    }
                ]
            })
        )
    }
)

export const addComment = rest.post<{ comment: Entities.Comment }>(
    Modules.makePath('/articles/:slug/comments'),
    (req, res, ctx) => {
        const { body } = req.body.comment
        return res(
            ctx.status(200),
            ctx.json({
                comment: {
                    id: 1,
                    createdAt: '2016-02-18T03:22:56.637Z',
                    updatedAt: '2016-02-18T03:22:56.637Z',
                    body,
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
