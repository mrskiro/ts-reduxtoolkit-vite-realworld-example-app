import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'
import * as Recipes from '~/components/recipes'
import * as Entities from '~/entities'
import { Main } from '~/components/layouts/Main'

type Props = {
    isLoadingTags: boolean
    tags: Entities.Tag[]
}

export const Home = (props: Props) => (
    <Main isGetMe={false}>
        <div className="home-page">
            <DesignSystem.Banner>
                <h1 className="logo-font">conduit</h1>
                <p>A place to share your knowledge.</p>
            </DesignSystem.Banner>

            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <div className="feed-toggle">
                            <ul className="nav nav-pills outline-active">
                                <li className="nav-item">
                                    <DesignSystem.Link
                                        className="nav-link"
                                        isDisabled
                                        href=""
                                    >
                                        Your Feed
                                    </DesignSystem.Link>
                                </li>
                                <li className="nav-item">
                                    <DesignSystem.Link
                                        className="nav-link"
                                        isActive
                                        href=""
                                    >
                                        Global Feed
                                    </DesignSystem.Link>
                                </li>
                            </ul>
                        </div>

                        <div className="article-preview">
                            <div className="article-meta">
                                <DesignSystem.Link href="profile.html">
                                    <img src="http://i.imgur.com/Qr71crq.jpg" />
                                </DesignSystem.Link>
                                <div className="info">
                                    <DesignSystem.Link
                                        href=""
                                        className="author"
                                    >
                                        Eric Simons
                                    </DesignSystem.Link>
                                    <span className="date">January 20th</span>
                                </div>
                                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                    <i className="ion-heart"></i> 29
                                </button>
                            </div>
                            <DesignSystem.Link href="" className="preview-link">
                                <h1>How to build webapps that scale</h1>
                                <p>This is the description for the post.</p>
                                <span>Read more...</span>
                            </DesignSystem.Link>
                        </div>

                        <div className="article-preview">
                            <div className="article-meta">
                                <DesignSystem.Link href="profile.html">
                                    <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                                </DesignSystem.Link>
                                <div className="info">
                                    <DesignSystem.Link
                                        href=""
                                        className="author"
                                    >
                                        Albert Pai
                                    </DesignSystem.Link>
                                    <span className="date">January 20th</span>
                                </div>
                                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                    <i className="ion-heart"></i> 32
                                </button>
                            </div>
                            <DesignSystem.Link href="" className="preview-link">
                                <h1>
                                    The song you won't ever stop singing. No
                                    matter how hard you try.
                                </h1>
                                <p>This is the description for the post.</p>
                                <span>Read more...</span>
                            </DesignSystem.Link>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="sidebar">
                            <p>Popular Tags</p>

                            {props.isLoadingTags ? (
                                'Loading tags...'
                            ) : (
                                <div className="tag-list">
                                    {props.tags.map(tag => (
                                        <DesignSystem.Tag href={`?tag=${tag}`}>
                                            {tag}
                                        </DesignSystem.Tag>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Main>
)
