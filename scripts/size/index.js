const { argv } = require('yargs')
const ora = require('ora')
const { clearSizeCache } = require('@cjy0208/import-cost/dist/packageInfo')

if (argv.fresh) {
  const spinner = ora('clearing size cache...')
  spinner.start()
  clearSizeCache()
  spinner.stop()
  // process.exit(0) // fresh 时仅清空缓存，不进行计算
}

const symlink = require('./symlink')
symlink()

const sizeTools = require('./sizeTools')

sizeTools()
