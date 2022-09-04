import { version } from './package.json'

export default {
  mode: 'site',
  title: `CJY Tools`,
  outputPath: 'docs-dist',
  history: { type: 'hash' },
  publicPath: './',
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/CJY0208/tools',
    },
    {
      title: `v${version}`,
      path: 'https://www.npmjs.com/package/@cjy0208/tools',
    },
  ],
}
