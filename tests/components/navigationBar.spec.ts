import { getCssAsObject } from "../utils";
import test, { expect } from "@playwright/test";

test("navigation bar should be correct variant", async ({ isMobile, page }) => {
  await page.goto("/");
  const navigationBar = page.getByTestId("desktopNavigationBar").first();
  const mobileNavigationBar = page.getByTestId("mobileNavigationBar").first();
  const navigationBarStyles = getCssAsObject(navigationBar);
  const mobileNavigationBarStyles = getCssAsObject(mobileNavigationBar);

  if (isMobile) {
    expect(mobileNavigationBarStyles).toHaveProperty("display", "flex");
    expect(navigationBarStyles).toHaveProperty("display", "none");
  } else {
    expect(mobileNavigationBarStyles).toHaveProperty("display", "none");
    expect(navigationBarStyles).toHaveProperty("display", "flex");
  }
});
