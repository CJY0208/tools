# classnames

用于有条件地将 `className` 连接在一起。

可参考 <https://www.npmjs.com/package/classnames>

## 语法

```ts
classnames(word: any): string;
```

## 参数

- 要拼合的类名

## 返回值

- 拼接好所有符合条件的类名的字符串

## 举例

```jsx
import React, { useState, useMemo } from 'react'
import { classnames } from '@cjy0208/tools'

export default () => {
  const [buttonType, setButtonType] = useState('primary')
  const text = useMemo(() => {
    if (buttonType === 'primary') {
      return '点我将修改 buttonType 的值为 warning'
    }
    return '点我将修改 buttonType 的值为 primary'
  }, [buttonType])

  return (
    <>
      <p>类名可为字符串：</p>
      <div>
        <span style={{ color: '#DD4A68' }}>{`classnames('foo', 'bar')`}</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {JSON.stringify(classnames('foo', 'bar'), null, 2)}
        </span>
      </div>
      <br />

      <p>
        使用对象来对类名进行条件选择，key 为类名，value 为 true 才有这个类名：
      </p>
      <div>
        <span style={{ color: '#DD4A68' }}>{`classnames({ 'foo-bar': true })`}</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {JSON.stringify(classnames({ 'foo-bar': true }), null, 2)}
        </span>
      </div>
      <br />
      <div>
        <span style={{ color: '#DD4A68' }}>{`classnames({ 'foo-bar': false })`}</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {JSON.stringify(classnames({ 'foo-bar': false }), null, 2)}
        </span>
      </div>
      <br />
      <div>
        <span style={{ color: '#DD4A68' }}>{`classnames({ foo: true }, { bar: true })`}</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {JSON.stringify(classnames({ foo: true }, { bar: true }), null, 2)}
        </span>
      </div>
      <br />
      <div>
        <span style={{ color: '#DD4A68' }}>{`classnames({ foo: true, bar: true })`}</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {JSON.stringify(classnames({ foo: true, bar: true }), null, 2)}
        </span>
      </div>
      <br />

      <p>类名有字符串和对象：</p>
      <div>
        <span style={{ color: '#DD4A68' }}>{`classnames('foo', { bar: true })`}</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {JSON.stringify(classnames('foo', { bar: true }), null, 2)}
        </span>
      </div>
      <br />
      <div>
        <span style={{ color: '#DD4A68' }}>{`classnames('foo', { bar: true, duck: false }, 'baz', { quux: true })`}</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {JSON.stringify(
            classnames('foo', { bar: true, duck: false }, 'baz', {
              quux: true,
            }),
            null,
            2
          )}
        </span>
      </div>
      <br />

      <p> falsy 的值都会被忽略</p>
      <div>
        <span style={{ color: '#DD4A68' }}>{`classnames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')`}</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {JSON.stringify(
            classnames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''),
            null,
            2
          )}
        </span>
      </div>
      <br />

      <p> 数组也会被拍平 </p>
      <div>
        <span style={{ color: '#DD4A68' }}>{`classnames('a', ['b', { c: true, d: false }])`}</span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {JSON.stringify(
            classnames('a', ['b', { c: true, d: false }]),
            null,
            2
          )}
        </span>
      </div>
      <br />

      <p>使用 ES2015 动态类名</p>
      <div>
        <div>
          <button
            onClick={() => {
              setButtonType(buttonType === 'warning' ? 'primary' : 'warning')
            }}
          >
            {text}
          </button>
          <span style={{ paddingLeft: '20px' }}>
            buttonType 为 {buttonType}
          </span>
        </div>
        <br />
        <span style={{ color: '#DD4A68' }}>
          classnames({`{`} [`btn-${`{`}buttonType{`}`}`]: true })
        </span>{' '}
        的结果为：
        <span style={{ color: '#690' }}>
          {JSON.stringify(classnames({ [`btn-${buttonType}`]: true }), null, 2)}
        </span>
      </div>
      <br />
    </>
  )
}
```
