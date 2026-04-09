import fs from "fs";
import path from "path";
import { transformCountry } from "../lib/transformCountry.js";

const rawFilePath = path.join(process.cwd(), "data/raw/countries-raw.json");
const outputFilePath = path.join(process.cwd(), "data/gold/countries.json");

function transformCountry(country) {
  return {
    code: country.cca3 || "N/A",
    name: country.name?.common || "Unknown",
    officialName: country.name?.official || "Unknown",
    region: country.region || "Unknown",
    subregion: country.subregion || "Unknown",
    population: country.population || 0,
    capital: country.capital?.[0] || "N/A",
    currencies: country.currencies
      ? Object.values(country.currencies).map((currency) => currency.name)
      : [],
    languages: country.languages
      ? Object.values(country.languages)
      : [],
    flag: country.flags?.png || "",
  };
}

function transformCountries() {
  try {
    const rawData = fs.readFileSync(rawFilePath, "utf-8");
    const countries = JSON.parse(rawData);

    const transformed = countries.map(transformCountry);

    fs.writeFileSync(outputFilePath, JSON.stringify(transformed, null, 2));

    console.log("Transformed data saved to data/gold/countries.json");
  } catch (error) {
    console.error("Error transforming countries:", error);
  }
}
transformCountries();