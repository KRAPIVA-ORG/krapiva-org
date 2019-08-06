import Link from './elements/link'
import React from 'react'
import { css } from '@emotion/core'

import { Img, ImgHolder } from './Img'
import { Heading6 } from './Typography'
import { toLocalDate, uuid } from '../utils'

export const Dummy = () => (
  <div
    css={css`
      ${tw(['flex-no-shrink', 'w-full'])};
      max-width: calc(50% - 2rem);
    `}
  />
)

export const PreviewCard = ({ article, location }) => (
  <Link
    css={css`
      ${tw(['block', 'text-black', 'hover:text-black', 'w-full'])};
      &:hover h4 {
        ${tw(['text-green'])};
      }
    `}
    api={article.href}
    location={location}
    title={article.data.title.text}
    to={article.fields.slug || ''}
  >
    {article.data.image && <Img src={article.data.image} />}
    <div
      css={css`
        ${tw(['mt-q16'])};
      `}
    >
      <h4
        css={css`
          ${Heading6};
          ${tw(['mb-q12'])};
          transition: all 200ms ease-in-out;
        `}
      >
        {article.data.title.text}
      </h4>
      {article.tags &&
        article.tags
          .filter(tag => tag.search(/\d/) === -1)
          .map(tag => <span key={uuid()}> {tag} ·</span>)}
      <span> {toLocalDate(article.first_publication_date)}</span>
      <span>
        <span> ·</span>
        {article.data.authors &&
          article.data.authors.map(
            ({ author }) =>
              author &&
              author.document.map(({ data }) => (
                <span key={uuid()}> {data.name} ·</span>
              ))
          )}
      </span>
    </div>
  </Link>
)

export const Placeholder = () => (
  <>
    <ImgHolder
      css={css`
        ${tw(['h-q144', 'mb-q16'])};
      `}
    />
    <div
      css={css`
        ${tw(['bg-grey-lighter', 'h-q24', 'mb-q16', 'rounded-sm', 'w-4/5'])};
      `}
    />
    <div
      css={css`
        ${tw(['bg-grey-lighter', 'h-q12', 'mb-q8', 'rounded-sm', 'w-3/5'])};
      `}
    />
    <div
      css={css`
        ${tw(['bg-grey-lighter', 'h-q12', 'mb-q8', 'rounded-sm', 'w-3/4'])};
      `}
    />
    <div
      css={css`
        ${tw(['bg-grey-lighter', 'h-q12', 'rounded-sm', 'w-3/5'])};
      `}
    />
  </>
)