import * as React from 'react'

type Props = JSX.IntrinsicElements['input']

export const Input = (props: Props) => {
    return <input {...props} />
}
