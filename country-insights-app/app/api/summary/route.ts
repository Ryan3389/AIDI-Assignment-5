import OpenAI from "openai";
import { NextResponse } from "next/server";

type SummaryCountry = {
  name?: string;
  officialName?: string;
  region?: string;
  subregion?: string;
  population?: number;
  capital?: string;
  currencies?: string[];
  languages?: string[];
};

function formatList(values?: string[]) {
  return values?.length ? values.join(", ") : "N/A";
}

function buildLocalSummary(country: SummaryCountry) {
  const name = country.name || "This country";
  const capital = country.capital || "N/A";
  const region = country.subregion
    ? `${country.subregion}, ${country.region || "Unknown"}`
    : country.region || "Unknown";
  const population =
    typeof country.population === "number"
      ? country.population.toLocaleString()
      : "N/A";

  return `${name} is located in ${region}. Its capital is ${capital}, and its population is ${population}. Key currencies include ${formatList(country.currencies)}. Common languages include ${formatList(country.languages)}.`;
}

export async function POST(req: Request) {
  try {
    const country = (await req.json()) as SummaryCountry;

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        summary: buildLocalSummary(country),
      });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

  const prompt = `
You are generating a concise but informative country summary.

Rules:
- Do NOT just list fields or repeat the same structure every time
- Write in a natural, slightly varied way
- Highlight 2–3 important characteristics of the country
- Use 3–5 sentences max
- Avoid repeating the exact same phrasing across summaries

Country Data:
Name: ${country.name}
Official Name: ${country.officialName}
Region: ${country.region}
Subregion: ${country.subregion}
Population: ${country.population}
Capital: ${country.capital}
Languages: ${country.languages?.join(", ")}
Currencies: ${country.currencies?.join(", ")}

Now write a short, natural summary that is slightly different in structure from a template.
`;
//     const prompt = `
// You are summarizing structured country data for a student project.

// Write a short, clear summary in 3-4 sentences.
// Only use the data provided below.
// Do not add outside facts.
// Do not guess.
// Keep the tone informative and simple.

// Country data:
// Name: ${country.name}
// Official Name: ${country.officialName}
// Region: ${country.region}
// Subregion: ${country.subregion}
// Population: ${country.population}
// Capital: ${country.capital}
// Currencies: ${formatList(country.currencies)}
// Languages: ${formatList(country.languages)}
// `;

    const response = await client.responses.create({
      model: "gpt-5.4",
      input: prompt,
    });

    return NextResponse.json({
      summary: response.output_text,
    });
  } catch (error) {
    console.error("Summary generation failed:", error);

    return NextResponse.json(
      { error: "Failed to generate AI summary." },
      { status: 500 }
    );
  }
}
