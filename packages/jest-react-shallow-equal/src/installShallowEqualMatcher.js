// @flow

import {
  createCompareWithShallowEqual,
  makeLazyErrorMessageCreator
} from 'test-react-shallow-equal'

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

const installShallowEqualMatcher = () => {
  expect.extend(shallowEqualMatcher)
}

export default installShallowEqualMatcher
