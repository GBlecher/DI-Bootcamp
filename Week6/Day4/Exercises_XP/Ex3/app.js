fsObj = require("./fileManager.js")

data = fsObj.readFile("Hello World.txt")

fsObj.writeFile("Bye World.txt",data)


