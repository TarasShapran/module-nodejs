const fs = require('fs');
const path = require('path');

const sort = (fileDirection, newFileDirection, gender) => {
    fs.readdir(fileDirection, ((err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        data.forEach((file) => {
            fs.readFile(path.join(fileDirection, file), (e, data) => {
                const user = JSON.parse(data.toString());

                if (user.gender === gender) {
                    fs.rename(path.join(fileDirection, file),
                        path.join(newFileDirection, file),
                        err1 => {
                            if (err1) {
                                console.log(err1)
                                return;
                            }
                        }
                    );
                }
            })
        });
    }));
}

module.exports = sort