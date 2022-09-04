# pipe

管道函数。适合把前一个函数的 `返回结果` 作为后一个函数的 `输入` 的场景。

### 语法

```
pipe: <T>(...handlers: Function[]) => (arg: any) => T;
```

### 参数

- handlers 函数们

### 返回值

- 把“管道”拼接好的新函数。

### 举例

```javascript
import React, { useState } from 'react'
import { pipe } from '@cjy0208/tools'

// 例子一：想得到某个数字 +1 +3 +5 的值
const plusOne = (num) => num + 1
const plusThree = (num) => num + 3
const plusFive = (num) => num + 5

console.log(plusFive(plusThree(plusOne(666)))) // 675
console.log(plusFive(plusThree(plusOne(996)))) // 1005
// 使用管道函数
const pipePlus = pipe(plusOne, plusThree, plusFive)
console.log(pipePlus(666)) // 675
console.log(pipePlus(996)) // 1005

// 例子二：获得当前时间的昨天日期
// 获取日期的当天的零时刻
const h0 = (date) => {
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  return date
}
// 获取日期的昨天
const getLastday = (date) => {
  date.setDate(date.getDate() - 1)
  return date
}
// 将日期对象转化为字符串
const getString = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}年${month}月${day}日`
}

console.log(getString(getLastday(h0(new Date())))) // 2020年11月22日
console.log(getString(getLastday(h0(new Date('2020-02-01'))))) // 2020年1月31日
// 使用管道函数
const pipeDateStr = pipe(h0, getLastday, getString)
console.log(pipeDateStr(new Date())) // 2020年11月22日
console.log(pipeDateStr(new Date('2020-02-01'))) // 2020年1月31日
```

```jsx
import React, { useState } from 'react'
import { pipe } from '@cjy0208/tools'

const plusOne = (num) => num + 1
const plusThree = (num) => num + 3
const plusFive = (num) => num + 5

const pipePlus = pipe(plusOne, plusThree, plusFive)

// 获取日期的当天的零时刻
const h0 = (date) => {
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)

  return date
}
// 获取日期的昨天
const getLastday = (date) => {
  date.setDate(date.getDate() - 1)
  return date
}
// 将日期对象转化为字符串
const getString = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}年${month}月${day}日`
}

const pipeDateStr = pipe(h0, getLastday, getString)

export default () => {
  return (
    <>
      <h1>如果想得到某个数字 +1 +3 +5 的值</h1>
      <div>
        <span style={{ color: '#DD4A68' }}>
          plusFive(plusThree(plusOne(666)))
        </span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {plusFive(plusThree(plusOne(666)))}
        </span>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>
          plusFive(plusThree(plusOne(996)))
        </span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {plusFive(plusThree(plusOne(996)))}
        </span>
      </div>
      <p> const pipePlus = pipe(plusOne, plusThree, plusFive) </p>
      <div>
        <span style={{ color: '#DD4A68' }}>pipePlus(666)</span> 的结果为：
        <span style={{ color: '#690' }}>{pipePlus(666)}</span>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>pipePlus(996)</span> 的结果为：
        <span style={{ color: '#690' }}>{pipePlus(996)}</span>
      </div>
      <h1>如果想获得当前时间的昨天日期</h1>
      <div>
        <span style={{ color: '#DD4A68' }}>getLastday(h0(new Date())))</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {getString(getLastday(h0(new Date())))}
        </span>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>
          getLastday(h0(new Date('2020-02-01'))))
        </span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {getString(getLastday(h0(new Date('2020-02-01'))))}
        </span>
      </div>
      <p>const pipeDateStr = pipe(h0, getLastday, getString)</p>
      <div>
        <span style={{ color: '#DD4A68' }}>getLastday(h0(new Date())))</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>{pipeDateStr(new Date())}</span>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>
          getLastday(h0(new Date('2020-02-01'))))
        </span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {pipeDateStr(new Date('2020-02-01'))}
        </span>
      </div>
    </>
  )
}
```
