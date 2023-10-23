import { expect, test } from "@playwright/test";

test("should navigate to home page", async ({ page }) => {
  await page.goto("/");
  const homePageLink = page.getByText("Home").first();

  await expect(homePageLink).toBeVisible();
  await homePageLink.click();
  await expect(page).toHaveURL("/");
});
