# memoize

记忆函数，缓存结果。

如果已经被缓存过，下次再调用直接取缓存的结果，不会再执行函数中间内容。

## 语法

```
CachedFunction extends Function {
  cache: Map<any, any>;
}
memoize: (func: (value: void)) => CachedFunction;
```

## 参数

- func 执行的函数

## 返回值

- func 执行的函数的结果

## 使用方法

```js
const memoizeFunc = memoize(function plus(param) {
  // 根据 param 来判断有没缓存, 第一次会把 return 的结果缓存下来
  console.log(param, ':first')
  return param + 1 // 将会被缓存
})

console.log(memoizeFunc(1))
```

## 举例

```jsx
import React, { useState } from 'react'
import { memoize, delay } from '@cjy0208/tools'

const memoizeFunc = memoize(async (name) => {
  console.log('It’s the first time I met.')
  console.log('Nice to meet you!')
  await delay(1000)
  console.log('Sorry to have to wait a while.')
  console.log(`Hello ${name}!`)
  return `Hello ${name}!`
})

export default () => {
  const [message, setMessage] = useState('')
  const [disabled, setDisabled] = useState(false)

  const greet = async (name) => {
    setDisabled(true)
    const msg = await memoizeFunc(name)
    setMessage(msg)
    setDisabled(false)
  }

  return (
    <>
      <h1>新招呼：{message}</h1>
      <button onClick={() => greet('Peter')} disabled={disabled}>
        点击 Peter 要去打招呼
      </button>
      <button onClick={() => greet('Tom')} disabled={disabled}>
        点击 Tom 要去打招呼
      </button>
      <button onClick={() => greet('Amy')} disabled={disabled}>
        点击 Amy 要去打招呼
      </button>
      <p>
        PS: 第一次打招呼需要等待1s，之后不需要等待。可打开控制台看输出信息。
      </p>
    </>
  )
}
```
