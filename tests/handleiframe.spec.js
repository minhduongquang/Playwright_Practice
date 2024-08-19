// @ts-check
const { test, expect } = require('@playwright/test');

test('handle frame', async ({ page }) => {
  await page.goto('https://docs.oracle.com/javase/8/docs/api');
  
  const frame = await page.frameLocator("//frame[@name='packageListFrame']")
  await frame.locator("//a[text()='java.applet']").click()
  await page.pause
});


