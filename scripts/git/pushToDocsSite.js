const child = require('child_process')
const { getCurrentBranch } = require('./helpers')

const currentBranch = getCurrentBranch()

const command = `git checkout docs-site && git pull && git merge ${currentBranch} && git push && git checkout ${currentBranch} && git pull && git push`

console.log(command)

const childProcess = child.exec(command)
childProcess.stdout.pipe(process.stdout)
childProcess.stderr.pipe(process.stderr)
