import shallowEqual from './shallowEqual'
import ensureInternalPropsAreShallowEqual from './ensureInternalPropsAreShallowEqual'
import jestShallowEqualMatcher from './matchers/jest'
import jasmineShallowEqualMatcher from './matchers/jasmine'

export {
  shallowEqual,
  ensureInternalPropsAreShallowEqual,
  jestShallowEqualMatcher,
  jasmineShallowEqualMatcher
}
