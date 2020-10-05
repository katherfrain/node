const customFilter = require('./mymodule');
var mymodule = require('./mymodule');
const filename = process.argv[2];
const filetype = process.argv[3];

mymodule(filename, filetype, (err, data) => {
    if(err){
        return console.error(err);
    }
    else {
        data.forEach(file => {
            console.log(file);
        })
    }
});
