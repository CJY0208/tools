# storage

storage 存取相关函数的封装。

## 语法

```ts
const get: Function
const set: Function
const remove: Function
const getSession: Function
const setSession: Function
const removeSession: Function

export default {
  get: get,
  set: set,
  remove: remove,
  getSession: getSession,
  setSession: setSession,
  removeSession: removeSession,
}
```

## storage 对象里的属性

- get(key) ，从 `localStorage` 中通过 key 获取到数据
- set(key, value) ，设置 `localStorage` 中 key 数据为 value
- remove(key) ，移除 `localStorage` 中的数据
- getSession(key) ，从 `sessionStorage` 中通过 key 获取到数据
- setSession(key, value) ，设置 `sessionStorage` 中 key 数据为 value
- removeSession(key) ，移除 `sessionStorage` 中的数据

## 举例

```jsx
import React, { useState } from 'react'
import { storage } from '@cjy0208/tools'

const COUNT_KEY = 'count'

export default () => {
  const [count, setCount] = useState(0)

  function setLocal() {
    storage.set(COUNT_KEY, count)
    alert('已保存到 localStorage 中')
  }

  function setSession() {
    storage.setSession(COUNT_KEY, count)
    alert('已保存到 sessionStorage 中')
  }

  function removeLocal() {
    storage.remove(COUNT_KEY)
    alert('已移除 localStorage 的 count')
  }

  function removeSession() {
    storage.removeSession(COUNT_KEY)
    alert('已移除 sessionStorage 的 count')
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>点击加1</button>
      <h1>count: {count}</h1>

      <p>
        <button onClick={setLocal}>
          点击将当前 count 保存到 localStorage 中
        </button>

        <button onClick={setSession} style={{ marginLeft: '10px' }}>
          点击将当前 count 保存到 sessionStorage 中
        </button>
      </p>
      <p>
        <button onClick={removeLocal}>移除 localStorage 的 count</button>

        <button onClick={removeSession} style={{ marginLeft: '10px' }}>
          移除 sessionStorage 的 count
        </button>
      </p>
    </>
  )
}
```
