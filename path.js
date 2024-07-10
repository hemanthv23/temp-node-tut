const path = require('path')
console.log(path.sep)


const filepath = path.join('./contents', 'sub', 'text.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const res = path.resolve(filepath)
console.log(res)