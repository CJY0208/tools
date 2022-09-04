# isArray

判断是否为数组类型。

## 语法

```ts
isArray: (value: any) => boolean
```

## 参数

- value ，要判断的数据

## 返回值

- `true` ，是数组类型
- `false` ，不是数组类型

## 举例

```jsx
import React from 'react'
import { isArray } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isArray([1, 2, 3, 4])`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isArray([1, 2, 3, 4]), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isArray(null)`}
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isArray(null), null, 1)}
      </span>
      <br />
    </>
  )
}
```
