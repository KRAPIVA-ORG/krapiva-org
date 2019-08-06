import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import ArticleHeader from '../components/blocks/article-header'
import { ArticleBody } from '../components/ArticleBody'
import { ButtonOutlined } from '../components/Buttons'
import { Context } from '../components/Context'
import { Heading1 } from '../components/Typography'
import { Burn } from '../components/Burn'

const getContext = slug => ctx => {
  return ctx.edges.filter(({ node }) => node.fields.slug === slug)
}

const Article = ({ data, location }) => {
  const article = data.article.data
  const tags = data.article.tags.filter(tag => tag.search(/\d/) === -1)
  const slug = data.article.fields.slug
  const context = getContext(slug)(data.context)
  const isAfisha = data.article.tags.some(tag => tag === 'Афиша')

  return (
    <>
      <article
        css={css`
          ${tw(['bg-white', 'my-q48', 'relative'])};
        `}
      >
        <h1 className={Heading1}>{article.title.text}</h1>
        <ArticleHeader
          article={ article }
          date={data.article.first_publication_date}
          location={ location }
          tags={ tags }
        />
        <ArticleBody {...{ article }} />
        <Burn {...{ location }} />
      </article>
      {!isAfisha && <Context {...{ context }} />}
      {isAfisha && (
        <Link
          css={css`
            ${tw(['block', 'mt-q48', 'mx-auto', 'text-center'])};
          `}
          to={'/afisha#articles'}
        >
          <span
            css={css`
              ${ButtonOutlined};
            `}
          >
            ← Архив афиши
          </span>
        </Link>
      )}
    </>
  )
}

Article.propTypes = {
  data: PropTypes.shape({
    prismicArticles: PropTypes.object,
  }),
}

export default Article

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    article: prismicArticles(fields: { slug: { eq: $slug } }) {
      ...ArticleHeader
      ...ArticleBody
      data {
        title {
          text
        }
      }
      fields {
        slug
      }
    }
    context: allPrismicArticles(
      filter: { tags: { nin: "Афиша" } }
      sort: { order: DESC, fields: [first_publication_date] }
    ) {
      edges {
        next {
          fields {
            slug
          }
          ...ArticleHeader
          data {
            title {
              text
            }
          }
        }
        previous {
          fields {
            slug
          }
          ...ArticleHeader
          data {
            title {
              text
            }
          }
        }
        node {
          fields {
            slug
          }
        }
      }
    }
    seo: prismicArticles(fields: { slug: { eq: $slug } }) {
      data {
        title {
          text
        }
        image {
          url
          localFile {
            childImageSharp {
              fixed(width: 1200, height: 630) {
                src
              }
            }
          }
        }
      }
    }
  }
`