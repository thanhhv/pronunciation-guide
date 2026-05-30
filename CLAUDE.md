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

### Phase 5 — Complete IPA Coverage

#### 5a — Missing Vowel: r-colored vowel

| Post | Sound(s) | Example Words |
|------|----------|---------------|
| 19 | /ɜː/ (r-colored) | bird, word, nurse, first, her |

#### 5b — Diphthongs (8 posts)

Vietnamese has no diphthongs that glide the same way — all 8 are worth covering:

| Post | Sound(s) | Example Words |
|------|----------|---------------|
| 20 | /eɪ/ | wait, name, face, day, rain |
| 21 | /aɪ/ | my, time, night, fly, eye |
| 22 | /ɔɪ/ | boy, coin, voice, join, oil |
| 23 | /aʊ/ | cow, now, out, house, down |
| 24 | /əʊ/ | show, go, home, stone, road |
| 25 | /ɪə/ | here, near, ear, fear, beer |
| 26 | /eə/ | hair, there, care, air, where |
| 27 | /ʊə/ | tourist, pure, cure, sure |

#### 5c — Missing Consonants

| Post | Sound(s) | Example Words | Note |
|------|----------|---------------|------|
| 28 | /ʃ/ vs /ʒ/ | shall / television, shoe / measure | /ʒ/ rare but confusing |
| 29 | /w/ vs /v/ | wet / vet, wine / vine | Vietnamese "v" ≠ English /v/ or /w/ |
| 30 | /j/ | yes, year, you, yesterday | Often confused with /dʒ/ |
| 31 | /h/ | hat, house, behind, ahead | Vietnamese "h" is different |

**Skip for now** (not problematic for Vietnamese learners): /p/, /b/, /t/, /d/, /k/, /g/, /m/, /n/ — these exist in Vietnamese and transfer naturally. Covered in Phase 6.

### Phase 6 — Complete Consonant Set (Completeness)

For learners who want full IPA coverage. These sounds exist in Vietnamese so Vietnamese learners won't struggle — but they're still worth documenting for completeness and for learners from other backgrounds.

| Post | Sound(s) | Example Words | Note |
|------|----------|---------------|------|
| 32 | /p/ vs /b/ | pea / boat, cap / cab | Voicing contrast; /p/ has aspiration in English |
| 33 | /t/ vs /d/ | tea / dog, bat / bad | Aspiration on /t/; /d/ fully voiced |
| 34 | /k/ vs /g/ | car / go, back / bag | Aspiration on /k/; /g/ fully voiced |
| 35 | /m/ vs /n/ | man / now, sum / sun | Nasal contrast; both exist in Vietnamese |

> **Note:** English /p/, /t/, /k/ are **aspirated** (a puff of air) at the start of stressed syllables — "pin" (/pʰɪn/) not "bin". This is a subtle but real difference that Vietnamese learners may overlook since Vietnamese aspiration works differently.

### Phase 7 — Embed Audio Into All Posts

All audio files are at `public/audio/`. Embed using this pattern directly in the `.md` file, placed right under each sound's `###` heading:

```html
<audio controls preload="none" style="height:36px;margin-bottom:12px">
  <source src="/audio/FILENAME.mp3" type="audio/mpeg" />
</audio>
```

#### Audio file → post mapping

| Post file | Sound | Audio file(s) |
|-----------|-------|---------------|
| nguyen-am-i-ngan-va-dai | /ɪ/ / /iː/ | `i-ngan.mp3` / `i-dai.mp3` ✓ done |
| nguyen-am-e-va-ae | /e/ / /æ/ | `e.mp3` / `ae.mp3` |
| nguyen-am-a-ngan-va-dai | /ʌ/ / /ɑː/ | `a ngắn.mp3` / `a dài.mp3` |
| nguyen-am-u-ngan-va-dai | /ʊ/ / /uː/ | `u ngắn.mp3` / `u dài.mp3` |
| nguyen-am-o-va-o-dai | /ɒ/ / /ɔː/ | `o ngắn.mp3` / `o dài.mp3` |
| nguyen-am-schwa | /ə/ | `ơ ngắn.mp3` |
| phu-am-th-va-dh | /θ/ / /ð/ | `θ.mp3` / `ð.mp3` |
| phu-am-v-va-f | /v/ / /f/ | `v.mp3` / `f.mp3` |
| phu-am-z-va-s | /z/ / /s/ | `z.mp3` / `s.mp3` |
| phu-am-r-kieu-my | /r/ | `r.mp3` |
| phu-am-l-va-r | /l/ / /r/ | `l.mp3` / `r.mp3` |
| phu-am-dj-va-ch | /dʒ/ / /tʃ/ | `dʒ.mp3` / `t∫.mp3` |
| phu-am-ng | /ŋ/ | `η.mp3` |
| *(Phase 5)* /ɜː/ | /ɜː/ | `ơ dài.mp3` |
| *(Phase 5)* /eɪ/ | /eɪ/ | `ei.mp3` |
| *(Phase 5)* /aɪ/ | /aɪ/ | `aɪ.mp3` |
| *(Phase 5)* /ɔɪ/ | /ɔɪ/ | `oi.mp3` |
| *(Phase 5)* /aʊ/ | /aʊ/ | `aʊ.mp3` |
| *(Phase 5)* /əʊ/ | /əʊ/ | `əʊ.mp3` |
| *(Phase 5)* /ɪə/ | /ɪə/ | `ie.mp3` |
| *(Phase 5)* /eə/ | /eə/ | `ea.mp3` |
| *(Phase 5)* /ʊə/ | /ʊə/ | `ʊə.mp3` |
| *(Phase 5)* /ʃ/ vs /ʒ/ | /ʃ/ / /ʒ/ | `∫.mp3` / `ʒ.mp3` |
| *(Phase 5)* /w/ vs /v/ | /w/ | `w.mp3` |
| *(Phase 5)* /j/ | /j/ | `j.mp3` |
| *(Phase 5)* /h/ | /h/ | `h.mp3` |
| *(Phase 6)* /p/ vs /b/ | /p/ / /b/ | `p.mp3` / `b.mp3` |
| *(Phase 6)* /t/ vs /d/ | /t/ / /d/ | `t.mp3` / `d.mp3` |
| *(Phase 6)* /k/ vs /g/ | /k/ / /g/ | `k.mp3` / `g.mp3` |
| *(Phase 6)* /m/ vs /n/ | /m/ / /n/ | `m.mp3` / `n.mp3` |

