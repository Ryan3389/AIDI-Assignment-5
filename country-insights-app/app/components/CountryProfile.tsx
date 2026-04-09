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
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
            Country Profile
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {country.name}
          </h2>
          <p className="mt-2 text-sm text-slate-500">{country.officialName}</p>
        </div>

        {country.flag && (
          <img
            src={country.flag}
            alt={`${country.name} flag`}
            className="h-auto w-28 rounded-2xl border border-slate-200 shadow-sm"
          />
        )}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Region</p>
          <p className="mt-2 text-base font-semibold text-slate-900">{country.region}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Subregion</p>
          <p className="mt-2 text-base font-semibold text-slate-900">{country.subregion}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Population</p>
          <p className="mt-2 text-base font-semibold text-slate-900">
            {country.population.toLocaleString()}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Capital</p>
          <p className="mt-2 text-base font-semibold text-slate-900">{country.capital}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <button
          onClick={onGenerateSummary}
          className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
        >
          Generate AI Summary
        </button>

        {loadingSummary && (
          <p className="text-sm font-medium text-blue-600">Generating summary...</p>
        )}

        {summary && (
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">AI Summary</h3>
            <p className="mt-2 leading-7 text-slate-700">{summary}</p>
          </div>
        )}
      </div>
    </section>
  );
}
