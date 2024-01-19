const fs = require('fs')
const path = require('path')
const output = fs.createWriteStream(path.join(__dirname,'project-dist/bundle.css'))

fs.promises
  .readdir(path.join(__dirname,'styles'))
  .then(async (files)=>{
    files.forEach(async (file)=>{
      const fileName = path.basename(path.join(__dirname,file))
      if(path.extname(path.join(__dirname,file)) === '.css'){
        const input = fs.createReadStream(path.join(__dirname,'styles',fileName))

        input.on('data',data=>{
          output.write(data.toString() + '\n')
        })
      }
    })
  })