// @flow

import shallowEqual from './shallowEqual'
import ensureInternalPropsAreShallowEqual from './ensureInternalPropsAreShallowEqual'
import createCompareWithShallowEqual, {
  makeLazyErrorMessageCreator
} from './createCompareWithShallowEqual'

export {
  shallowEqual,
  ensureInternalPropsAreShallowEqual,
  createCompareWithShallowEqual,
  makeLazyErrorMessageCreator
}
