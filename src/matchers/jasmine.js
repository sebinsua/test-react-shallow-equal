// @flow

import createCompareWithShallowEqual from './createCompareWithShallowEqual'

const compareWithShallowEqual = createCompareWithShallowEqual({ isLazy: false })

const shallowEqualMatcher = {
  toShallowEqual() {
    return {
      compare(actual: mixed, expected: mixed) {
        return compareWithShallowEqual(actual, expected)
      },
      negativeCompare(actual: mixed, expected: mixed) {
        return compareWithShallowEqual(actual, expected, true)
      }
    }
  }
}

export default shallowEqualMatcher
