import React from 'react'
import { withProps } from 'recompose'
import { shallow } from 'enzyme'

import installShallowEqualMatcher from '..'

describe('HOC', () => {
  beforeAll(() => installShallowEqualMatcher())

  it('should match when it *is not* shallow equal', () => {
    const invalidHoc = withProps(() => ({
      arr: [],
      obj: {},
      fn: () => undefined
    }))

    const spy = jasmine.createSpy().and.returnValue(<div>Hello World</div>)

    const WrappedComponent = invalidHoc(spy)

    shallow(WrappedComponent())
    shallow(WrappedComponent())

    const [firstPropsReceived] = spy.calls.argsFor(0)
    const [secondPropsReceived] = spy.calls.argsFor(1)

    expect(firstPropsReceived).not.toShallowEqual(secondPropsReceived)
  })

  it('should match when it *is* shallow equal', () => {
    const arr = []
    const obj = {}
    const fn = () => undefined

    const validHoc = withProps(() => ({
      arr,
      obj,
      fn
    }))

    const spy = jasmine.createSpy().and.returnValue(<div>Hello World</div>)

    const WrappedComponent = validHoc(spy)

    shallow(WrappedComponent())
    shallow(WrappedComponent())

    const [firstPropsReceived] = spy.calls.argsFor(0)
    const [secondPropsReceived] = spy.calls.argsFor(1)

    expect(firstPropsReceived).toShallowEqual(secondPropsReceived)
  })
})
