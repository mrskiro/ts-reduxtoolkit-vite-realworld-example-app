import * as React from 'react'
import * as ReactRedux from 'react-redux'
import * as Me from '~/store/entities/me'

export const AuthRoute: React.FC = ({ children }) => {
    const dispatch = ReactRedux.useDispatch()

    React.useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(Me.getMe())
        }
    }, [dispatch])

    return <>{children}</>
}
