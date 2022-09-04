# isNull

判断是否为 null 类型。

## 语法

```ts
isNull: (value: any) => boolean
```

## 参数

- value ，要判断的数据

## 返回值

- `true` 是 null 类型
- `false` 不是 null 类型

## 举例

```jsx
import React from 'react'
import { isNull } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isNull()`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isNull(), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isNull(null)`}
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isNull(null), null, 1)}
      </span>
      <br />
    </>
  )
}
```
