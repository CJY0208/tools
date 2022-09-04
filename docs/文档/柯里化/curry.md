# curry

curry 柯里化。

## 语法

```ts
curry: <T>(fn: Function) => (...args: any[]) => T
```

## 参数

- 处理传入参数的函数
- 需要处理的参数

## 返回值

- 传入要处理参数的函数后，会返回一个新的 curry 函数，供后续调用
- 最终会返回处理函数的返回结果

## 举例

```jsx
import React from 'react'
import { curry } from '@cjy0208/tools'

function add(a, b, c, d) {
  return a + b + c + d
}

export default () => {
  return (
    <>
      <pre
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`function add(a, b, c, d) {`}
        <br />
        {`  return a + b + c + d;`}
        <br />
        {`}`}
      </pre>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        curry(add)(1, 2)(3, 4)
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {curry(add)(1, 2)(3, 4)}
      </span>
      <br />
    </>
  )
}
```
