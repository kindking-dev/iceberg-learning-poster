import { chromium } from 'playwright';
import { preview } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function exportPoster() {
  console.log('🚀 Starting A1 Poster Export Suite...');

  // Start Vite preview server for production build
  console.log('📦 Starting preview server for /dist...');
  const server = await preview({
    root: rootDir,
    preview: {
      port: 4173,
      open: false,
    },
  });

  const url = 'http://localhost:4173';
  console.log(`🌐 Server active at ${url}`);

  const browser = await chromium.launch({
    headless: true,
  });

  try {
    const page = await browser.newPage({
      viewport: { width: 2380, height: 1682 }, // High-DPI A1 landscape proportion (1.4158)
      deviceScaleFactor: 2,
    });

    console.log(`🧭 Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle' });

    // Wait for web fonts and SVG rendering
    await page.evaluate(async () => {
      await document.fonts.ready;
    });
    await page.waitForTimeout(1500);

    // 1. Export High-Resolution PNG Preview
    const previewPath = path.join(rootDir, 'poster-preview.png');
    console.log(`📸 Capturing high-resolution visual preview: ${previewPath}`);
    const posterElement = await page.$('.poster-container');
    if (posterElement) {
      await posterElement.screenshot({
        path: previewPath,
        type: 'png',
      });
    } else {
      await page.screenshot({
        path: previewPath,
        fullPage: true,
      });
    }
    console.log('✅ poster-preview.png created successfully!');

    // 2. Export Exact A1 Landscape PDF (841mm x 594mm)
    const pdfPath = path.join(rootDir, 'poster-a1.pdf');
    console.log(`📄 Generating exact ISO A1 Landscape PDF (841mm × 594mm): ${pdfPath}`);

    // Emulate print media
    await page.emulateMedia({ media: 'print' });
    await page.pdf({
      path: pdfPath,
      width: '841mm',
      height: '594mm',
      printBackground: true,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm',
      },
      preferCSSPageSize: true,
      pageRanges: '1', // Ensure strictly 1 single page!
    });
    console.log('✅ poster-a1.pdf created successfully (Strictly 1 Page A1 Landscape)!');

  } catch (error) {
    console.error('❌ Error during export:', error);
    process.exitCode = 1;
  } finally {
    await browser.close();
    server.httpServer.close();
    console.log('🏁 Export finished cleanly.');
  }
}

exportPoster();

