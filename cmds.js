const fs = require('fs')

exports.ls = function (done,args) {
    let result = ''
    const dir = args[0] || '.'
    fs.readdir(dir, (err, files) => {
        if (err)
            result = err.message
        else {
            result = files.join('\n')
        }        
        done(result)
    })    
}

exports.head = function (done,args) {
    let result = ''
    const file2 = args[0]
    fs.readFile(file2, 'utf8', function (err, data) {
        if (err)
            result = err.message
        else {
            result = data
                .split('\n')
                .slice(0, 10)
                .join('\n');

        }
        done(result)
    })
}

exports.quit = function (args) { process.exit() }

exports.cat = function (done, args) {
    const file = args[0];
    let result = ''
    fs.readFile(file, 'utf8', function (err, data) {
        if (err)
            result = err.message
        else
            result = data
        done(result)
    })    
}

exports.pwd = function (done, args) {
    done(process.stdout.write(__dirname));
}

exports.date = function (done, args) {
    done(Date.now.toString())
}