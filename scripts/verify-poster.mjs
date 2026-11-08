import { chromium } from 'playwright';
import { preview } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function verifyPoster() {
  console.log('🧪 Starting Academic Poster Verification Checks...');

  const server = await preview({
    root: rootDir,
    preview: { port: 4174, open: false },
  });

  const url = 'http://localhost:4174';
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  let failed = false;

  try {
    await page.goto(url, { waitUntil: 'networkidle' });

    // 1. Verify Title & Research Question
    const title = await page.textContent('h1');
    if (!title?.includes('THE ICEBERG OF LEARNING')) {
      throw new Error(`Title check failed: ${title}`);
    }
    console.log('✓ Academic Title validated: THE ICEBERG OF LEARNING');

    const bodyText = await page.textContent('body');
    if (!bodyText?.includes('What Lies Beneath a High Grade?')) {
      throw new Error('Subtitle check failed');
    }
    console.log('✓ Subtitle validated: What Lies Beneath a High Grade?');

    if (!bodyText?.includes('Do high grades necessarily reflect actual understanding')) {
      throw new Error('Research question check failed');
    }
    console.log('✓ Research Question validated');

    // 2. Verify all four Authors
    const authors = [
      'Nikita Shulmin',
      'Dana Kenzhebayeva',
      'Islam Akhmetov',
      'Abzhappar Abylaikhan'
    ];
    for (const author of authors) {
      if (!bodyText?.includes(author)) {
        throw new Error(`Author missing: ${author}`);
      }
    }
    console.log('✓ All 4 SSE-2601 Authors validated');

    // 3. Verify all five Iceberg Levels
    const levels = [
      'ACADEMIC PERFORMANCE',
      'CONCEPTUAL UNDERSTANDING',
      'PRACTICAL APPLICATION',
      'CRITICAL THINKING',
      'LONG-TERM RETENTION'
    ];
    for (const lvl of levels) {
      if (!bodyText?.includes(lvl)) {
        throw new Error(`Iceberg dimension missing: ${lvl}`);
      }
    }
    console.log('✓ All 5 Iceberg Dimensions validated');

    // 4. Verify Theoretical Foundations
    const theories = [
      'John Biggs (1996)',
      'Paulo Freire (2000)',
      'Grabinger & Dunlap (1995)'
    ];
    for (const th of theories) {
      if (!bodyText?.includes(th)) {
        throw new Error(`Theory missing: ${th}`);
      }
    }
    console.log('✓ All Theoretical Perspectives (Biggs, Freire, Grabinger & Dunlap) validated');

    // 5. Verify Comp Arch Example
    if (!bodyText?.includes('CPU (PROCESSING)') || !bodyText?.includes('RAM (MEMORY)')) {
      throw new Error('Computer Architecture CPU/RAM example missing');
    }
    console.log('✓ Computer Organisation & Architecture CPU/RAM example validated');

    // 6. Verify APA References
    if (!bodyText?.includes('Biggs, J. (1996)') || !bodyText?.includes('Magnússon, G., & Rytzler, J. (2022)')) {
      throw new Error('APA References missing');
    }
    console.log('✓ Verified APA 7 References list validated');

    // 7. Verify Conclusion Callout
    if (!bodyText?.includes('Grades should measure learning — not define its limits.')) {
      throw new Error('Final conclusion callout missing');
    }
    console.log('✓ Prominent Conclusion validated: "Grades should measure learning — not define its limits."');

    console.log('\n🎉 ALL ACADEMIC & TECHNICAL CHECKS PASSED (7/7)!');
  } catch (err) {
    console.error('❌ Verification failed:', err);
    failed = true;
  } finally {
    await browser.close();
    server.httpServer.close();
    if (failed) process.exit(1);
  }
}

verifyPoster();

