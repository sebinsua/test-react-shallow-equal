import { ShallowWrapper } from 'enzyme';

export type ErrorInfo = { type: string, error: Error };

export function ensureInternalPropsAreShallowEqual<P, S>(
  firstRender: ShallowWrapper<P, S>,
  secondRender: ShallowWrapper<P, S>,
  selectorLevel?: string
): ReadonlyArray<ErrorInfo>;