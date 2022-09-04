import { version } from './package.json'

export default {
  mode: 'site',
  title: `CJY Tools`,
  outputPath: 'docs-dist',
  history: { type: 'hash' },
  publicPath: './',
  navs: [null, { title: `v${version}` }],
}
