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
[2026-05-31] — Senior-teacher content audit of all 35 posts. 3 commits applied: (1) P0 factual fixes — narrow /ɛ/ → RP /e/ throughout e-va-ae; "where/weird" non-pair replaced with "rare/rear" in ea; r-kieu-my reordered to put Bunched method first per checklist; w-va-v rewritten to remove self-contradiction on word-final 'w'; /ŋ/ never-word-initial rule added; church IPA fixed to RP /tʃɜːtʃ/; dangling "him/hinge —" replaced with "seem/seen". (2) P1 pedagogical fixes — 4 non-word minimal pairs replaced across diphthong posts (ei/ai/oi/ia); TH minimal-pair table expanded from 5 to 8; "zeal" → "zoo" in z-va-s plus voicing rule for -s/-es endings; linking-post elision rule promoted to bolded rule header + American /t/-flapping note added; explicit "after /s/, /p t k/ are NOT aspirated" rule added to p/t/k posts. (3) P2 polish — mouth-position descriptions tightened for /æ//ɒ//ɜː//aɪ/; schwa intro reframed as reduction phenomenon; /ɜː/ post converted from rhotic to non-rhotic RP throughout with RP/American split explicit; -ng morphological rule clarified (root vs comparative vs gerund vs agent); cot-caught merger callout moved out of intro into end-of-post dialect section; audio file ie.mp3 renamed ia.mp3 to match slug.
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

---

## Pedagogical Review — 2026-05-30

### Curriculum strengths

- **Core vowel pairs are covered correctly and first.** The two highest-priority sets for Vietnamese learners — `/ɪ/ vs /iː/` and `/e/ vs /æ/` — open the sound exercises. This matches the blog's Phase 1 priority order and gives learners the highest-yield practice up front.
- **Consistent minimal-pair structure within sets.** Each binary contrast set (e.g. `i-ngan-vs-i-dai`, `e-va-ae`, `th-va-dh`) alternates the two target sounds question by question. This call-and-response rhythm is effective for discrimination training.
- **Mixed-vowel consolidation sets are well-placed.** `mixed-e-family` and `mixed-short-vowels` appear after their constituent pairs have been drilled individually, functioning correctly as review/consolidation rather than introduction.
- **Centering diphthongs grouped together.** Grouping `/ɪə/ · /eə/ · /ʊə/` in a single set (`centering-diphthongs`) is pedagogically sound — these three share the same schwa glide and benefit from being distinguished together.
- **Sentence exercise distractors are phonetically honest.** Distractors consistently target real phonetic confusions (vowel swaps, consonant swaps, cluster changes) rather than semantic or grammatical traps. This is the correct approach for IPA reading practice.
- **Topic breadth of sentence sets.** Shopping, travel, daily life, and restaurants cover the four situational domains most likely to matter to a Vietnamese learner preparing for real-world use. All four topics are B1-appropriate.

---

### Ordering issues

**1. `/θ/ vs /ð/` and `/l/ vs /r/` appear before Phase 1 vowel pairs are complete (sets 3 and 4 in the array).**

The current array order is: `/ɪ/ vs /iː/` → `/e/ vs /æ/` → `/θ/ vs /ð/` → `/l/ vs /r/` → `/ʌ/ vs /ɑː/` → `/ʊ/ vs /uː/` → `/ɒ/ vs /ɔː/`. This means the consonant sets `th-va-dh` and `l-va-r` are sandwiched inside the vowel series, breaking the logical Phase 1 → Phase 2 progression described in the blog's own implementation plan. Learners navigating the exercise list will encounter two consonant drills before finishing core vowels. Recommended fix: move `th-va-dh` and `l-va-r` to after `o-ngan-vs-o-dai` (after all six Phase 1 vowels are complete).

**2. `/ɜː/ vs /ɔː/` (`er-vs-or`) appears before the diphthong sets, but `/ɜː/` is a Phase 5 sound.**

