# debounce

防抖函数。触发高频事件后 n 毫秒内函数只会执行一次，如果 n 毫秒内高频事件再次被触发，则重新计算时间。

### 语法

```ts
declare type AnyFunction = (...args: any[]) => any
/**
 * [防抖]
 * @param {Function} func 执行函数
 * @param {Number} wait 多少毫秒后运行一次
 */
declare const debounce: <T extends AnyFunction>(
  func: T,
  wait?: number
) => (...args: any[]) => void | ReturnType<T>
```

### 参数

- func 执行函数
- wait 多久后运行，单位为毫秒(ms)

### 返回值

- 返回新的 debounced（防抖动）函数。

### 举例

```jsx
import React, { useState } from 'react'
import { debounce } from '@cjy0208/tools'

const debounceFunc = debounce((plus) => {
  plus()
}, 2000)

export default () => {
  const [num, setNum] = useState(0)

  return (
    <>
      <h1>num: {num}</h1>
      <button onClick={() => debounceFunc(() => setNum(num + 1))}>
        哪怕狂按按钮，也只在最后一次点击的 2s 后才执行一次加1
      </button>
    </>
  )
}
```
