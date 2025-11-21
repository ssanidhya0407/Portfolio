import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

const pdfPath = 'Sanidhya Kumar Singh_Doc-5 copy.pdf';

if (fs.existsSync(pdfPath)) {
    const dataBuffer = fs.readFileSync(pdfPath);
    pdf(dataBuffer).then(function (data) {
        console.log(data.text);
    }).catch(function (error) {
        console.error('Error extracting PDF:', error);
    });
} else {
    console.log('PDF file not found:', pdfPath);
}
