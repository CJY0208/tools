# isError

判断是否为 Error 类型。

## 语法

```ts
isError: (value: any) => boolean
```

## 参数

- value ，要判断的数据

## 返回值

- `true` 是 `Error` 类型
- `false` 不是 `Error` 类型

## 举例

```jsx
import React from 'react'
import { isError } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isError(Error("err"))`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isError(Error('err')), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isError("err")`}
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isError('err'), null, 1)}
      </span>
      <br />
    </>
  )
}
```
