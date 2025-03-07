import { test, expect } from '@playwright/test';
import testLogin from './commands/login'; // ✅ This works for TypeScript

test('test', async ({ page }) => {
  await testLogin(page);
});
