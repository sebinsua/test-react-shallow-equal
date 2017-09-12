// <reference types="jasmine" />
// <reference types="enzyme" />

declare module 'jasmine' {
    interface Matchers {
        toShallowEqual(expected: any): boolean;
    }
}

export declare const jasmineShallowEqualMatcher: jasmine.CustomMatcherFactories;

export type ErrorInfo = { type: string, error: Error };
export function ensureInternalPropsAreShallowEqual(
  firstRender: enzyme.ShallowWrapper<any, any>,
  secondRender: enzyme.ShallowWrapper<any, any>,
  selectorLevel?: string
): ReadonlyArray<ErrorInfo>;
