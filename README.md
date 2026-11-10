# TOEIC Part 7 Practice

An AI-powered TOEIC Part 7 reading practice app. Pick a passage type and get a fresh reading passage with comprehension questions, generated on the spot by Google's Gemini AI (Vertex AI) — with answers and explanations in English and Myanmar.

## What it does

- 6 passage types to choose from: Business Email, Advertisement, Office Memo, News Article, Formal Letter, Notice/Announcement — plus a Random option
- Generates a 100–150 word TOEIC Part 7 style passage on a business topic
- 2 multiple-choice questions (A–D) per passage
- Shows the correct answers with an English explanation and a short Myanmar explanation

## How to use

1. Open the app and choose a passage type (or tap **🎲 Random**).
2. Click **Generate New Passage + Questions**.
3. Read the passage and answer the 2 questions.
4. Check your answers and read the English and Myanmar explanations.

## Run it yourself

Requirements: Node.js and a Google Cloud project with Vertex AI enabled.

```bash
npm install
node server.js
# then open http://localhost:8080
```

Or with Docker (this is how it is deployed on Google Cloud Run):

```bash
docker build -t toeic-part7-app .
docker run -p 8080:8080 toeic-part7-app
```

## Tech

- Node.js + Express
- Google Vertex AI (Gemini 2.5 Flash)
- Docker · Google Cloud Run
- HTML/CSS/JavaScript frontend

---
Built by [Myat Noe](https://github.com/msmyatnoe11) · [Portfolio](https://msmyatnoe11.github.io/)
