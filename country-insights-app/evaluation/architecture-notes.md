# Architecture Classification Notes

## Architecture Category
Hybrid

## What the app does
The Country Insights AI App lets users search for countries, view country profiles, compare two countries, and generate AI summaries.

## Supported tasks
- Search for a country
- View structured country details
- Compare two countries side by side
- Generate an AI summary for a selected country

## Out of scope
- Maps or geolocation features
- Open-ended chatbot behavior
- Multi-document retrieval
- Broad geopolitical analysis outside the dataset

## Why this system is hybrid
This system is best classified as hybrid because it combines deterministic data processing with LLM-based generation.

The app first ingests raw country data from the REST Countries API, transforms it into a normalized JSON structure, and stores the processed data as the system’s source of truth. That part of the system is deterministic and structured.

The app then uses an LLM to generate a short summary from the selected country’s processed fields. Because the system combines structured data handling with model-based text generation, hybrid is the best fit.

## Main alternative considered
Retrieval-first / RAG

## Why I did not choose retrieval-first / RAG
I did not choose retrieval-first / RAG because my application uses a relatively small, structured dataset rather than many documents or large unstructured files.

RAG would add extra complexity such as chunking, retrieval logic, retrieval evaluation, and more debugging overhead. For this project, the data is already normalized and easy to access directly, so retrieval would not provide much benefit.

## One important capability I did not implement
RAG (retrieval-first architecture)

## Would it improve the system?
It could improve the system in the future if I expand the app to use many country reports, policy documents, or unstructured text sources.

## What problem it would solve
It would help retrieve relevant context from larger or more complex document collections.

## What new complexity it would introduce
- chunking strategy
- retrieval evaluation
- indexing/storage complexity
- more operational overhead
- harder debugging

## When I would adopt it
I would adopt RAG if the app grows beyond one structured dataset and starts using many files or large unstructured sources where direct structured access is no longer sufficient.

## Tradeoffs considered
- Amount of data / number of files:
  My current system uses a small structured dataset, so direct access is simpler than retrieval.

- Context-window limits:
  Context limits are not a major issue right now because I only send selected structured country data to the model.

- Retrieval or storage needs:
  Simple JSON storage is enough for the current scope.

- Determinism needs:
  Search, profile display, and comparison benefit from deterministic structured data.

- Cost:
  A simpler structured pipeline is cheaper than adding retrieval infrastructure.

- Operational overhead:
  Hybrid with structured JSON plus summaries is easier to maintain than a full RAG pipeline.

- Performance:
  Direct access to stored structured data is fast.

- Ease of debugging:
  This system is easier to debug because transformed records are visible and traceable before model generation.