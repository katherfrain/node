const fs = require('fs');
const filepath = process.argv[2];


const file = fs.readFileSync(filepath, 'utf8').split('\n');
console.log(file.length - 1)

//.gitignore .DS_Store(ONLY MAC) node_modules