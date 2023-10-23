import type { Locator } from "@playwright/test";

export async function getCssAsObject(elementHandle: Locator) {
  return await elementHandle?.evaluate((el) => {
    const styles = window.getComputedStyle(el);
    const computedStyles: any = {};
    for (let i = 0; i < styles.length; i++) {
      const propertyName = styles[i];
      computedStyles[propertyName] = styles.getPropertyValue(propertyName);
    }
    return computedStyles;
  });
}
