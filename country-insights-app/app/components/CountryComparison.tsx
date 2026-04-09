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
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
          Comparison
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Compare Countries
        </h2>
        <p className="text-sm text-slate-500">
          Select two countries to compare their basic details side by side.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <select
          value={compareCountry1}
          onChange={(e) => onChangeCountry1(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          <option value="">Select first country</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>

        <select
          value={compareCountry2}
          onChange={(e) => onChangeCountry2(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          <option value="">Select second country</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {countryOne && countryTwo && (
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {[countryOne, countryTwo].map((country) => (
            <div
              key={country.code}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <h3 className="text-xl font-semibold text-slate-900">{country.name}</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <p>
                  <span className="font-semibold text-slate-900">Population:</span>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Region:</span> {country.region}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Capital:</span> {country.capital}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
