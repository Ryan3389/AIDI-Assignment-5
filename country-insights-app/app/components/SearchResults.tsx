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
    <ul className="space-y-3">
      {countries.slice(0, 20).map((country) => (
        <li
          key={country.code}
          onClick={() => onSelectCountry(country)}
          className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-base font-semibold text-slate-900">{country.name}</p>
              <p className="mt-1 text-sm text-slate-500">{country.officialName}</p>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              {country.region}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
