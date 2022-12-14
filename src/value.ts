import isUndefined from './isUndefined'
import run from './run'

const value = <T = any>(...values: any[]): T =>
  values.reduce(
    (value, nextValue) => (isUndefined(value) ? run(nextValue) : run(value)),
    undefined
  )

export default value
