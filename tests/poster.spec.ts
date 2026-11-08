import { test, expect } from '@playwright/test';

test.describe('Academic Poster Validation Suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should display primary academic title and research question', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('THE ICEBERG OF LEARNING');
    await expect(page.locator('text=What Lies Beneath a High Grade?')).toBeVisible();
    await expect(page.locator('text=Do high grades necessarily reflect actual understanding')).toBeVisible();
  });

  test('should include all four SSE-2601 authors', async ({ page }) => {
    await expect(page.locator('text=Nikita Shulmin')).toBeVisible();
    await expect(page.locator('text=Dana Kenzhebayeva')).toBeVisible();
    await expect(page.locator('text=Islam Akhmetov')).toBeVisible();
    await expect(page.locator('text=Abzhappar Abylaikhan')).toBeVisible();
  });

  test('should display all five iceberg dimensions', async ({ page }) => {
    await expect(page.locator('text=ACADEMIC PERFORMANCE')).toBeVisible();
    await expect(page.locator('text=CONCEPTUAL UNDERSTANDING')).toBeVisible();
    await expect(page.locator('text=PRACTICAL APPLICATION')).toBeVisible();
    await expect(page.locator('text=CRITICAL & INDEPENDENT THINKING')).toBeVisible();
    await expect(page.locator('text=LONG-TERM RETENTION & TRANSFER')).toBeVisible();
  });

  test('should cite all verified APA 7 references', async ({ page }) => {
    await expect(page.locator('text=Biggs, J. (1996)')).toBeVisible();
    await expect(page.locator('text=Freire, P. (2000)')).toBeVisible();
    await expect(page.locator('text=Grabinger, R. S., & Dunlap, J. C. (1995)')).toBeVisible();
    await expect(page.locator('text=Magnússon, G., & Rytzler, J. (2022)')).toBeVisible();
  });
});

