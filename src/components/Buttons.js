/* global tw */
import styled, { css } from 'react-emotion'

const OutlinedTemplate = css`
  ${tw([
    'bg-white',
    'hover:bg-black',
    'inline-flex',
    'border',
    'border-black',
    'border-solid',
    'font-montserrat',
    'items-center',
    'justify-center',
    'text-black',
    'hover:text-white',
    'uppercase',
  ])};
  transition: all 200ms ease-in-out;
`

export const ButtonOutlined = css`
  ${OutlinedTemplate};
  ${tw(['px-q24', 'py-q12', 'text-sm'])};
`

export const ButtonOutlinedBlock = styled('button')`
  ${OutlinedTemplate};
  ${tw(['flex-no-shrink', 'px-q12', 'py-q8', 'text-xs'])};
  &:not(:first-of-type) {
    margin-left: -1px;
  }
  ${({ active }) =>
    active ? tw(['bg-black', 'text-white']) : tw(['cursor-pointer'])};
`