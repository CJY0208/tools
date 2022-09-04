# isDesktop

判断是否为桌面应用。

## 语法

```ts
isDesktop: () => boolean
```

## 参数

无

## 返回值

- `true` 是桌面应用
- `false` 不是桌面应用

## 举例

```jsx
import React from 'react'
import { isDesktop } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isDesktop()`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isDesktop(), null, 1)}
      </span>
      <br />
    </>
  )
}
```
