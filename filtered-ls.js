const fs = require('fs');

const directory = process.argv[2];
const extension = process.argv[3];

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith(`.${extension}`)) {
      console.log(file);
    }
  })
});