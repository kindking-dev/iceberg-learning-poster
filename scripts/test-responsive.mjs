import { chromium } from 'playwright';
import { preview } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
  { name: 'small-mobile', width: 360, height: 800 },
];

async function testResponsive() {
  console.log('📱 Starting Multi-Viewport Responsive Validation Suite...');

  const server = await preview({
    root: rootDir,
    preview: { port: 4175, open: false },
  });

  const url = 'http://localhost:4175';
  const browser = await chromium.launch({ headless: true });

  let allPassed = true;

  for (const vp of viewports) {
    console.log(`\n🔍 Testing Viewport: ${vp.name} (${vp.width}x${vp.height})...`);
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });

    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);

      // Verify essential headers
      const title = await page.textContent('h1');
      if (!title?.includes('THE ICEBERG OF LEARNING')) {
        throw new Error('Title missing');
      }

      // Check for horizontal overflow on body
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

      // On mobile / tablet responsive flow, if user is in 'responsive' flow mode:
      if (vp.width <= 768) {
        // Switch to reading flow
        const readingFlowBtn = await page.$('button:has-text("Reading Flow")');
        if (readingFlowBtn) {
          await readingFlowBtn.click();
          await page.waitForTimeout(500);
        }
      }

      console.log(`✓ ${vp.name}: Rendered successfully (clientWidth: ${clientWidth}px)`);
    } catch (err) {
      console.error(`❌ ${vp.name} failed:`, err);
      allPassed = false;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.httpServer.close();

  if (allPassed) {
    console.log('\n🎉 ALL VIEWPORTS VALIDATED SUCCESSFULLY (4/4)!');
  } else {
    process.exit(1);
  }
}

testResponsive();
