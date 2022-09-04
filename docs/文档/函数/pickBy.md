# pickBy

自定义选值函数。用于得到由数据源对象中所有符合的条件的键值对组成的新对象。

## 语法

```ts
const pickBy: (obj: Object, predicate?: (...args: any[]) => boolean) => Object
```

## 参数

- obj 数据源对象
- predicate 筛选函数，根据函数的返回值来选

## 返回值

- 包含了所有符合条件的键值对的对象

## 举例

```javascript
import React from 'react'
import { pickBy, isNumber } from '@cjy0208/tools'

const obj = {
  id: 1,
  name: 'Tom',
  age: 18,
  gender: 'man',
}

const predicateValue = (value, key) => {
  // console.log(`value:${value}, key:${key}`)
  return isNumber(value)
}

const predicateKey = (value, key) => {
  // console.log(`value:${value}, key:${key}`)
  return key.length > 2
}

// isNumber是判断是否为Number的函数，isNumber: (value: any) => boolean;
console.log(pickBy(obj, isNumber)) // {id: 1, age: 18}
console.log(pickBy(obj, predicateValue)) // {id: 1, age: 18}
console.log(pickBy(obj, predicateKey)) // {name: "Tom", age: 18, gender: "man"}
```

```jsx
import React from 'react'
import { pickBy, isNumber } from '@cjy0208/tools'

const obj = {
  id: 1,
  name: 'Tom',
  age: 18,
  gender: 'man',
}

const predicateValue = (value, key) => {
  // console.log(`value:${value}, key:${key}`)
  return isNumber(value)
}

const predicateKey = (value, key) => {
  // console.log(`value:${value}, key:${key}`)
  return key.length > 2
}

export default () => {
  return (
    <>
      <p>{`const obj = { id: 1, name: 'Tom', age: 18, gender: 'man'}`}</p>
      <h1>直接传入一个判断是否为Number的函数</h1>
      <div>
        <span style={{ color: '#DD4A68' }}>pickBy(obj, isNumber)</span>{' '}
        的结果为：
        <pre style={{ color: '#690' }}>
          {JSON.stringify(pickBy(obj, isNumber), null, 2)}
        </pre>
      </div>
      <h1>可以通过对象的所有 value 来筛选出符合条件的新对象</h1>
      <pre>
        {`const predicateValue = (value, key) => { return isNumber(value) }`}
      </pre>
      <div>
        <span style={{ color: '#DD4A68' }}>pickBy(obj, predicateValue)</span>{' '}
        的结果为：
        <pre style={{ color: '#690' }}>
          {JSON.stringify(pickBy(obj, predicateValue), null, 2)}
        </pre>
      </div>
      <h1>可以通过对象的所有 key 来筛选出符合条件的新对象</h1>
      <pre>
        {`const predicateKey = (value, key) => { return key.length > 2 }`}
      </pre>
      <div>
        <span style={{ color: '#DD4A68' }}>pickBy(obj, predicateKey)</span>{' '}
        的结果为：
        <pre style={{ color: '#690' }}>
          {JSON.stringify(pickBy(obj, predicateKey), null, 2)}
        </pre>
      </div>
    </>
  )
}
```
