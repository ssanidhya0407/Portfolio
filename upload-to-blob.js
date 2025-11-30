import { put } from '@vercel/blob';
import fs from 'fs';

async function uploadFiles() {
    try {
        // Check if BLOB_READ_WRITE_TOKEN is set
        if (!process.env.BLOB_READ_WRITE_TOKEN) {
            console.error('❌ Error: BLOB_READ_WRITE_TOKEN environment variable is not set.');
            console.log('\n📝 To set it up:');
            console.log('1. Go to your Vercel project dashboard');
            console.log('2. Navigate to Storage > Create Database > Blob');
            console.log('3. Copy the BLOB_READ_WRITE_TOKEN');
            console.log('4. Run: export BLOB_READ_WRITE_TOKEN="your-token-here"');
            console.log('5. Or create a .env file with: BLOB_READ_WRITE_TOKEN=your-token-here\n');
            process.exit(1);
        }

        console.log('🚀 Starting upload to Vercel Blob Storage...\n');

        // Upload Resume PDF
        console.log('📄 Uploading resume...');
        const resumeFile = fs.readFileSync('./Sanidhya Kumar Singh_Doc-5 copy.pdf');
        const resumeBlob = await put('Sanidhya_Kumar_Singh_Resume.pdf', resumeFile, {
            access: 'public',
            token: process.env.BLOB_READ_WRITE_TOKEN,
        });
        console.log('✅ Resume uploaded:', resumeBlob.url);

        // Upload Profile Photo
        console.log('\n📸 Uploading profile photo...');
        const photoFile = fs.readFileSync('./DSC_0491 copy.JPG');
        const photoBlob = await put('Sanidhya_Kumar_Singh_Photo.jpg', photoFile, {
            access: 'public',
            token: process.env.BLOB_READ_WRITE_TOKEN,
        });
        console.log('✅ Photo uploaded:', photoBlob.url);

        // Display URLs
        console.log('\n✨ Upload Complete! Your public URLs are:\n');
        console.log('📄 Resume URL:');
        console.log(resumeBlob.url);
        console.log('\n📸 Photo URL:');
        console.log(photoBlob.url);

        console.log('\n💡 Next Steps:');
        console.log('Copy these URLs and update your portfolio components to reference them!');

    } catch (error) {
        console.error('❌ Upload failed:', error.message);
        process.exit(1);
    }
}

uploadFiles();
