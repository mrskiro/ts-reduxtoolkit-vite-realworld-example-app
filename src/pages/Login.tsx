import * as React from 'react'
import * as SnowFlakes from '~/components/snowflakes'
import * as Hooks from '~/hooks'

export const Login = () => {
    const email = Hooks.useInput('')
    const password = Hooks.useInput('')

    const onSignIn = () => {
        console.log(email, password)
    }

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
