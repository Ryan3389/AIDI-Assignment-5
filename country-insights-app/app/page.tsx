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
    <main style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <h1>Country Insights App</h1>

      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "0.75rem",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "1.5rem",
        }}
      />

      <SearchResults
        countries={filteredCountries}
        onSelectCountry={(country) => {
          setSelectedCountry(country);
          setSummary("");
        }}
      />

      {selectedCountry && (
        <CountryProfile
          country={selectedCountry}
          summary={summary}
          loadingSummary={loadingSummary}
          onGenerateSummary={handleGenerateSummary}
        />
      )}

      <CountryComparison
        countries={countries}
        compareCountry1={compareCountry1}
        compareCountry2={compareCountry2}
        countryOne={countryOne}
        countryTwo={countryTwo}
        onChangeCountry1={setCompareCountry1}
        onChangeCountry2={setCompareCountry2}
      />
    </main>
  );
}
