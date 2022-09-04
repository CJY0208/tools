# isIOS

判断是否为 ios 平台。

## 语法

```ts
isIOS: () => boolean
```

## 参数

无

## 返回值

- `true` 是 ios 平台
- `false` 不是 ios 平台

## 举例

```jsx
import React from 'react'
import { isIOS } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isIOS()`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isIOS(), null, 1)}
      </span>
      <br />
    </>
  )
}
```
