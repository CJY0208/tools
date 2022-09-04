# clamp

数值范围限定。

## 语法

```ts
clamp(value: number, min: number, max?: number): number;
```

## 参数

- number 被限制的值
- min 最小值(默认是 `Number.MIN_VALUE` )
- max 最大值 (默认是 `Number.MAX_VALUE` )

## 返回值

- 如果 number 比 min 小，则返回 min。
- 如果 number 比 max 大，则返回 max。
- 如果 number 比 min 大且比 max 小，则返回 number。

## 举例

```jsx
import React from 'react'
import { clamp } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        clamp(10, 20)
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {clamp(10, 20)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        clamp(10, 20, 30)
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {clamp(10, 20, 30)}
      </span>
      <br />
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        clamp(40, 20, 30)
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {clamp(40, 20, 30)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        clamp(25, 20, 30)
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {clamp(25, 20, 30)}
      </span>
      <br />
    </>
  )
}
```
