import { rest } from 'msw'

const endpoint = 'https://conduit.productionready.io/api'

const makePath = (path: string) => `${endpoint}${path}`

export const handlers = [
    rest.post(makePath('/users'), (req, res, ctx) => {
        sessionStorage.setItem('is-authenticated', 'true')
        console.log(req, res, ctx)
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
    }),
    rest.post(makePath('/users/login'), (req, res, ctx) => {
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
    }),
    rest.get(makePath('user'), (req, res, ctx) => {
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
]
