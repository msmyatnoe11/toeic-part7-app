const express = require('express');
const { GoogleGenAI } = require('@google/genai');
const app = express();
app.use(express.json());
app.use(express.static(__dirname));

const ai = new GoogleGenAI({
  vertexai: true,
  project: 'project-98e2578c-25f1-4634-bfa',
  location: 'us-central1'
});

app.post('/generate', async (req, res) => {
  const { topic } = req.body;
  const prompt = `Write a short TOEIC Part 7 style reading passage (100-150 words) about "${topic}" in a business context, plus 2 multiple-choice comprehension questions (4 options each, labeled A-D). For each question include the correct answer letter, an English explanation, and a short Myanmar explanation.
Return ONLY valid JSON, no markdown formatting, no extra text, in exactly this shape:
{"type":"Business Email","passage":"...","questions":[{"q":"...","options":["A. ...","B. ...","C. ...","D. ..."],"answer":"B","explanation":"...","myanmar":"..."}]}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt
    });
    let text = response.text.replace(/```json|```/g, '').trim();
    res.json(JSON.parse(text));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Generation failed' });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));