The two r-colored/long vowel sets (`er-vs-or` and `mixed-e-family`) are placed in the "Phase 2 — Advanced Vowels" comment block before all eight diphthong sets. This is reasonable as a progression (monophthongs before diphthongs), so the placement is defensible — but the set title comment "Phase 2" is misleading since `/ɜː/` is actually introduced in Phase 5 of the blog. No action required on the ordering itself, but the comment label should eventually be updated to "Phase 5 — r-colored vowel" to avoid confusion.

**3. Within `i-ngan-vs-i-dai`, Q15 (`wick`) is noticeably harder than Q1–Q14.**

All 14 preceding words are high-frequency (ship, sheep, bit, beat, sit, seat, live, leave, hit, heat, dip, deep, fit, feet). "Wick" (a candle wick) is B2–C1 vocabulary at best, and because it has no common /iː/ counterpart in the set, it functions as an isolated harder question rather than a minimal-pair contrast. Suggested replacement: `will` (→ keeps the /ɪ/ answer, B1 word, pairs naturally with `wheel` if a 16th question were ever added).

**4. Within `z-va-s`, Q5 (`zeal`) is considerably harder than the surrounding questions.**

Q1–Q4 use `zip`, `sip`, `zoo`, `sue` — all high-frequency words. `Zeal` is C1 vocabulary that many B1–B2 Vietnamese learners will not know, making the question a vocabulary test rather than a phonetic discrimination test. Suggested replacement: `zone` (already appears at Q15 — so use `zero` or `zoom` instead) or `zip code` is too long; `zap` (B2, informal but recognizable) would work. Note: `zone` already exists at Q15, so avoid duplication — `zoom` is a strong replacement for `zeal`.

**5. Within `dj-vs-ch`, Q5 (`gin`) may confuse learners.**

"Gin" is a word most Vietnamese learners know only as the alcoholic drink, not as a phonetic example. More importantly, the spelling G-I-N producing /dʒ/ contradicts the learner's likely expectation (they expect G to say /g/). This makes it a spelling-trap question more than a phonetic one. Suggested replacement: `gem` or `general` (if multi-syllable words are acceptable) — both clearly demonstrate the /dʒ/ sound without the spelling irregularity surprise.

**6. Sentence sets: `sentences-1` Q1 (`/haʊ mʌtʃ ɪz ðɪs/`) is the easiest possible sentence and should stay first — good. However, `sentences-2` Q10 (`The platform is on the other side`) is significantly harder than Q1–Q3 of the same set.**

The jump from "It's raining hard today" (Q1) to a sentence with `platform`, `other`, and `side` all competing as potential confusables is steep within a single set. If difficulty progression within sets is a goal, Q10 of `sentences-2` would fit better at Q7–Q8. This is a minor ordering issue rather than a content error.

---

### Missing contrasts

The following contrast pairs are absent from the exercise curriculum and are high priority for Vietnamese learners:

**Priority 1 — Should add soon**

- **/ŋ/ word-final position** — There is a blog post for `/ŋ/` but no exercise set. Vietnamese has /ŋ/ but only in certain tonal environments; learners frequently drop or distort final /ŋ/ in English (saying "sin" for "sing", "runnin'" for "running"). A 15-question set distinguishing final /ŋ/ vs /n/ (`sing/sin`, `rang/ran`, `long/lon`, `thing/thin`, `bang/ban`) would directly address this gap.

