const fs = require('fs')
const path = require('path')
const glob = require('glob')
const ora = require('ora')
const cost = require('./importCost')

const spliter = `
`
function getContent(libName = 'es') {
  return (
    [
      ...glob
        .sync(`./${libName}/*/index.js`)
        .map(
          (filepath) =>
            `require('${filepath
              .replace(/^\./, '@cjy0208/tools')
              .replace(/\/index\.js$/, '')}')`
        ),
      ...glob
        .sync(`./${libName}/*.js`)
        .map(
          (filepath) =>
            `require('${filepath
              .replace(/^\./, '@cjy0208/tools')
              .replace(/\.js$/, '')}')`
        ),
    ]

      // .map((name) => `require('@cjy0208/tools/${libName}/${name}')`)
      .join(spliter)
  )
}

// console.log(getContent('kula/es/exports'))

async function size() {
  // console.log(getContent('es'))
  const spinner = ora('calculating size...')
  spinner.start()
  const [esm, cjs] = await Promise.all([
    cost('es', getContent('es')),
    cost('lib', getContent('lib')),
  ])

  spinner.stop()
  console.log(
    esm
      .map(
        (item) =>
          `[ESM] ${item.gzip} -- ${item.name.replace('@cjy0208/tools/es/', '')}`
      )
      .join(spliter)
  )

  console.log('--------------------')

  console.log(
    cjs
      .map(
        (item) =>
          `[CJS] ${item.gzip} -- ${item.name.replace('@cjy0208/tools/lib/', '')}`
      )
      .join(spliter)
  )

  fs.writeFileSync(
    path.resolve(process.cwd(), './public/size.json'),
    JSON.stringify({ esm, cjs }),
    {
      encoding: 'utf-8',
    }
  )
}

module.exports = size
