import * as React from 'react'
import * as ReactRedux from 'react-redux'
import * as SnowFlakes from '~/components/snowflakes'
import * as Tags from '~/store/entities/tags'

export const Home = () => {
    const dispatch = ReactRedux.useDispatch()
    const isLoadingTags = ReactRedux.useSelector(Tags.selectIsLoading)

    const allTags = ReactRedux.useSelector(Tags.selectAll)

    React.useEffect(() => {
        dispatch(Tags.getTags())
    }, [dispatch])

    return <SnowFlakes.Home isLoadingTags={isLoadingTags} tags={allTags} />
}
