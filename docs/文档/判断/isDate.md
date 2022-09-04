# isDate

判断是否为 Date 类型。

## 语法

```ts
isDate: (value: any) => boolean
```

## 参数

- (value: any) => boolean;

## 返回值

- `true` 是 Date 类型
- `false` 不是 Date 类型

## 举例

```jsx
import React from 'react'
import { isDate } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isDate(new Date())`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isDate(new Date()), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isDate("2020-12-16")`}
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isDate('2020-12-16'), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isDate(new Date().getTime())`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isDate(new Date().getTime()), null, 1)}
      </span>
      <br />
    </>
  )
}
```
