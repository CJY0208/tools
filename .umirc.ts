import { version } from './package.json'

export default {
  mode: 'site',
  title: `CJY Tools`,
  outputPath: 'docs-dist',
  navs: [null, { title: `v${version}` }],
}
