import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'
import * as Recipes from '~/components/recipes'
import { Main } from '~/components/layouts/Main'

export const Profile = () => (
    <Main>
        <div className="profile-page">
            <div className="user-info">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 offset-md-1">
                            <img
                                src="http://i.imgur.com/Qr71crq.jpg"
                                className="user-img"
                            />
                            <h4>Eric Simons</h4>
                            <p>
                                Cofounder @GoThinkster, lived in Aol's HQ for a
                                few months, kinda looks like Peeta from the
                                Hunger Games
                            </p>
                            <DesignSystem.Button
                                size="sm"
                                className="btn-outline-secondary action-btn"
                            >
                                <i className="ion-plus-round"></i>
                                &nbsp; Follow Eric Simons
                            </DesignSystem.Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <div className="articles-toggle">
                            <ul className="nav nav-pills outline-active">
                                <li className="nav-item">
                                    <DesignSystem.Link
                                        isActive
                                        className="nav-link"
                                        href=""
                                    >
                                        My Articles
                                    </DesignSystem.Link>
                                </li>
                                <li className="nav-item">
                                    <DesignSystem.Link
                                        className="nav-link"
                                        href=""
                                    >
                                        Favorited Articles
                                    </DesignSystem.Link>
                                </li>
                            </ul>
                        </div>

                        <div className="article-preview">
                            <div className="article-meta">
                                <DesignSystem.Link href="">
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
                                <DesignSystem.Button
                                    size="sm"
                                    className="btn-outline-primary pull-xs-right"
                                >
                                    <i className="ion-heart"></i> 29
                                </DesignSystem.Button>
                            </div>
                            <DesignSystem.Link href="" className="preview-link">
                                <h1>How to build webapps that scale</h1>
                                <p>This is the description for the post.</p>
                                <span>Read more...</span>
                            </DesignSystem.Link>
                        </div>

                        <div className="article-preview">
                            <div className="article-meta">
                                <DesignSystem.Link href="">
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
                                <DesignSystem.Button
                                    size="sm"
                                    className="btn-outline-primary pull-xs-right"
                                >
                                    <i className="ion-heart"></i> 32
                                </DesignSystem.Button>
                            </div>
                            <DesignSystem.Link href="" className="preview-link">
                                <h1>
                                    The song you won't ever stop singing. No
                                    matter how hard you try.
                                </h1>
                                <p>This is the description for the post.</p>
                                <span>Read more...</span>
                                <ul className="tag-list">
                                    <li className="tag-default tag-pill tag-outline">
                                        Music
                                    </li>
                                    <li className="tag-default tag-pill tag-outline">
                                        Song
                                    </li>
                                </ul>
                            </DesignSystem.Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Main>
)
