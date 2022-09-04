# url

与 url 相关的函数集合，可用来快捷获取 url 相关信息、生成 url 参数等。

## url 里的参数

```jsx
import React from 'react'
import { url } from '@cjy0208/tools'

export default () => {
  const testUrl = 'http://www.test.com?id=2&name=1'

  return (
    <>
      <h2>打开控制台查看输出的 url 对象</h2>
      console.log("url对象", url)
      {console.log('url对象', url)}
    </>
  )
}
```

```js
{
  allParam: function allParam(),
  allParamEscape: function allParamEscape(), // [已废弃的unescape()]
  generateParamStr: function generateParamStr(paramObj),
  param: function param(name),
  paramEscape: function paramEscape, // [已废弃的unescape()]
}
```

## 示例

### url.allParam()

```js
import { url } from '@cjy0208/tools'

const testUrl = 'http://www.test.com?id=2&name=1'

// 从当前的 url 中获取到所有参数。
console.log(url.allParam()) // {}

// 但为了避免某种拿不到的场景，可将第一个参数作为要解析参数的 url。
console.log(url.allParam(testUrl)) // {id: "2", name: "1"}
```

### url.param(name)

```js
import { url } from '@cjy0208/tools'

// 从url上去获取 name 参数的值
console.log(url.param('name')) // undefined

// 如果 url 为 "http://www.test.com?id=2&name=1" 就能得到 "1"
```

### url.generateParamStr(paramObj)

```js
import { url } from '@cjy0208/tools'

// 将对象生成请求参数格式的字符串
url.generateParamStr({ name: 1 }) // ?name=1
url.generateParamStr({ id: 2, name: 1 }) // ?id=2&name=1
```

### url.paramEscape() 和 url.allParamEscape()

```js
import { url } from '@cjy0208/tools'

const testUrl = 'http://www.test.com?id=2&name=1'

//  从url上去获取参数
url.paramEscape('name') // undefined

//  从url上去获取所有参数的值
url.allParamEscape() // {}
// 但为了避免某种拿不到的场景，可将第一个参数作为要解析参数的 url。
url.allParamEscape(testUrl) // {id: "2", name: "1"}
```
