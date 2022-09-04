# value

多层默认值（只在值为 undefined 情况下生效）。

## 语法

```ts
const value: <T>(...values: any[]) => T
```

## 参数

- values，能从中选取的默认值

## 返回值

## 举例

```javascript
var v1,
  v2,
  v3 = 'default'
console.log(v1) // undefined
console.log(v2) // undefined
console.log(v3) // "default"

value(v1, v2, v3) // "default"
value(v1, 0, v3) // 0

// 可传递执行函数
value(
  v1,
  () => {
    console.log('v1没有，尝试v2')
    return v2
  },
  () => {
    console.log('v2也没有，尝试v3')
    return v3
  }
) // default
```

```jsx
import React from 'react'
import { value, isUndefined } from '@cjy0208/tools'

var v1,
  v2,
  v3 = 'default'

const str = `value(
  v1,
  () => {
    console.log("v1没有，尝试v2");
    return v2;
  },
  () => {
    console.log("v2也没有，尝试v3");
    return v3;
  }
);`

export default () => {
  return (
    <>
      <h1>var v1, v2, v3 = 'default'</h1>
      <div>
        <span style={{ color: '#DD4A68' }}>value(v1, v2, v3)</span> 的结果为：
        <span style={{ color: '#690' }}>{value(v1, v2, v3)}</span>
      </div>
      <br />
      <div>
        <span style={{ color: '#DD4A68' }}>value(v1, 0, v3)</span> 的结果为：
        <span style={{ color: '#690' }}>{value(v1, 0, v3)}</span>
      </div>
      <br />
      <div>
        <pre style={{ color: '#DD4A68' }}>{str}</pre> 的结果为：
        <span style={{ color: '#690' }}>
          {value(
            v1,
            () => {
              console.log('v1没有，尝试v2')
              return v2
            },
            () => {
              console.log('v2也没有，尝试v3')
              return v3
            }
          )}
        </span>
      </div>
      <br />
    </>
  )
}
```
