# Pipeline and Data Flow

## Raw Input
The system starts with raw country data fetched from the REST Countries API.

## Preprocessing / Transformation
The raw API response is transformed into a normalized JSON structure using the ETL step. This includes extracting and standardizing fields such as:
- country code
- country name
- official name
- region
- subregion
- population
- capital
- currencies
- languages
- flag

## Stored Artifacts
The system stores:
- raw input in `data/raw/countries-raw.json`
- processed output in `data/gold/countries.json`

## Source of Truth
The processed file `data/gold/countries.json` is the source of truth for the application.

## Backend Flow
The `/api/countries` route reads the processed country data and returns it to the frontend.
The `/api/summary` route receives a selected country object and sends its structured fields to the model for summary generation.

## Prompt / Model Flow
When a user requests a summary:
1. the frontend sends the selected country data to `/api/summary`
2. the backend constructs the prompt using the structured country fields
3. the model generates a short summary
4. the summary is returned to the frontend and displayed in the UI

## UI Display
The frontend allows the user to:
- search countries
- view a selected country profile
- compare two countries
- generate a summary

## Where Errors Could Happen
Potential failure points include:
- API fetch failure during ingestion
- transformation errors during ETL
- missing or incomplete fields in raw country data
- summary route failure
- model/API quota or key issues
- frontend display issues if expected data is missing

## Internal Information Useful for Debugging
Useful internal information includes:
- raw API records
- transformed country records
- the processed JSON file
- prompt structure used for summary generation
- summary outputs
- error messages from the summary route

/////////////////////////////////////////////////////////////////////

## One important capability I did not implement
RAG (retrieval-first architecture)

## Would it improve the system?
Not significantly for the current version, because the app uses a small, structured dataset.

## What problem would it solve?
It would help retrieve relevant information if the app later expands to many documents or large unstructured sources.

## What complexity would it introduce?
- chunking strategy
- retrieval logic
- embeddings/indexing
- retrieval evaluation
- more storage and debugging complexity
- more operational overhead and cost

## When I would adopt it?
I would adopt RAG if the app grows beyond one structured dataset and starts using many files, PDFs, or unstructured country-related documents.