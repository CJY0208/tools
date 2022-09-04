# source

在线资源加载。

## 语法

```ts
const source = {
  js: (src: string, externals?: string | string[]) => Promise<unknown>;
  css: (href: string) => void;
};
```

## source 对象属性

- js: (src: string, externals?: string | string[]) ，在线加载 `js` 资源，返回值为 `Promise` 对象。
- css(href: string)，在线加载 `css` 资源。

## 举例

```javascript
// 加载 js 例子
source
  .js(
    'chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/react_devtools_backend.js',
    'js'
  )
  .then(function (e) {
    console.log(e)
  })
  .catch((er) => {
    console.log(er)
  })

// 加载 css 例子
source.css('https://ts.xcatliu.com/assets/reset.css')
```
