import { rest } from 'msw'
import * as Modules from '../../modules'

export const getTags = rest.get(Modules.makePath('/tags'), (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json({
            tags: ['reactjs', 'angularjs']
        })
    )
})
