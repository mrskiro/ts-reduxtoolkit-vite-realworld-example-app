import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'

type Props = React.ComponentPropsWithoutRef<typeof DesignSystem.Textarea>

export const TextareaField = (props: Props) => (
    <fieldset className="form-group">
        <DesignSystem.Textarea {...props} />
    </fieldset>
)
