# isNumber

判断是否为 Number 类型。

## 语法

```ts
isNumber: (value: any) => boolean
```

## 参数

- value ，要判断的数据

## 返回值

- `true` 是 Number 类型
- `false` 不是 Number 类型

## 举例

```javascript
isNumber(null) //false

isNumber(1) //true
```

```jsx
import React from 'react'
import { isNumber } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isNumber()`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isNumber(), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isNumber("1")`}
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isNumber('1'), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isNumber(1)`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isNumber(1), null, 1)}
      </span>
      <br />
    </>
  )
}
```
