# SAS

[单咨询服务] Single Advisory Service 同一时刻对同一异步请求进行统一等待，不重复发起。

## 语法

```
SAS: <T>(query: () => Promise<T>) => () => Promise<T>;
```

## 参数

- query 异步查询函数，需要返回 Promise

## 返回值

- "上锁"了的新函数

## 举例

```jsx
import React, { useState } from 'react'
import { SAS, delay } from '@cjy0208/tools'

export default () => {
  const [count, setCount] = useState(0)

  function query() {
    return new Promise((resolve) => {
      // 做一些异步操作
      setTimeout(resolve, 3000, 'done')
    })
  }

  const sas = SAS(query)

  return (
    <>
      <p>count: {count}</p>
      <button
        onClick={async () => {
          await sas()
          setCount(count + 1)
        }}
      >
        点我加1，3秒内只请求一次
      </button>
    </>
  )
}
```
