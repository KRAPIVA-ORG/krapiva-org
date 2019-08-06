import React from 'react'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { ButtonOutlinedBlock, ButtonOutlinedDisabled } from './Buttons'
import { uuid } from '../utils'
import { translite } from '../utils/makePath'

export const Menu = ({ toggle, toggledOn }) => (
  <StaticQuery
    query={graphql`
      query {
        pages: allSitePage {
          edges {
            node {
              path
            }
          }
        }
        index: prismicIndex {
          data {
            categories {
              categorytitle {
                text
              }
            }
          }
        }
      }
    `}
    render={({ pages, index }) => (
      <div
        css={css`
          ${tw([
            'flex',
            'flex-row',
            'flex-wrap',
            'items-center',
            'justify-center',
            'py-q36',
            'px-q24',
            'sm:px-q48',
          ])};
        `}
      >
        <AniLink
          fade
          css={css`
            ${tw([
              'flex-auto',
              'md:flex-1',
              'mb-q8',
              'px-q4',
              'w-full',
              'md:w-auto',
            ])};
          `}
          to={`/novoe`}
        >
          <ButtonOutlinedBlock
            css={css`
              ${tw(['hover:bg-green'])};
            `}
          >
            Новое
          </ButtonOutlinedBlock>
        </AniLink>
        <AniLink
          fade
          css={css`
            ${tw([
              'flex-auto',
              'md:flex-1',
              'mb-q8',
              'px-q4',
              'w-full',
              'md:w-auto',
            ])};
          `}
          to={`/afisha`}
        >
          <ButtonOutlinedBlock
            css={css`
              ${tw(['hover:bg-green'])};
            `}
          >
            Афиша
          </ButtonOutlinedBlock>
        </AniLink>
        {index.data.categories.map(category => {
          const pageExist = pages.edges.some(
            ({ node }) => node.path.replace(/\//g, '') === translite(category.categorytitle.text)
          )
          return pageExist ? (
            <AniLink
              fade
              css={css`
                ${tw(['flex-1', 'mb-q8', 'px-q4'])};
              `}
              key={uuid()}
              to={`/${translite(category.categorytitle.text)}`}
            >
              <ButtonOutlinedBlock
                css={css`
                  ${tw(['hover:bg-green'])};
                `}
                key={uuid()}
              >
                {category.categorytitle.text}
              </ButtonOutlinedBlock>
            </AniLink>
          ) : (
            <span
              css={css`
                ${tw(['flex-1', 'mb-q8', 'px-q4'])};
              `}
              key={uuid()}
            >
              <ButtonOutlinedDisabled key={uuid()}>
                {category.categorytitle.text}
              </ButtonOutlinedDisabled>
            </span>
          )
        })}
        <AniLink
          fade
          css={css`
            ${tw([
              'flex-auto',
              'md:flex-1',
              'mb-q8',
              'px-q4',
              'w-full',
              'md:w-auto',
            ])};
          `}
          to={`/o-nas`}
        >
          <ButtonOutlinedBlock
            css={css`
              ${tw(['hover:bg-green'])};
            `}
          >
            О Редакции
          </ButtonOutlinedBlock>
        </AniLink>
        <span
          css={css`
            ${tw(['flex-auto', 'md:hidden', 'px-q4', 'w-full'])};
          `}
          key={uuid()}
        >
          <ButtonOutlinedBlock
            css={css`
              ${tw(['bg-green', 'hover:bg-white', 'hover:text-black'])};
            `}
            onClick={toggle}
          >
            {toggledOn ? '֍' : 'Подписка'}
          </ButtonOutlinedBlock>
        </span>
      </div>
    )}
  />
)