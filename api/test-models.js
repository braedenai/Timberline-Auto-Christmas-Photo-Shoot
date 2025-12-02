/**
 * Test different Gemini models to see which ones work
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Try common model names
    const modelsToTest = [
      "gemini-pro",
      "gemini-1.5-pro",
      "gemini-1.5-flash",
      "gemini-1.0-pro",
      "models/gemini-pro",
      "models/gemini-1.5-pro",
      "models/gemini-1.5-flash"
    ];
    
    const results = [];
    
    for (const modelName of modelsToTest) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        
        // Try a simple text generation
        const result = await model.generateContent("Say 'hello' in one word");
        const response = await result.response;
        const text = response.text();
        
        results.push({
          model: modelName,
          status: "✅ WORKS",
          response: text
        });
        
      } catch (error) {
        results.push({
          model: modelName,
          status: "❌ FAILED",
          error: error.message
        });
      }
    }
    
    const workingModels = results.filter(r => r.status === "✅ WORKS");
    
    return res.status(200).json({
      success: true,
      apiKeyWorks: true,
      testResults: results,
      workingModels: workingModels.map(m => m.model),
      recommendation: workingModels.length > 0 ? 
        `Use this model: ${workingModels[0].model}` : 
        'No working models found. Your API key may not have access to Gemini.'
    });
    
  } catch (error) {
    console.error('Error testing models:', error);
    return res.status(500).json({ 
      error: error.message,
      details: 'Failed to test models'
    });
  }
}
