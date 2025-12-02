# How to Run Your Christmas Card Creator

## 🚀 Quick Start

### Method 1: Open Directly in Browser (Easiest)

1. **Navigate to your workspace folder** in your file explorer:
   - Go to: `/workspace/`

2. **Open the HTML file:**
   - Right-click on `Main Code` file
   - Select "Open with" → Choose your web browser (Chrome, Firefox, Safari, Edge, etc.)
   - OR simply double-click `Main Code` - it should open in your default browser

3. **Start creating!**
   - Upload a photo
   - Choose a festive background (Alpine Winter, Santa's Workshop, or Gingerbread Village)
   - Click "Create Magic" button
   - Wait for the AI to generate your Christmas card
   - Download your festive photo!

---

### Method 2: Using a Local Web Server (If Method 1 doesn't work)

Sometimes browsers have security restrictions when opening HTML files directly. If you get errors, use a local server:

#### Option A: Using Python (if installed)
```bash
cd /workspace
python3 -m http.server 8000
```
Then open: http://localhost:8000/Main%20Code

#### Option B: Using Node.js (if installed)
```bash
cd /workspace
npx http-server -p 8000
```
Then open: http://localhost:8000/Main%20Code

---

## ⚠️ Important Notes

1. **API Key**: Make sure your `secrets/config.js` file has your actual Google API key:
   ```javascript
   const CONFIG = {
       GeminiAPIKey: "AIzaSy...your-actual-key..."
   };
   ```

2. **File Structure**: Keep these files in the same locations:
   - `/workspace/Main Code` (main HTML file)
   - `/workspace/secrets/config.js` (your API key)
   - `/workspace/timberline-logo.png` (if you have a logo)

3. **Internet Connection**: You need an active internet connection for:
   - Loading external libraries (Tailwind CSS, Font Awesome, Google GenAI)
   - Making API calls to Google Gemini

4. **Generation Limit**: The app allows 3 free generations (stored in browser localStorage)

---

## 🐛 Troubleshooting

- **"Please add your Google API key" error**: Check that your API key is correctly added in `secrets/config.js`
- **"Failed to fetch" error**: Check your internet connection
- **Blank page**: Open browser console (F12) to see error messages
- **Files not loading**: Use Method 2 (local web server) instead

---

## 📱 Browser Compatibility

Works best on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)

Enjoy creating festive Christmas cards! 🎄✨
