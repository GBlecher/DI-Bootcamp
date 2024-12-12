import {greet} from './greeting.js'
import {displayClrMessage} from './colorful-message.js'
import {readFile} from './files/read-file.js'


displayClrMessage(greet("Jathon")) 

console.log(readFile("files/file-data.txt"))