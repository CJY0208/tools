# isNaN

判断是否为 NaN 。

## 语法

```ts
isNaN: (value: any) => boolean
```

## 参数

- value ，要判断的数据

## 返回值

- `true` 是 NaN 类型
- `false` 不是 NaN 类型

## 举例

```jsx
import React from 'react'
import { isNaN } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isNaN(NaN)`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isNaN(NaN), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isNaN(0)`}
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isNaN(0), null, 1)}
      </span>
      <br />
    </>
  )
}
```
