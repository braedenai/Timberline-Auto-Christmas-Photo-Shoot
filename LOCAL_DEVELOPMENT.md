# 💻 Local Development Guide

If you want to test your app locally before deploying, follow these steps.

---

## 📋 Prerequisites

- Node.js (v18 or later) - Download from https://nodejs.org
- Your Google Gemini API key

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd /workspace
npm install
```

This installs:
- `@google/generative-ai` - Google's Gemini SDK
- Vercel will automatically install these when deploying

### 2. Set Up Environment Variables

Create a `.env` file in the workspace root:

```bash
# Copy the example
cp .env.example .env

# Edit the file
nano .env  # or use your favorite editor
```

Add your API key:
```
GEMINI_API_KEY=AIzaSy...your-actual-key
```

**Important:** The `.env` file is in `.gitignore` and will **never** be committed to Git.

### 3. Install Vercel CLI

```bash
npm install -g vercel
```

### 4. Run Development Server

```bash
vercel dev
```

This starts a local server that:
- Serves your `index.html` file
- Runs the serverless function at `/api/generate`
- Loads environment variables from `.env`
- Simulates the production Vercel environment

### 5. Open in Browser

Open your browser and go to:
```
http://localhost:3000
```

Try uploading a photo and generating a Christmas card!

---

## 🧪 Testing

### Test the Frontend
1. Open http://localhost:3000
2. Upload a photo
3. Select a background
4. Click "Create Magic"
5. Verify the image generates correctly

### Test the API Endpoint Directly

Using curl:
```bash
# Save a test image as base64
base64 test-image.jpg > image-base64.txt

# Call the API (replace BASE64_DATA with actual data)
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "imageBase64": "BASE64_DATA_HERE",
    "background": "alpine",
    "mimeType": "image/jpeg"
  }'
```

### Test with Different Backgrounds
- `alpine` - Alpine Winter Wonderland
- `workshop` - Santa's Workshop
- `village` - Gingerbread Village

---

## 🛠️ Making Changes

### Update the Frontend (index.html)
1. Edit `index.html`
2. Refresh browser (Ctrl+R or Cmd+R)
3. Changes appear immediately

### Update the Backend (api/generate.js)
1. Edit `api/generate.js`
2. Save the file
3. Vercel dev will auto-reload the function
4. Test the changes

### Update Styles
All styling is in `index.html` using Tailwind CSS classes. Just edit and refresh!

---

## 📁 Project Structure

```
/workspace/
├── index.html                    # Frontend application
├── api/
│   └── generate.js              # Serverless function (backend)
├── package.json                 # Node.js dependencies
├── .env                         # Local environment variables (gitignored)
├── .env.example                 # Template for .env
├── vercel.json                  # Vercel configuration
├── .gitignore                   # Git ignore rules
├── SECURE_DEPLOYMENT_GUIDE.md   # Production deployment guide
└── LOCAL_DEVELOPMENT.md         # This file
```

---

## 🐛 Debugging

### View Serverless Function Logs

When running `vercel dev`, function logs appear in the terminal:
```
[api/generate] Received request...
[api/generate] Calling Gemini API...
[api/generate] Success!
```

### Common Issues

**Issue:** "GEMINI_API_KEY not found"
- Make sure `.env` file exists in `/workspace/`
- Verify the key name is exactly `GEMINI_API_KEY`
- Restart `vercel dev` after creating .env

**Issue:** "Port 3000 already in use"
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
vercel dev --listen 3001
```

**Issue:** Changes not appearing
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Restart `vercel dev`

---

## 🔄 Development Workflow

Recommended workflow:

1. **Make changes locally** using `vercel dev`
2. **Test thoroughly** with different photos and backgrounds
3. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
4. **Push to GitHub:**
   ```bash
   git push origin main
   ```
5. **Vercel auto-deploys** in 30-60 seconds
6. **Test production** at your Vercel URL

---

## 📦 Dependencies

Current dependencies in `package.json`:

```json
{
  "dependencies": {
    "@google/generative-ai": "^0.21.0"
  }
}
```

To update:
```bash
npm update
```

---

## 🎯 Environment Variables

### Local (.env file)
- Used when running `vercel dev`
- Never committed to Git
- Store your actual API key here

### Production (Vercel Dashboard)
- Set in Vercel project settings
- Encrypted and secure
- Used in production deployments

Both should have:
- `GEMINI_API_KEY` - Your Google Gemini API key

---

## 🚀 When Ready to Deploy

Once you're happy with local testing:

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Follow the deployment guide:**
   See `SECURE_DEPLOYMENT_GUIDE.md` for detailed instructions

---

## 💡 Pro Tips

1. **Keep `vercel dev` running** while developing
2. **Use browser DevTools** (F12) to debug JavaScript
3. **Check Network tab** to see API calls to `/api/generate`
4. **Test with various image sizes** and formats
5. **Try different backgrounds** to see results
6. **Monitor API usage** in Google Cloud Console

---

## 📚 Additional Resources

- Vercel Dev Docs: https://vercel.com/docs/cli#commands/dev
- Vercel Serverless Functions: https://vercel.com/docs/functions
- Google Gemini API: https://ai.google.dev/docs
- Tailwind CSS: https://tailwindcss.com/docs

---

Happy coding! 🎄✨
