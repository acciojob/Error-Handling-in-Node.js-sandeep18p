const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file ${filePath}: ${err}`);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    console.log('Successfully read JSON file:', jsonData);

    if (!jsonData.requiredField) {
      throw new Error('Missing required data in JSON file: requiredField');
    }

    

  } catch (err) {
    console.error('Error parsing JSON:', err.message);
  }
});
