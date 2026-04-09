import { Country } from "../types";

type SearchResultsProps = {
  countries: Country[];
  onSelectCountry: (country: Country) => void;
};

export default function SearchResults({
  countries,
  onSelectCountry,
}: SearchResultsProps) {
  return (
    <ul style={{ padding: 0, listStyle: "none" }}>
      {countries.slice(0, 20).map((country) => (
        <li
          key={country.code}
          onClick={() => onSelectCountry(country)}
          style={{
            marginBottom: "1rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <strong>{country.name}</strong> - {country.region}
        </li>
      ))}
    </ul>
  );
}
