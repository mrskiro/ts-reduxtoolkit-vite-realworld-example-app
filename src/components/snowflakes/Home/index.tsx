import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'
import * as Recipes from '~/components/recipes'

export const Home = () => (
    <div className="home-page">
        <Recipes.Header />
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
                                <DesignSystem.Link href="" className="author">
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
                                <DesignSystem.Link href="" className="author">
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
                                The song you won't ever stop singing. No matter
                                how hard you try.
                            </h1>
                            <p>This is the description for the post.</p>
                            <span>Read more...</span>
                        </DesignSystem.Link>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="sidebar">
                        <p>Popular Tags</p>

                        <div className="tag-list">
                            <DesignSystem.Tag href="">
                                programming
                            </DesignSystem.Tag>
                            <DesignSystem.Tag href="">
                                javascript
                            </DesignSystem.Tag>
                            <DesignSystem.Tag href="">emberjs</DesignSystem.Tag>
                            <DesignSystem.Tag href="">
                                angularjs
                            </DesignSystem.Tag>
                            <DesignSystem.Tag href="">react</DesignSystem.Tag>
                            <DesignSystem.Tag href="">mean</DesignSystem.Tag>
                            <DesignSystem.Tag href="">node</DesignSystem.Tag>
                            <DesignSystem.Tag href="">rails</DesignSystem.Tag>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
