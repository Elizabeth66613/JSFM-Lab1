// Import the required 'fs' module
const sp = require('fs');

// Use the sp.readFile function to read the file asynchronously
sp.readFile('paragraph.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    // Output the content of the file to the terminal
    console.log(data);
});
