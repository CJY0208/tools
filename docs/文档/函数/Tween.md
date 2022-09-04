# Tween

缓动算法函数。可用于两个数字之间优雅的变化，也可用于各种缓动运动的动画。

## 详细 demo

[Tween Demo](https://cjy0208.github.io/webpack-multiple-pages/tweenDemo.html#/)

[使用该算法写的所有 Easing 示例](https://cjy0208.github.io/webpack-multiple-pages/tweenDemo.html#/Easing)

## 简陋举例

```jsx
import React, { useState, useRef } from 'react'
import { Tween, sample, easing } from '@cjy0208/tools'

const targetNum = 996

export default () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const [tweens] = useState(() => {
    // 变化曲线是ease
    const ease = sample(Object.keys(easing))

    const num1 = new Tween({
      from: 0,
      to: targetNum,
      duration: 1200,
      loop: false,
    })
      .on('update', (progress) => {
        setNum1(parseInt(progress))
      })
      .start()

    const num2 = new Tween({
      from: targetNum,
      to: 0,
      duration: 1200,
      loop: false,
    })
      .on('update', (progress) => {
        setNum2(parseInt(progress))
      })
      .start()

    return { num1, num2 }
  })
  const tween1 = tweens.num1
  const tween2 = tweens.num2

  return (
    <>
      <h1>
        {num1}、{num2}
      </h1>
      <button
        onClick={() => {
          tween1.restart()
          tween2.restart()
        }}
      >
        Restart
      </button>
    </>
  )
}
```

```jsx
import React, { useState, useRef } from 'react'
import { Tween, sample, easing } from '@cjy0208/tools'

export default () => {
  const progressRef = useRef(null)

  const [transform, setTransform] = useState({
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
  })

  const [tweens] = useState(() => {
    // 变化曲线是ease
    const ease = sample(Object.keys(easing))

    const x = new Tween({
      from: 0,
      to: 335,
      ease,
    })
    const y = new Tween({
      from: 0,
      to: -50,
      ease,
    })
    const scale = new Tween({
      from: 1,
      to: 2.5,
      ease,
    })
    const rotate = new Tween({
      from: 0,
      to: 360,
      ease,
    })

    const main = new Tween({
      from: 0,
      to: 1,
      duration: 1200,
      loop: true,
    })
      .on('update', (progress) => {
        setTransform({
          x: x.value(progress),
          y: y.value(progress),
          scale: scale.value(progress),
          rotate: rotate.value(progress),
        })

        if (progressRef && progressRef.current) {
          progressRef.current.value = progress * 100
        }
      })
      .start()

    return { main, x, y, scale, rotate }
  })

  const tween = tweens.main

  return (
    <>
      <input
        className="progress"
        ref={progressRef}
        type="range"
        defaultValue="0"
        min="0"
        max="100"
        onInput={(e) => {
          tween.stop()
          tween.progress(e.target.value / 100)
        }}
        onMouseUp={tween.start}
      />
      <span>Progress:{tween?.state?.progress}</span>

      <h1>可用于做动画的元素:</h1>
      <pre style={{ color: '#690' }}>
        {` 
          translateX(${transform.x}px)
          translateY(${transform.y}px)
          scale(${transform.scale})
          rotate(${transform.rotate}deg)
        `}
      </pre>

      <h1>可暂停、继续、重置、重新开始等:</h1>
      <div>
        <button onClick={tween.start}>Start</button>
        <button onClick={tween.stop}>Stop</button>
        <button onClick={tween.reset}>Reset</button>
        <button onClick={tween.restart}>Restart</button>
      </div>
    </>
  )
}
```
