## 🔄 Pipeline and Data Flow

This section explains how data moves through the system from input to final output.

### Raw Input
- The system starts with raw country data from the **REST Countries API**
- This data includes nested objects for fields like names, currencies, and languages

---

### Transformation (ETL)
- A transformation step normalizes the raw API response into a consistent structure
- Key fields extracted:
  - country code
  - name and official name
  - region and subregion
  - population
  - capital
  - currencies
  - languages
- This ensures the data is clean and consistent for both the UI and AI summary

---

### Stored Artifacts
- Raw API data is stored in:
  - `data/raw/countries-raw.json`
- Processed/normalized data is stored in:
  - `data/gold/countries.json`

---

### Source of Truth
- The application uses `data/gold/countries.json` as the **source of truth**
- All UI features and AI summaries rely on this processed dataset

---

### Backend Flow
- `/api/countries`
  - returns processed country data to the frontend
- `/api/summary`
  - receives selected country data
  - constructs a prompt
  - sends it to the model
  - returns the generated summary

---

### Model / Prompt Flow
1. User selects a country
2. Frontend sends the country data to `/api/summary`
3. Backend builds a prompt using structured fields
4. The model generates a summary
5. The summary is returned and displayed in the UI

---

### UI Output
- Users can:
  - search for countries
  - view profiles
  - compare countries
  - generate summaries

---

### Where Errors Could Happen
- API fetch failure during ingestion
- incorrect or incomplete transformation in ETL
- missing optional fields (e.g., capital, currencies)
- failure in the summary API route
- model/API issues (e.g., quota, key errors)
- frontend display issues if data is missing

---

### Internal Data for Debugging
The system keeps useful internal information for debugging:
- raw API records
- transformed country records
- stored JSON data
- prompt structure used for summaries
- generated outputs
- API error messages