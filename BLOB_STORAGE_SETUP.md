# 📦 Vercel Blob Storage Setup Guide

This guide will help you upload your resume and profile photo to Vercel Blob Storage.

## 🚀 Quick Start

### Step 1: Get Your Vercel Blob Token

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project (or create a new one)
3. Navigate to **Storage** tab
4. Click **Create Database**
5. Select **Blob** storage
6. Name it `portfolio-store` (as you already created)
7. Copy the `BLOB_READ_WRITE_TOKEN` that appears

### Step 2: Set Up Environment Variable

Create a `.env` file in your project root:

```bash
echo "BLOB_READ_WRITE_TOKEN=your_actual_token_here" > .env
```

Or manually create `.env` and paste:
```
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_XXXXXXXXXXXX
```

### Step 3: Upload Files

Run the upload script:

```bash
npm run upload-blob
```

This will upload:
- `Sanidhya Kumar Singh_Doc-5 copy.pdf` → `Sanidhya_Kumar_Singh_Resume.pdf`
- `DSC_0491 copy.JPG` → `Sanidhya_Kumar_Singh_Photo.jpg`

### Step 4: Save the URLs

After upload completes, **copy the URLs** that are displayed. They will look like:

```
https://xxxxx.public.blob.vercel-storage.com/Sanidhya_Kumar_Singh_Resume.pdf
https://xxxxx.public.blob.vercel-storage.com/Sanidhya_Kumar_Singh_Photo.jpg
```

### Step 5: Update Your Portfolio

I'll help you add these URLs to your portfolio components once you have them!

## 📝 What Will Be Added

Once you have the URLs, we'll update:

1. **Hero Component** - Add profile photo
2. **Resume Button** - Link to your resume
3. **Contact Section** - Resume download option

## 🔒 Security Note

- `.env` files are already added to `.gitignore`
- Your token won't be committed to GitHub
- The uploaded files will be publicly accessible via their URLs (which is what you want!)

## ❓ Need Help?

If you encounter any errors, the script will guide you on what to do next!
