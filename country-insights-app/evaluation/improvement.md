## 🔍 Evaluation and Improvement

### Architecture Summary
This system is classified as a **hybrid architecture**, combining deterministic data processing (API ingestion, ETL transformation, and structured JSON storage) with LLM-based summary generation.

The system does not use retrieval-first (RAG) because the dataset is small, structured, and already normalized, so direct access is sufficient without adding retrieval complexity.

---

### Evaluation Overview

The system was evaluated across three dimensions:

#### 1. Output Quality
- Evaluated 5 representative country summaries (Canada, Japan, Brazil, Germany, Kenya)
- Used a rubric based on:
  - factual correctness
  - groundedness
  - clarity
  - completeness
  - usefulness

**Result:**
- summaries were consistently accurate and grounded
- summaries were clear and readable
- main weakness: summaries were **generic and repetitive**

---

#### 2. End-to-End Task Success
- Tested full user workflows:
  - search → select country → view profile → generate summary
  - compare two countries side-by-side

**Result:**
- all representative tasks completed successfully
- the system works end-to-end without breaking

---

#### 3. Upstream Component (ETL / Schema Normalization)
- Evaluated transformation from raw REST Countries API data into normalized structured objects
- Verified fields such as:
  - country code
  - name and official name
  - region and subregion
  - population
  - capital
  - currencies and languages

**Result:**
- transformation was consistent and reliable
- structured output correctly supports both UI and AI summary generation

---

### Failure Cases

Two key weaknesses were identified:

1. **Generic summary structure**
   - summaries follow a similar sentence pattern across different countries
   - leads to repetitive outputs

2. **Limited usefulness**
   - summaries mostly restate structured data
   - add limited insight beyond what is already shown in the UI

---

### Baseline Comparison

**Baseline:**
- simple template-based summary (no AI)
- example:
  "Canada is in North America. Its capital is Ottawa. Population: 41,651,653."

**Comparison:**
- AI summaries are more natural and readable
- however, they are only slightly more useful than the baseline
- indicates that the model output needs improvement

---

### Improvement Implemented

To address the identified weaknesses, the summary prompt in the `/api/summary` route was improved.

Changes made:
- added instructions to avoid repetitive structure
- encouraged variation in phrasing
- required highlighting important characteristics
- limited output length to keep summaries concise

---

### Results After Improvement

- summaries are more natural and less repetitive
- readability improved
- usefulness increased compared to the baseline
- output variation improved across countries

---

### Remaining Limitations

- summaries are still somewhat shallow
- no deeper insights beyond structured data
- limited by the simplicity of the dataset

---

### Evaluation Artifacts

Detailed evaluation files are available in the `evaluation/` folder:
- `architecture-notes.md`
- `pipeline-data-flow.md`
- `output-quality-cases.md`
- `end-to-end-cases.md`
- `upstream-etl-eval.md`
- `failure-cases.md`
- `baseline-comparison.md`
- `improvement-notes.md`