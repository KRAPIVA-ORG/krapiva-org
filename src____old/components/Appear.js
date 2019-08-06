import React from 'react'
import { css } from '@emotion/core'
import Transition from 'react-transition-group/Transition'

const transitionStyles = {
  entering: {
    maxHeight: '0px',
  },
  entered: {
    maxHeight: '600px',
  },
  exiting: {
    maxHeight: '0px',
  },
  exited: {
    maxHeight: '0px',
  },
}

const spanStyles = {
  entering: {
    maxHeight: '0px',
  },
  entered: {
    maxHeight: '40px',
  },
  exiting: {
    maxHeight: '0px',
  },
  exited: {
    maxHeight: '0px',
  },
}

const spanStylesHundred = {
  entering: {
    maxHeight: '0px',
  },
  entered: {
    maxHeight: '600px',
  },
  exiting: {
    maxHeight: '0px',
  },
  exited: {
    maxHeight: '0px',
  },
}

export const Appear = ({ children, inProp }) => (
  <Transition
    in={inProp}
    mountOnEnter
    timeout={{ enter: 0, exit: 600 }}
    unmountOnExit
  >
    {state => (
      <div
        css={css`
          max-height: 0px;
          overflow: hidden;
          transition: max-height 600ms ease-in-out;
        `}
        style={{
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </Transition>
)

export const AppearSpan = ({ children, inProp }) => (
  <Transition
    in={inProp}
    mountOnEnter
    timeout={{ enter: 0, exit: 600 }}
    unmountOnExit
  >
    {state => (
      <span
        css={css`
          display: inline-flex;
          max-height: 0px;
          overflow: hidden;
          transition: max-height 600ms ease-in-out;
        `}
        style={{
          ...spanStyles[state],
        }}
      >
        {children}
      </span>
    )}
  </Transition>
)

export const AppearSpanHundred = ({ children, inProp, ...props }) => (
  <Transition
    in={inProp}
    mountOnEnter
    unmountOnExit
    timeout={{ enter: 0, exit: 600 }}
  >
    {state => (
      <span
        css={css`
          display: inline-flex;
          max-height: 0px;
          overflow: hidden;
          transition: max-height 600ms ease-in-out;
          width: 100%;
        `}
        style={{
          ...spanStylesHundred[state],
        }}
        {...props}
      >
        {children}
      </span>
    )}
  </Transition>
)