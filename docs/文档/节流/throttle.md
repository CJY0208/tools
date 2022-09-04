# throttle

规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。

### 语法

```
throttle: <T extends AnyFunction>(func: T, wait?: number) => (...args: any[]) => void | ReturnType<T>;
```

### 参数

- func 节流函数
- wait 规定多久可以执行一次，单位为毫秒(ms)

### 返回值

- 返回节流的函数。

### 举例

```jsx
import React, { useState } from 'react'
import { throttle } from '@cjy0208/tools'

const throttleFunc = throttle((plus) => {
  plus()
}, 5000)

export default () => {
  const [num, setNum] = useState(0)

  return (
    <>
      <h1>num: {num}</h1>
      <button onClick={() => throttleFunc(() => setNum(num + 1))}>
        5s里哪怕狂按按钮也只执行一次加1
      </button>
    </>
  )
}
```
