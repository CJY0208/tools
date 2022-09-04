# run

无痛运行函数或非函数。

## 语法

```ts
run<T>(obj: any, keys?: KType, ...args: any[]): T;
```

## 参数

- obj 提取对象或要执行的函数
- keys 提取对象的 key 操作符，无需请传 `undefined`
- args 传给函数的参数

## 返回值

- 如果要运行的是函数，就会运行，返回函数返回的值。
- 如果要运行的不是函数，就直接返回要运行的值。

## 举例

```javascript
const obj = {
  a: {
    b: {
      c: 'abc',
      func: function () {
        console.log(arguments)
        console.log('vagaga')
      },
    },
  },
}

run(obj, 'a.b.f', 'hello world') // ['hello world'] vagaga
run(a, 'a.b.c', 'hello world') // abc
```

```jsx
import React from 'react'
import { run } from '@cjy0208/tools'

const obj = {
  a: {
    b: {
      c: 'abc',
      func: (str) => {
        return str
      },
    },
  },
}

export default () => {
  return (
    <>
      <h1>无痛执行对象里的：</h1>
      <p>执行对象里的函数，成功</p>
      <div>
        <span style={{ color: '#DD4A68' }}>run(obj, 'a.b.func', 'vagaga')</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>{run(obj, 'a.b.func', 'vagaga')}</span>
      </div>
      <br />
      <p>执行对象里不存在的函数，没有成功</p>
      <div>
        <span style={{ color: '#DD4A68' }}>run(obj, 'a.b.d', 'vagaga')</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>{run(obj, 'a.b.d', 'vagaga')}</span>
      </div>
      <br />
      <p>执行对象里的其他类型，成功</p>
      <div>
        <span style={{ color: '#DD4A68' }}>run(obj, 'a.b.c', 'vagaga')</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>{run(obj, 'a.b.c', 'vagaga')}</span>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>run(obj, 'a.b', 'vagaga')</span>{' '}
        的结果为：
        <pre style={{ color: '#690' }}>
          {JSON.stringify(run(obj, 'a.b', 'vagaga'), null, 2)}
        </pre>
      </div>
      <br />

      <h1>无痛直接执行：</h1>
      <p>直接执行函数，成功</p>
      <div>
        <span style={{ color: '#DD4A68' }}>
          run(obj.a.b.func, undefined, 'vagaga')
        </span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {run(obj.a.b.func, undefined, 'vagaga')}
        </span>
      </div>
      <p>直接执行字符串，成功</p>
      <div>
        <span style={{ color: '#DD4A68' }}>
          run(obj.a.b.c, undefined, 'vagaga')
        </span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {run(obj.a.b.c, undefined, 'vagaga')}
        </span>
      </div>
      <p>直接执行对象，成功</p>
      <div>
        <span style={{ color: '#DD4A68' }}>
          run(obj.a, undefined, 'vagaga')
        </span>{' '}
        的结果为：
        <pre style={{ color: '#690' }}>
          {JSON.stringify(run(obj.a, undefined, 'vagaga'), null, 2)}
        </pre>
      </div>
      <p>直接执行不存在的，失败</p>
      <div>
        <span style={{ color: '#DD4A68' }}>
          run(obj.a.b.d, undefined, 'vagaga')
        </span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {run(obj.a.b.d, undefined, 'vagaga')}
        </span>
      </div>
    </>
  )
}
```
