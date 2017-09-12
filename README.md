# `test-react-shallow-equals`
> Unit test against inadvertent performance problems.

## Install

```sh
npm install --save-dev test-react-shallow-equals
```

## Usage

### Jasmine

The `jasmine.addMatchers` method must be within a spec or a `beforeEach`, `beforeAll`, etc.

```js
import { jasmineShallowEqualMatcher } from 'test-react-shallow-equals'

describe('some suite', () => {
  jasmine.addMatchers(customMatchers)

  it('some test', () => {
    // ...
  })

})
```

### Jest

```js
import { jestShallowEqualMatcher } from 'test-react-shallow-equals'

expect.extend(jestShallowEqualMatcher)

test('should x when y', () => {
  // ...
})
```
