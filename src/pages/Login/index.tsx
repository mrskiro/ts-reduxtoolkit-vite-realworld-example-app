import * as React from 'react'
import * as ReactRedux from 'react-redux'
import * as ReactRouterDom from 'react-router-dom'
import * as SnowFlakes from '~/components/snowflakes'
import * as Hooks from '~/hooks'
import * as Me from '~/store/entities/me'

export const Login = () => {
    const history = ReactRouterDom.useHistory()

    const email = Hooks.useInput('')
    const password = Hooks.useInput('')

    const dispatch = ReactRedux.useDispatch()
    const isFullfiled = ReactRedux.useSelector(Me.selectIsFullfiled)

    const onSignIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(
            Me.login({
                user: {
                    email: email.value,
                    password: password.value
                },
                history
            })
        )
    }

    React.useEffect(() => {
        if (isFullfiled) {
            history.push('/')
        }
    }, [isFullfiled, history])

    return (
        <SnowFlakes.Login
            email={email.value}
            password={password.value}
            onChangeEmail={email.onChange}
            onChangePassword={password.onChange}
            onSignIn={onSignIn}
        />
    )
}
