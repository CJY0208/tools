# random

随机函数，获取 (min, max) 之间的一个随机数

## 语法

```ts
random: (min: number, max: number, int?: boolean) => number
```

## 参数

- min 最小值
- max 最大值
- int 是否为整型，默认 true

## 返回值

- 根据参数返回符合条件的一个随机数字。

## 举例

```jsx
import React from 'react'
import { random } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <p>
        <span style={{ color: '#DD4A68' }}>random(1,10)</span> 的结果为：
        <span style={{ color: '#690' }}>{random(1, 10)}</span>
      </p>
      <p>
        <span style={{ color: '#DD4A68' }}>Arandom(1,10, true)</span> 的结果为：
        <span style={{ color: '#690' }}>{random(1, 10, true)}</span>
      </p>
      <p>
        <span style={{ color: '#DD4A68' }}>Arandom(1,10, false)</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>{random(1, 10, false)}</span>
      </p>
      <br />
      <p>
        <span style={{ color: '#DD4A68' }}>Arandom(98,100)</span> 的结果为：
        <span style={{ color: '#690' }}>{random(98, 100)}</span>
      </p>
      <p>
        <span style={{ color: '#DD4A68' }}>Arandom(98, 100, true)</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>{random(98, 100, true)}</span>
      </p>
      <p>
        <span style={{ color: '#DD4A68' }}>Arandom(98, 100, false)</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>{random(98, 100, false)}</span>
      </p>
    </>
  )
}
```
