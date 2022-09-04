# copy

尝试通过 web 本身实现复制功能。

## 语法

```ts
declare const copy: (value: string | number) => void
export default copy
```

## 参数

- value，要复制的值

## 返回值

- undefined

## 举例

```jsx
import React, { useState } from 'react'
import { copy } from '@cjy0208/tools'

export default () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => copy(inputValue)}>点击 copy 输入框内容</button>
      </div>
      <p>
        可在下面输入框粘贴，看看是否是上面输入框的内容（Windows快捷键为Ctrl +
        V）
      </p>
      <input />
    </>
  )
}
```
