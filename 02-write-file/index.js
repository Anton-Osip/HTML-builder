const fs = require("fs");
const path = require("path");
const {stdin, stdout, exit} = require("process")

stdout.write('Hi!,enter the text ... \n')

stdin.on('data',data=>{
    if(data.toString().trim()==='exit'){
        exite()
    }
    fs.createWriteStream(path.join(__dirname,'text.txt')).write(data)
})

process.on("SIGINT",exite)

function exite(){
    stdout.write('\nBye Bye')
    exit()
}

