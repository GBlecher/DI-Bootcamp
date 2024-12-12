const fs = require('fs')
const path = require('path')

currDirectory = './'

fs.readdir(currDirectory,(err,files) => {
    if(err){
        console.log(err); 
    }

    console.log("Files in directory:\n");
    for(file of files){
        console.log(file);
    }
    
})