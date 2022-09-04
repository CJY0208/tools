# preloadImage

预渲染指定图片。

## 语法

```ts
preloadImage: (srcList: string[]) => void;
```

## 参数

- srcList 预渲染图片地址数组

## 返回值

- undefined

## 举例

```javascript
preloadImage(['url.jpg'])
```

```jsx
import React from 'react'
import { preloadImage } from '@cjy0208/tools'

const pig = 'https://static.k366.com/uploads/allimg/181008/7-1Q00Q51023331.jpg'
preloadImage([pig])

export default () => {
  return (
    <>
      <img src={pig} alt="pig" />
    </>
  )
}
```
