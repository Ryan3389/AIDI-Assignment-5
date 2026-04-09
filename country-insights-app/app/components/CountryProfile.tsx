import { Country } from "../types";

type CountryProfileProps = {
  country: Country;
  summary: string;
  loadingSummary: boolean;
  onGenerateSummary: () => void;
};

export default function CountryProfile({
  country,
  summary,
  loadingSummary,
  onGenerateSummary,
}: CountryProfileProps) {
  return (
    <section style={{ marginTop: "2rem", border: "2px solid #333", padding: "1.5rem" }}>
      <h2>{country.name}</h2>

      {country.flag && (
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          style={{ width: "120px", marginBottom: "1rem" }}
        />
      )}

      <p><strong>Official Name:</strong> {country.officialName}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Capital:</strong> {country.capital}</p>

      <button onClick={onGenerateSummary} style={{ marginTop: "1rem" }}>
        Generate AI Summary
      </button>

      {loadingSummary && <p>Generating summary...</p>}

      {summary && (
        <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc" }}>
          <h3>AI Summary</h3>
          <p>{summary}</p>
        </div>
      )}
    </section>
  );
}
