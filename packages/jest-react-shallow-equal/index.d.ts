import { ensureInternalPropsAreShallowEqual } from 'test-react-shallow-equal'

declare namespace jest {
  interface Matchers<R> {
    toShallowEqual(expected: any): boolean;
  }
}

declare function installShallowEqualMatcher(): void;

export { ensureInternalPropsAreShallowEqual };
export default installShallowEqualMatcher;