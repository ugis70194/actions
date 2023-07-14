const { Toolkit } = require('actions-toolkit');
const fs = require('fs');

const targetDir = "./contents"

Toolkit.run(async tools => {
  console.log("toolkit run");
  try {
    fs.readdir('.', (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
    });
  } catch (e) {
    tools.log.fatal(e);
    tools.exit.failure('Failed to increment the value.');
  }
})
