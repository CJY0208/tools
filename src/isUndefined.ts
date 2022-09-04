const isUndefined = (value: any): value is undefined =>
  typeof value === 'undefined'

export default isUndefined
