const fs = require('fs');

const file_path = process.argv[2];

if (!file_path) {
  console.error('Usage: node print.js <file_path>');
  process.exit(1);
}

fs.readFile(file_path, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error: ${err.message}`);
  } else {
    console.log(data);
  }
});
