import fs from "fs";
import path from "path";
import { transformCountry } from "../lib/transformCountry.js";

const rawFilePath = path.join(process.cwd(), "data/raw/countries-raw.json");
const outputFilePath = path.join(process.cwd(), "data/gold/countries.json");

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
