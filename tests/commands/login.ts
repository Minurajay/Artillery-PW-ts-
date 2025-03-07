import { Page } from 'playwright';
import { expect } from '@playwright/test';

async function testLogin(page: Page): Promise<void> {
    await page.goto('https://demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('test');
    await page.locator('#loginpassword').fill('test');
    await page.getByRole('button', { name: 'Log in' }).click();
    // Wait for the "Log out" link to be visible
    await page.waitForSelector('#logout2', { state: 'visible' });

    // Now, check that the "Log out" link is visible
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
}

// module.exports = testLogin; // ✅ CommonJS export for Artillery
export default testLogin; // ✅ ES Module export for Playwright
