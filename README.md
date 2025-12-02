# 🎄 Timberline Auto Christmas Card Creator

A festive web app that uses Google's Gemini AI to transform customer photos into Christmas cards with magical backgrounds!

Perfect for car dealerships - customers scan a QR code, upload their photo, and get an AI-generated Christmas card instantly!

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
- 🔒 **Secure** - API key never exposed to clients

## 🚀 Quick Start

**New to this project?** Start here: [QUICK_START.md](QUICK_START.md) - Deploy in 5 minutes!

### For Production Deployment

See [SECURE_DEPLOYMENT_GUIDE.md](SECURE_DEPLOYMENT_GUIDE.md) for detailed secure deployment instructions.

### For Local Development

See [LOCAL_DEVELOPMENT.md](LOCAL_DEVELOPMENT.md) for testing locally.

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

## 🔒 Security Features

This project implements **best practices** for API key security:

- ✅ **Serverless Function Proxy** - API calls go through your backend
- ✅ **Environment Variables** - API key stored securely in Vercel
- ✅ **Never Exposed** - Key never sent to browser or visible in source code
- ✅ **Domain Restriction** - Optional: Restrict API key to your domain only

**Unlike many tutorials**, this project does NOT hardcode API keys in HTML!

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
