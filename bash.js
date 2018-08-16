

const cmds = require('./cmds')
const prompt = '$> '

function done(result) {
    process.stdout.write(`${result}\n${prompt}`) 
}

process.stdin.on('data', function (data) {
    const cmdWArgs = data.toString().trim(); // remove the newline
    const [cmd, ...args] = cmdWArgs.split(' ')
    cmds[cmd]()
})
