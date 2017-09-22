import installShallowEqualMatcher from '..'

describe('#mapStateToProps', () => {
  beforeAll(() => installShallowEqualMatcher())

  it('should match when it *is not* shallow equal', () => {
    const invalidMapStateToProps = _ => ({
      arr: [],
      obj: {},
      fn: () => undefined
    })

    expect(invalidMapStateToProps({})).not.toShallowEqual(
      invalidMapStateToProps({})
    )
  })

  it('should match when it *is* shallow equal', () => {
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
})
