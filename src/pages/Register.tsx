import * as React from 'react'
import * as ReactRedux from 'react-redux'
import * as ReactRouterDom from 'react-router-dom'
import * as SnowFlakes from '~/components/snowflakes'
import * as Hooks from '~/hooks'
import * as Me from '~/store/entities/me'

export const Register = () => {
    const history = ReactRouterDom.useHistory()

    const name = Hooks.useInput('')
    const email = Hooks.useInput('')
    const password = Hooks.useInput('')

    const dispatch = ReactRedux.useDispatch()
    const isFullfiled = ReactRedux.useSelector(Me.selectIsFullfiled)

    const onSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(
            Me.register({
                user: {
                    name: name.value,
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
        <SnowFlakes.Register
            name={name.value}
            email={email.value}
            password={password.value}
            onChangeName={name.onChange}
            onChangeEmail={email.onChange}
            onChangePassword={password.onChange}
            onSignUp={onSignUp}
        />
    )
}
