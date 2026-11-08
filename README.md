# The Iceberg of Learning: What Lies Beneath a High Grade?
## Premium Academic Conference Poster (A1 Landscape • 841 mm × 594 mm)

### Academic Context
- **Course:** Higher Education Pedagogy
- **Degree Program:** Master's Degree Program, Department of General Education Disciplines
- **Institution:** Astana IT University
- **Group:** SSE-2601
- **Academic Year:** 2026
- **Research Question:** *"Do high grades necessarily reflect actual understanding and the ability to apply knowledge?"*
- **Central Thesis:** A high grade is visible evidence of performance, but it cannot independently demonstrate the full depth of student learning. Meaningful learning goes deeper.

---

### Authors & Research Contributions
- **Nikita Shulmin** — Academic performance, memorisation-based assessment, practical assessment, and feedback.
- **Dana Kenzhebayeva** — Constructive alignment, practical judgment, educational philosophy, and the balance between structure and flexibility.
- **Islam Akhmetov** — Practical learning, formative feedback, and theoretical knowledge applied to Computer Organisation and Architecture.
- **Abzhappar Abylaikhan** — Interactive teaching, student participation, classroom discussions, and group-based mini-lessons.

---

### Key Sections (Aligned with Appendix 5)
1. **Section 1 — Introduction and Background:** Hook scenario (`"You score 95/100. But can you still explain what you learned next week?"`), pedagogical significance, group position.
2. **Section 2 — Key Arguments & Critical Analysis (The Iceberg Metaphor):**
   - **Level 1 (Above Water):** Academic Performance (grades, reproduced definitions, test marks).
   - **Level 2 (Submerged):** Conceptual Understanding (explain in own words, connect ideas).
   - **Level 3 (Submerged):** Practical Application (systems problem-solving, Computer Architecture CPU ↔ RAM interaction).
   - **Level 4 (Submerged):** Critical & Independent Thinking (questioning assumptions, evaluating trade-offs).
   - **Level 5 (Submerged):** Long-Term Retention & Transfer (durable mastery across time).
   - Critical comparison: Standardized Examinations vs. Authentic Practical Projects.
3. **Theoretical Foundations:**
   - **John Biggs (1996):** Constructive Alignment (Outcomes ↔ Activities ↔ Assessment).
   - **Paulo Freire (2000):** Problem-Posing Education vs. Banking Model of Education.
   - **Grabinger & Dunlap (1995):** Rich Environments for Active Learning (REAL).
   - **Formative Feedback Cycle:** Assess → Feedback → Reflect → Improve.
4. **Section 3 — Relevance and Application to Higher Education Practice:**
   - Five-part assessment ecosystem: Examinations, Practical Projects, Case Studies, Presentations, and Formative Feedback.
   - Computing Systems Architecture case study (CPU ↔ RAM bus interactions).
   - 4 Evidence-informed recommendations for higher education institutions.
5. **Section 4 — Conclusion:** Group synthesis & callout *"Grades should measure learning — not define its limits."*
6. **Section 5 — References:** APA 7th Edition verified scholarly citations.

---

### Getting Started

#### Prerequisites
- Node.js (v18+ recommended, verified on v26)
- npm (v9+)

#### Installation
```bash
npm install
```

#### Running the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to interact with the responsive web view and zoomable A1 canvas.

#### Production Build
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` directory.

#### Exporting A1 Landscape PDF & High-Resolution Preview PNG
```bash
npm run export
```
This automated Playwright script starts the production preview server, loads all web fonts and vector illustrations, and generates:
- `poster-a1.pdf` — Exactly 1-page ISO 216 A1 Landscape (841 mm × 594 mm) with print background enabled.
- `poster-preview.png` — Ultra-high resolution visual preview.

---

### How to Modify Content
- **Poster Text & Structure:** Edit `src/data/posterContent.ts`.
- **Scholarly Citations:** Edit `src/data/references.ts`.
- **Iceberg Vector Illustration:** Edit `src/components/IcebergIllustration.tsx`.
- **Print & Sizing Rules:** Edit `src/styles/print.css` and `src/styles/tokens.css`.