- **/ð/ vs /d/** — The existing `th-va-dh` set correctly covers `/θ/ vs /ð/`, but Vietnamese learners substitute /d/ for /ð/ even more frequently than /z/ for /ð/. A dedicated `/ð/ vs /d/` set with minimal pairs (`then/den`, `this/dis`, `though/dough`, `those/dose`, `they/day`) would target the most common real-world error: "de" for "the", "dat" for "that".

- **/tʃ/ vs /ʃ/** — The existing `dj-vs-ch` set covers `/dʒ/ vs /tʃ/`, but Vietnamese learners also confuse /tʃ/ with /ʃ/ (saying "share" for "chair", "ship" for "chip"). A separate `/tʃ/ vs /ʃ/` set is warranted: `chip/ship`, `chin/shin`, `cheap/sheep`, `chest/shest` (non-word, so replace with `choose/shoes`, `watch/wash`, `catch/cash`).

**Priority 2 — Add in a future expansion**

- **/w/ vs /v/** — There is a blog post for `/w/ vs /v/` but no exercise set. Vietnamese speakers use a bilabial /v/ that is neither the English /w/ nor the English /v/, making both contrasts relevant: `wet/vet`, `wine/vine`, `west/vest`, `wake/vague`. This pair appears in Phase 5c of the blog plan.

- **/j/ vs /dʒ/** — Vietnamese learners commonly say /dʒ/ for /j/ (e.g. "dyear" for "year", "djou" for "you"). A set distinguishing `yes/Jess`, `yet/jet`, `yam/jam`, `year/jeer` would address a genuine production error. This pair also appears in Phase 5c.

- **/ʃ/ vs /s/** — Not listed as a blog post but worth noting: Vietnamese has /s/ but no /ʃ/, so learners say "see" for "she", "so" for "show". This is arguably more common than /ʃ/ vs /ʒ/ (which is covered in Phase 5c) and warrants an exercise set of its own.

**Priority 3 — Completeness only**

- **Schwa /ə/ identification** — The blog has a post on schwa but there is no exercise set for it. Given that /ə/ is the most frequent vowel in English and Vietnamese has no direct equivalent, a set asking learners to identify which syllable contains /ə/ (e.g. `about`, `taken`, `butter`, `problem`) would be high-value. This is harder to implement in the current binary-contrast format; a dedicated "mark the schwa" question type might be needed.

- **/ɔɪ/ identification** — There is no exercise set for /ɔɪ/ despite the blog having a post. Vietnamese has no /ɔɪ/ diphthong. A minimal contrast set (`boy/bay`, `coin/cane`, `voice/vase`, `join/Jane`) would complete diphthong coverage.

---

### Vocabulary flags

The following words in the sound exercise sets are likely above B1–B2 CEFR for the target audience:

| Set ID | Q# | Word | Issue | Suggested replacement |
|--------|-----|------|-------|-----------------------|
| `i-ngan-vs-i-dai` | Q15 | `wick` | Obscure (candle wick); no common /iː/ pair | `will` or `win` |
| `z-va-s` | Q5 | `zeal` | C1 vocabulary; learners won't recognize it | `zoom` |
| `z-va-s` | Q10 | `dose` | Medical/technical register; B2–C1 | `nose` is already Q9; use `loose` (/s/) instead — but check: `nose` (Q9, /z/) vs `dose` (Q10, /s/) is actually a valid minimal pair. Keep if the pair contrast is the goal; flag for teachers that learners may not know "dose" |
| `dj-vs-ch` | Q5 | `gin` | Spelling-trap (G→/dʒ/ is irregular); likely known only as a drink name | `gem` |
| `er-vs-or` | Q15 | `blur` | Less common than other /ɜː/ words in the set | `fur` or `slur` (but `blur` is passable at B2; keep if no better option) |
| `au-vs-ou` | Q8 | `hoe` | Gardening tool; B2–C1 for Vietnamese learners | `hole` (→ /əʊ/, keeps minimal pair feel) or `home` |
| `centering-diphthongs` | Q9 | `lure` | Uncommon in everyday speech; B2–C1 | `poor` (/ʊə/ in RP) — though note `poor` is being leveled to /pɔː/ in modern RP |

No vocabulary flags were found in the four sentence exercise sets; all sentences use everyday B1 vocabulary appropriate for the target audience.

---

### Sentence exercise recommendations

**New themes to add (priority order):**

1. **"At Work / In the Office"** — This topic is immediately practical for Vietnamese learners who study English for professional purposes. Target phonetic features: final consonant clusters (`project`, `report`, `deadline`), /ɜː/ in `work`/`word`/`firm`, and /θ/ in `think`/`method`. Example sentences: "The report is due on Thursday.", "Could you send me the file?", "I'll be in a meeting until three."

