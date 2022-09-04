# isFunction

判断是否为函数类型。

## 语法

```ts
isFunction: (value: any) => boolean
```

## 参数

- value ，要判断的数据

## 返回值

- `true` 是函数类型
- `false` 不是函数类型

## 举例

```jsx
import React from 'react'
import { isFunction } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isFunction("function")`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(isFunction('function'), null, 1)}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isFunction(() => {})`}
      </span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(
          isFunction(() => {}),
          null,
          1
        )}
      </span>
      <br />
      <span
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`isFunction(function test(){})`}
      </span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(
          isFunction(function test() {}),
          null,
          1
        )}
      </span>
      <br />
    </>
  )
}
```
