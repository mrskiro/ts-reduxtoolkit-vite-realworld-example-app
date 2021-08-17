import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'
import * as Recipes from '~/components/recipes'
import { Main } from '~/components/layouts/Main'

export const Article = () => (
    <Main>
        <div className="article-page">
            <DesignSystem.Banner>
                <h1>How to build webapps that scale</h1>
                <div className="article-meta">
                    <DesignSystem.Link href="">
                        <img src="http://i.imgur.com/Qr71crq.jpg" />
                    </DesignSystem.Link>
                    <div className="info">
                        <DesignSystem.Link href="" className="author">
                            Eric Simons
                        </DesignSystem.Link>
                        <span className="date">January 20th</span>
                    </div>
                    <DesignSystem.Button
                        size="sm"
                        className="btn-outline-secondary"
                    >
                        <i className="ion-plus-round"></i>
                        &nbsp; Follow Eric Simons{' '}
                        <span className="counter">(10)</span>
                    </DesignSystem.Button>
                    &nbsp;&nbsp;
                    <DesignSystem.Button
                        size="sm"
                        className="btn-outline-primary"
                    >
                        <i className="ion-heart"></i>
                        &nbsp; Favorite Post{' '}
                        <span className="counter">(29)</span>
                    </DesignSystem.Button>
                </div>
            </DesignSystem.Banner>

            <div className="container page">
                <div className="row article-content">
                    <div className="col-md-12">
                        <p>
                            Web development technologies have evolved at an
                            incredible clip over the past few years.
                        </p>
                        <h2 id="introducing-ionic">Introducing RealWorld.</h2>
                        <p>
                            It's a great solution for learning how other
                            frameworks work.
                        </p>
                    </div>
                </div>

                <hr />

                <div className="article-actions">
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
                        <DesignSystem.Button
                            size="sm"
                            className="btn-outline-secondary"
                        >
                            <i className="ion-plus-round"></i>
                            &nbsp; Follow Eric Simons{' '}
                            <span className="counter">(10)</span>
                        </DesignSystem.Button>
                        &nbsp;
                        <DesignSystem.Button
                            size="sm"
                            className="btn-outline-primary"
                        >
                            <i className="ion-heart"></i>
                            &nbsp; Favorite Post{' '}
                            <span className="counter">(29)</span>
                        </DesignSystem.Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-8 offset-md-2">
                        <form className="card comment-form">
                            <div className="card-block">
                                <DesignSystem.Textarea
                                    className="form-control"
                                    placeholder="Write a comment..."
                                    rows={3}
                                />
                            </div>
                            <div className="card-footer">
                                <img
                                    src="http://i.imgur.com/Qr71crq.jpg"
                                    className="comment-author-img"
                                />
                                <DesignSystem.Button
                                    size="sm"
                                    className="btn-primary"
                                >
                                    Post Comment
                                </DesignSystem.Button>
                            </div>
                        </form>

                        <div className="card">
                            <div className="card-block">
                                <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                </p>
                            </div>
                            <div className="card-footer">
                                <DesignSystem.Link
                                    href=""
                                    className="comment-author"
                                >
                                    <img
                                        src="http://i.imgur.com/Qr71crq.jpg"
                                        className="comment-author-img"
                                    />
                                </DesignSystem.Link>
                                &nbsp;
                                <DesignSystem.Link
                                    href=""
                                    className="comment-author"
                                >
                                    Jacob Schmidt
                                </DesignSystem.Link>
                                <span className="date-posted">Dec 29th</span>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-block">
                                <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                </p>
                            </div>
                            <div className="card-footer">
                                <DesignSystem.Link
                                    href=""
                                    className="comment-author"
                                >
                                    <img
                                        src="http://i.imgur.com/Qr71crq.jpg"
                                        className="comment-author-img"
                                    />
                                </DesignSystem.Link>
                                &nbsp;
                                <DesignSystem.Link
                                    href=""
                                    className="comment-author"
                                >
                                    Jacob Schmidt
                                </DesignSystem.Link>
                                <span className="date-posted">Dec 29th</span>
                                <span className="mod-options">
                                    <i className="ion-edit"></i>
                                    <i className="ion-trash-a"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Main>
)
