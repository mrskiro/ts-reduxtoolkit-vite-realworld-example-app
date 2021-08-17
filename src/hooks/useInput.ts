import * as React from 'react'

export const useInput = (initialValue: string) => {
    const [value, setValue] = React.useState(initialValue)

    const onChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value)
        },
        []
    )

    return {
        value,
        onChange
    }
}
