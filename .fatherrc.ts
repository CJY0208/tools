export default {
  cjs: {
    type: 'babel',
    minify: true,
    lazy: true,
  },
  esm: {
    type: 'babel',
  },
  umd: {
    name: 'CJYTools',
    sourcemap: true,
  },
  runtimeHelpers: true,
}
