import { ensureInternalPropsAreShallowEqual } from 'test-react-shallow-equal'

declare namespace jasmine {
  interface Matchers<T> {
    toShallowEqual(expected: any): boolean;
  }
}

declare function installShallowEqualMatcher(): void;

export { ensureInternalPropsAreShallowEqual };
export default installShallowEqualMatcher;
