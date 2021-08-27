import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'
import * as Recipes from '~/components/recipes'
import * as Entities from '~/entities'
import { Main } from '~/components/layouts/Main'

type Props = {
    isGetMe: boolean
    isLoadingArticles: boolean
    isLoadingTags: boolean
    tags: Entities.Tag[]
    articles: Entities.Article[]
}

export const Home = (props: Props) => (
    <Main isGetMe={props.isGetMe}>
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
                                {props.isGetMe && (
                                    <>
                                        <li className="nav-item">
                                            <DesignSystem.Link
                                                className="nav-link"
                                                isDisabled
                                                href=""
                                            >
                                                Your Feed
                                            </DesignSystem.Link>
                                        </li>
                                    </>
                                )}
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
                        {props.isLoadingArticles
                            ? 'loading...'
                            : props.articles.map(article => (
                                  <div className="article-preview">
                                      <div className="article-meta">
                                          {/* todo */}
                                          <DesignSystem.Link href="profile.html">
                                              <img
                                                  src={article.author.image}
                                                  alt=""
                                              />
                                          </DesignSystem.Link>
                                          <div className="info">
                                              <DesignSystem.Link
                                                  href=""
                                                  className="author"
                                              >
                                                  {article.author.username}
                                              </DesignSystem.Link>
                                              <span className="date">
                                                  {article.createdAt}
                                              </span>
                                          </div>
                                          <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                              <i className="ion-heart"></i>{' '}
                                              {article.favoritesCount}
                                          </button>
                                      </div>
                                      <DesignSystem.Link
                                          href=""
                                          className="preview-link"
                                      >
                                          <h1>{article.title}</h1>
                                          <p>{article.description}</p>
                                          <span>Read more...</span>
                                      </DesignSystem.Link>
                                  </div>
                              ))}
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
