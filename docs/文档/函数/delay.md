# delay

可模拟异步操作的延迟执行函数。

## 语法

```ts
delay(time: number): Promise
```

## 参数

`delay(time: number)` ，要延迟执行的时间，单位为毫秒(ms)。

### 返回值

返回一个 `PromiseState` 为 `fulfilled` 的 `Promise` 对象。

## 举例

```jsx
import React, { useState, useCallback } from 'react'
import { delay } from '@cjy0208/tools'

export default () => {
  const [num, setNum] = useState(0)
  const [disabled, setDisabled] = useState(false)

  const plus = useCallback(async () => {
    setDisabled(true)
    await delay(2000)
    setNum(num + 1)
    setDisabled(false)
  }, [num, disabled])

  return (
    <>
      <h1>数字num：{num}</h1>
      <button onClick={plus} disabled={disabled}>
        点击按钮2秒后数字才会变化
      </button>
    </>
  )
}
```
