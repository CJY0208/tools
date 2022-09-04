# last

取末个值，可用于对象或数组。

## 语法

```ts
const last: <T>(value: any[] | Object) => T
```

## 参数

- value 源集合

## 返回值

- 如果 `value 源集合` 为数组，返回数组的最后一个元素。
- 如果 `value 源集合` 为对象，返回对象的最后一个属性的值。

## 举例

```javascript
last([1, 2, 3, 4, 5]) //5
```

```jsx
import React from 'react'
import { last } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <p>const arr = [1, 2, 3, 4]</p>
      <div>
        <span style={{ color: '#DD4A68' }}>last(arr)</span> 的结果为：
        <span style={{ color: '#690' }}>{last([1, 2, 3, 4])}</span>
      </div>
      <br />
      <p>{`const obj = { a: 1, b: 2 }`}</p>
      <div>
        <span style={{ color: '#DD4A68' }}>last(obj)</span> 的结果为：
        <span style={{ color: '#690' }}>{last({ a: 1, b: 2 })}</span>
      </div>
      <br />
      <p>{`const obj = { name: 'Amy', age: 18 }`}</p>
      <div>
        <span style={{ color: '#DD4A68' }}>last(obj)</span> 的结果为：
        <span style={{ color: '#690' }}>{last({ name: 'Amy', age: 18 })}</span>
      </div>
    </>
  )
}
```
