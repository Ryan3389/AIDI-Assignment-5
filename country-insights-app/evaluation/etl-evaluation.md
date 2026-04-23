# Upstream Component Evaluation: Schema Normalization / ETL

## Component Being Evaluated
The upstream component I evaluated is the schema normalization step in my ETL pipeline.

This component transforms raw REST Countries API records into the normalized country objects used by the application. It is important because both the UI and the AI summary feature depend on this transformed data being correct and consistent.

## Why this metric makes sense
I evaluated this component by checking field-level transformation accuracy. This makes sense because the purpose of this component is to convert raw API data into the exact structure required by the app.

I focused on whether the transformation:
- extracts the correct fields
- handles arrays/objects correctly
- handles missing optional fields safely
- produces a consistent output schema

---

## Case 1: Canada

Fields checked:
- `cca3` → `code`
- `name.common` → `name`
- `name.official` → `officialName`
- `capital[0]` → `capital`
- `currencies` → currencies array
- `languages` → languages array

Result:
- code = correct
- name = correct
- officialName = correct
- capital = correct
- currencies = correct
- languages = correct

Outcome:
Pass

Notes:
The transformed record correctly normalized the raw API structure into the expected app format.

---

## Case 2: Japan

Fields checked:
- code
- name
- officialName
- region
- subregion
- population
- capital
- currencies
- languages

Result:
All checked fields were transformed correctly.

Outcome:
Pass

Notes:
Japan is a strong example of the transformation working correctly on a complete record.

---

## Case 3: Brazil

Fields checked:
- code
- officialName
- region
- subregion
- population
- capital
- currencies
- languages

Result:
All checked fields were transformed correctly.

Outcome:
Pass

Notes:
The transformation correctly preserved the official country name and normalized the structured fields.

---

## Case 4: Germany

Fields checked:
- code
- name
- officialName
- region
- capital
- currencies
- languages

Result:
All checked fields were transformed correctly.

Outcome:
Pass

Notes:
Germany confirms that the transformation works correctly across another complete record and supports the later summary output.

---

## Case 5: Kenya

Fields checked:
- code
- name
- officialName
- subregion
- population
- capital
- currencies
- languages

Result:
All checked fields were transformed correctly.

Outcome:
Pass

Notes:
The ETL step produced a stable normalized record that the app could use directly.

---

## Edge Case Handling
I also checked that the transformation logic handles missing optional fields safely. For example:
- missing official name defaults safely
- missing capital defaults safely
- missing currencies defaults to an empty array
- missing languages defaults to an empty array

This is important because it prevents the UI and summary generation from breaking on incomplete API records.

---

## Overall Takeaway
The schema normalization step performed reliably across the representative cases. It consistently transformed raw API data into the structured format expected by the application.

The biggest strength of this upstream component is consistency. The main remaining risk is that if the external API changes its raw response format in the future, the transformation logic may need to be updated.