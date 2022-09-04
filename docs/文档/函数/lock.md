# lock

给函数加锁：函数执行一次后自动锁定，除非解锁，否则不会再执行。

## 语法

```
lock(func: Function)
```

## 参数

- func 执行的函数

## 返回值

- 锁定的函数

## 常用子方法

### 1. isLocked()

查看是否已经锁定。

```js
import { lock } from '@cjy0208/tools'

const lockFunc = lock(function get(a1) {
  console.log(a1)
})

lockFunc.isLocked() // false
lockFunc(1) // 1
lockFunc.isLocked() // true
```

### 2. unlock()

解锁函数。

```js
import { lock } from '@cjy0208/tools'

const lockFunc = lock(function get(a1) {
  console.log(a1)
})

lockFunc(1) // 1
lockFunc(1) // 没执行，没输出
lockFun.unlock()
lockFunc(1) // 1
lockFunc(1) // 没执行，没输出
```

## 举例

```jsx
import React, { useState } from 'react'
import { lock } from '@cjy0208/tools'

const lockFunc = lock(function get(callback) {
  callback()
})

export default () => {
  const [num, setNum] = useState(0)
  const [isLocked, setIsLocked] = useState(false)

  return (
    <>
      <h1>num: {num}</h1>
      <div>
        <button
          onClick={() =>
            lockFunc(() => {
              setNum(num + 1)
            })
          }
        >
          点击加1
        </button>
        <button
          onClick={() =>
            lockFunc(() => {
              setNum(num + 2)
            })
          }
        >
          点击加2
        </button>
      </div>

      <p>PS: 执行了一次之后，会自动上锁，除非解锁，无法再执行</p>

      <div>
        <button
          onClick={() => {
            lockFunc.unlock()
            alert('解锁成功')
          }}
        >
          点击解锁函数
        </button>
      </div>

      <h1>是否已经锁定</h1>
      <button
        onClick={() => {
          setIsLocked(lockFunc.isLocked())
        }}
      >
        查看是否已经锁定：{isLocked.toString()}
      </button>
    </>
  )
}
```
