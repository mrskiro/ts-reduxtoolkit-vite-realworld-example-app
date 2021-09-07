import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'

type Props = React.ComponentPropsWithoutRef<typeof DesignSystem.Input> & {
    children?: React.ReactNode
}

export const InputField = ({ children, ...restProps }: Props) => (
    <fieldset className="form-group">
        <DesignSystem.Input {...restProps} />
        {children}
    </fieldset>
)