2. **"Health & Medical"** — High anxiety domain where pronunciation errors have real consequences. Target features: /θ/ in `throat`/`tooth`, /ɜː/ in `nurse`/`hurt`, /dʒ/ in `injection`/`surgery`. Example sentences: "I have a sore throat.", "Does it hurt when I press here?", "Take this medicine twice a day."

3. **"Phone / Digital Communication"** — Highly relevant for Vietnamese learners in professional or travel contexts. Target features: /iː/ vs /ɪ/ in email addresses and names, /θ/ in "three" (phone numbers), linking in "call me back". Example sentences: "Could you spell that for me?", "I'll send you a message.", "The line is breaking up."

4. **"Directions & Transport"** (expansion of Weather & Travel) — `sentences-2` already covers some travel language, but a dedicated directions set would target /θ/ (`third`, `north`), /l/ vs /r/ (`left`/`right`), and final /t/ in `street`/`exit`. This directly addresses the phonetic clusters that make directions hard for Vietnamese ears.

**Improvements to existing sets:**

- `sentences-1` Q4: `/hæv jə ɡɒt ðɪs ɪn blæk/` — The reduced form `jə` (for "you") may confuse learners who haven't studied connected speech yet. Consider adding a note in the set description that this set includes weak forms and reductions, so learners know what to expect.

- `sentences-2` Q2: `Turn left at the traffic lights` — distractor C is "Turn lift at the traffic lights." "Lift" is a real word but the substitution `/left/→/lɪft/` adds a consonant cluster rather than swapping a vowel, making it a slightly different error type from the others in the set. The distractor is fine but slightly inconsistent in error category.

- Consider adding a **difficulty label** to sentence sets in a future UI update: `sentences-1` (Shopping) is easiest — short sentences, common vocabulary; `sentences-2` (Weather & Travel) is harder — longer sentences, reduced forms; `sentences-3` and `sentences-4` are mid-range. This would help learners self-select entry points without requiring a formal difficulty badge on every card.

---

## Content Audit — 2026-05-30

Full 4-agent review of `src/data/exercises.ts`. `astro check` passed with 0 errors after all fixes.

### Items reviewed
- 16 sound discrimination exercise sets × 15 questions = **240 questions** (480 fields: `answer` + `fullIPA`)
- 4 sentence exercise sets × 10 questions = **40 questions** (`ipa`, `answer`, `options`)

### Fixes applied

| Category | Count | Details |
|----------|-------|---------|
| IPA accuracy (`fullIPA` / `answer`) | 0 | All 480 fields correct per Cambridge/Oxford RP |
| Distractor quality (sound exercises) | 17 | `heat` Q10, `deep` Q12: `/ʊ/` → `/ə/`; `z-va-s` all 15 questions: `/dʒ/` → `/ð/` for /z/ words, `/t/` → `/f/` for /s/ words |
| Sentence IPA errors | 3 | `sentences-1` Q10: `weər` → `weə` (RP non-rhotic); `sentences-2` Q10: `ðə ˈʌðə` → `ðɪ ˈʌðə` (the before vowel); `sentences-4` Q9: `djuː` → `duː` ("do" ≠ "dew") |

**Total fixes: 20**

### Open recommendations (from Pedagogical Review above)
- Add `/ŋ/ vs /n/` final-position exercise set (high priority — blog post exists, no exercise)
- Add `/ð/ vs /d/` exercise set (high priority — most common real-world substitution)
- Add `/tʃ/ vs /ʃ/` exercise set (high priority)
- Replace 7 above-B1 vocabulary items (`wick`, `zeal`, `gin`, `blur`, `hoe`, `lure`, `dose`)
- Reorder `th-va-dh` and `l-va-r` sets to appear after all vowel sets
- Add 4 new sentence exercise themes (Work/Office, Health/Medical, Phone/Digital, Directions)