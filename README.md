# 🎄 Timberline Auto Christmas Card Creator

A festive web app that uses Google's Gemini AI to transform customer photos into Christmas cards with magical backgrounds!

## ✨ Features

- 📸 Easy photo upload
- 🎨 Three festive backgrounds:
  - Alpine Winter Wonderland
  - Santa's Workshop
  - Gingerbread Village
- 🤖 AI-powered image transformation using Google Gemini
- 📥 Download generated Christmas cards
- 📱 Mobile-friendly design
- 🎁 Generation limit to control API costs

## 🚀 Quick Start

### For Development

1. Add your Google API key to `secrets/config.js`
2. Open `index.html` in a web browser

### For Production Deployment

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for complete instructions on deploying to Vercel.

## 📁 Project Structure

```
/workspace/
├── index.html              # Main application file
├── secrets/                # Local API key storage (gitignored)
│   ├── config.js          # Your API key goes here
│   └── README.md          # Setup instructions
├── .gitignore             # Protects secrets folder
├── .vercelignore          # Excludes files from deployment
├── vercel.json            # Vercel configuration
├── DEPLOYMENT_GUIDE.md    # Step-by-step deployment instructions
└── README.md              # This file
```

## 🔑 Getting Your API Key

1. Go to https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Create a new API key
4. Add it to your configuration

## 🎯 Use Case

Perfect for car dealerships during the holiday season! Customers can:
1. Take a photo at your dealership
2. Scan a QR code
3. Upload their photo to the web app
4. Get a festive AI-generated Christmas card
5. Download and share on social media

Great for customer engagement and holiday marketing! 🎅

## 🛠️ Technologies Used

- HTML5
- JavaScript (ES6 Modules)
- Tailwind CSS
- Font Awesome Icons
- Google Gemini AI API
- Vercel (for hosting)

## 📝 License

Created for Timberline Auto

## 🎅 Merry Christmas!

Made with ❤️ and AI magic
