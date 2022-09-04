# isBoolean

判断是否为 Boolean 类型。

## 语法

```ts
isBoolean: (value: any) => boolean
```

## 参数

- value ，要判断的数据

## 返回值

- `true` ，是 Boolean 类型
- `false` ，不是 Boolean 类型

## 举例

```jsx
import React from 'react'
import { isBoolean } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isBoolean(true)`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isBoolean(true), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isBoolean(null)`}
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isBoolean(null), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isBoolean("true")`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isBoolean('true'), null, 1)}
      </span>
      <br />
    </>
  )
}
```
