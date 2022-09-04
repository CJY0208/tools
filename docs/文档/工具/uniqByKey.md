# uniqByKey

去重对象数组。

### 语法

```ts
uniqByKey: <T> (array: any[], key: any) => T[];
```

## 参数

- array ，对象数组
- key ，比对的 key 值

## 返回值

- 返回去重后的新数组。

## 举例

```javascript
uniqByKey([{ name: 'a' }, { name: 'b' }, { name: 'a' }], 'name') // [{name: 'a'},{name: 'a'}]
```

```jsx
import React, { useState } from 'react'
import { uniqByKey } from '@cjy0208/tools'

const arr = [
  { name: 'Amy', age: 18 },
  { name: 'Tom', age: 19 },
  { name: 'Amy' },
]
export default () => {
  const [newArr, setNewArr] = useState([])
  return (
    <>
      <div>
        <span style={{ color: '#DD4A68' }}>const arr = </span>
        <pre style={{ color: '#690' }}>{JSON.stringify(arr, null, 2)}</pre>
      </div>
      <br />
      <div>
        <button
          onClick={() => {
            setNewArr(uniqByKey(arr, 'name'))
          }}
        >
          点击去重 uniqByKey(arr, 'name')
        </button>
      </div>
      <br />
      <div>
        <span style={{ color: '#DD4A68' }}>去重后得到的数组为：</span>
        <pre style={{ color: '#690' }}>{JSON.stringify(newArr, null, 2)}</pre>
      </div>
    </>
  )
}
```
