# isObject

判断是否为 Object 类型。

## 语法

```ts
isObject: (value: any) => boolean
```

## 参数

- value ，要判断的数据

## 返回值

- `true` 是 Object 类型
- `false` 不是 Object 类型

## 举例

```jsx
import React from 'react'
import { isObject } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isObject([1])`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isObject([1]), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isObject({ a: 1 })`}
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isObject({ a: 1 }), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isObject({})`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isObject({}), null, 1)}
      </span>
      <br />
    </>
  )
}
```
