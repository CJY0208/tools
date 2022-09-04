# intersection

交集。

### 语法

```ts
intersection: (...args: any[]) => any[];
```

### 参数

- 需要判断交集的数组

### 返回值

- 交集数组

### 举例

```js
intersection([1, 2], [2, 3]) // [2]
```

```jsx
import React from 'react'
import { intersection } from '@cjy0208/tools'

export default () => {
  return (
    <>
      <div>
        <span style={{ color: '#DD4A68' }}>
          intersection([1, 2, 3, 4], [2, 3, 4, 5])
        </span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {JSON.stringify(intersection([1, 2, 3, 4], [2, 3, 4, 5]))}
        </span>
      </div>
    </>
  )
}
```
