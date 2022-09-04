# set

无痛设置属性。

## 语法

```ts
set: (obj: Object, keys: KType, value: any) => Object
```

## 参数

- obj ，设置对象
- keys ，设置 key
- value ，设置 value

## 返回值

- 返回设置好的对象

## 举例

```javascript
set({}, 'a.b.c.d', 'hello world')
/*  
{
  "a": {
    "b": {
      "c": {
        "d": "hello world"
      }
    }
  }
}
*/
```

```jsx
import React from 'react'
import { set } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <div>
        <span style={{ color: '#DD4A68' }}>{`set({}, 'a.b.c.d', 'hello world')`}</span>{' '}
        的结果为：
        <pre style={{ color: '#690' }}>
          {JSON.stringify(set({}, 'a.b.c.d', 'hello world'), null, 2)}
        </pre>
      </div>
      <br />
      <div>
        <span style={{ color: '#DD4A68' }}>{`set(undefined, 'a.b.c', 1)`}</span>{' '}
        的结果为：
        <pre style={{ color: '#690' }}>
          {JSON.stringify(set(undefined, 'a.b.c', 1), null, 2)}
        </pre>
      </div>
    </>
  )
}
```
