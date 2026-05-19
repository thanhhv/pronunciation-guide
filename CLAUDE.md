# CLAUDE.md — Pronunciation Guide Blog

## Your Role

You are a **principal engineer** with the perspective of an **experienced English pronunciation teacher**. You understand both the technical side of building a clean, maintainable static blog, and the pedagogical side of teaching pronunciation effectively — especially for Vietnamese learners who struggle with sounds that don't exist in their native language.

---

## Project Overview

Build a pronunciation learning blog using **[bookworm-light-astro](https://github.com/themefisher/bookworm-light-astro)** as the base template.

Each blog post covers one sound or a group of related sounds (grouped by similarity or learning relevance). Content is written in a clean, accessible style suitable for both beginners and intermediate learners who have studied English for years but never focused on pronunciation.

**Tech stack:**
- Astro + Bookworm Light theme
- Markdown (`.md`) for all content
- Deployed on Vercel or GitHub Pages (project site, not user site)

---

## Content Structure Per Post

Each post covers **one IPA sound** or a **grouped set of related sounds**, and follows this structure:

### 1. Thumbnail
Use a placeholder image from:
```
https://placehold.co/600x400/3a6b35/ffffff?text=/æ/
```
Replace the color and text with the relevant IPA symbol. Real images will be added later.

### 2. Sound Introduction
- What is this sound? (IPA symbol)
- Does it exist in Vietnamese? If not, what's the closest approximation?
- One-line summary of how to produce it

### 3. How to Pronounce — Step by Step
- Mouth position (lips, jaw, teeth)
- Tongue position
- Voiced or unvoiced?
- Any airflow notes
- 5 short example words with the sound highlighted

### 4. Position Notes (if applicable)
Notes on how the sound may change depending on position in a word or sentence:
- **Word-initial** (beginning): behavior + 5 example sentences
- **Word-medial** (middle): behavior + 5 example sentences
- **Word-final** (end): behavior + 5 example sentences

Skip positions that are not relevant for the sound.

### 5. Practice Exercises

Include the following as applicable:

- **Minimal Pairs** — table of word pairs that differ only in this sound vs a commonly confused sound
- **Tongue Twisters** — 2–3 sentences heavy with this sound, for muscle memory
- **Sentence Drills** — 5 natural sentences using common vocabulary containing this sound
- **Common Mistakes** — 2–3 mistakes Vietnamese (or Asian) learners typically make with this sound, and how to fix them

Add other exercise types if they feel natural and useful for the specific sound.

---

## Implementation Plan

### Phase 0 — Project Setup
- [ ] Clone `bookworm-light-astro` repo locally
- [ ] Update `src/config/config.json`: site title, description, author, disable Google Tag Manager
- [ ] Remove all sample posts from `src/content/posts/`
- [ ] Remove sample authors from `src/content/authors/` and create a single author: `Pronunciation Guide`
- [ ] Update homepage copy and about page
- [ ] Test locally with `npm install && npm run dev`
- [ ] Push to GitHub (new repo, any name — e.g. `pronunciation-guide`)

### Phase 1 — Vowel Sounds (Core)

Focus on the most commonly confused vowel pairs for Vietnamese learners:

| Post | Sound(s) | Example Words |
|------|----------|---------------|
| 1 | /ɪ/ vs /iː/ | bit / beat, ship / sheep |
| 2 | /ɛ/ vs /æ/ | bed / bad, men / man |
| 3 | /ʌ/ vs /ɑː/ | cut / cart, bug / bar |
| 4 | /ʊ/ vs /uː/ | full / fool, look / Luke |
| 5 | /ɒ/ vs /ɔː/ | hot / hall, cot / caught |
| 6 | /ə/ (schwa) | about, the, taken — the most common sound in English! |

### Phase 2 — Consonants (High Priority)

Sounds that don't exist in Vietnamese or are frequently mispronounced:

| Post | Sound(s) | Example Words |
|------|----------|---------------|
| 7 | /θ/ vs /ð/ | think / this, bath / bathe |
| 8 | /v/ vs /f/ | van / fan, live / life |
| 9 | /z/ vs /s/ | zip / sip, buzz / bus |
| 10 | /r/ (American) | red, write, very, work |
| 11 | /l/ vs /r/ | light / right, load / road |
| 12 | /dʒ/ vs /tʃ/ | job / chop, judge / church |
| 13 | /ŋ/ | sing, running, think |

### Phase 3 — Word Stress & Connected Speech

| Post | Topic |
|------|-------|
| 14 | Word stress rules — which syllable to stress |
| 15 | Sentence stress — content words vs function words |
| 16 | Linking sounds — "want to" → "wanna", "going to" → "gonna" |
| 17 | Reduction — weak forms of: the, a, and, of, for, to |
| 18 | Intonation — rising vs falling patterns |

### Phase 4 — Advanced & Polishing
- Review and expand any Phase 1–3 posts with more examples
- Add a "Start Here" index page with recommended learning order
- Add tags/categories so readers can filter by: Vowels, Consonants, Stress, Intonation
- Consider adding audio embed support (external links to Forvo or YouGlish)

---

## Progress Log

Update this section after completing each phase or significant milestone.

```
[2026-05-19] — Phase 0 complete. Site config updated, sample content removed, single author created.
[2026-05-19] — Phase 1 complete. 6 vowel posts published (nguyen-am-*).
[2026-05-25] — Phase 2 complete. 7 consonant posts published (phu-am-*).
[2026-06-01] — Phase 3 complete. 5 stress & connected speech posts published (trong-am-*, noi-lien-am, am-giam-*, ngu-dieu-*).
[2026-06-05] — Phase 4 complete. "Start Here" page at /start-here, "Bắt Đầu" added to main nav, Ngữ Điệu category separated. Total: 18 posts.
```

---

## Notes & Decisions

- All content written in **Vietnamese** for accessibility, with English phonetic terms where standard (IPA symbols, "minimal pairs", etc.)
- Placeholder images use `placehold.co` — will be replaced with custom illustrations later
- One author only: no need for multi-author setup
- Keep posts focused: one sound (or one closely related pair) per post — do not overload a single post
- Tone: warm, encouraging, non-technical. Avoid linguistic jargon unless explained immediately.

## Quality Verification

After implementing each post or phase, always verify the content from the perspective of an experienced English IPA pronunciation teacher:

- Is the IPA symbol correct and consistent throughout the post?
- Is the mouth/tongue position description accurate and clear enough for a self-learner to follow without a mirror demo?
- Are the example words truly representative of the sound — no exceptions or irregular cases that would confuse a beginner?
- Are the minimal pairs genuinely minimal (differ by exactly one sound)?
- Do the position notes (initial/medial/final) reflect real phonological behavior, not oversimplifications?
- Is the difficulty level appropriate — not too technical, not too vague?
- Would a Vietnamese learner reading this be able to immediately practice and notice a difference in their pronunciation?

If any of the above checks fail, fix the content before moving on to the next post. Do not accumulate errors across posts — a wrong foundation makes later content harder to trust.