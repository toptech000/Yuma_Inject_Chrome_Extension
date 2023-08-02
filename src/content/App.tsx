import React from 'react';
import openai, { GPT_MODEL } from '@/utils/openai';

const summarizeConversation = async (origin: string) => {
  const prompt = `Summarize the conversation ${origin}`;
  const response = await openai.createCompletion({
    model: GPT_MODEL,
    prompt: prompt,
    max_tokens: 50,
    temperature: 0.7
  });

  return response.data.choices[0].text?.trim();
};

export default function App() {
  
  return (
    <div>
      Hello World      
    </div>
  );
}
