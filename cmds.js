const fs = require('fs')

exports.ls = function () {
    const dir = args[0]
    fs.readdir(dir, (err, files) => {
        if (err)
            writeStream(err.message)
        else {
            writeStream(files.join('\n'))
        }
        writePrompt()
    })
}

exports.head = function () {
    const file2 = args[0]
    fs.readFile(file2, 'utf8', function (err, data) {
        if (err)
            writeStream(err.message)
        else {
            const head = data
                .split('\n')
                .slice(0, 10)
                .join('\n');
            writeStream(head);
        }
        writePrompt()
    })
}

exports.quit = function () { process.exit() }

exports.cat = function () {
    const file = args[0];
    let result = ''
    fs.readFile(file, 'utf8', function (err, data) {
        if (err)
            result = err.message
        else
            result = data        
    })
    done(result)
}

exports.pwd = function () {
    done(process.stdout.write(__dirname));
}

exports.date = function () {
    done(Date.now.toString())
}