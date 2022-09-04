# first

取首个值，可用于对象或数组。

## 语法

```ts
const first: <T>(value: any[] | Object) => T
```

## 参数

- value 源集合

## 返回值

- 如果 `value 源集合` 为数组，返回数组的第一个元素。
- 如果 `value 源集合` 为对象，返回对象的第一个属性的值。

## 举例

```javascript
const a = [1, 2, 3, 4]

first(a) // 1
```

```jsx
import React from 'react'
import { first } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <p>const arr = [1, 2, 3, 4]</p>
      <div>
        <span style={{ color: '#DD4A68' }}>first(arr)</span> 的结果为：
        <span style={{ color: '#690' }}>{first([1, 2, 3, 4])}</span>
      </div>
      <br />
      <p>{`const obj = { a: 1, b: 2 }`}</p>
      <div>
        <span style={{ color: '#DD4A68' }}>first(obj)</span> 的结果为：
        <span style={{ color: '#690' }}>{first({ a: 1, b: 2 })}</span>
      </div>
      <br />
      <p>{`const obj = { name: 'Amy', age: 18 }`}</p>
      <div>
        <span style={{ color: '#DD4A68' }}>first(obj)</span> 的结果为：
        <span style={{ color: '#690' }}>{first({ name: 'Amy', age: 18 })}</span>
      </div>
    </>
  )
}
```
