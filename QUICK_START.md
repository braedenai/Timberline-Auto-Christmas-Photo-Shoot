# 🎄 Quick Start Guide - Christmas Card Creator

Welcome! This guide will get you from zero to deployed in under 10 minutes.

---

## 🎯 What You're Building

A web app where customers can:
1. Take/upload a photo at your dealership
2. Choose a festive background (Alpine, Workshop, or Village)
3. AI transforms their photo into a Christmas card
4. Download and share their festive photo

**Access via QR code** - customers scan and upload instantly!

---

## ⚡ Super Quick Deploy (5 Minutes)

### Step 1: Get Your API Key (1 min)
1. Go to https://aistudio.google.com/app/apikey
2. Sign in with Google
3. Click "Create API Key"
4. Copy the key (starts with `AIza...`)

### Step 2: Push to GitHub (1 min)
```bash
cd /workspace
git add .
git commit -m "Deploy Christmas card creator"
git push origin main
```

If you don't have a GitHub repo yet:
- Go to https://github.com/new
- Create repo named `christmas-card-creator`
- Follow GitHub's push instructions

### Step 3: Deploy to Vercel (2 min)
1. Go to https://vercel.com (sign up with GitHub)
2. Click **"Add New Project"**
3. Import your `christmas-card-creator` repo
4. **IMPORTANT:** Add environment variable:
   - Key: `GEMINI_API_KEY`
   - Value: (paste your API key)
5. Click **"Deploy"**
6. Wait 60 seconds ⏱️

### Step 4: Create QR Code (1 min)
1. Copy your Vercel URL: `https://your-app.vercel.app`
2. Go to https://www.qr-code-generator.com/
3. Paste URL, generate, download
4. Print and display at dealership!

---

## 📱 You're Live!

Your app is now:
- ✅ Deployed securely
- ✅ API key protected (not in code)
- ✅ Accessible via URL
- ✅ Ready for QR code

---

## 📚 More Info

- **Secure Setup Details:** See `SECURE_DEPLOYMENT_GUIDE.md`
- **Local Development:** See `LOCAL_DEVELOPMENT.md`
- **How It Works:** See `README.md`

---

## 🔒 Why This is Secure

Unlike many tutorials that put API keys in HTML:
- ❌ **BAD:** API key in `index.html` (anyone can steal it)
- ✅ **GOOD:** API key in Vercel environment (hidden from users)

Your setup uses a **serverless function** as a secure proxy:
```
Customer → Your Website → Your Server Function → Google AI
                      (API key hidden here)
```

Users never see your API key! 🎉

---

## 💰 Cost

**Free tiers:**
- Vercel: Free (100GB/month)
- Google Gemini: Check https://ai.google.dev/pricing

**Recommendation:** Set up billing alerts in Google Cloud Console.

---

## 🎅 Troubleshooting

**"Server configuration error"**
→ You forgot to add `GEMINI_API_KEY` in Vercel settings
→ Go to Vercel Dashboard → Settings → Environment Variables → Add it → Redeploy

**QR code doesn't work**
→ Make sure you're using the HTTPS URL (not HTTP)
→ Test the URL in a browser first

**Can't find the app**
→ Check Vercel Dashboard for your deployment URL

---

## 🎯 Next Steps

1. **Test it** - Upload a photo, generate a card
2. **Print QR code** - At least 4x4 inches
3. **Display prominently** - With instructions
4. **Monitor usage** - Check Vercel and Google Cloud dashboards
5. **Share on social** - Encourage customers to post their cards

---

## 📞 Need Help?

- **Detailed guides:** Check the other .md files in this folder
- **Vercel docs:** https://vercel.com/docs
- **Google AI docs:** https://ai.google.dev/docs

---

Merry Christmas! 🎄✨

Time to create some holiday magic! 🎅
