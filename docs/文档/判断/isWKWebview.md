# isWKWebview

判断是否为 WKWebview 环境。

## 语法

```ts
isWKWebview: () => boolean
```

## 参数

无

## 返回值

- `true` 是 WKWebview 环境
- `false` 不是 WKWebview 环境

## 举例

```jsx
import React from 'react'
import { isWKWebview } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isWKWebview()`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isWKWebview(), null, 1)}
      </span>
      <br />
    </>
  )
}
```
