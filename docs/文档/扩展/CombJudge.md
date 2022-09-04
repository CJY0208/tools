# CombJudge

组合判断器。可用于 SKU 算法（商品多规格选择）场景。

## 语法

```ts
interface Attr {
  [key: string]: any[]
}
class CombJubge {
  list: Object | any[]
  attr: Attr
  attrKey: string[]
  constructor(list: Object | any[])
  private have
  adaptedAttr: (activeAttr: Object) => Object
  find: (activeAttr: Object) => string | undefined
}
```

## 参数

- 商品列表数组，格式应该为:

```js
const product = [
  {
    // "商品规格名称": "该商品此规格的值",
    name: 'iPhone X',
    color: '黑色',
    storage: '64g',
  },
  {
    color: '黑色',
    name: 'iPhone XS',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '256g',
  },
]
```

## 返回值

- CombJudge 的实例

## 返回的实例的属性

### list

商品规格数组。

```jsx
import React from 'react'
import { CombJudge } from '@cjy0208/tools'

// 商品
const product = [
  {
    name: 'iPhone X',
    color: '黑色',
    storage: '64g',
  },
  {
    color: '黑色',
    name: 'iPhone XS',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '256g',
  },
]

const judge = new CombJudge(product)

export default () => {
  return (
    <div>
      <div style={{ color: '#DD4A68' }}>
        const judge = new CombJudge(product);
      </div>
      <br />
      <span style={{ color: '#DD4A68' }}>judge.list</span> 的结果为：
      <pre style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(judge.list, null, 2)}
      </pre>
    </div>
  )
}
```

### attrKey

由所有商品的规格 key 组成的数组。

```jsx
import React from 'react'
import { CombJudge } from '@cjy0208/tools'

// 商品
const product = [
  {
    name: 'iPhone X',
    color: '黑色',
    storage: '64g',
  },
  {
    color: '黑色',
    name: 'iPhone XS',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '256g',
  },
]

const judge = new CombJudge(product)

export default () => {
  return (
    <div>
      <div style={{ color: '#DD4A68' }}>
        const judge = new CombJudge(product);
      </div>
      <br />
      <span style={{ color: '#DD4A68' }}>judge.attrKey</span> 的结果为：
      <pre style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(judge.attrKey, null, 2)}
      </pre>
    </div>
  )
}
```

### attr

商品全部属性选项对象。此对象的成员的 `key` 为某规格的 key，`value` 为 这规格的所有选项数组。

```jsx
import React from 'react'
import { CombJudge } from '@cjy0208/tools'

// 商品
const product = [
  {
    name: 'iPhone X',
    color: '黑色',
    storage: '64g',
  },
  {
    color: '黑色',
    name: 'iPhone XS',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '256g',
  },
]

const judge = new CombJudge(product)

export default () => {
  return (
    <div>
      <div style={{ color: '#DD4A68' }}>
        const judge = new CombJudge(product);
      </div>
      <br />
      <span style={{ color: '#DD4A68' }}>judge.attr</span> 的结果为：
      <pre style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(judge.attr, null, 2)}
      </pre>
    </div>
  )
}
```

### have()

判断有没有这个规格的商品，返回布尔值。

```jsx
import React from 'react'
import { CombJudge } from '@cjy0208/tools'

// 商品
const product = [
  {
    name: 'iPhone X',
    color: '黑色',
    storage: '64g',
  },
  {
    color: '黑色',
    name: 'iPhone XS',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '256g',
  },
]

const judge = new CombJudge(product)

export default () => {
  return (
    <div>
      <div style={{ color: '#DD4A68' }}>
        const judge = new CombJudge(product);
      </div>
      <br />
      <span
        style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}
      >{`judge.have({ name: "iPhone X", color: "黑色", storage: "64g" })`}</span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {judge
          .have({ name: 'iPhone X', color: '黑色', storage: '64g' })
          .toString()}
      </span>
      <br />
      <span
        style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}
      >{`judge.have({ name: "iPhone X", color: "黑色", storage: "128g" })`}</span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {judge
          .have({ name: 'iPhone X', color: '黑色', storage: '128g' })
          .toString()}
      </span>
      <br />
    </div>
  )
}
```

### find()

查找匹配商品。如果找到了，就返回商品标识（商品为数组则返回数组索引 index）；如果没找到，则返回 undefined 。

```jsx
import React from 'react'
import { CombJudge } from '@cjy0208/tools'

// 商品
const product = [
  {
    name: 'iPhone X',
    color: '黑色',
    storage: '64g',
  },
  {
    color: '黑色',
    name: 'iPhone XS',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '256g',
  },
]

const judge = new CombJudge(product)

export default () => {
  return (
    <div>
      <div style={{ color: '#DD4A68' }}>
        const judge = new CombJudge(product);
      </div>
      <br />
      <span
        style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}
      >{`judge.find({ name: "iPhone X", color: "黑色", storage: "64g" })`}</span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {judge
          .find({ name: 'iPhone X', color: '黑色', storage: '64g' })
          .toString()}
      </span>
      <br />
      <span
        style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}
      >{`judge.find({ name: "iPhone X", color: "黑色", storage: "128g" })`}</span>{' '}
      的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {`${judge.find({ name: 'iPhone X', color: '黑色', storage: '128g' })}`}
      </span>
      <br />
    </div>
  )
}
```

