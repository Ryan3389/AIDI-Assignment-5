import fs from "fs";
import path from "path";

const API_URL =
  "https://restcountries.com/v3.1/all?fields=name,region,subregion,population,capital,currencies,languages,flags,cca3";

async function fetchCountries() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const filePath = path.join(process.cwd(), "data/raw/countries-raw.json");

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    console.log("Countries data saved to data/raw/countries-raw.json");
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

fetchCountries();