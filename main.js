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
      typeof jsonData.name === 'undefined' || 
      typeof jsonData.age === 'undefined' ||
      jsonData.name === null ||
      jsonData.age === null ||
      jsonData.name === '' ||
      isNaN(jsonData.age)
    ) {
      console.error('Invalid or missing required data in the JSON file.');
      return;
    }


         // Proceed with further processing if no errors
    console.log('Name:', jsonData.name);
    console.log('Age:', jsonData.age);

  } catch (err) {
    if (err instanceof SyntaxError) {
      console.log(
        "Invalid JSON file format. Please provide a valid JSON file."
      );
    } else {
      console.log(`Error reading the file: ${err.message}`);
    }
  }
});
