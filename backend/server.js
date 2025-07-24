// // express -> for server-side programming
// // multer -> pdf uploads 
// // pdf-parse -> for extracting text
// // node-forge -> for signature validation


// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");

// const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js'); // A library to read and extract text from PDF files
// const cors = require("cors");
// const { PDFDocument } = require('pdf-lib');
// const sharp = require('sharp');


// const app = express();

// // Enable CORS for all routes
// app.use(cors());

// const upload = multer({ dest: 'uploads/' });

// let name = "";
// let dob = "";
// let adharnumber = "";

// // upload mera backend ka route hai -> when user clicks on submit button -> vo is route pe pdf send krega aur iske request object (req) se ham us file ko access krenge
// app.post('/upload-adhaar', upload.single('aadhaarPdf'), async (req, res) => {
//     try {

//         const filePath = req.file.path; // path of uploaded file
//         // const password = req.body.password ? req.body.password.trim() : '';
//         const password = 'KASH2005';

//         console.log("file = ", filePath);
//         console.log("password = ", password);

//         const text = await extractTextFromPdf(filePath, password);
//         // Extract info using regex
//        // Extract info using improved regex:
//        console.log(text);

//        const userDetails = extractAadhaarDetails(text);



//         // console.log("details " ,name, dob, gender, address);
//         res.json({ message: 'Aadhaar processed successfully' });


//     } catch (err) {
//         console.error('Error processing Adhaar PDF: ', err);
//         res.status(500).json({ error: 'Failed to process Aadhar PDF' }) // this response is recieved by frontend -> so they know if the uploaded pdf got processed correctly or not
//     }
// });


// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// async function extractTextFromPdf(path, password) {
//     const rawData = new Uint8Array(fs.readFileSync(path));
//     // first fs.readFileSync() -> read the data -> returns a buffer -> which has data in 0s and 1s 

//     /*
//     for example text in file is HI!  -> converts them into ascii -> 
//     01001000 01001001 00100001    (48 49 21   in decimal) 
//      H        I         !

//     when we pass these binary bits to Uint8Array -> becomes [72, 73, 33] -> ye 48 hexa me hai ise decimal me 72 bana dega

//     this is the format that libraries like pdfjsLib understands -> hence, we have to convert it into this format
//     */


//     const loadingTask = pdfjsLib.getDocument({ data: rawData, password }); // now this libaray -> takes binary content of PDF and password (optionally if the file is protected) -> rawData -> data in form of uint array (bytes) and password -> what does this function getDocument do ?? -> it starts reading the PDF's binary data -> checks if it is a valid PDF file -> if password is required -> it unlocks it -> it then prepares the internal data so that we can ask -> how many pages are there? what text is there ? what font is used here ?? -> yani ki ye files ko bhut complex ways me compress kiya jata hai -> to ye simply us format ko asi form me layega so that javascript can work with it

//     // loadingTask is a promise -> it asks us to wait until the pdf is loaded completely

//     const pdfDocument = await loadingTask.promise; // promise is a property of that object -> we have to wait until the promise is resolved

//     let fullText = '';
//     const numPages = pdfDocument.numPages; // returns the number of pages
//     // console.log("number of pages : " , numPages);

//     for (let pageNum = 1; pageNum <= numPages; pageNum++) {
//         const page = await pdfDocument.getPage(pageNum); // gets one page from the pdf -> await means it waits until the page is fully ready
//         const content = await page.getTextContent(); // get the whole content of that page
//         const strings = content.items
//     .map(item => item.str)
//     .filter(str =>
//         /^[\x00-\x7F]*$/.test(str) &&   // only ASCII (no Hindi/Unicode)
//         str.trim().length > 0           // skip pure spaces
//     );

//          // content.items -> array of each word or character
//         // console.log(content);
//         // console.log("page : ", pageNum);
//         // console.log("data ", strings);
//         fullText += strings.join(' ') + '\n';
//     }

//     return fullText;
// }

// function extractAadhaarDetails(text) {
//     const result = {};

//     // Extract name after "To"
//     const nameMatch = text.match(/To\s+([A-Za-z]+)/);
//     result.name = nameMatch ? nameMatch[1] : null;

//     // Extract address from "C / O" to "PIN Code" or up to "Rajasthan - 335001"
//     const addressMatch = text.match(/C\s*\/\s*O\s*:(.*?)(?:PIN Code\s*:\s*\d{6}|Rajasthan\s*-\s*\d{6})/);
//     result.address = addressMatch ? "C / O:" + addressMatch[1].trim() : null;

//     // Extract mobile number
//     const mobileMatch = text.match(/Mobile\s*:\s*(\d{10})/);
//     result.mobile = mobileMatch ? mobileMatch[1] : null;

//     // Extract DOB
//     const dobMatch = text.match(/DOB\s*:\s*(\d{2}\/\d{2}\/\d{4})/);
//     result.dob = dobMatch ? dobMatch[1] : null;

//     // Extract Gender (Male/Female)
//     const genderMatch = text.match(/DOB\s*:\s*\d{2}\/\d{2}\/\d{4}\s*\/\s*(MALE|FEMALE|OTHER)/i);
//     result.gender = genderMatch ? genderMatch[1].toUpperCase() : null;

//     return result;
// }


const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { createCanvas } = require('canvas');

const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');
const cors = require("cors");
const { PDFDocument } = require('pdf-lib');
const sharp = require('sharp');
const Jimp = require('jimp');
const { BrowserQRCodeReader } = require('@zxing/library');

