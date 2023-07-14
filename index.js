const { Toolkit } = require('actions-toolkit');
const fs = require('fs');

const targetDir = process.env.GITHUB_WORKSPACE + "/contents";

Toolkit.run(async tools => {
  console.log(targetDir);
  try {
    fs.readdir(targetDir, (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
    });
  } catch (e) {
    tools.log.fatal(e);
    tools.exit.failure('Failed to increment the value.');
  }
})
