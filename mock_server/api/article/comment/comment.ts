import { rest } from 'msw'
import * as Modules from '../../../modules'
import * as Entities from '../../../../src/entities'
import * as Mock from '../../../../src/__tests__/__mocks__'

export const getComments = rest.get(
    Modules.makePath('/articles/:slug/comments'),
    (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                comments: [Mock.comment1, Mock.comment2]
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
