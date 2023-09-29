const fs = require('fs')

let ids = JSON.parse(fs.readFileSync('ids.json', 'utf8'))
console.log(ids.length)