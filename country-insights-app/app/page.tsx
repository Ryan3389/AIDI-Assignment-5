"use client";

import { useEffect, useState } from "react";
import CountryComparison from "./components/CountryComparison";
import CountryProfile from "./components/CountryProfile";
import SearchResults from "./components/SearchResults";
import { Country } from "./types";

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [compareCountry1, setCompareCountry1] = useState("");
  const [compareCountry2, setCompareCountry2] = useState("");
  const [summary, setSummary] = useState("");
  const [loadingSummary, setLoadingSummary] = useState(false);

  useEffect(() => {
    async function loadCountries() {
      const res = await fetch("/api/countries");
      const data = await res.json();
      setCountries(data);
    }

    loadCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const countryOne =
    countries.find((country) => country.code === compareCountry1) || null;
  const countryTwo =
    countries.find((country) => country.code === compareCountry2) || null;

  async function handleGenerateSummary() {
    if (!selectedCountry) return;

    try {
      setLoadingSummary(true);
      setSummary("");

      const res = await fetch("/api/summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedCountry),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate summary");
      }

      setSummary(data.summary);
    } catch {
      setSummary("Failed to generate summary.");
    } finally {
      setLoadingSummary(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
            Country Insights
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            Global Country Dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Search countries, explore profiles, compare key facts, and generate AI
            summaries in one clean workspace.
          </p>

          <div className="mt-6 max-w-xl">
            <input
              type="text"
              placeholder="Search for a country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </section>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Search Results
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Showing up to 20 matching countries.
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {filteredCountries.length} found
              </span>
            </div>

            <SearchResults
              countries={filteredCountries}
              onSelectCountry={(country) => {
                setSelectedCountry(country);
                setSummary("");
              }}
            />
          </section>

          <div>
            {selectedCountry ? (
              <CountryProfile
                country={selectedCountry}
                summary={summary}
                loadingSummary={loadingSummary}
                onGenerateSummary={handleGenerateSummary}
              />
            ) : (
              <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                  Country Profile
                </p>
                <h2 className="mt-3 text-2xl font-bold text-slate-900">
                  Select a country to view details
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Choose a country from the search results to see its profile and
                  generate an AI summary.
                </p>
              </section>
            )}
          </div>
        </div>

        <div className="mt-8">
          <CountryComparison
            countries={countries}
            compareCountry1={compareCountry1}
            compareCountry2={compareCountry2}
            countryOne={countryOne}
            countryTwo={countryTwo}
            onChangeCountry1={setCompareCountry1}
            onChangeCountry2={setCompareCountry2}
          />
        </div>
      </div>
    </main>
  );
}
