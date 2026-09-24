const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/initialData.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Strip U-17, U-16, etc.
content = content.replace(/ U-\d{2}/g, '');
content = content.replace(/ \d{4} \(U-\d{2}\)/g, ''); // just in case

// Translate coach bios and roles in initialData.js by providing all keys directly, or just translating to Polish?
// Wait, the user said "тренер не перевелся". I should probably add coach1, coach2 to translations.js and use it in TeamsSection and AboutSection.
// For now, let's just write this to remove U-17 from initialData.js
fs.writeFileSync(filePath, content);
console.log('Stripped U-XX from initialData.js');
