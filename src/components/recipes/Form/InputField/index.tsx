import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'

type Props = React.ComponentPropsWithoutRef<typeof DesignSystem.Input>

export const InputField = (props: Props) => (
    <fieldset className="form-group">
        <DesignSystem.Input {...props} />
    </fieldset>
)
