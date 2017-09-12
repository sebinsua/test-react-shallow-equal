import shallowEqualMatcher from '../matchers/jest'

expect.extend(shallowEqualMatcher)

test('should match when mapStateToProps *is not* shallow equal', () => {
  const invalidMapStateToProps = _ => ({
    arr: [],
    obj: {},
    fn: () => undefined
  })

  expect(invalidMapStateToProps({})).not.toShallowEqual(
    invalidMapStateToProps({})
  )
})

test('should match when mapStateToProps *is* shallow equal', () => {
  const arr = []
  const obj = {}
  const fn = () => undefined

  const validMapStateToProps = _ => ({
    arr,
    obj,
    fn
  })

  expect(validMapStateToProps({})).toShallowEqual(validMapStateToProps({}))
})
