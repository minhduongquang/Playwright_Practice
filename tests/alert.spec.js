// @ts-check
const { test, expect } = require('@playwright/test');

test('handle alert', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  
  await page.locator("//button[text()='Click for JS Alert']").click()

  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toContain("confirm")

    expect(dialog.message()).toContain("I am a JS Alert")

    await dialog.accept()
  })

});


