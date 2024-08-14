import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    browserName: 'chromium',
    headless: true, // Ustawienie na false uruchamia testy w trybie headed
    screenshot: 'only-on-failure', // Robienie screenshotów tylko w przypadku niepowodzenia testu
    video: 'retain-on-failure', // Nagrywanie wideo tylko w przypadku niepowodzenia testu
  },
  reporter: [['html', { open: 'on-failure' }]], // Użycie HTML reportera
});
