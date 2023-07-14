const { Toolkit } = require('actions-toolkit');
const fs = require('fs');

const targetDir = "./contents"

Toolkit.run(async tools => {
  try {
    fs.readdir('.', (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
    });
  } catch (error) {

  }
})
