import isFunction from './isFunction'
import debounce, { AnyFunction } from './debounce'

/**
 * [节流]
 * @param {Function} func 执行函数
 * @param {Number} wait 多少毫秒内运行一次
 */

const throttle = <T extends AnyFunction>(func: T, wait: number = 16): T => {
  let locked = false

  const unlock = () => {
    locked = false
  }

  const debouncedCall = debounce<AnyFunction>((func) => {
    if (isFunction(func)) {
      func()
    }
  }, wait)

  return (function (...args: Parameters<T>): ReturnType<T> | void {
    let invoked = false

    const invoke = () => {
      if (invoked) {
        // 如果本次已经执行过，则不再执行
        return
      }
      invoked = true
      func.apply(this, args)
    }

    debouncedCall(invoke) // 确保最后一次会执行

    if (locked) {
      return
    }

    locked = true
    invoke()
    setTimeout(unlock, wait)
  } as unknown) as T
}

export default throttle
