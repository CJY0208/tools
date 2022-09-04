# promiseGuess

猜测是否为异步函数，用来智能处理 Promise 类型返回值。

如果第一个参数，是一个异步函数，将得到 promise 类型返回值，按约定 resolve 最终值。

如果第一个参数，不是一个异步函数，将直接调用函数，返回最终值。

## 语法

```ts
promiseGuess: <T>(executor: Function, valuer: Function) => (...args: any[]) => T
```

## 参数

- executor 函数，执行过程获取。可以是异步函数也可以不是异步函数。
- valuer 函数，值处理过程。

## 返回值

- executor 为异步函数，返回值为异步函数。
- executor 不为异步函数，返回值为普通函数。

## 举例

```javascript
import React, { useState } from 'react'
import { promiseGuess, delay } from '@cjy0208/tools'

const person = {
  name: 'Amy',
  age: 18,
}

const asyncGreet = promiseGuess(
  async ({ name, age }) => {
    console.log(name, age) // Amy 18
    await delay(1000)
    return name
  },
  (error, value, args) => {
    console.log(error, value, args) // [null, "Amy", {name: "Amy", age: 18}]
    return `Hello.I'm ${value}`
  }
)

const greet = promiseGuess(
  ({ name, age }) => {
    console.log(name, age) // Amy 18
    return name
  },
  (error, value, args) => {
    console.log(error, value, args) // [null, "Amy", {name: "Amy", age: 18}]
    return `Hello.I'm ${value}`
  }
)

console.log(asyncGreet(person)) // Promise{<pending>}
console.log(greet(person)) // Hello.I'm Amy
```

```jsx
import React, { useState, useEffect } from 'react'
import { promiseGuess, delay } from '@cjy0208/tools'

const person = {
  name: 'Amy',
  age: 18,
}

export default () => {
  const [result, setResult] = useState('')
  const [promiseResult, setPromiseResult] = useState('')

  const greet = promiseGuess(
    ({ name, age }) => {
      // console.log(name, age) // Amy 18
      return name
    },
    (error, value, args) => {
      // console.log(error, value, args) // [null, "Amy", {name: "Amy", age: 18}]
      const str = `Hello.I'm ${value}`
      setResult(str)
      return str
    }
  )

  const asyncGreet = promiseGuess(
    async ({ name, age }) => {
      // console.log(name, age) // Amy 18
      await delay(1000)
      return name
    },
    (error, value, args) => {
      // console.log(error, value, args)	// [null, "Amy", {name: "Amy", age: 18}]
      const str = `Hello.I'm ${value}`
      setPromiseResult(str)
      return str
    }
  )

  useEffect(() => {
    greet(person)
    asyncGreet(person)
  }, [])

  return (
    <>
      <div>
        <span style={{ color: '#DD4A68' }}>asyncGreet(person)</span> 的结果为：
        <pre style={{ color: '#690' }}>{promiseResult}</pre>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>greet(person)</span> 的结果为：
        <pre style={{ color: '#690' }}>{result}</pre>
      </div>
    </>
  )
}
```
