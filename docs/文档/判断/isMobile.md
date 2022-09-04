# isMobile

判断是否为移动端。

## 语法

```ts
isMobile: () => boolean
```

## 参数

无

## 返回值

- `true` 是移动端
- `false` 不是移动端

## 举例

```jsx
import React from 'react'
import { isMobile } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isMobile()`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isMobile(), null, 1)}
      </span>
      <br />
    </>
  )
}
```
