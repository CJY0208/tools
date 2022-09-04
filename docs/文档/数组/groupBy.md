# groupBy

对数组进行归类处理。

## 语法

```js
groupBy: (namer: Function, list: any[]) => Object
```

## 参数

- namer 归类处理函数，返回值为所归类的 key 名。
- list 需要归类处理的数组。

## 返回值

- 归类好的对象，键( key )为归类的名，值( value )为属于这一类的数据。

## 举例

```jsx
import React from 'react'
import { groupBy } from '@cjy0208/tools'

const arr = [1, 2, 3, 4, 5, 6, 7]

function groupFunc(value) {
  if (value % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
}

export default () => {
  return (
    <>
      <div
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        const arr = [1, 2, 3, 4, 5, 6, 7];
      </div>
      <pre
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`function groupFunc(value) {`}
        <br />
        {`  if (value % 2 === 0) {`}
        <br />
        {`    return "even";`}
        <br />
        {`  } else {`}
        <br />
        {`    return "odd";`}
        <br />
        {`  }`}
        <br />
        {`}`}
      </pre>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        groupBy(groupFunc, arr)
      </span> 的结果为：
      <pre style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(groupBy(groupFunc, arr), null, 2)}
      </pre>
      <br />
    </>
  )
}
```
