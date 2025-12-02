/**
 * List all available Gemini models for your API key
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
    
    // List all available models
    const models = await genAI.listModels();
    
    return res.status(200).json({
      success: true,
      totalModels: models.length,
      models: models.map(model => ({
        name: model.name,
        displayName: model.displayName,
        description: model.description,
        supportedMethods: model.supportedGenerationMethods,
        inputTokenLimit: model.inputTokenLimit,
        outputTokenLimit: model.outputTokenLimit,
      })),
      availableForImageGeneration: models.filter(m => 
        m.supportedGenerationMethods?.includes('generateContent') &&
        m.description?.toLowerCase().includes('image')
      ).map(m => m.name)
    });
    
  } catch (error) {
    console.error('Error listing models:', error);
    return res.status(500).json({ 
      error: error.message,
      details: 'Failed to list models'
    });
  }
}
