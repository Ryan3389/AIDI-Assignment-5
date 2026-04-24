# Baseline Comparison

## Purpose of this comparison
The goal of this baseline is to check whether the AI summary is actually better than a very simple non-AI version.

A baseline gives me something simple to compare against, so I am not just assuming the AI output is better.

---

## Baseline System: Template Summary

The baseline system does **not** use AI.

It simply takes the structured country fields and places them into a fixed sentence format.

Example:
Canada is in North America. Its capital is Ottawa. Population: 41,651,653.

This baseline is simple, predictable, and cheap, but it is repetitive and not very natural.

---

## Final System: AI Summary

The final system uses the selected country’s structured data and sends it to the LLM to generate a summary.

The goal of the AI version is to make the summary sound more natural, readable, and useful than the fixed template.

---

## Comparison

### Accuracy
Both systems are accurate because both use the same structured country data.

### Clarity
The AI summary is clearer and more natural to read than the template.

### Variation
The template always follows the exact same pattern.  
The AI summary has more variation, but some outputs were still repetitive.

### Usefulness
The AI summary is more useful than the template because it reads more like a real explanation.  
However, before the prompt improvement, it still mostly repeated the same visible country fields.

---

## Takeaway

The AI summary was better than the template baseline, but not by a large enough margin at first.

This showed that the first version of the prompt was not getting enough value from the model.

Because of this baseline comparison, I improved the summary prompt to reduce repetition and make the summaries more natural and useful.