const app = express();
app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.post('/upload-adhaar', upload.single('aadhaarPdf'), async (req, res) => {
    try {
        const filePath = req.file.path;
        const password = 'KASH2005';
        const text = await extractTextFromPdf(filePath, password);
        const userDetails = extractAadhaarDetails(text);
        console.log(userDetails);

        const qrImagePath = await extractQRImageFromPDF(filePath, 'KASH2005');

        console.log(qrImagePath);
        const qrData = await decodeQRCodeFromImage(qrImagePath);

        // console.log("✅ Aadhaar text:", text);
        // console.log("✅ Extracted user details:", userDetails);
        // console.log("✅ Decoded QR content:", qrData);

        res.json({
            message: 'Aadhaar processed successfully',
            userDetails,
            // qrData
        });

    } catch (err) {
        console.error('❌ Error:', err);
        res.status(500).json({ error: 'Failed to process Aadhaar PDF' });
    }
});

app.listen(3000, () => {
    console.log('🚀 Server running on http://localhost:3000');
});


// ----------------------
// 🔍 Extract Text from PDF
// ----------------------
async function extractTextFromPdf(path, password) {
    const rawData = new Uint8Array(fs.readFileSync(path));
    const loadingTask = pdfjsLib.getDocument({ data: rawData, password });
    const pdfDocument = await loadingTask.promise;

    let fullText = '';
    const numPages = pdfDocument.numPages;

    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const page = await pdfDocument.getPage(pageNum);
        const content = await page.getTextContent();
        const strings = content.items
            .map(item => item.str)
            .filter(str =>
                /^[\x00-\x7F]*$/.test(str) &&
                str.trim().length > 0
            );
        fullText += strings.join(' ') + '\n';
    }

    return fullText;
}


// ----------------------
// 🔍 Extract Basic User Details
// ----------------------
function extractAadhaarDetails(text) {
    const result = {};
    const nameMatch = text.match(/To\s+([A-Za-z]+)/);
    result.name = nameMatch ? nameMatch[1] : null;

    const addressMatch = text.match(/C\s*\/\s*O\s*:(.*?)(?:PIN Code\s*:\s*\d{6}|Rajasthan\s*-\s*\d{6})/);
    result.address = addressMatch ? "C / O:" + addressMatch[1].trim() : null;

    const mobileMatch = text.match(/Mobile\s*:\s*(\d{10})/);
    result.mobile = mobileMatch ? mobileMatch[1] : null;

    const dobMatch = text.match(/DOB\s*:\s*(\d{2}\/\d{2}\/\d{4})/);
    result.dob = dobMatch ? dobMatch[1] : null;

    const genderMatch = text.match(/DOB\s*:\s*\d{2}\/\d{2}\/\d{4}\s*\/\s*(MALE|FEMALE|OTHER)/i);
    result.gender = genderMatch ? genderMatch[1].toUpperCase() : null;

    return result;
}


// ----------------------
// 🧊 Extract QR Code Image from PDF
// ----------------------
async function extractQRImageFromPDF(pdfPath, password = 'KASH2005') {
    const rawData = new Uint8Array(fs.readFileSync(pdfPath));

    const loadingTask = pdfjsLib.getDocument({
        data: rawData,
        password: password
    });

    const pdfDocument = await loadingTask.promise;
    const page = await pdfDocument.getPage(1);

    const viewport = page.getViewport({ scale: 2 }); // Higher scale = better resolution
    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext('2d');

    const renderContext = {
        canvasContext: context,
        viewport: viewport
    };

    await page.render(renderContext).promise;

    const fullImageBuffer = canvas.toBuffer(); // whole page image

    // 🟡 Crop bottom-right (adjust as needed for different Aadhaar styles)
    const qrBuffer = await sharp(fullImageBuffer)
        .extract({
            left: Math.floor(viewport.width * 0.65),
            top: Math.floor(viewport.height * 0.70),
            width: Math.floor(viewport.width * 0.30),
            height: Math.floor(viewport.height * 0.28)
        })
        .toBuffer();

    const outputPath = path.join('uploads', `qr-${Date.now()}.png`);
    fs.writeFileSync(outputPath, qrBuffer);

    return outputPath;
}

// const { BrowserQRCodeReader } = require('@zxing/library');
// const { Image } = require('@zxing/library');
// ----------------------
// 🔎 Decode QR Code from Extracted Image
const { readFile } = require('fs/promises');
const { BinaryBitmap, BarcodeFormat, HybridBinarizer, RGBLuminanceSource, DecodeHintType, MultiFormatReader } = require('@zxing/library');
// ----------------------
async function decodeQRCodeFromImage(imagePath) {
    try {
        // Step 1: Read and preprocess the image
        const imageBuffer = await sharp(imagePath)
            .resize({ width: 300, height: 300 }) // upscale to readable size
            .grayscale()
            .flatten({ background: '#ffffff' }) // remove transparency
            .toBuffer();

        const { data, info } = await sharp(imageBuffer).raw().toBuffer({ resolveWithObject: true });

        // Step 2: ZXing decode
        const luminanceSource = new RGBLuminanceSource(data, info.width, info.height);
        const binaryBitmap = new BinaryBitmap(new HybridBinarizer(luminanceSource));
        const reader = new MultiFormatReader();

        reader.setHints(new Map([
            [3, [BarcodeFormat.QR_CODE]] // Decode only QR codes
        ]));

        const result = reader.decode(binaryBitmap);
        return result.getText();
    } catch (err) {
        console.error("❌ Error: Failed to decode QR Code:", err.message);
        return null;
    }

}


