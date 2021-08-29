import * as React from 'react'
import * as History from 'history'
import * as Node from 'msw/node'
import * as Rtl from '~/__tests__/utils'
import * as Api from '../../../../mock_server/api'
import * as Store from '~/store'
import '@testing-library/jest-dom'

import { Home } from '../'

const server = Node.setupServer(
    Api.getTags,
    Api.getArticles,
    Api.getArticlesFeed,
    Api.favorite,
    Api.unFavorite,
    Api.getUser
)

const history = History.createMemoryHistory({
    initialEntries: ['/']
})

const preloadedState = {
    entities: {
        me: {
            status: 'Fullfiled'
        }
    }
} as Store.RootState

describe('Home Page', () => {
    beforeEach(() => {
        localStorage.setItem('token', 'token')
        history.push('/')
    })
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    it('Should render', () => {
        Rtl.render(<Home />)
        expect(Rtl.screen.getByText('Global Feed')).toBeInTheDocument()
        expect(Rtl.screen.getByText('Popular Tags')).toBeInTheDocument()
    })

    it('Should render after sign in', async () => {
        Rtl.render(<Home />, preloadedState)
        expect(
            Rtl.screen.queryByText('A place to share your knowledge.')
        ).not.toBeInTheDocument()
        expect(Rtl.screen.getByText('Your Feed')).toBeInTheDocument()
        expect(Rtl.screen.getByText('Global Feed')).toBeInTheDocument()
        expect(Rtl.screen.getByText('Popular Tags')).toBeInTheDocument()
    })

    it('Should can see hero', async () => {
        localStorage.clear()
        Rtl.render(<Home />)
        expect(
            Rtl.screen.getByText('A place to share your knowledge.')
        ).toBeInTheDocument()
        expect(Rtl.screen.getAllByText('conduit').length).toBe(3)
    })

    it('Should render global articles list', async () => {
        Rtl.render(<Home />)
        expect(Rtl.screen.getByText('loading...')).toBeInTheDocument()
        await Rtl.screen.findAllByText('Read more...')
        expect(Rtl.screen.getAllByText('Read more...').length).toBe(2)
    })

    it('Should favorite article', async () => {
        Rtl.render(<Home />, preloadedState)
        await Rtl.screen.findAllByText('Read more...')
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
        Rtl.render(<Home />, undefined, history)
        await Rtl.screen.findAllByText('Read more...')
        const buttons = Rtl.screen.getAllByRole('button', { name: '0' })
        expect(buttons.length).toBe(2)

        Rtl.fireEvent.click(buttons[0])
        await Rtl.waitFor(() =>
            expect(history.location.pathname).toBe('/login')
        )
    })

    it('Should change tab', async () => {
        Rtl.render(<Home />, preloadedState)
        Rtl.fireEvent.click(Rtl.screen.getByText('Your Feed'))
        expect(Rtl.screen.getByText('loading...')).toBeInTheDocument()
        await Rtl.screen.findAllByText('Read more...')
        expect(Rtl.screen.getAllByText('Read more...').length).toBe(1)
        Rtl.fireEvent.click(Rtl.screen.getByText('Global Feed'))
        expect(Rtl.screen.getByText('loading...')).toBeInTheDocument()
        await Rtl.screen.findAllByText('Read more...')
        expect(Rtl.screen.getAllByText('Read more...').length).toBe(2)
    })

    it('Should click tag', async () => {
        Rtl.render(<Home />)
        expect(Rtl.screen.getByText('Loading tags...')).toBeInTheDocument()
        await Rtl.screen.findByText('reactjs')
        Rtl.fireEvent.click(Rtl.screen.getByText('reactjs'))
        expect(Rtl.screen.getAllByText('reactjs').length).toBe(2)
    })

    it.todo('Should to article page')
})
