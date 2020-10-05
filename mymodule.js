const fs = require('fs');
var emptyArray = [];

function customFilter (directoryname, extensiontype, callback){
    fs.readdir(directoryname, function(err, data) {

        if(err){
            return callback(err)
        }
        for(let x = 0; x < data.length; x++){

            let extensionslice = data[x];
            var ourextensionslice = "."+extensiontype;
            
            if(extensionslice.includes(ourextensionslice)) {
                emptyArray.push(extensionslice);
            }
        }
        callback(null, emptyArray)
    })
}

module.exports = customFilter;
   

//should use parseInt(num, 10) in babysteps to use a base-10 solution