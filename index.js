const { Toolkit } = require('actions-toolkit');
const fs = require('fs');

const targetDir = process.env.GITHUB_WORKSPACE;

Toolkit.run(async tools => {
  console.log(targetDir);
  try {
    console.log(fs.readdirSync(targetDir));
  } catch (e) {
    tools.log.fatal(e);
    tools.exit.failure('Failed');
  }
})
