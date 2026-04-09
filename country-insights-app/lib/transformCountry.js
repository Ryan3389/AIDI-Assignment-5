export function transformCountry(country) {
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
    languages: country.languages ? Object.values(country.languages) : [],
    flag: country.flags?.png || "",
  };
}