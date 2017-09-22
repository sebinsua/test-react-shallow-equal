import shallowEqual from './shallowEqual'

const stringify = v => JSON.stringify(v)

export const makeLazyErrorMessageCreator = (
  { printExpected = stringify, printActual = stringify } = {}
) => {
  const createShallowEqualAssertionErrorMessage = ({
    pass,
    actual,
    expected,
    isNot = false
  }) => {
    if (!isNot) {
      return () =>
        `Expected value to be shallowEqual:\n` +
        `${printActual(actual)}\n` +
        `Received:\n` +
        `${printExpected(expected)}`
    } else {
      return () =>
        `Expected value to not be shallowEqual:\n` +
        `${printActual(actual)}\n` +
        `Received:\n` +
        `${printExpected(expected)}`
    }

    return undefined
  }

  return createShallowEqualAssertionErrorMessage
}

const createCompareWithShallowEqual = (
  { createLazyErrorMessage = makeLazyErrorMessageCreator(), isLazy = true } = {}
) => {
  return (actual, expected, isNot = false) => {
    const isShallowEqual = shallowEqual(actual, expected)
    const pass = isShallowEqual
    const lazyMessage = createLazyErrorMessage({
      pass,
      actual,
      expected,
      isNot
    })

    return {
      actual,
      expected,
      pass,
      message: isLazy ? lazyMessage : lazyMessage()
    }
  }
}

export default createCompareWithShallowEqual
