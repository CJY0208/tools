# EventBus

一种事件发布订阅模式。通过异步处理将事件的发起和处理分割开来实现解耦合，高性能。

## 语法

```ts
class EventBus {
  private listeners
  private getEventMap
  on: (
    event: string,
    listener: Function,
    {
      once,
    }?: {
      once?: boolean
    }
  ) => this
  once: (event: string, listener: Function, config?: {}) => this
  off: (event: string, listener: Function) => this
  emit: (event: string, ...args: any[]) => void
}
```

## 实例属性

- listeners 总的事件对象，管理所有的事件。
- getEventMap(event) 根据事件名 event 来获得对应的 `Map` 对象。
- on(event, callback) 监听发出的事件 event 。
- once(event, callback) 监听第一次发出的事件。
- off(event, listener) 删除某个监听器里的事件 event 。
- emit(event) 发送事件。

## 返回值

- EventBus 的实例

## 举例

```jsx
import React, { useState } from 'react'
import { EventBus } from '@cjy0208/tools'

const eventBus = new EventBus()

function Test1() {
  const [num, setNum] = useState(0)

  function onClick() {
    const count = num + 1
    eventBus.emit('clickNum', count)
    setNum(count)
  }

  return (
    <>
      <p>大家好我是组件一！点击下面的按钮将会统计点击的次数。</p>
      <button onClick={onClick}>点击统计点击的次数：{num}</button>
    </>
  )
}

function Test2() {
  const [count, setCount] = useState(0)
  const [onceCount, setOnceCount] = useState(0)

  eventBus.on('clickNum', (num) => setCount(num))
  // eventBus.once("clickNum", (num) => {
  //   console.log(num);
  //   setOnceCount(num);
  // });

  function onClick() {
    eventBus.off('clickNum')
    alert('已经移除')
  }

  return (
    // <div>第一次统计已经点击的次数：{onceCount}</div>
    <>
      <p>大家好我是组件二！我来接收事件</p>
      <div>累计统计已经点击的次数：{count}</div>
      <br />
      <p>点击下面按钮将移除次数统计事件：</p>
      <button onClick={onClick}>off 移除</button>
    </>
  )
}

export default function App() {
  return (
    <>
      <h1>组件一</h1>
      <Test1 />
      <h1>组件二</h1>
      <Test2 />
    </>
  )
}
```
