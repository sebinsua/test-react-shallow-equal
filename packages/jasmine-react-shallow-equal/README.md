# `jasmine-react-shallow-equal`
> Unit test against inadvertent performance problems.

Provides a `toShallowEqual` matcher for `jasmine`. This matcher can aid in writing performant code as it allows you to write unit tests which [ensure that `shallowEqual` always returns `true` when the underlying values tested have not changed](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f).

## Usage

The tests give examples of how to use this to test [`mapStateToProps`](./src/__tests__/mapStateToProps.js) and [higher-order components (HOCs)](./src/__tests__/HOC.js).

## Install

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