#### Notes
- File names with spaces or special characters (e.g. `a ngắn.mp3`, `ơ dài.mp3`) work fine in `src` attributes — browsers handle URL encoding automatically.
- Phase 3 posts (stress, intonation) have no dedicated audio files — they don't correspond to single IPA sounds. Skip Phase 7 for those posts.
- Embed audio immediately after the `### /X/` heading so the learner hears the sound before reading the instructions.

---

## Progress Log

Update this section after completing each phase or significant milestone.

```
[2026-05-19] — Phase 0 complete. Site config updated, sample content removed, single author created.
[2026-05-19] — Phase 1 complete. 6 vowel posts published (nguyen-am-*).
[2026-05-25] — Phase 2 complete. 7 consonant posts published (phu-am-*).
[2026-06-01] — Phase 3 complete. 5 stress & connected speech posts published (trong-am-*, noi-lien-am, am-giam-*, ngu-dieu-*).
[2026-06-05] — Phase 4 complete. "Start Here" page at /start-here, "Bắt Đầu" added to main nav, Ngữ Điệu category separated. Total: 18 posts.
[2026-05-21] — Phase 5 complete. 13 new posts: /ɜː/, 8 diphthongs (/eɪ/ /aɪ/ /ɔɪ/ /aʊ/ /əʊ/ /ɪə/ /eə/ /ʊə/), 4 consonants (/ʃ//ʒ/, /w/, /j/, /h/). Total: 31 posts.
[2026-05-21] — Phase 6 complete. 4 posts: /p//b/, /t//d/, /k//g/, /m//n/. Full IPA coverage achieved. Total: 35 posts.
[2026-05-21] — Phase 7 complete. Audio embeds added to all Phase 1–2 posts (12 posts). All Phase 5 posts already included audio. Full site now has inline audio players for all IPA sound posts.
[2026-05-30] — Exercises expanded to 16 IPA sound sets (12 new). Added fullIPA field to all 240 questions for "Show IPA" hint display (British RP transcriptions).
[2026-05-30] — Sentence exercise type implemented: 4 sets × 10 questions (sentences-1 through sentences-4). New components: SentenceQuestionRow.astro, SentenceExerciseSet.astro. /exercises page now shows both exercise types.
[2026-05-30] — /exercises page UI updated: color-coded cards (teal for sound, orange #E07B39 for sentence), emoji icons (🔊/📖), difficulty badges (Cơ bản/Trung cấp), styled section divider headers with subtitles.
[2026-05-30] — /exercises card styling simplified: neutral gray border (#e5e7eb) on all cards, no colored left border, no emoji icons, no title color change on hover. Hover state is box-shadow only. Accent color kept on badges and "Bắt đầu →" link only.
[2026-05-30] — /exercises further simplified: removed all difficulty badges; "Đọc câu IPA" section renamed to "Phonetic Practice"; only color difference between sections is "Bắt đầu →" link (teal vs orange).
[2026-05-30] — Sentence exercise set titles renamed to English: "Phonetic Practice — Shopping/Weather & Travel/Daily Life/Food & Restaurants".
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

---

## Content Review Checklist

Run this checklist on each post before publishing or after major edits.

### IPA Accuracy
- [ ] IPA symbols are correct and consistent throughout
- [ ] Mouth/tongue position description matches the actual phoneme
- [ ] Voiced/unvoiced distinction stated where relevant

### Examples
- [ ] Example words are common vocabulary (no obscure words for beginners)
- [ ] Minimal pairs differ by exactly one sound — no exceptions
- [ ] Tongue twisters contain ≥ 5 instances of the target sound
- [ ] Sentence drills use natural, common sentences (not artificially constructed)

### Vietnamese Learner Specifics
- [ ] Common mistakes section addresses specifically Vietnamese substitution errors
- [ ] Dialect flag added where American vs. British pronunciation differs significantly
- [ ] Register flag added where a form (e.g., "wanna") is informal-only

### Structure
- [ ] All five sections present: Introduction, How to Pronounce, Position Notes, Practice, Common Mistakes
- [ ] Practice section has progression: isolated sound → words → sentences
- [ ] "Nghe thêm" section includes 3–5 YouGlish/Forvo links for key words

### Post-Specific Checks
- /r/ post: bunched method recommended first ✓
- /θ/ /ð/ post: ≥ 8 minimal pairs ✓
- Word stress post: 3+ syllable words and secondary stress covered ✓
- Linking post: elision rule stated explicitly (not just examples) ✓
- Intonation post: tag questions either fully developed or trimmed to 2 examples

If any of the above checks fail, fix the content before moving on to the next post. Do not accumulate errors across posts — a wrong foundation makes later content harder to trust.

---

## Sentence Exercise Type

### Data structure (`src/data/exercises.ts`)
```ts
interface SentenceQuestion {
  id: number;
  ipa: string;       // Full sentence IPA (British RP), shown as the prompt
  options: string[]; // 4 English sentences; one matches the IPA exactly
  answer: string;    // The correct English sentence (must equal one option exactly)
}
interface SentenceExerciseSet {
  id: string;
  title: string;
  description: string;
  questions: SentenceQuestion[];
}
export const sentenceExerciseSets: SentenceExerciseSet[];
```

### Sets
| ID | Title | Questions |
|----|-------|-----------|
| `sentences-1` | Đọc IPA — Mua sắm | 10 |
| `sentences-2` | Đọc IPA — Thời tiết & Du lịch | 10 |
| `sentences-3` | Đọc IPA — Cuộc sống hàng ngày | 10 |
| `sentences-4` | Đọc IPA — Nhà hàng & Đồ ăn | 10 |

### Components
- `src/layouts/components/exercises/SentenceQuestionRow.astro` — renders IPA prompt + 4 A/B/C/D option buttons
- `src/layouts/components/exercises/SentenceExerciseSet.astro` — wrapper with check/reset logic; uses `sentence-exercise-set` class, same `data-locked`/`data-correct`/`aria-pressed` pattern as sound exercises

### Route
`src/pages/exercises/[id].astro` uses a discriminated union props pattern (`kind: "sound" | "sentence"`) with optional `soundSet?` / `sentenceSet?` to avoid TypeScript narrowing issues in Astro frontmatter.

---

## Distractor Review — Sentence Exercises

After writing each set, all 4 distractors per question were reviewed against these rules:
1. Each wrong option must be a grammatically plausible English sentence.
2. No distractor may share the same IPA as the correct answer (no homophones).
3. Wrong options must differ from the answer by a realistic phonetic confusion (vowel swap, consonant swap, or cluster change) — not by common sense elimination.
4. No duplicate sentences within a question (all 4 options must be distinct).

### Issues found and fixed

**sentences-1 (Shopping)**
- Q5 original answer "I need a bigger size": distractor used "beggar" (noun, not adjective — eliminatable by grammar). Changed the answer sentence to "I need a smaller size" and updated all distractors.

**sentences-2 (Weather & Travel)**
- Entire first draft scrapped. Issues: `rain`/`reign` share IPA `/reɪn/` (homophone trap); `weather`/`whether` share IPA `/ˈweðə/` (RP). Q3 had a duplicate option. Q3/Q4/Q5/Q10 had the correct answer repeated as a distractor. IPA `/ðə fleɪt/` was wrong (should be `/flaɪt/`). Replaced with 10 fresh questions.

**sentences-3 (Everyday Conversations)**
- Q9 option B "She sold me to wait outside" was semantically eliminatable (implies human trafficking). Changed to "She bowled me to wait outside" (/t/→/b/ substitution in "told").

**sentences-4 (Food & Restaurants)**
- Q8 option C "This coffee is too strange for me" — minor: "strange" is an unusual collocation but not ungrammatical. Kept as-is; eliminatable by weak-form reading of `/strɒŋ/` vs `/streɪndʒ/`.

### Homophone reference (avoid as distractors)
These common pairs share identical British RP IPA — never use one as a distractor for the other:
`rain`/`reign`, `weather`/`whether`, `morning`/`mourning`, `night`/`knight`, `meet`/`meat`, `sea`/`see`, `sale`/`sail`, `floor`/`flaw`, `here`/`hear`, `there`/`their`/`they're`