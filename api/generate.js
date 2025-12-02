/**
 * Vercel Serverless Function - Generate Christmas Card
 * 
 * This function acts as a secure proxy to the Google Gemini API.
 * Your API key is stored as an environment variable and never exposed to clients.
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

// Background prompts
const BACKGROUNDS = {
  'alpine': "Transform this into a festive photo in an Alpine winter wonderland. Keep the people exactly as they are but place them in front of snow-covered pine trees, glowing warm string lights, and mountains. The lighting should be soft and magical.",
  'workshop': "Transform this into a festive photo outside Santa's workshop. Keep the people exactly as they are but place them in a rustic wooden setting with snow on the roof, colorful lights, and blurred elves in the background.",
  'village': "Transform this into a festive photo in a Gingerbread Christmas Village. Keep the people exactly as they are but place them on a street with gingerbread storefronts, candy canes, and gentle falling snow."
};

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers - restrict to your domain in production
  res.setHeader('Access-Control-Allow-Origin', '*'); // Change to your domain after deployment
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Get API key from environment variable
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error('GEMINI_API_KEY not found in environment variables');
      return res.status(500).json({ 
        error: 'Server configuration error. Please contact administrator.' 
      });
    }

    // Parse request body
    const { imageBase64, background, mimeType } = req.body;

    // Validate inputs
    if (!imageBase64 || !background) {
      return res.status(400).json({ 
        error: 'Missing required fields: imageBase64 and background' 
      });
    }

    if (!BACKGROUNDS[background]) {
      return res.status(400).json({ 
        error: 'Invalid background selection' 
      });
    }

    // Initialize Gemini API
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Use Gemini 1.5 Pro which has better multimodal capabilities
    // Note: Gemini models generate text descriptions, not actual images
    // For true image generation, you'd need Imagen API
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-pro",
      generationConfig: {
        temperature: 1,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 8192,
      }
    });

    // Call Gemini API
    const result = await model.generateContent([
      BACKGROUNDS[background],
      {
        inlineData: {
          mimeType: mimeType || "image/jpeg",
          data: imageBase64
        }
      }
    ]);

    const response = await result.response;
    
    // Extract image from response
    const parts = response.candidates?.[0]?.content?.parts;
    const imagePart = parts?.find(part => part.inlineData);

    if (!imagePart) {
      // If no image returned, check for text response
      const textPart = parts?.find(part => part.text);
      const errorText = textPart?.text || "No image returned from AI";
      
      return res.status(500).json({ 
        error: `AI generation failed: ${errorText}` 
      });
    }

    // Return the generated image
    return res.status(200).json({
      success: true,
      image: {
        mimeType: imagePart.inlineData.mimeType,
        data: imagePart.inlineData.data
      }
    });

  } catch (error) {
    console.error('=== ERROR DETAILS ===');
    console.error('Error message:', error.message);
    console.error('Error status:', error.status);
    console.error('Error code:', error.code);
    console.error('Full error:', JSON.stringify(error, null, 2));
    console.error('===================');
    
    // Provide more helpful error messages
    let errorMessage = 'Failed to generate image. Please try again.';
    
    if (error.message?.includes('API_KEY_INVALID') || error.message?.includes('invalid')) {
      errorMessage = 'API key is invalid. Please check your configuration.';
    } else if (error.message?.includes('PERMISSION_DENIED') || error.message?.includes('permission')) {
      errorMessage = 'API permission denied. Please enable the Gemini API in Google Cloud Console.';
    } else if (error.message?.includes('QUOTA_EXCEEDED') || error.message?.includes('quota')) {
      errorMessage = 'API quota exceeded. Please check your Google Cloud Console.';
    } else if (error.message?.includes('models/') || error.message?.includes('not found')) {
      errorMessage = `Model not available: ${error.message}. The model might not exist or you may need to enable it.`;
    } else if (error.status === 404) {
      errorMessage = 'AI model not available. Please contact support.';
    }
    
    return res.status(500).json({ 
      error: errorMessage,
      details: error.message,
      errorCode: error.code || error.status
    });
  }
}
