# speed-decaying-slideshow-template

This TypeScript project defines a slideshow template that mimics a TikTok-style video where images transition rapidly at first, then slow down gradually. Transitions use a fade effect.

## 🎥 Reference Video
TikTok: [https://vm.tiktok.com/ZMSKjwUMf/](https://vm.tiktok.com/ZMSKjwUMf/)

## 📦 Setup
```bash
npm install
npm start
```

## 📄 Features
- Images change quickly at first, then slow down gradually.
- Uses a smooth fade transition between images.
- Easy to customize by swapping image paths.

## 🚀 How to use this template

1. **Open the project folder** in your code editor (like VS Code).
2. **Replace the images** in the slideshow by editing the image paths in the **index.ts** file.
3. **run it using terminal using "npm start"** 

## 🧠 Structure
Each step includes:
- `image`: string path
- `duration`: in seconds
- `effect`: optional transition (e.g., fade, zoom)