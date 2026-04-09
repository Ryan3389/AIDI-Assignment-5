# Architecture Improvement Notes

## Before
The first working version kept most UI logic inside `app/page.tsx`, including:
- country search results
- selected country profile
- country comparison
- summary display logic

This made the page file longer and mixed multiple responsibilities in one place.

## Improvement
I used Codex to assist in refactoring the page into smaller reusable components:
- SearchResults.tsx
- CountryProfile.tsx
- CountryComparison.tsx

I also moved the shared Country type into `types.ts`.

## After
`app/page.tsx` now focuses on:
- state management
- data fetching
- derived values
- event handlers

UI sections are separated into components, improving readability and separation of concerns without changing behavior.