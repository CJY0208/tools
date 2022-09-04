# flatten

数组拍平。

## 语法

```ts
flatten: <T>(array: any[]) => T[];
```

## 参数

- 需要拍平的数组

## 返回值

- 拍平的数组

## 举例

```jsx
import React from 'react'
import { flatten } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        flatten([1, 2, 3, [1, 2, [1, 2, 3, 4], 3, 4], 4]
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(
          flatten([1, 2, 3, [1, 2, [1, 2, 3, 4], 3, 4], 4]),
          null,
          1
        )}
      </span>
      <br />
    </>
  )
}
```
