/**
 * Simple test endpoint to check if environment variables are set
 */

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const hasApiKey = !!process.env.GEMINI_API_KEY;
  const apiKeyPrefix = process.env.GEMINI_API_KEY ? 
    process.env.GEMINI_API_KEY.substring(0, 6) + '...' : 
    'NOT SET';

  return res.status(200).json({
    status: 'API endpoint is working! ✅',
    environmentVariables: {
      GEMINI_API_KEY_exists: hasApiKey,
      GEMINI_API_KEY_prefix: apiKeyPrefix,
      message: hasApiKey ? 
        'API key is set correctly!' : 
        'ERROR: GEMINI_API_KEY is missing! Add it in Vercel Settings → Environment Variables'
    },
    nodeVersion: process.version,
    timestamp: new Date().toISOString()
  });
}
