const fs = require('fs')


content = fs.readFileSync('source.txt','utf-8')


fs.writeFileSync('destination.txt', content, 'utf-8')