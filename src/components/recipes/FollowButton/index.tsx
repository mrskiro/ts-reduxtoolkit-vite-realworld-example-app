import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'
import * as Entities from '~/entities'

type Props = {
    username: Entities.Profile['username']
    onClickFollow: () => void
}

export const FollowButton = (props: Props) => (
    <DesignSystem.Button
        size="sm"
        className="btn-outline-secondary action-btn"
        onClick={props.onClickFollow}
    >
        <i className="ion-plus-round"></i>
        &nbsp; {`Follow ${props.username}`}
    </DesignSystem.Button>
)

type UnFollowProps = {
    username: Entities.Profile['username']
    onClickUnFollow: () => void
}

export const UnFollowButton = (props: UnFollowProps) => (
    <DesignSystem.Button
        size="sm"
        className="btn-secondary action-btn"
        onClick={props.onClickUnFollow}
    >
        <i className="ion-plus-round"></i>
        &nbsp; {`UnFollow ${props.username}`}
    </DesignSystem.Button>
)
