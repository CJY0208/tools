# capitalize

使首字母大写的函数。

## 语法

```ts
capitalize(word: string): string;
```

## 参数

- string，需要首字母变大写的字符串

## 返回值

- 首字母大写后的字符串

## 举例

```javascript
capitalize('hello') // Hello
```

```jsx
import React from 'react'
import { capitalize } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <div>
        <span style={{ color: '#DD4A68' }}>capitalize('hello')</span> 的结果为：
        <span style={{ color: '#690' }}>{capitalize('hello')}</span>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>capitalize('Hello')</span> 的结果为：
        <span style={{ color: '#690' }}>{capitalize('Hello')}</span>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>capitalize('1231abc')</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>{capitalize('1231abc')}</span>
      </div>
    </>
  )
}
```
