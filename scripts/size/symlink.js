const fs = require('fs')
const path = require('path')

const cwd = process.cwd()
const packageInfo = require(path.resolve(cwd, './package.json'))

const isWin = process.platform === 'win32'

function link() {
  const destDir = path.join(cwd, 'node_modules', path.dirname(packageInfo.name))
  if (fs.existsSync(destDir)) {
    return
  }

  fs.mkdirSync(destDir, { recursive: true })
  // try {
  //   const dirs = packageInfo.name.split('/')
  //   dirs.pop()
  //   console.log(dirs)
  //   dirs.reduce((prefix, dir) => {
  //     const target = `${prefix}/${dir}`
  //     fs.mkdirSync(path.resolve(cwd, `./node_modules/${target}`), { recursive: true })
  //     return target
  //   }, '')
  // } catch (err) {
  //   //
  // }

  fs.symlinkSync(
    cwd,
    path.join(cwd, 'node_modules', packageInfo.name),
    isWin ? 'junction' : 'dir'
  )
}

module.exports = link
