# sample

抽样函数。随机获取数组中的一个值。

## 语法

```
sample(array: [])
```

## 参数

- array 数据源数组

## 返回值

- 随机从数组中抽取一个值返回。

## 举例

```javascript
const arr1 = [1, 2, 3, 4]
sample(arr1) // 3
sample(arr1) // 2

const arr2 = [{ name: 'Amy' }, { name: 'Peter' }, [1], 2, true]
sample(arr2) // {name: "Peter"}
sample(arr2) // [1]
```

```jsx
import React, { useState } from 'react'
import {
  sample,
  pipe,
  isNumber,
  isString,
  isObject,
  isBoolean,
  isArray,
} from '@cjy0208/tools'

const arr1 = [1, 2, 3, 4]
const arr2 = [{ name: 'Amy' }, { name: 'Peter' }, [1], 2, true]

const getString = (data) => {
  const type = typeof data
  if (isNumber(data) || isString(data)) {
    return data
  }
  if (isObject(data)) {
    return JSON.stringify(data, null, 2)
  }
  if (isArray(data)) {
    return JSON.stringify(data)
  }
  if (isBoolean(data)) {
    return data.toString()
  }
}

const sampleFunc = pipe(sample, getString)

export default () => {
  return (
    <>
      <p>const arr1 = [1, 2, 3, 4]</p>
      <div>
        <span style={{ color: '#DD4A68' }}>sample(arr1)</span> 的结果为：
        <pre style={{ color: '#690' }}>{sampleFunc(arr1)}</pre>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>sample(arr1)</span> 的结果为：
        <pre style={{ color: '#690' }}>{sampleFunc(arr1)}</pre>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>sample(arr1)</span> 的结果为：
        <pre style={{ color: '#690' }}>{sampleFunc(arr1)}</pre>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>sample(arr1)</span> 的结果为：
        <pre style={{ color: '#690' }}>{sampleFunc(arr1)}</pre>
      </div>
      <br />
      <p>{`const arr2 = [{name: 'Amy'}, {name: 'Peter'}, [1], 2, true]`}</p>
      <div>
        <span style={{ color: '#DD4A68' }}>sample(arr2)</span> 的结果为：
        <pre style={{ color: '#690' }}>{sampleFunc(arr2)}</pre>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>sample(arr2)</span> 的结果为：
        <pre style={{ color: '#690' }}>{sampleFunc(arr2)}</pre>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>sample(arr2)</span> 的结果为：
        <pre style={{ color: '#690' }}>{sampleFunc(arr2)}</pre>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>sample(arr2)</span> 的结果为：
        <pre style={{ color: '#690' }}>{sampleFunc(arr2)}</pre>
      </div>
      <div>
        <span style={{ color: '#DD4A68' }}>sample(arr2)</span> 的结果为：
        <pre style={{ color: '#690' }}>{sampleFunc(arr2)}</pre>
      </div>
    </>
  )
}
```
