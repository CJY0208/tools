# qs

qs 库简易实现。

## 语法

```ts
qs: {
  parse: (str: any) => {}
  stringify: (params?: {}) => string
}
```

### qs.parse

与本工具库的 `url.allParam` 功能相同，从当前的 url 中获取到所有参数。

#### 语法

```ts
parse: (str: any) => {}
```

#### 参数

- url，为了避免某种拿不到的场景，可传入要从中解析参数的 url

#### 返回值

- 从 url 中解析出来的参数对象

#### 举例

```jsx
import React from 'react'
import { qs } from '@cjy0208/tools'

const url = 'http://www.test.com?id=2&name=1'

export default () => {
  return (
    <>
      <div>
        <span style={{ color: '#DD4A68' }}>qs.parse()</span> 的结果为：
        <span style={{ color: '#690' }}>{JSON.stringify(qs.parse())}</span>
      </div>
      <br />

      <p>const url = "http://www.test.com?id=2&name=1"</p>
      <div>
        <span style={{ color: '#DD4A68' }}>qs.parse(url)</span> 的结果为：
        <span style={{ color: '#690' }}>
          {JSON.stringify(qs.parse(url), null, 2)}
        </span>
      </div>
    </>
  )
}
```

### qs.stringify

将对象序列化成 URL 的形式，以 & 进行拼接。

与本工具库的 `url.generateParamStr` 功能相似，但 `url.generateParamStr` 返回的结果有 `?` ，而 `qs.stringify` 的返回结果没有。

#### 语法

```ts
stringify: (params?: {}) => string
```

#### 参数

- 要序列化为 url 形式的参数对象

#### 返回值

- 以 & 拼接后的字符串

#### 举例

```jsx
import React from 'react'
import { qs } from '@cjy0208/tools'

const url = 'http://www.test.com?id=2&name=1'

export default () => {
  return (
    <>
      <div>
        <span style={{ color: '#DD4A68' }}>{`qs.stringify({ id: 1 })`}</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>{qs.stringify({ id: 1 })}</span>
      </div>
      <br />

      <div>
        <span style={{ color: '#DD4A68' }}>{`qs.stringify({ id: 2, name: 1 })`}</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {qs.stringify({ id: 2, name: 1 })}
        </span>
      </div>
    </>
  )
}
```
