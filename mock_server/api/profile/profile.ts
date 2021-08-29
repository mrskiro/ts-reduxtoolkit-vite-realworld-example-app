import { rest } from 'msw'
import * as Modules from '../../modules'

export const getProfile = rest.get(
    Modules.makePath('/profiles/:username'),
    (req, res, ctx) => {
        const { username } = req.params
        return res(
            ctx.status(200),
            ctx.json({
                profile: {
                    username,
                    bio: 'I work at statefarm',
                    image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
                    following: false
                }
            })
        )
    }
)

export const follow = rest.post(
    Modules.makePath('/profiles/:username/follow'),
    (req, res, ctx) => {
        const { username } = req.params
        return res(
            ctx.status(200),
            ctx.json({
                profile: {
                    username,
                    bio: 'I work at statefarm',
                    image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
                    following: true
                }
            })
        )
    }
)

export const unFollow = rest.delete(
    Modules.makePath('/profiles/:username/follow'),
    (req, res, ctx) => {
        const { username } = req.params
        return res(
            ctx.status(200),
            ctx.json({
                profile: {
                    username,
                    bio: 'I work at statefarm',
                    image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
                    following: false
                }
            })
        )
    }
)
