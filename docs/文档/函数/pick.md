# pick

过滤对象属性，挑选出一个对象中的指定属性。

## 语法

```ts
pick: (obj: Object, keys?: any[]) => Object
```

## 参数

- obj 数据源对象
- keys 多个属性（字符串数组）或者单个属性（字符串）

## 返回值

- 新对象，内含指定属性和它的值

## 举例

```js
import { pick } from '@cjy0208/tools'

const obj = {
  id: 1,
  name: 'Tom',
  age: 18,
  gender: 'man',
}

// 取指定的单个属性值
console.log(pick(obj)) // {id: 1, name: "Tom", age: 18, gender: "man"}
console.log(pick(obj, 'id')) // {id: 1}
console.log(pick(obj, 'name')) // {name: "Tom"}
console.log(pick(obj, 'age')) // {age: 18}
console.log(pick(obj, 'gender')) // {gender: "man"}

// 取指定的多个属性值
console.log(pick(obj, 'id', 'name')) // {id: 1} ，错误示范，要取多个属性第二个参数请用数组
console.log(pick(obj, ['id', 'name'])) // {id: 1, name: "Tom"}
```

```jsx
import React from 'react'
import { pick } from '@cjy0208/tools'

const obj = {
  id: 1,
  name: 'Tom',
  age: 18,
  gender: 'man',
}

export default () => {
  return (
    <>
      <p>{`const obj = { id: 1, name: 'Tom', age: 18, gender: 'man'}`}</p>
      <h1>取指定的单个属性值</h1>
      <div>
        <span style={{ color: '#DD4A68' }}>pick(obj)</span> 的结果为：
        <pre style={{ color: '#690' }}>
          {JSON.stringify(pick(obj), null, 2)}
        </pre>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>pick(obj, 'id')</span> 的结果为：
        <pre style={{ color: '#690' }}>
          {JSON.stringify(pick(obj, 'id'), '', 2)}
        </pre>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>pick(obj, 'name')</span> 的结果为：
        <pre style={{ color: '#690' }}>
          {JSON.stringify(pick(obj, 'name'), '', 2)}
        </pre>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>pick(obj, 'age')</span> 的结果为：
        <pre style={{ color: '#690' }}>
          {JSON.stringify(pick(obj, 'age'), '', 2)}
        </pre>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>pick(obj, 'gender')</span> 的结果为：
        <pre style={{ color: '#690' }}>
          {JSON.stringify(pick(obj, 'gender'), '', 2)}
        </pre>
      </div>

      <h1>取指定的多个属性值</h1>
      <div>
        <div>// 错误示范，要取多个属性第二个参数请用数组</div>
        <span style={{ color: '#DD4A68' }}>pick(obj, 'id', 'name')</span> 的结果为：
        <pre style={{ color: '#690' }}>
          {JSON.stringify(pick(obj, 'id', 'name'), '', 2)}
        </pre>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>pick(obj, ['id', 'name'])</span>{' '}
        的结果为：
        <pre style={{ color: '#690' }}>
          {JSON.stringify(pick(obj, ['id', 'name']), '', 2)}
        </pre>
      </div>
    </>
  )
}
```
