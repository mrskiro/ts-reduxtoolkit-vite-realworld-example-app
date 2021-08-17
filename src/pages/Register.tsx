import * as React from 'react'
import * as ReactRedux from 'react-redux'
import * as SnowFlakes from '~/components/snowflakes'
import * as Hooks from '~/hooks'
import * as Me from '~/store/entities/me'

export const Register = () => {
    const dispatch = ReactRedux.useDispatch()

    const name = Hooks.useInput('')
    const email = Hooks.useInput('')
    const password = Hooks.useInput('')

    const onSignUp = () => {
        dispatch(
            Me.register({
                name: name.value,
                email: email.value,
                password: password.value
            })
        )
    }

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
