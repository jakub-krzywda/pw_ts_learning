import { Given, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { chromium } from 'playwright';

let page: Page;

Given('I navigate to the example page', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://example.com');
});

Then('the title should be {string}', async (expectedTitle: string) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});
