# 🔒 Secure Deployment Guide - Christmas Card Creator

This guide shows you how to deploy your app **securely** with your API key protected on the server.

---

## 🎯 What's Different About This Secure Setup?

### ❌ **INSECURE** (Old Way - DON'T DO THIS):
- API key hardcoded in HTML
- Visible in browser source code
- Anyone can steal and abuse your key
- No control over usage

### ✅ **SECURE** (New Way - We Did This!):
- API key stored as environment variable on Vercel
- **Never** exposed to the browser
- Calls go through your serverless function
- You control the rate limits and usage

---

## 📋 Prerequisites

1. A GitHub account (free) - https://github.com
2. A Vercel account (free) - https://vercel.com
3. Your Google Gemini API key - https://aistudio.google.com/app/apikey

---

## 🚀 Deployment Steps

### Step 1: Push Code to GitHub

1. **Make sure you're in the workspace:**
   ```bash
   cd /workspace
   ```

2. **Check what's changed:**
   ```bash
   git status
   ```

3. **Add all files:**
   ```bash
   git add .
   ```

4. **Commit your changes:**
   ```bash
   git commit -m "Add secure serverless backend for Christmas card creator"
   ```

5. **Push to GitHub:**
   ```bash
   git push origin main
   ```

   **If you need to create a new repo:**
   - Go to https://github.com/new
   - Name it `christmas-card-creator`
   - Don't add README or .gitignore (you already have them)
   - Follow GitHub's instructions to push

---

### Step 2: Deploy to Vercel

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign up or log in (use GitHub account for easy integration)

2. **Import Your Repository:**
   - Click **"Add New Project"**
   - Click **"Import Git Repository"**
   - Select your `christmas-card-creator` repository
   - Click **"Import"**

3. **Configure Your Project:**
   - **Framework Preset:** Other (or leave as detected)
   - **Root Directory:** `./`
   - **Build Command:** *(leave empty)*
   - **Output Directory:** *(leave empty)*
   - **Install Command:** `npm install`

4. **⚠️ CRITICAL: Add Environment Variable**
   
   Before clicking "Deploy", scroll down to **"Environment Variables"** section:
   
   - Click **"Add"**
   - **Key:** `GEMINI_API_KEY`
   - **Value:** Paste your Google API key (starts with `AIza...`)
   - **Environment:** Select all (Production, Preview, Development)
   - Click **"Add"**

   ⚠️ **This is the most important step!** Without this, your app won't work.

5. **Deploy:**
   - Click **"Deploy"**
   - Wait 1-2 minutes for deployment to complete
   - You'll get a URL like: `https://christmas-card-creator-xyz.vercel.app`

---

### Step 3: Test Your Deployment

1. **Open your Vercel URL** in a browser
2. **Upload a test photo**
3. **Select a background** (Alpine, Workshop, or Village)
4. **Click "Create Magic"**
5. **Wait 10-20 seconds** for the AI to generate
6. **Download the result**

If everything works, you're good to go! 🎉

---

## 🔐 Security Features You Now Have

### 1. **Hidden API Key**
- Your API key is stored as an environment variable in Vercel
- It's **never** sent to the browser
- Users can't view it in the source code

### 2. **Serverless Function Proxy**
- All API calls go through `/api/generate` endpoint
- Your function validates requests before calling Gemini
- You can add rate limiting and abuse prevention

### 3. **Domain Restriction (Optional)**
After deployment, restrict your API key to your domain:

1. Go to https://console.cloud.google.com/apis/credentials
2. Find your API key
3. Click **"Edit"**
4. Under **"Application restrictions"**:
   - Select **"HTTP referrers (web sites)"**
   - Add: `https://your-actual-url.vercel.app/*`
   - Add: `https://*.vercel.app/*` (for preview deployments)
5. Click **"Save"**

Now your API key **only** works from your Vercel domain!

---

## 📱 Step 4: Create QR Code

### Option 1: Use the Built-in Generator

1. **Open the QR generator:**
   - Go to your workspace folder
   - Open `generate-qr.html` in a browser
   
2. **Generate your QR code:**
   - Paste your Vercel URL
   - Choose size (512x512 recommended)
   - Click "Generate QR Code"
   - Click "Download QR Code"

### Option 2: Use Online Tools

Popular QR code generators:
- https://www.qr-code-generator.com/ (recommended)
- https://qr.io/
- https://www.qrcode-monkey.com/

