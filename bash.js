
const fs = require('fs')
const writeStream = (data) => process.stdout.write(data);
const prompt = '$> '
const writePrompt = () => writeStream('\n' + prompt)

writeStream(prompt)
process.stdin.on('data', function (data) {
    const cmdWArgs = data.toString().trim(); // remove the newline
    const [cmd, ...args] = cmdWArgs.split(' ')
    switch (cmd) {
        case 'pwd':
            writeStream(__dirname)
            break;
        case 'date':
            writeStream(Date.now.toString())
            break;
        case 'cat':
            const file = args[0];
            fs.readFile(file, 'utf8', function (err, data) {
                if (err)
                    writeStream(err.message)
                else
                    writeStream(data)
                writeStream('\n' + prompt)
            })
            break;
        case 'head':
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

            break;
        case 'q':
            process.exit()
            break;
        case 'ls':
            const dir = args[0]
            fs.readdir(dir, (err,files)=>{
                if(err)
                  writeStream(err.message)
                else{
                  writeStream(files.join('\n'))
                }
                writePrompt()
            })
            break;
        default:
            break;
    }
})
