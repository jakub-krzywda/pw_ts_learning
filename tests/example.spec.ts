import { chromium } from 'playwright';
import { test, expect, Page } from '@playwright/test';

test.describe('Example', () => {
  test.describe.configure({
    retries: 2,
  });
});
