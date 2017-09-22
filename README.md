# `test-react-shallow-equal`
> Unit test against inadvertent performance problems.

Provides a `toShallowEqual` matcher for `jest` and `jasmine`. This matcher can aid in writing performant code as it allows you to write unit tests which [ensure that `shallowEqual` always returns `true` when the underlying values tested have not changed](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f).

## Usage

The tests give examples of how to use this to test [`mapStateToProps`](./packages/jest-react-shallow-equal/src/__tests__/mapStateToProps.js), [higher-order components (HOCs)](./packages/jest-react-shallow-equal/src/__tests__/HOC.js) and normal [component renders](./packages/test-react-shallow-equal/src/__tests__/ensureInternalPropsAreShallowEqual.js).

## Install

### Installing `jest` matchers

```sh
npm install --save-dev jest-react-shallow-equal
```

```js
import installShallowEqualMatcher from 'jest-react-shallow-equal'

installShallowEqualMatcher()

test('should x when y', () => {
  // ...
})
```

### Installing `jasmine` matchers

```sh
npm install --save-dev jasmine-react-shallow-equal
```

The `installShallowEqualMatcher` function must be called within a spec's `beforeEach` or `beforeAll` and must be run before testing code.

```js
import installShallowEqualMatcher from 'jasmine-react-shallow-equal'

describe('some suite', () => {
  beforeAll(() => installShallowEqualMatcher())

  it('some test', () => {
    // ...
  })
})
```
