# AIDI-Assignment-5
# Country Insights App

## Features
- Search countries
- View country profiles
- Compare 2 countries
- Generate AI summary

## Tech Stack
- Next.js
- OpenAI API
- Jest (unit tests)
- Playwright (E2E tests)

## Architecture
- Raw → ETL → Gold data pipeline
- Backend API routes for data + summary
- Frontend UI components

## Setup
- npm install
- npm run dev


## Assignment 6: Evaluation and Improvement

This project was extended for Assignment 6 by evaluating the system, identifying weaknesses, comparing against a lightweight baseline, and making one evidence-based improvement.

### Architecture
The system is classified as a hybrid architecture because it combines deterministic data processing with LLM-based summary generation.

### Evaluation
Evaluation artifacts are stored in the `evaluation/` folder and include:
- architecture classification
- pipeline and data flow
- output quality evaluation
- end-to-end task success evaluation
- upstream ETL/schema normalization evaluation
- failure cases
- baseline comparison
- improvement notes

### Improvement
Based on the evaluation, the summary prompt was improved to reduce repetitive wording and make summaries more natural, readable, and useful.

### Evaluation Files
See the `evaluation/` folder for full details.