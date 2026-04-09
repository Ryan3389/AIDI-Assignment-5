import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data/gold/countries.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const countries = JSON.parse(fileData);

    return NextResponse.json(countries);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load country data" },
      { status: 500 }
    );
  }
}