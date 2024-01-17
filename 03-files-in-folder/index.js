const fs = require("fs");
const path = require("path");

fs.promises.readdir(path.join(__dirname,'secret-folder'),{withFileTypes:true}).then(res=>{
    res.forEach(result=>{
        if(!result.isDirectory()){
            const filePath = path.join(__dirname,'secret-folder',result.name)
            const fileName = path.parse(filePath).name
            const exit = path.parse(filePath).ext
            fs.promises.stat(filePath).then(res=>{
                console.log(`${fileName} - ${exit.replace('.','')} - ${res.size}`);
            })
        }
    })
})