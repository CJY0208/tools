# nextTick

nextTick 的客户端实现，用于延迟执行一段代码。

## 语法

```ts
nextTick: (func: (value: void) => void | PromiseLike<void>) => Promise<void>;
```

## 参数

- func 先执行的函数

## 返回值

- Promise 对象

## 举例

```jsx
import React, { useState } from 'react'
import { nextTick } from '@cjy0208/tools'

export default () => {
  const [greetStr, setGreetStr] = useState('')
  const [identity, setIdentity] = useState('')

  const outputIdentity = nextTick(() => {
    setGreetStr('您好！')
    return '程序猿！'
  })

  return (
    <>
      <p>{greetStr}</p>
      <button onClick={() => outputIdentity.then((res) => setIdentity(res))}>
        点击查询你的身份
      </button>
      <p>{identity}</p>
    </>
  )
}
```
