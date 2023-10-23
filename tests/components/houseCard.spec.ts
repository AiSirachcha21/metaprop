import { getCssAsObject } from "../utils";
import test, { Locator, expect } from "@playwright/test";

test("should switch navigation to different layout", async ({
  page,
  isMobile,
}) => {
  let homeGrid: Locator | null = null;
  await page.goto("/");

  if (isMobile) {
    homeGrid = page.getByTestId("house-card").first();
  } else {
    homeGrid = page.getByTestId("house-card").first();
  }

  expect(homeGrid).not.toBeNull();

  if (homeGrid) {
    const computedStyles = await getCssAsObject(homeGrid);
    if (isMobile) {
      expect(computedStyles).toHaveProperty("grid-column", "1 / -1");
    } else {
      expect(computedStyles).not.toHaveProperty("grid-column", "1 / -1");
    }
  }
});
