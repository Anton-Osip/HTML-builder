const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname,'files-copy'),{recursive:true},err=>{
  if (err) {
    throw console.error(err.message)            
  }
})

fs.promises
  .readdir(path.join(__dirname,'files'))
  .then(files=>{
    files.forEach(item=>{
      fs.promises.copyFile(path.join(__dirname,'files',item),path.join(__dirname,'files-copy',item))    
    })
  })