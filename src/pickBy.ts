import run from './run'
import isExist from './isExist'

const pickBy = (
  obj: Object,
  predicate: (...args: any[]) => boolean = (val) => isExist(val)
): Object =>
  Object.entries(obj)
    .filter((entries) => run(predicate, undefined, entries[1], entries[0]))
    .reduce(
      (res, entries) => ({
        ...res,
        [entries[0]]: entries[1],
      }),
      {}
    )

export default pickBy
