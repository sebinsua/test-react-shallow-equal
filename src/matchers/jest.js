// @flow

import createCompareWithShallowEqual, {
  makeLazyErrorMessageCreator
} from './createCompareWithShallowEqual'

const shallowEqualMatcher = {
  toShallowEqual(actual: mixed, expected: mixed) {
    const createLazyErrorMessage = makeLazyErrorMessageCreator({
      printExpected: this.utils.printExpected.bind(this),
      printActual: this.utils.printReceived.bind(this)
    })
    const compareWithShallowEqual = createCompareWithShallowEqual({
      createLazyErrorMessage,
      isLazy: true
    })

    return compareWithShallowEqual(actual, expected, this.isNot)
  }
}

export default shallowEqualMatcher
