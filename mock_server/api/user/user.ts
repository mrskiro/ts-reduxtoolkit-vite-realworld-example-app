import { rest } from 'msw'
import * as Modules from '../../modules'
import * as Entities from '../../../src/entities'

export const register = rest.post(
    Modules.makePath('/users'),
    (req, res, ctx) => {
        sessionStorage.setItem('is-authenticated', 'true')
        return res(
            ctx.status(200),
            ctx.json({
                user: {
                    email: 'jake@jake.jake',
                    token: 'jwt.token.here',
                    username: 'jake',
                    bio: 'I work at statefarm',
                    image: null
                }
            })
        )
    }
)

export const login = rest.post(
    Modules.makePath('/users/login'),
    (req, res, ctx) => {
        sessionStorage.setItem('is-authenticated', 'true')

        return res(
            ctx.status(200),
            ctx.json({
                user: {
                    email: 'jake@jake.jake',
                    token: 'jwt.token.here',
                    username: 'jake',
                    bio: 'I work at statefarm',
                    image: null
                }
            })
        )
    }
)

export const getUser = rest.get(Modules.makePath('/user'), (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
        return res(
            ctx.status(403),
            ctx.json({
                errorMessage: 'Not authorized'
            })
        )
    }

    return res(
        ctx.status(200),
        ctx.json({
            user: {
                email: 'jake@jake.jake',
                token: 'jwt.token.here',
                username: 'jake',
                bio: 'I work at statefarm',
                image: null
            }
        })
    )
})

export const update = rest.put<{ user: Entities.Me }>(
    Modules.makePath('/user'),
    (req, res, ctx) => {
        const isAuthenticated = sessionStorage.getItem('is-authenticated')

        if (!isAuthenticated) {
            return res(
                ctx.status(403),
                ctx.json({
                    errorMessage: 'Not authorized'
                })
            )
        }

        const user = req.body.user

        return res(
            ctx.status(200),
            ctx.json({
                user: {
                    email: user.email,
                    token: 'jwt.token.here',
                    username: user.username,
                    bio: user.bio,
                    image: user.image
                }
            })
        )
    }
)
