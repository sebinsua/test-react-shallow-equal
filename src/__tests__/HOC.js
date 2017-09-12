import React from 'react'
import { withProps } from 'recompose'
import { shallow } from 'enzyme'

import shallowEqualMatcher from '../matchers/jest'

expect.extend(shallowEqualMatcher)

test('should match when a HOC *is not* shallow equal', () => {
  const invalidHoc = withProps(() => ({
    arr: [],
    obj: {},
    fn: () => undefined
  }))

  const spy = jest.fn().mockReturnValue(<div>Hello World</div>)

  const WrappedComponent = invalidHoc(spy)

  shallow(WrappedComponent())
  shallow(WrappedComponent())

  const firstPropsReceived = spy.mock.calls[0][0]
  const secondPropsReceived = spy.mock.calls[1][0]

  expect(firstPropsReceived).not.toShallowEqual(secondPropsReceived)
})

test('should match when a HOC *is* shallow equal', () => {
  const arr = []
  const obj = {}
  const fn = () => undefined

  const validHoc = withProps(() => ({
    arr,
    obj,
    fn
  }))

  const spy = jest.fn().mockReturnValue(<div>Hello World</div>)

  const WrappedComponent = validHoc(spy)

  shallow(WrappedComponent())
  shallow(WrappedComponent())

  const firstPropsReceived = spy.mock.calls[0][0]
  const secondPropsReceived = spy.mock.calls[1][0]

  expect(firstPropsReceived).toShallowEqual(secondPropsReceived)
})
