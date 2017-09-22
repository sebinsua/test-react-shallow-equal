// @flow

import {
  shallowEqual,
  ensureInternalPropsAreShallowEqual
} from 'test-react-shallow-equal'
import installShallowEqualMatcher from './installShallowEqualMatcher'

export { shallowEqual, ensureInternalPropsAreShallowEqual }
export default installShallowEqualMatcher
