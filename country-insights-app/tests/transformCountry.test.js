import { transformCountry } from "../lib/transformCountry.js";

describe("transformCountry", () => {
  it("transforms raw country data into the expected app format", () => {
    const rawCountry = {
      cca3: "CAN",
      name: {
        common: "Canada",
        official: "Canada",
      },
      region: "Americas",
      subregion: "North America",
      population: 38005238,
      capital: ["Ottawa"],
      currencies: {
        CAD: { name: "Canadian dollar", symbol: "$" },
      },
      languages: {
        eng: "English",
        fra: "French",
      },
      flags: {
        png: "https://flagcdn.com/w320/ca.png",
      },
    };

    const result = transformCountry(rawCountry);

    expect(result).toEqual({
      code: "CAN",
      name: "Canada",
      officialName: "Canada",
      region: "Americas",
      subregion: "North America",
      population: 38005238,
      capital: "Ottawa",
      currencies: ["Canadian dollar"],
      languages: ["English", "French"],
      flag: "https://flagcdn.com/w320/ca.png",
    });
  });

  it("handles missing optional fields safely", () => {
    const rawCountry = {
      cca3: "XXX",
      name: {
        common: "Testland",
      },
    };

    const result = transformCountry(rawCountry);

    expect(result).toEqual({
      code: "XXX",
      name: "Testland",
      officialName: "Unknown",
      region: "Unknown",
      subregion: "Unknown",
      population: 0,
      capital: "N/A",
      currencies: [],
      languages: [],
      flag: "",
    });
  });
});