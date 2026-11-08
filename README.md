# The Iceberg of Learning: What Lies Beneath a High Grade?
## Premium 3D Interactive & Academic Conference Poster (ISO 216 A1 Landscape • 841 mm × 594 mm)

### Overview
This project presents an award-winning academic conference poster and interactive 3D web experience developed for **Astana IT University** (Course: *Pedagogy of Higher Education*, Academic Year 2026).

It investigates the central pedagogical question:
> **"Do high grades necessarily reflect actual understanding and the ability to apply knowledge?"**

Anchored by the metaphor of the iceberg:
- **Above the Water (~10% visible):** Surface Academic Performance, examination marks, and formulaic reproduction.
- **Submerged Below (~90% deeper):** Conceptual Understanding, Practical Application, Critical Thinking, and Durable Long-Term Retention.
- **Key Takeaway:** *"A high grade is visible. Meaningful learning goes deeper."*
- **Final Consensus:** *"Grades should measure learning — not define its limits."*

---

### Key Architectural Highlights
1. **Photorealistic 3D Crystalline Iceberg (`Three.js`):**
   - Procedural crystalline geometry with 5 depth strata corresponding to learning dimensions.
   - Realistic sunlight reflections, turquoise subsurface scattering, and deep ocean fog.
   - Dynamic real-time ocean wave ripples and suspended particulate drift.
   - Interactive rotation controls via mouse drag, touch gestures, and subtle gyroscope/mouse parallax.
2. **Interactive 5-Layer Stratum Explorer:**
   - **Level 1 (Surface • 0 m):** Academic Performance (exam scores, correct answers, reproduction).
   - **Level 2 (Depth • -150 m):** Conceptual Understanding (explaining in own words, connecting concepts).
   - **Level 3 (Depth • -350 m):** Practical Application (systems problem-solving, Computer Architecture CPU ↔ RAM bus interactions).
   - **Level 4 (Depth • -550 m):** Critical Thinking (questioning assumptions, evaluating alternatives).
   - **Level 5 (Depth • -800 m):** Long-Term Retention (durable schema, cross-domain knowledge transfer).
   - Clicking any depth marker or 3D layer illuminates that stratum and opens a contextual educational drawer.
3. **Procedural Web Audio Ocean Ambience:**
   - Pure Web Audio API synthesis creating calming rhythmic ocean waves and wind.
   - Zero external audio files required, completely local, off by default with clean toggle.
4. **Cohesive Academic Editorial Design:**
   - Balanced three-column composition: Left (Research & Theories), Centre (3D Iceberg Metaphor), Right (Analysis & HE Applications).
   - Includes John Biggs (1996) Constructive Alignment flow, Paulo Freire (2000) Problem-Posing vs Banking education, Grabinger & Dunlap (1995) REAL framework, Formative Feedback Cycle, and balanced comparison of Examinations vs Projects.
   - Verified APA 7th Edition bibliography and individual contributor attribution strip.
5. **Separate Static Print & A1 PDF Layout:**
   - Exact ISO 216 A1 Landscape (841 mm × 594 mm) single-page print stylesheet.
   - Automated export script producing `poster-a1.pdf` and `poster-preview.png`.

---

### Authors & Research Roles (SSE-2601)
- **Nikita Shulmin** — Academic performance, memorisation-based assessment, practical assessment, and feedback.
- **Dana Kenzhebayeva** — Constructive alignment, practical judgment, educational philosophy, and the balance between structure and flexibility.
- **Islam Akhmetov** — Practical learning, formative feedback, and theoretical knowledge applied to Computer Organisation and Architecture.
- **Abzhappar Abylaikhan** — Interactive teaching, student participation, classroom discussions, and group-based mini-lessons.

---

### Verified APA 7th Edition Bibliography
1. Biggs, J. (1996). Enhancing teaching through constructive alignment. *Higher Education, 32*(3), 347–364. https://doi.org/10.1007/BF00138871
2. Freire, P. (2000). *Pedagogy of the oppressed* (30th anniversary ed.). Continuum.
3. Grabinger, R. S., & Dunlap, J. C. (1995). Rich environments for active learning: A definition. *Research in Learning Technology, 3*(2), 5–34. https://doi.org/10.1080/0968776950030202
4. Magnússon, G., & Rytzler, J. (2022). *Towards a pedagogy of higher education: The Bologna process, Didaktik and teaching*. Routledge. https://doi.org/10.4324/9781003054160

---

### Installation & Commands

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (http://localhost:3000)
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Run automated academic & structural QA tests
npm test

# 5. Run multi-viewport responsiveness tests
node scripts/test-responsive.mjs

# 6. Export high-resolution PNG preview and 1-page A1 PDF
npm run export
```

---

### Generated Assets in Repository
- `poster-a1.pdf` — Strictly 1-page ISO 216 A1 Landscape PDF ready for large-format print.
- `poster-preview.png` — Ultra-high resolution visual preview.
