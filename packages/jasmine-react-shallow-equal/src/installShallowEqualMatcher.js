// @flow

import { createCompareWithShallowEqual } from 'test-react-shallow-equal'

const compareWithShallowEqual = createCompareWithShallowEqual({ isLazy: false })

const shallowEqualMatcher = {
  toShallowEqual() {
    return {
      compare(actual: mixed, expected: mixed) {
        return compareWithShallowEqual(actual, expected)
      },
      negativeCompare(actual: mixed, expected: mixed) {
        const comparison = compareWithShallowEqual(actual, expected, true)
        return Object.assign({}, comparison, { pass: !comparison.pass })
      }
    }
  }
}

const installShallowEqualMatcher = () => {
  jasmine.addMatchers(shallowEqualMatcher)
}

export default installShallowEqualMatcher