### adaptedAttr()

判断属性可用性

```jsx
import React from 'react'
import { CombJudge } from '@cjy0208/tools'

// 商品
const product = [
  {
    name: 'iPhone X',
    color: '黑色',
    storage: '64g',
  },
  {
    color: '黑色',
    name: 'iPhone XS',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '256g',
  },
]

const judge = new CombJudge(product)
const adaptedAttr = judge.adaptedAttr({ name: 'iPhone X', color: '黑色' })

export default () => {
  return (
    <div>
      <div
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        const judge = new CombJudge(product);
      </div>
      <div
        style={{ color: '#DD4A68', fontSize: '14px', fontFamily: 'Consolas' }}
      >
        {`const adaptedAttr = judge.adaptedAttr({ name: "iPhone X", color: "黑色" })`}
      </div>
      <br />
      <span
        style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}
      >{`adaptedAttr`}</span> 的结果为：
      <pre style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(adaptedAttr, null, 2)}
      </pre>
      <br />
      <span
        style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}
      >{`adaptedAttr['name']`}</span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(adaptedAttr['name'])}
      </span>
      <br />
      <span
        style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}
      >{`adaptedAttr['color']`}</span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(adaptedAttr['color'])}
      </span>
      <br />
      <span
        style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}
      >{`adaptedAttr['storage']`}</span> 的结果为：
      <span style={{ color: '#690', fontSize: '14px', fontFamily: 'Consolas' }}>
        {JSON.stringify(adaptedAttr['storage'])}
      </span>
      <br />
    </div>
  )
}
```

## 举例

```jsx
import React, { useState, useEffect, useMemo } from 'react'
import { CombJudge } from '@cjy0208/tools'

// 商品
const product = [
  {
    name: 'iPhone X',
    color: '黑色',
    storage: '64g',
  },
  {
    color: '黑色',
    name: 'iPhone XS',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '64g',
  },
  {
    color: '白色',
    name: 'iPhone X',
    storage: '256g',
  },
]
// 样式们
const disabledStyle = {
  margin: '0 20px',
  padding: '5px 10px',
  color: 'rgba(0,0,0,.25)',
  background: '#f5f5f5',
  border: '1px solid',
  borderColor: '#d9d9d9',
}
const normalStyle = {
  margin: '0 20px',
  padding: '5px 10px',
  color: 'rgba(0,0,0,.85)',
  background: '#fff',
  border: '1px solid',
  borderColor: '#d9d9d9',
}
const selectedStyle = {
  margin: '0 20px',
  padding: '5px 10px',
  color: '#fff',
  background: '#1890ff',
  border: '1px solid',
  borderColor: '#1890ff',
}

const zh = {
  name: '型号',
  color: '颜色',
  storage: '内存',
}

const judge = new CombJudge(product)
const { attr, attrKey } = judge

export default () => {
  // 渲染的选择规格数据
  const renderProduct = attrKey.map((key) => {
    return {
      label: key,
      list: attr[key],
    }
  })
  // 当前选中的数据
  const [selected, setSelected] = useState({})
  // 可被选的数据
  const adaptedAttr = useMemo(() => judge.adaptedAttr(selected), [selected])
  // 选项的状态
  const optionStatus = useMemo(() => {
    const result = {}
    renderProduct.forEach((item) => {
      const key = item.label
      const list = item.list
      result[key] = {}
      list.forEach((option) => {
        result[key][option] = -1
        if (adaptedAttr[key].includes(option)) {
          result[key][option] = 0
        }
      })
    })
    return result
  }, [adaptedAttr])

  function onClick(value, option) {
    // 禁用不可点
    if (optionStatus[value] === -1) {
      return
    }

    const tempSelected = { ...selected }
    // 是否是取消
    if (tempSelected[option] === value) {
      delete tempSelected[option]
    } else {
      tempSelected[option] = value
    }
    setSelected(tempSelected)
  }

  return (
    <>
      {renderProduct.map((options, index) => (
        <div key={index}>
          <p>{zh[options.label]}</p>
          <div>
            {options.list.map((item, itemIdx) => (
              <span
                key={itemIdx}
                onClick={() => onClick(item, options.label)}
                style={
                  optionStatus[options.label][item] === -1
                    ? disabledStyle
                    : selected[options.label] === item
                    ? selectedStyle
                    : normalStyle
                }
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
```
