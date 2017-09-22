# `jest-react-shallow-equal`
> Unit test against inadvertent performance problems.

Provides a `toShallowEqual` matcher for `jest`. This matcher can aid in writing performant code as it allows you to write unit tests which [ensure that `shallowEqual` always returns `true` when the underlying values tested have not changed](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f).

## Usage

The tests give examples of how to use this to test [`mapStateToProps`](./src/__tests__/mapStateToProps.js) and [higher-order components (HOCs)](./src/__tests__/HOC.js).

## Install

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
