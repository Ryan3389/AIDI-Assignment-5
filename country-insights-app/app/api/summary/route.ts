import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const country = await req.json();

    const prompt = `
You are summarizing structured country data for a student project.

Write a short, clear summary in 3-4 sentences.
Only use the data provided below.
Do not add outside facts.
Do not guess.
Keep the tone informative and simple.

Country data:
Name: ${country.name}
Official Name: ${country.officialName}
Region: ${country.region}
Subregion: ${country.subregion}
Population: ${country.population}
Capital: ${country.capital}
Currencies: ${country.currencies?.join(", ") || "N/A"}
Languages: ${country.languages?.join(", ") || "N/A"}
`;

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