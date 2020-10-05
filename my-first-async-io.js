const fs = require('fs');
const filepath = process.argv[2];
const file = fs.readFile(filepath, 'utf8', function(err, data) {
    if(err){
        return console.error(err);
    }
    else{
        printLines(data);
    }
})
async function printLines(file){
    const linenumber = file.split('\n').length;
    console.log(linenumber - 1);
}