**Tips for better QR codes:**
- Add your Timberline Auto logo in the center
- Use a frame with text: "Scan for Christmas Card!"
- Make it at least 4x4 inches when printed
- Test scanning from different distances

---

## 🖨️ Step 5: Print and Display

### Recommended Setup:

```
┌─────────────────────────────────────┐
│   🎄 FREE CHRISTMAS CARDS! 🎄       │
│                                     │
│   1. Take your photo here 📸        │
│   2. Scan this QR code              │
│   3. Upload & create magic ✨       │
│   4. Download your card 🎁          │
│                                     │
│        [QR CODE HERE]               │
│                                     │
│   Compliments of Timberline Auto    │
└─────────────────────────────────────┘
```

**Printing Tips:**
- Use glossy paper for a professional look
- Minimum size: 8.5" x 11" (letter size)
- Larger is better for visibility
- Laminate it for durability
- Place at eye level in well-lit area

---

## 🔄 Updating Your App

Whenever you make changes to your code:

```bash
cd /workspace
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel will **automatically redeploy** in 30-60 seconds!

**Note:** Environment variables don't auto-update. If you need to change your API key:
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Update `GEMINI_API_KEY`
5. Redeploy (Settings → Deployments → Redeploy)

---

## 📊 Monitoring Usage

### Vercel Analytics (Free)
- Go to your Vercel dashboard
- View visitor count, page views, etc.
- See deployment history

### Google Cloud Console
- Go to https://console.cloud.google.com
- Check API usage and quotas
- Set up billing alerts (recommended)

### Generation Limits
The app currently limits users to **3 generations** per browser (stored in localStorage).

**To change this limit:**
1. Open `index.html`
2. Find line ~140: `let generationsLeft = parseInt(localStorage.getItem('timberlineGenerations')) || 3;`
3. Change `3` to your desired number
4. Commit and push

---

## 🆘 Troubleshooting

### Problem: "Server configuration error"
**Solution:** You forgot to add the `GEMINI_API_KEY` environment variable in Vercel.
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Add: `GEMINI_API_KEY` with your API key
- Redeploy

### Problem: "Failed to generate image"
**Possible causes:**
1. Check Vercel function logs (Dashboard → Deployments → Latest → Functions)
2. Check if you've exceeded Google API quota
3. Verify API key is valid

### Problem: QR code doesn't scan
**Solutions:**
- Make sure you're using the HTTPS URL (not HTTP)
- Increase QR code size
- Improve printing quality
- Test with multiple QR scanner apps

### Problem: Deployment failed
**Common fixes:**
1. Make sure `package.json` exists
2. Check that all files are committed
3. Look at build logs in Vercel dashboard

---

## 💰 Cost Considerations

### Free Tiers:
- **Vercel:** 100GB bandwidth/month (plenty for QR code traffic)
- **Google Gemini API:** Check current limits at https://ai.google.dev/pricing

### Recommendations:
1. Set up billing alerts in Google Cloud Console
2. Monitor usage weekly during busy periods
3. Consider increasing localStorage limit if needed
4. Have a backup plan if you hit limits

---

## 🎯 Best Practices

1. ✅ **Test thoroughly** before printing QR codes
2. ✅ **Monitor API usage** regularly
3. ✅ **Keep backup of environment variables** (in a password manager)
4. ✅ **Restrict API key to your domain** (see Security section)
5. ✅ **Have good lighting** at photo location
6. ✅ **Provide a festive backdrop** (optional but improves results)
7. ✅ **Train staff** on how to help customers

---

## 🎄 Marketing Ideas

- **Social Media:** Post examples and encourage sharing
- **Email Campaign:** Send QR code to customer list
- **In-Store Signage:** Multiple locations throughout dealership
- **Holiday Cards:** Include QR code in mail campaigns
- **Contest:** Best Christmas card wins a prize

---

## 📞 Need Help?

Common resources:
- Vercel Documentation: https://vercel.com/docs
- Google AI Documentation: https://ai.google.dev/docs
- GitHub Issues: Create an issue in your repo

---

## ✨ You're All Set!

Your Christmas Card Creator is now:
- ✅ Securely deployed
- ✅ API key protected
- ✅ Accessible via QR code
- ✅ Ready for customers

Enjoy spreading holiday cheer! 🎅🎄✨
