# isAndroid

判断是否安卓环境。

### 语法

```ts
isAndroid: () => boolean
```

## 参数

空

## 返回值

- `true` 为安卓环境
- `false` 不为安卓环境

## 举例

```jsx
import React from 'react'
import { isAndroid } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isAndroid()`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isAndroid(), null, 1)}
      </span>
      <br />
    </>
  )
}
```
