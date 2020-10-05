const fs = require('fs');
const filename = process.argv[2];
const filetype = process.argv[3];

fs.readdir(filename, function(err, list) {
    if(err){
        console.error(err);
    }
    var nameString = list;
    printNames(nameString);
})

async function printNames(array){
    var slicedfiles = [];
    
    for(let x=0; x<array.length; x++) {
        console.log(array[x]);
        let homeslice = array[x].split('.')[1];
        if(!homeslice){
            console.log('not gonna work')
        }
        console.log(homeslice);
        if(homeslice == filetype){
            slicedfiles.push(x);
            console.log(array[x])
        }
    }
    
}