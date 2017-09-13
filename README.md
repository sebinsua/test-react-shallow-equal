# `test-react-shallow-equal`
> Unit test against inadvertent performance problems.

Provides a `toShallowEqual` matcher for `jest` and `jasmine`. This matcher can aid in writing performant code as it allows you to write unit tests which [ensure that `shallowEqual` always returns `true` when the underlying values tested have not changed](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f).

### WIP

This module is a WIP. There's a bit of work which still needs to be done.

- [ ] Write some tests which test `jasmine` support. Currently only `jest` support is tested directly.
- [ ] Split the logic out into three packages using `lerna` so that a `jasmine` user does not get the `jest` matchers.
- [ ] Fix the TypeScript typings.
- [ ] Complete the Flow typings.

## Usage

The `jest` tests give examples of how to use this to test [`mapStateToProps`](./src/__tests__/mapStateToProps.js), [higher-order components (HOCs)](./src/__tests__/HOC.js) and normal [component renders](./src/__tests__/Component.js).

## Install

```sh
npm install --save-dev test-react-shallow-equal
```

### Installing `jest` matchers

```js
import { jestShallowEqualMatcher } from 'test-react-shallow-equal'

expect.extend(jestShallowEqualMatcher)

test('should x when y', () => {
  // ...
})
```

### Installing `jasmine` matchers

The `jasmine.addMatchers` method must be within a spec or a `beforeEach`, `beforeAll`, etc, and must be run before testing code.

```js
import { jasmineShallowEqualMatcher } from 'test-react-shallow-equal'

describe('some suite', () => {
  beforeAll(() => jasmine.addMatchers(jasmineShallowEqualMatcher))

  it('some test', () => {
    // ...
  })
})
```
