/*
 * TODO: Currently the triple-slash references are not working.
 * <reference types="jasmine" />
 * <reference types="enzyme" />
 */

declare namespace jasmine {
  interface Matchers {
    toShallowEqual(expected: any): boolean;
  }
}

export declare const jasmineShallowEqualMatcher: any; // jasmine.CustomMatcherFactories

export type ErrorInfo = { type: string, error: Error };

export function ensureInternalPropsAreShallowEqual(
  firstRender: any, // enzyme.ShallowWrapper<any, any>
  secondRender: any, // enzyme.ShallowWrapper<any, any>
  selectorLevel?: string
): ReadonlyArray<ErrorInfo>;
