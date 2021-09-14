import * as React from 'react'
import * as ReactRedux from 'react-redux'
import * as SnowFlakes from '~/components/snowflakes'
import * as Me from '~/store/entities/me'

export const Setting = () => {
    const dispatch = ReactRedux.useDispatch()

    const isGetme = ReactRedux.useSelector(Me.selectIsFullfiled)

    const username = ReactRedux.useSelector(Me.selectUsername)
    const email = ReactRedux.useSelector(Me.selectEmail)
    const bio = ReactRedux.useSelector(Me.selectBio)
    const image = ReactRedux.useSelector(Me.selectImage)

    const onSubmit = (
        values: React.ComponentPropsWithoutRef<
            typeof SnowFlakes.Setting
        >['initialValues'] & { password: string }
    ) => {
        dispatch(Me.updateMe(values))
    }

    if (!isGetme) return <div>loading...</div>
    return (
        <SnowFlakes.Setting
            username={username}
            initialValues={{ username, email, bio, image }}
            onSubmit={onSubmit}
        />
    )
}
