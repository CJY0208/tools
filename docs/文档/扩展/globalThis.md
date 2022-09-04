# globalThis

无需考虑环境，会自动返回全局对象。

在浏览器中，全局对象就是 `window` 对象。而在 `Node.js` 环境中，全局对象则叫 `global` 。

## 语法

```ts
globalThis: any
```

## 返回值

返回全局对象

## 举例

```jsx
import React from 'react'
import { globalThis } from '@cjy0208/tools'

console.log(globalThis)
export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        globalThis.innerHeight
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {globalThis.innerHeight}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        globalThis.innerWidth
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {globalThis.innerWidth}
      </span>
      <br />
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        globalThis.screen.availWidth
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {globalThis.screen.availWidth}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        globalThis.screen.availHeight
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {globalThis.screen.availHeight}
      </span>
      <br />
    </>
  )
}
```
