const fs = require('fs');

const filePath = process.argv[2];
if (!filePath) {
  console.error('File path don exist');
}

fs.readFile(filePath, 'utf8', (err, data) => {

  if (err) {
    console.error(`Error reading file ${filePath}: ${err}`);
    return; } else {
    console.log(data);
  }
});
