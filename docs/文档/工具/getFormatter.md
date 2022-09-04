# getFormatter

格式化工具。可通过配置获得符合要求的切割函数。

## 语法

```ts
getFormatter: ({
  separator,
  length,
  reverse,
  isNumber: isNumberFormat,
}?: {
  separator?: string
  length?: number
  reverse?: boolean
  isNumber?: boolean
}) => (text: any) => string
```

## 参数

参数为一个配置 `对象` ，对象里的属性应为：

- separator，间隔符
- length，切割长度
- reverse，是否反转为从后往前切割
- isNumber， 是否为数字

## 返回值

- 返回一个格式化函数

## 举例

```js
const a = getFormatter({
  separator: '--',
  length: 2,
  reverse: true,
  isNumber: false,
})
a('abcdefghigklmn') // ab--cd--ef--gh--ig--kl--mn
```

```jsx
import React from 'react'
import { getFormatter } from '@cjy0208/tools'

const formatRMB = getFormatter({
  separator: ',',
  length: 3,
  reverse: true,
  isNumber: true,
})

const formatString = getFormatter({
  separator: '--',
  length: 2,
  reverse: false,
  isNumber: false,
})

const formatBankCode = getFormatter({
  separator: ' ',
  length: 4,
  reverse: false,
  isNumber: true,
})

window.getFormatter = getFormatter

export default () => {
  return (
    <>
      <h1>格式化人民币</h1>
      <pre style={{ color: '#690' }}>
        {`const formatRMB = getFormatter${JSON.stringify(
          {
            separator: ',',
            length: 3,
            reverse: true,
            isNumber: true,
          },
          null,
          2
        )}`}
      </pre>
      <div>
        <span style={{ color: '#DD4A68' }}>formatRMB(1234500)</span> 的结果为：
        <span style={{ color: '#690' }}>{formatRMB(1234500)}</span>
      </div>
      <br />

      <h1>格式化字符串</h1>
      <pre style={{ color: '#690' }}>
        {`const formatString = getFormatter${JSON.stringify(
          {
            separator: '--',
            length: 2,
            reverse: false,
            isNumber: false,
          },
          null,
          2
        )}`}
      </pre>
      <div>
        <span style={{ color: '#DD4A68' }}>formatString('aabbccddeeff')</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>{formatString('aabbccddeeff')}</span>
      </div>
      <br />

      <h1>格式化银行卡号</h1>
      <pre style={{ color: '#690' }}>
        {`const formatBankCode = getFormatter${JSON.stringify(
          {
            separator: ' ',
            length: 4,
            reverse: false,
            isNumber: true,
          },
          null,
          2
        )}`}
      </pre>
      <div>
        <span style={{ color: '#DD4A68' }}>
          formatBankCode(1234567812345678)
        </span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {formatBankCode(1234567812345678)}
        </span>
      </div>
    </>
  )
}
```
