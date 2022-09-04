# ScrollListener

滚动监听。详情查看：[CJY0208/tiny-scroll-listener](https://github.com/CJY0208/tiny-scroll-listener)

## 语法

```ts
export interface DistanceEventType {
  distance: number | Function
  onGoingIn?: Function
  onGoningOut: Function
  dynamic?: boolean
}
export interface ScrollListenerConfig {
  element: HTMLBaseElement
  scrollHandler?: Function
  getScrollDistance?: Function
  distanceToReachEnd?: number
  onEndReached?: Function
  distanceEvents?: DistanceEventType[]
  direction?: 'vertical' | 'horizontal'
}
export default class ScrollListener {
  config: ScrollListenerConfig
  getScrollDistance: Function
  constructor(config: ScrollListenerConfig)
  destroy: () => any
  init(): this
  getEndReachedEvent(): {
    dynamic: boolean
    distance: (() => number) | (() => number)
    onGoingOut: () => void
  }
  dynamicEvents: any[]
  genDynamicEvents(): void
  currentStaticEvent: any
  staticEvents: any[]
  genStaticEvents(): void
  walkEvent: (event: any, scrollDistance: any) => boolean
  walkStaticEvent: ({
    direction,
    scrollDistance,
  }: {
    direction: any
    scrollDistance: any
  }) => void
  walkDynamicEvents: ({
    direction,
    scrollDistance,
  }: {
    direction: any
    scrollDistance: any
  }) => void
}
```

## 参数

- config: ScrollListenerConfig，符合语法的配置对象。

## 返回值

- ScrollListener 的实例

## 举例

```jsx
import React, { useState, useRef, useEffect } from 'react'
import { ScrollListener, get, clamp } from '@cjy0208/tools'

const scrollView = useRef()
const anchors = useRef({})

const tabs = [1, 2, 3, 4]
const text = [
  new Array(24).fill('111111111111'),
  new Array(24).fill('22222'),
  new Array(24).fill('3333333333'),
  new Array(24).fill('44444'),
]

function setAnchor(name) {
  return (dom) => {
    if (dom) {
      // dom.style.borderTop = 'solid 1px red'
      anchors.current[name] = dom
    }
  }
}

export default () => {
  const [distanceText, setDistanceText] = useState(1)

  useEffect(() => {
    new ScrollListener({
      // 滚动容器，需设置 overflow: scroll/auto;
      element: scrollView.current,
      distanceEvents: tabs.map((tab, idx) => ({
        dynamic: true,
        distance: () => clamp(get(anchors.current[tab], 'offsetTop', 0), 0),
        onGoingIn() {
          setDistanceText(tab - 1 > 1 ? tab - 1 : 1)
        },
        onGoingOut() {
          setDistanceText(tab)
        },
      })),
    })
  }, [])
  return (
    <>
      <p>当前在界面：{distanceText}</p>
      <div
        ref={scrollView}
        style={{
          position: 'relative',
          border: '1px solid #C8E1FF',
          background: '#F1F8FF',
          height: '500px',
          width: '300px',
          overflow: 'auto',
        }}
      >
        {text.map((arr, arrIdx) => (
          <div key={arrIdx} ref={setAnchor(arrIdx + 1)}>
            {arr.map((text, textIdx) => (
              <div key={textIdx}>{text}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
```
