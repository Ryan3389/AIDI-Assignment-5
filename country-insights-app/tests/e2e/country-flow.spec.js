import { test, expect } from "@playwright/test";

test("user can search, select a country, and generate a summary", async ({ page }) => {
  await page.goto("/");

  await page.getByPlaceholder("Search for a country...").fill("Canada");

  await page.getByText("Canada", { exact: false }).first().click();

  await page.getByRole("button", { name: /generate ai summary/i }).click();

  await expect(page.getByText(/AI Summary/i)).toBeVisible();
});