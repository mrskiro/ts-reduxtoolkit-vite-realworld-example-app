import * as React from 'react'
import * as History from 'history'
import * as Node from 'msw/node'
import * as Rtl from '~/__tests__/utils'
import * as Api from '../../../../mock_server/api'
import * as Store from '~/store'
import '@testing-library/jest-dom'

import { Login } from '../'

const server = Node.setupServer(Api.login)

const history = History.createMemoryHistory({
    initialEntries: ['/login']
})
describe('Login Page', () => {
    beforeEach(() => history.push('/login'))
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    it('Should render', () => {
        Rtl.render(<Login />)
        expect(Rtl.screen.getByPlaceholderText('Email')).toHaveValue('')
        expect(Rtl.screen.getByPlaceholderText('Password')).toHaveValue('')
    })

    it('Should redirect to home page when signined', () => {
        const preloadedState = {
            entities: {
                me: {
                    status: 'Fullfiled'
                }
            }
        } as Store.RootState
        Rtl.render(<Login />, preloadedState, history)

        expect(history.location.pathname).toStrictEqual('/')
    })

    it('Should redirect to sign up page when click link', () => {
        Rtl.render(<Login />, undefined, history)
        Rtl.fireEvent.click(Rtl.screen.getByText('Need an account?'))

        expect(history.location.pathname).toStrictEqual('/register')
    })

    it('Should redirect to home page when click sign in', async () => {
        Rtl.render(<Login />, undefined, history)

        expect(Rtl.screen.getByText('Need an account?')).toBeInTheDocument()

        Rtl.fireEvent.click(
            Rtl.screen.getByRole('button', { name: /Sign in/i })
        )

        await Rtl.waitFor(() =>
            expect(history.location.pathname).toStrictEqual('/')
        )
    })
})
