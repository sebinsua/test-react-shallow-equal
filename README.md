# `test-react-shallow-equal`
> Unit test against inadvertent performance problems.

## Install

```sh
npm install --save-dev test-react-shallow-equal
```

## Usage

### Jasmine

The `jasmine.addMatchers` method must be within a spec or a `beforeEach`, `beforeAll`, etc.

```js
import { jasmineShallowEqualMatcher } from 'test-react-shallow-equal'

describe('some suite', () => {
  jasmine.addMatchers(jasmieShallowEqualMatcher)

  it('some test', () => {
    // ...
  })

})
```

### Jest

```js
import { jestShallowEqualMatcher } from 'test-react-shallow-equal'

expect.extend(jestShallowEqualMatcher)

test('should x when y', () => {
  // ...
})
```
