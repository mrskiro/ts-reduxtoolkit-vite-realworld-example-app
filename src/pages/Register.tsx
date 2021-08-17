import * as React from 'react'
import * as SnowFlakes from '~/components/snowflakes'
import * as Hooks from '~/hooks'

export const Register = () => {
    const name = Hooks.useInput('')
    const email = Hooks.useInput('')
    const password = Hooks.useInput('')

    const onSignUp = () => {
        console.log(name, email, password)
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
