// @flow

const zip = (a1: Array<mixed>, a2: Array<mixed>): Array<[mixed, mixed]> =>
  a1.map((x, i) => [x, a2[i]])

export default zip
