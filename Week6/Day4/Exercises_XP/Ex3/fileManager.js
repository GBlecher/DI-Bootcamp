fs = require("fs")

function readFile(filePath)
{
    return fs.readFileSync(filePath, 'utf-8')
}

function writeFile(filePath,content)
{
    return fs.writeFileSync(filePath, content, 'utf-8')
}

module.exports = {
    readFile,
    writeFile
}
