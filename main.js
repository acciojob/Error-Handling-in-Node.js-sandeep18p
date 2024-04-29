const fs = require('fs');

const filePath = process.argv[2];
if (!filePath) {
  console.error('Usage: node print.js <file_path>');
  process.exit(1);
}

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file ${filePath}: ${err}`);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    if (
      typeof jsonData.name === "undefined" ||
      typeof jsonData.age === "undefined"
    ) {
      console.log("Missing required data in the JSON file.");
      return;
    }
  } catch (err) {
    console.error('Invalid JSON file format. Please provide a valid JSON file.');
  }
});
