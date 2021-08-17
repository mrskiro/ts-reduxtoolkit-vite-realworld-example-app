import * as React from 'react'

type Props = JSX.IntrinsicElements['textarea']

export const Textarea = (props: Props) => {
    return <textarea {...props} />
}
