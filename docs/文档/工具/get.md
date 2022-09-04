# get

无痛取值。

## 语法

```ts
declare type KType = string | any[] | number;
get<T>(obj: any, keys?: KType, defaultValue?: any): T;
```

## 参数

- obj 提取对象
- keys 提取对象的 key 操作符
- defaultValue 取不到值的默认值

## 返回值

- 如果能取到值，就返回取到的值。
- 如果不能取到值，就返回 `defaultValue` 默认值。

## 举例

```javascript
const a = {
  a: {
    b: {
      c: 'abc',
    },
  },
}
get(a, 'a.b.d', 'hello world') // hello world
get(a, 'a.b.c', 'hello world') // abc
```

```jsx
import React from 'react'
import { get } from '@cjy0208/tools'

const obj = {
  a: {
    b: 1,
  },
}

export default () => {
  return (
    <>
      <pre style={{ color: '#690' }}>
        {`const obj = ${JSON.stringify({ a: { b: 1 } }, null, 2)}`}
      </pre>
      <h1>成功取到值</h1>
      <div>
        <span style={{ color: '#DD4A68' }}>get(obj, 'a.b')</span> 的结果为：
        <span style={{ color: '#690' }}>{get(obj, 'a.b')}</span>
      </div>
      <br />
      <div>
        <span style={{ color: '#DD4A68' }}>get(obj, 'a.b', 'default')</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>{get(obj, 'a.b', 'default')}</span>
      </div>
      <br />
      <div>
        <span style={{ color: '#DD4A68' }}>get(obj, ['a', 'b'])</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>{get(obj, ['a', 'b'])}</span>
      </div>
      <br />
      <div>
        <span style={{ color: '#DD4A68' }}>
          get(obj, ['a', 'b'], 'default')
        </span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>{get(obj, ['a', 'b'], 'default')}</span>
      </div>
      <br />
      <h1>没成功取到值</h1>
      <div>
        <span style={{ color: '#DD4A68' }}>get(obj, 'c.b') </span> 的结果为：
        <span style={{ color: '#690' }}>{get(obj, 'c.b')}</span>
      </div>
      <br />
      <div>
        <span style={{ color: '#DD4A68' }}>get(obj, 'c.b', 'default') </span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>{get(obj, 'c.b', 'default')}</span>
      </div>
    </>
  )
}
```
