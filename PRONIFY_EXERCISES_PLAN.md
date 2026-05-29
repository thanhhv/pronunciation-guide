# Pronify — Exercises Page Implementation Plan

## Project Context
- **Site**: Pronify (pronify.com) — English pronunciation learning site for Vietnamese learners
- **Stack**: Astro with Bookworm Light theme
- **Goal**: Build a new `/exercises` page with ~10–15 IPA discrimination exercises per set
- **Audio**: Deferred to a future phase — do NOT implement in this plan
---

## Phase 1 — Data Layer
**Goal**: Define the exercise data structure and populate 15 sample questions.

### Tasks
1. Create `src/data/exercises.ts` with a typed `Question` interface:
   ```ts
   interface Question {
     id: number;
     word: string;           // e.g. "ship"
     options: string[];      // e.g. ["/ɪ/", "/iː/", "/e/", "/ə/"]
     answer: string;         // e.g. "/ɪ/"
   }
   ```
2. Create one `ExerciseSet` with 15 questions focused on a single contrast pair (e.g. /ɪ/ vs /iː/).
3. Each question must have exactly 4 options, with the correct answer always included.

### Verify
- [ ] TypeScript compiles with no errors (`astro check`)
- [ ] Data file exports at least 15 questions with no duplicate `id` values
- [ ] Every question's `answer` value exists in its own `options` array

### Log to CLAUDE.md
```
## Phase 1 — DONE
- Created src/data/exercises.ts
- 15 questions: /ɪ/ vs /iː/ contrast set
- All verified: no TS errors, no duplicate IDs
```

---

## Phase 2 — Static UI (no interactivity yet)
**Goal**: Render the exercises page with the correct layout, matching Bookworm Light's visual style.

### Tasks
1. Create `src/pages/exercises.astro` using the site's existing `Base` layout.
2. Create `src/components/exercises/QuestionRow.astro`:
   - Displays the word on the left
   - Renders 4 option buttons (unstyled/inactive for now)
   - Renders a "Show IPA" button on the right (non-functional yet)
3. Create `src/components/exercises/ExerciseSet.astro`:
   - Accepts a `questions` prop
   - Renders a `QuestionRow` for each question
   - Renders a "Check Results" button at the bottom (non-functional yet)
4. Add a page heading and brief instruction text above the exercise set.
5. Style to match Bookworm Light: use the theme's existing CSS variables/classes.

### Verify
- [ ] `astro dev` runs without errors
- [ ] `/exercises` route is accessible
- [ ] All 15 words and 4 buttons per word are visible
- [ ] Layout is responsive (check at 375px and 1280px widths)
- [ ] Visually consistent with the rest of the site (fonts, colors, spacing)

### Log to CLAUDE.md
```
## Phase 2 — DONE
- exercises.astro created, uses Base layout
- QuestionRow and ExerciseSet components built
- Static render verified at /exercises
- Responsive check passed
```

---

## Phase 3 — Interactivity (select answer + show IPA)
**Goal**: Make answer buttons selectable and "Show IPA" reveal the correct IPA inline.

### Tasks
1. Convert interactive parts to a client-side `<script>` or a lightweight Astro island (use vanilla JS, avoid adding a new framework).
2. **Answer selection behavior**:
   - Clicking a button marks it as selected (highlight style)
   - Only one button per row can be selected at a time
   - Selection can be changed freely before checking
3. **Show IPA button behavior**:
   - Clicking reveals the correct IPA for that word inline (e.g. appended after the word)
   - Button label changes to "Hide IPA" to toggle it back
   - Showing IPA does NOT count as answering or affect scoring
4. Ensure keyboard accessibility: buttons are focusable and selectable via Enter/Space.

### Verify
- [ ] Selecting an option highlights it and deselects any previous selection in the same row
- [ ] Show/Hide IPA toggles correctly per row, independently of other rows
- [ ] No JS errors in browser console
- [ ] Works in Chrome, Firefox, and Safari (latest)

### Log to CLAUDE.md
```
## Phase 3 — DONE
- Answer selection with single-select per row implemented (vanilla JS)
- Show/Hide IPA toggle working per row
- Tested: Chrome ✓ Firefox ✓ Safari ✓
```

---

## Phase 4 — Check Results + Scoring
**Goal**: "Check Results" button scores the attempt and gives visual feedback.

### Tasks
1. **Check Results behavior**:
   - Calculates score: (correct answers / total questions) × 100, rounded to nearest integer
   - Displays score at the bottom, e.g. "You got 11/15 correct (73%)"
   - Correct rows: highlight the selected button in **green**
   - Wrong rows: no color change, no correct answer revealed — user can re-select and check again
2. **Re-check behavior**:
   - After checking, user can change wrong answers and click "Check Results" again
   - Score updates on each check
   - Previously correct (green) rows remain locked — user cannot change them
3. Add a "Reset" button that clears all selections and score, returns to initial state.

### Verify
- [ ] Score calculation is correct for all-right, all-wrong, and partial cases
- [ ] Correct rows turn green and lock (cannot re-select)
- [ ] Wrong rows remain neutral, stay editable
- [ ] Re-checking after fixing wrong answers updates the score
- [ ] Reset clears everything back to initial state
- [ ] Score display is visible and readable

### Log to CLAUDE.md
```
## Phase 4 — DONE
- Scoring logic implemented: X/15 + percentage
- Correct = green + locked, Wrong = neutral + re-selectable
- Reset button works
- Edge cases verified: all correct, all wrong, partial
```

---

## Phase 5 — Polish + Navigation
**Goal**: Production-ready page that fits into the Pronify site.

### Tasks
1. Add the `/exercises` link to the site's navigation (header menu).
2. Add a short intro section at the top of the page explaining how the exercise works (1–2 sentences).
3. Add meta tags to `exercises.astro`: `title`, `description` for SEO.
4. Smooth transitions: subtle fade or highlight animation when selecting answers or revealing IPA.
5. Empty-state handling: if user clicks "Check Results" with no answers selected, show a gentle prompt ("Please answer at least one question first").
6. Final accessibility pass: all interactive elements have `aria-label` or visible label.

### Verify
- [ ] Nav link to /exercises appears in header and works
- [ ] Page has correct `<title>` and `<meta description>`
- [ ] Empty-state message shows when checking with 0 answers
- [ ] Animations don't cause layout shift
- [ ] Lighthouse accessibility score ≥ 90

### Log to CLAUDE.md
```
## Phase 5 — DONE
- Nav link added
- Meta tags set: title + description
- Empty state handled
- Animations added (no layout shift)
- Lighthouse a11y: [score here]
```

---

## CLAUDE.md Template (place in project root)

```markdown
# CLAUDE.md — Pronify Exercises Page

## Project Summary
Building a phonetic discrimination exercise page at /exercises for the Pronify Astro site (Bookworm Light theme). Users select the correct IPA for each word, check their score, and retry wrong answers.

## Tech Decisions
- Vanilla JS for interactivity (no new framework)
- Data lives in src/data/exercises.ts (typed)
- Components: ExerciseSet.astro, QuestionRow.astro

## Progress
- [ ] Phase 1 — Data layer
- [ ] Phase 2 — Static UI
- [ ] Phase 3 — Interactivity
- [ ] Phase 4 — Scoring
- [ ] Phase 5 — Polish

## Known Constraints
- Audio is OUT OF SCOPE for this plan
- Must match Bookworm Light's existing CSS variables
- No new npm packages without checking compatibility with Astro version first