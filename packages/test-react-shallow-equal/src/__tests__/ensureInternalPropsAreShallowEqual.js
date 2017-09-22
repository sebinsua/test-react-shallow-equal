import React from 'react'
import { shallow } from 'enzyme'

import ensureInternalPropsAreShallowEqual from '../ensureInternalPropsAreShallowEqual'

test('should error when an element of a component has props that *are not* shallow equal', () => {
  const ListItem = props => <div {...props}>TEST</div>
  const Component = () => (
    <ListItem obj={{}} arr={[]} onClick={() => undefined} />
  )

  const firstRender = shallow(<Component />)
  const secondRender = shallow(<Component />)

  expect(
    ensureInternalPropsAreShallowEqual(firstRender, secondRender)
  ).toHaveLength(1)
})

test('should not error when all element of a component have no children and props that *are* shallow equal', () => {
  const arr = []
  const obj = {}
  const fn = () => undefined

  const ListItem = props => <div {...props}>TEST</div>
  const Component = () => <ListItem obj={obj} arr={arr} onClick={fn} />

  const firstRender = shallow(<Component />)
  const secondRender = shallow(<Component />)

  expect(
    ensureInternalPropsAreShallowEqual(firstRender, secondRender)
  ).toHaveLength(0)
})

test('should error when a component has elements with children', () => {
  // NOTE: By default any element which contains `children` will cause a re-render,
  //       unless you do something strange like:
  //       https://github.com/lelandrichardson/shallow-element-equals

  const List = ({ children }) => children
  const ListItem = props => <div {...props}>TEST</div>
  const Component = () => (
    <div>
      <div className="header">HEADER</div>
      <div className="some-deep-container">
        <h2>List</h2>
        <div className="some-list">
          <List>
            <ListItem />
            <ListItem onClick={() => undefined} />
          </List>
        </div>
      </div>
    </div>
  )

  const firstRender = shallow(<Component />)
  const secondRender = shallow(<Component />)

  expect(
    ensureInternalPropsAreShallowEqual(firstRender, secondRender).filter(
      error => error.type === 'receiving-children'
    )
  ).toHaveLength(4)
})

test('should error when a very deep element of a component has props that *are not* shallow equal', () => {
  const List = ({ children }) => children
  const ListItem = props => <div {...props}>TEST</div>
  const Component = () => (
    <div>
      <div className="header">HEADER</div>
      <div className="some-deep-container">
        <h2>List</h2>
        <div className="some-list">
          <List>
            <ListItem />
            <ListItem onClick={() => undefined} />
          </List>
        </div>
      </div>
    </div>
  )

  const firstRender = shallow(<Component />)
  const secondRender = shallow(<Component />)

  expect(
    ensureInternalPropsAreShallowEqual(firstRender, secondRender).filter(
      error => error.type === 'props'
    )
  ).toHaveLength(1)
})
