const fs = require('fs');



let write=(fileDirection , data)=>{
    fs.writeFile(fileDirection, JSON.stringify(data), (err) => {
        console.log(err);
    })
}

module.exports = {write}