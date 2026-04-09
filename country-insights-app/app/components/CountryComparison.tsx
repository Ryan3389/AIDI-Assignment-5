import { Country } from "../types";

type CountryComparisonProps = {
  countries: Country[];
  compareCountry1: string;
  compareCountry2: string;
  countryOne: Country | null;
  countryTwo: Country | null;
  onChangeCountry1: (value: string) => void;
  onChangeCountry2: (value: string) => void;
};

export default function CountryComparison({
  countries,
  compareCountry1,
  compareCountry2,
  countryOne,
  countryTwo,
  onChangeCountry1,
  onChangeCountry2,
}: CountryComparisonProps) {
  return (
    <section style={{ marginTop: "3rem", border: "2px solid #0070f3", padding: "1.5rem" }}>
      <h2>Compare Countries</h2>

      <select value={compareCountry1} onChange={(e) => onChangeCountry1(e.target.value)}>
        <option value="">Select first country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>

      <select value={compareCountry2} onChange={(e) => onChangeCountry2(e.target.value)}>
        <option value="">Select second country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>

      {countryOne && countryTwo && (
        <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
          {[countryOne, countryTwo].map((country) => (
            <div key={country.code}>
              <h3>{country.name}</h3>
              <p>Population: {country.population.toLocaleString()}</p>
              <p>Region: {country.region}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
