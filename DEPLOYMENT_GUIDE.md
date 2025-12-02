# 🚀 Deploy Your Christmas Card Creator to Vercel

This guide will help you deploy your app online so customers can access it via QR code!

---

## 📋 Prerequisites

1. A GitHub account (free)
2. A Vercel account (free - sign up at https://vercel.com)
3. Your Google Gemini API key

---

## 🔑 Step 1: Add Your API Key to the Code

**BEFORE deploying**, you need to add your API key directly to the `index.html` file:

1. Open `/workspace/index.html`
2. Find line ~127 that says:
   ```javascript
   const API_KEY = "YOUR_GEMINI_API_KEY_HERE";
   ```
3. Replace `YOUR_GEMINI_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_KEY = "AIzaSyD...your-actual-key";
   ```
4. Save the file

⚠️ **Important**: This is safe because:
- The `secrets/` folder (with your local key) is in `.vercelignore` and won't be deployed
- Your GitHub repo has `.gitignore` protecting the secrets folder
- The API key in production will be in the deployed code, which is normal for client-side apps
- You can restrict your API key in Google Cloud Console to only work from your Vercel domain

---

## 📤 Step 2: Push Code to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   cd /workspace
   git add .
   git commit -m "Prepare Christmas Card Creator for deployment"
   git push origin main
   ```

2. **If you need to create a new GitHub repo**:
   - Go to https://github.com/new
   - Create a new repository (name it something like `christmas-card-creator`)
   - Follow GitHub's instructions to push your code

---

## 🌐 Step 3: Deploy to Vercel

### Method A: Deploy via Vercel Website (Easiest)

1. **Go to Vercel**: https://vercel.com
2. **Sign up/Log in** (you can use your GitHub account)
3. **Click "Add New Project"**
4. **Import your GitHub repository**:
   - Click "Import Git Repository"
   - Select your `christmas-card-creator` repo
   - Click "Import"
5. **Configure Project** (use these settings):
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: *(leave empty)*
   - Output Directory: *(leave empty)*
6. **Click "Deploy"**
7. **Wait 30-60 seconds** for deployment to complete

### Method B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from your workspace
cd /workspace
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - What's your project's name? christmas-card-creator
# - In which directory is your code? ./
# - Want to override settings? No
```

---

## 🎉 Step 4: Get Your Live URL

After deployment, Vercel will give you a URL like:
```
https://christmas-card-creator-abc123.vercel.app
```

**Test it:**
- Open the URL in your browser
- Upload a photo
- Try generating a Christmas card
- Make sure everything works!

---

## 📱 Step 5: Create Your QR Code

### Option A: Use a Free Online Generator

1. Go to: https://www.qr-code-generator.com/
2. Paste your Vercel URL
3. Customize the QR code:
   - Add your Timberline Auto logo in the center
   - Choose your brand colors
   - Add a frame with text like "Create Your Christmas Card!"
4. Download the QR code as PNG or SVG
5. Print it and display at your dealership!

### Option B: Use This Quick QR Generator

I can help you generate a QR code once you have your Vercel URL. Just paste it here and I'll create one for you!

---

## 🎯 Usage at Your Dealership

1. **Print the QR code** (large, high quality)
2. **Display it prominently** with instructions:
   ```
   🎄 GET YOUR FREE CHRISTMAS CARD! 🎄
   
   1. Snap a photo here
   2. Scan this QR code
   3. Upload your photo
   4. Download your festive card!
   ```
3. **Ensure good lighting** where customers take photos
4. **Provide a backdrop** (optional but makes better photos)

---

## 🔧 Updating Your Site

Whenever you make changes:

```bash
cd /workspace
git add .
git commit -m "Update Christmas card creator"
git push origin main
```

Vercel will **automatically redeploy** in 30-60 seconds!

---

## 🛡️ Security: Restrict Your API Key (Recommended)

To prevent others from using your API key:

1. Go to: https://console.cloud.google.com/apis/credentials
2. Find your API key
3. Click "Edit"
4. Under "Application restrictions":
   - Select "HTTP referrers (web sites)"
   - Add: `https://your-actual-url.vercel.app/*`
   - Add: `https://*.vercel.app/*` (for preview deployments)
5. Save

Now your API key will only work from your Vercel domain!

---

## 📊 Monitor Usage

- **Vercel Dashboard**: https://vercel.com/dashboard - see visitor analytics
- **Google Cloud Console**: https://console.cloud.google.com - monitor API usage
- **Generation Limit**: The app currently allows 3 generations per user (stored in browser localStorage)

---

## 🆘 Troubleshooting

**Issue**: "API key is invalid"
- Make sure you updated the API key in `index.html` before deploying
- Check that your API key starts with `AIza`

**Issue**: Site shows old version
- Check Vercel dashboard to ensure deployment completed
- Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Issue**: QR code doesn't work
- Make sure you're using the HTTPS URL (not HTTP)
- Test the URL in a browser first
- Regenerate the QR code if needed

---

## 💡 Tips for Success

1. **Test thoroughly** before printing QR codes
2. **Keep the API key usage under free tier limits** (monitor in Google Cloud Console)
3. **Have a backup plan** (test on your phone before customers arrive)
4. **Consider increasing the generation limit** if needed (edit line ~139 in index.html)
5. **Set up custom domain** (optional): Buy a domain and connect it in Vercel settings

---

Need help? Feel free to ask! 🎄✨
