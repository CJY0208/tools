# isUndefined

判断是否为 undefined 类型。

## 语法

```ts
isUndefined: (value: any) => boolean
```

## 参数

- value ，要判断的数据

## 返回值

- `true` 是 NaN 类型
- `false` 不是 NaN 类型

## 举例

```jsx
import React from 'react'
import { isUndefined } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isUndefined()`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isUndefined(), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isUndefined(undefined)`}
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isUndefined(undefined), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isUndefined("")`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isUndefined(''), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isUndefined(null)`}
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isUndefined(null), null, 1)}
      </span>
      <br />
    </>
  )
}
```
