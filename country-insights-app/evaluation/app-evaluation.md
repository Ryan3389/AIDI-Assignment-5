# Evaluation #1


## Metric Choice
I evaluated output quality using a rubric because the main output of my app is a generated country summary. A rubric allows me to assess whether the summaries are accurate, grounded in the input data, clear, complete, and useful.

Scoring scale:
1 = poor  
3 = acceptable  
5 = strong  

---

## Case 1: Canada

Summary:
Canada is a country in North America, in the Americas region. Its capital is Ottawa. Canada has a population of 41,651,653 people. The official languages are English and French, and the currency is the Canadian dollar.

Scores:
- Factual correctness: 5/5  
- Groundedness: 5/5  
- Clarity: 5/5  
- Completeness: 4/5  
- Usefulness: 4/5  

Notes:
Very accurate and clean. Covers all key fields. Slightly generic phrasing.

---

## Case 2: Japan

Summary:
Japan is a country in Asia, in the subregion of Eastern Asia. Its capital is Tokyo. The population is 123,210,000. The official language is Japanese, and the currency is the Japanese yen.

Scores:
- Factual correctness: 5/5  
- Groundedness: 5/5  
- Clarity: 5/5  
- Completeness: 4/5  
- Usefulness: 4/5  

Notes:
Strong and correct. Slightly formulaic structure.

---

## Case 3: Brazil

Summary:
Brazil, officially called the Federative Republic of Brazil, is in the Americas, in the South America subregion. Its capital is Brasília. Brazil has a population of 213,421,037. The country’s currency is the Brazilian real, and its language is Portuguese.

Scores:
- Factual correctness: 5/5  
- Groundedness: 5/5  
- Clarity: 5/5  
- Completeness: 5/5  
- Usefulness: 4/5  

Notes:
Very complete and slightly more descriptive than others.

---

## Case 4: Germany

Summary:
Germany, officially called the Federal Republic of Germany, is in Europe, in the subregion of Western Europe. It has a population of 83,491,249 people. The capital city is Berlin. The country uses the euro, and the main language listed is German.

Scores:
- Factual correctness: 5/5  
- Groundedness: 5/5  
- Clarity: 5/5  
- Completeness: 5/5  
- Usefulness: 4/5  

Notes:
One of the strongest outputs. Clear and structured.

---

## Case 5: Kenya

Summary:
Kenya, officially the Republic of Kenya, is in Africa, in the subregion of Eastern Africa. It has a population of 53,330,978 people and its capital city is Nairobi. The country uses the Kenyan shilling as its currency. The languages listed for Kenya are English and Swahili.

Scores:
- Factual correctness: 5/5  
- Groundedness: 5/5  
- Clarity: 5/5  
- Completeness: 4/5  
- Usefulness: 3/5  

Notes:
Accurate but more generic and less insightful than others.

---

## Overall Takeaway

The summaries are consistently accurate, grounded in the provided country data, and easy to read. This shows the system is reliable for factual summary generation.

The main weakness is that the summaries are somewhat formulaic and generic, with limited variation or deeper insight. This suggests that improving the prompt could increase usefulness and readability.

# Evaluation
# End-to-End Task Success Evaluation

## Metric Choice
I evaluated end-to-end task success by checking whether a user could complete the intended workflow from start to finish using the deployed application. This metric makes sense because the app is designed to support complete user tasks, not just isolated outputs.

Scoring:
- Success = the full task completed correctly
- Partial = the task mostly worked, but with some weakness
- Fail = the task could not be completed

---

## Case 1: Search Canada and generate summary

User goal:
Find Canada, view its profile, and generate an AI summary.

Steps:
1. Search for Canada
2. Select Canada from results
3. View country profile
4. Click "Generate AI Summary"

Result:
The app returned the Canada profile correctly and generated a summary.

Outcome:
Success

Notes:
The full workflow completed without issues.

---

## Case 2: Search Japan and generate summary

User goal:
Find Japan, view its profile, and generate an AI summary.

Steps:
1. Search for Japan
2. Select Japan from results
3. View country profile
4. Click "Generate AI Summary"

Result:
The app returned the Japan profile correctly and generated a summary.

Outcome:
Success

Notes:
The workflow completed successfully and produced the expected output.

---

## Case 3: Search Brazil and generate summary

User goal:
Find Brazil, view its profile, and generate an AI summary.

Steps:
1. Search for Brazil
2. Select Brazil from results
3. View country profile
4. Click "Generate AI Summary"

Result:
The Brazil profile loaded and the summary was generated.

Outcome:
Success

Notes:
The end-to-end flow worked correctly.

---

## Case 4: Compare Germany and Kenya

User goal:
Compare two countries side by side.

Steps:
1. Open the compare section
2. Select Germany as the first country
3. Select Kenya as the second country
4. Review the comparison cards

Result:
Both countries displayed side by side with their structured fields.

Outcome:
Success

Notes:
The compare workflow worked as expected.

---

## Case 5: Search Germany and generate summary

User goal:
Find Germany, view its profile, and generate an AI summary.

Steps:
1. Search for Germany
2. Select Germany from results
3. View country profile
4. Click "Generate AI Summary"

Result:
The Germany profile loaded and the summary was generated.

Outcome:
Success

Notes:
This workflow also completed successfully.

---

## Overall Takeaway

The full application successfully completes the main user tasks it is designed to support. Search, profile viewing, comparison, and summary generation all worked from start to finish in the representative cases.

The main weakness is not end-to-end completion, but output style: while the tasks complete successfully, some summaries are more generic than ideal.