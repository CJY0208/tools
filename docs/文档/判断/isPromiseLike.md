# isPromiseLike

判断是否为 Promise 对象。

## 语法

```ts
isPromiseLike: (value: any) => boolean
```

## 参数

- value ，要判断的数据

## 返回值

- `true` 是 Promise 对象
- `false` 不是 Promise 对象

## 举例

```jsx
import React from 'react'
import { isPromiseLike } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isPromiseLike({ a: 1 })`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isPromiseLike({ a: 1 }), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isPromiseLike(new Promise((resolve) => resolve(1)))`}
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(
          isPromiseLike(new Promise((resolve) => resolve(1))),
          null,
          1
        )}
      </span>
      <br />
    </>
  )
}
```
