export type AnyFunction = (...args: any[]) => any

/**
 * [防抖]
 * @param {Function} func 执行函数
 * @param {Number} wait 多少毫秒后运行一次
 */
const debounce = <T extends AnyFunction>(func: T, wait: number = 16): T => {
  let timeout: any

  return (function (...args: Parameters<T>): ReturnType<T> | void {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, wait)

    return timeout
  } as unknown) as T
}

export default debounce
