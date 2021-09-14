import * as React from 'react'
import * as History from 'history'
import * as Node from 'msw/node'
import * as Rtl from '~/__tests__/utils'
import * as Api from '../../../../mock_server/api'
import * as Store from '~/store'
import * as Mock from '~/__tests__/__mocks__'
import '@testing-library/jest-dom'

import { Profile } from '../'

const server = Node.setupServer(
    Api.getUser,
    Api.getProfile,
    Api.getArticles,
    Api.favorite,
    Api.unFavorite,
    Api.follow,
    Api.unFollow
)

const history = History.createMemoryHistory({
    initialEntries: ['/profile/jake']
})

const preloadedState = {
    entities: {
        me: {
            status: 'Fullfiled',
            data: {
                username: Mock.profile.username
            }
        },
        profiles: {
            status: 'Pending',
            data: {
                jake: {
                    username: 'jake',
                    bio: '',
                    image: '',
                    following: false
                }
            }
        }
    }
} as unknown as Store.RootState

describe('Profile Page', () => {
    beforeEach(() => {
        localStorage.setItem('token', 'token')
        history.push('/profile/jake')
    })
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    it('Should render', async () => {
        Rtl.render(<Profile />, preloadedState)
        await Rtl.waitFor(() => {
            expect(Rtl.screen.getByText('My Articles')).toBeInTheDocument()
            expect(
                Rtl.screen.getByText('Favorited Articles')
            ).toBeInTheDocument()
        })
    })

    it('Should render my articles list', async () => {
        Rtl.render(<Profile />, preloadedState)
        await Rtl.screen.findByText('My Articles')
        expect(Rtl.screen.getAllByText('Read more...').length).toBe(2)
    })

    it('Should follow', async () => {
        Rtl.render(<Profile />, preloadedState)
        await Rtl.screen.findByText('My Articles')
        const followButton = Rtl.screen.getByRole('button', { name: /Follow/ })
        expect(followButton).toBeInTheDocument()

        // follow
        Rtl.fireEvent.click(followButton)
        await Rtl.screen.findByRole('button', { name: /UnFollow/ })
        const unFollowButton = Rtl.screen.getByRole('button', {
            name: /UnFollow/
        })
        expect(unFollowButton).toBeInTheDocument()

        // unFollow
        Rtl.fireEvent.click(unFollowButton)

        await Rtl.screen.findByRole('button', { name: /Follow/ })
        expect(
            Rtl.screen.getByRole('button', { name: /Follow/ })
        ).toBeInTheDocument()
    })

    it('Should favorite article', async () => {
        Rtl.render(<Profile />, preloadedState)
        await Rtl.screen.findByText('My Articles')
        const buttons = Rtl.screen.getAllByRole('button', { name: '0' })
        expect(buttons.length).toBe(2)

        // favorite
        Rtl.fireEvent.click(buttons[0])
        await Rtl.screen.findByRole('button', { name: '1' })

        await Rtl.waitFor(() => {
            expect(
                Rtl.screen.getAllByRole('button', { name: '0' }).length
            ).toBe(1)
            expect(
                Rtl.screen.getAllByRole('button', { name: '1' }).length
            ).toBe(1)
        })

        // unFavorite
        Rtl.fireEvent.click(Rtl.screen.getAllByRole('button', { name: '1' })[0])

        await Rtl.waitFor(() =>
            expect(
                Rtl.screen.getAllByRole('button', { name: '0' }).length
            ).toBe(2)
        )
    })

    it('Should redirect to login on favorite if the user is not sign in', async () => {
        Rtl.render(<Profile />, undefined, history)
        await Rtl.screen.findAllByText('Read more...')
        const buttons = Rtl.screen.getAllByRole('button', { name: '0' })
        expect(buttons.length).toBe(2)

        Rtl.fireEvent.click(buttons[0])
        await Rtl.waitFor(() =>
            expect(history.location.pathname).toBe('/login')
        )
    })

    it('Should change tab', async () => {
        Rtl.render(<Profile />, preloadedState)
        await Rtl.screen.findByText('My Articles')
        Rtl.fireEvent.click(Rtl.screen.getByText('Favorited Articles'))
        expect(Rtl.screen.getByText('loading...')).toBeInTheDocument()
        await Rtl.screen.findAllByText('Read more...')
        expect(Rtl.screen.getAllByText('Read more...').length).toBe(2)
        Rtl.fireEvent.click(Rtl.screen.getByText('My Articles'))
        expect(Rtl.screen.getByText('loading...')).toBeInTheDocument()
        await Rtl.screen.findAllByText('Read more...')
        expect(Rtl.screen.getAllByText('Read more...').length).toBe(2)
    })
})
