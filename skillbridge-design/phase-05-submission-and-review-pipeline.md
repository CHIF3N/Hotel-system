# SkillBridge — Phase 5: Submission & Review Pipeline
## Google Stitch Design Brief

---

## OVERVIEW

The submission and review pipeline is where the graduate's work meets the evaluation system. This phase covers everything from uploading deliverables to receiving a pass or fail verdict. These screens carry high emotional weight — graduates have invested real time and effort. The design must be clear, honest, and supportive whether the outcome is positive or negative. Feedback must be readable and actionable, not clinical and intimidating.

**Design System Reference:** All colors, typography, spacing, and components follow Phase 1 definitions.
**App Shell Reference:** Sidebar + top bar from Phase 3 applies to all authenticated pages.

**Pages in this phase:**
1. Submission Portal (Standalone Upload Page)
2. Upload Validation & Progress States
3. Submission Confirmation Page
4. Submission Tracking — Under Review States
5. Review Outcome — Pass
6. Review Outcome — Fail
7. Detailed Feedback Report
8. Resubmit Flow (After Cooling-Off Period)
9. My Submissions (History Page)

---

## PAGE 1 — SUBMISSION PORTAL

**URL:** /submissions/new?challenge=:id
**Purpose:** The final step before a graduate sends their work. Must feel clean and thorough — give them confidence before they hit submit.

**Layout:** Centered single-column content area, max 760px width

---

### Page Header

- Breadcrumb: "Challenges / [Challenge Name] / Submit Work"
- Challenge name (H2, bold)
- Class badge chip + Field chip (inline row)
- Status pill: "IN PROGRESS" (black) + Timer: "3:12:44 remaining" (amber if under 2 hours)

---

### Section 1 — Deliverables Checklist

**Section label:** "REQUIRED DELIVERABLES" (label style)

Numbered list of deliverables (from the challenge brief):
Each row:
- Number circle (black bg, white number, 24px)
- Deliverable name (14px, 600 weight)
- Format hint (muted, 13px): "PDF or DOCX, min 800 words"
- Right: Upload status indicator:
  - Not uploaded: Empty dash (muted)
  - Uploaded: Green checkmark + filename (truncated)
  - Required but missing at submit time: Red indicator

---

### Section 2 — File Upload Area

**Primary upload zone:**
- Large dashed border container (2px dashed #E5E5E5, 16px radius, #F9F9F9 bg, 200px min height)
- Centered: Upload cloud icon (48px, black outline) + "Drag and drop files here" (H4) + "or" + "Browse files" underlined link (black)
- Below: "Accepted: PDF, DOCX, XLSX, PNG, JPG · Max file size: 25 MB per file"

**Uploaded files list (appears below upload zone as files are added):**
Each uploaded file row:
- File type icon (left, 24px, colored by type: PDF = red icon, DOCX = blue, XLSX = green, image = amber)
- Filename (14px, 600 weight) + File size (13px, muted)
- Upload progress bar (below filename, only during upload): thin black bar, animated
- Uploaded state: Green checkmark icon (right)
- Error state: Red "!" icon + error message (right)
- Remove button: "×" icon (right, ghost, always visible)

---

### Section 3 — Links (Optional)

**GitHub Repository Link:**
- Label: "GitHub Repository URL (if applicable)"
- Input with GitHub icon prefix + placeholder "https://github.com/yourname/project"
- Validation: Must be a valid GitHub URL if filled

**Demo / Deployed App Link:**
- Label: "Live demo or deployed application URL (optional)"
- Input with external link icon prefix

---

### Section 4 — Demo Video Upload

- Label: "Demo Video (optional)"
- Sub-label (muted, 13px): "2–5 minutes, maximum 25 MB. MP4 preferred."
- Upload area (smaller, 100px height): Same drag/drop style
- After upload: Video file row with play button preview thumbnail

---

### Section 5 — Self-Assessment Note

- Label: "Your approach (optional, max 100 words)"
- Subtext (muted, 13px): "Briefly describe your methodology. Reviewers appreciate context."
- Textarea: 4 rows, full width, resize disabled, character counter bottom-right ("0/100")

---

### Submission Summary Card (Sticky at Bottom or Fixed Footer)

On desktop: Sticky card in a right sidebar column (320px)
On mobile: Sticky footer bar

**Summary card content:**
- "Submission Summary" (H4)
- Checklist of what has been uploaded (check = uploaded, dash = missing):
  - Document: ✓ report.pdf
  - GitHub: ✓ link added
  - Video: — (not required)
- Divider
- Timer reminder: "3:12 remaining"
- Warning (if any required deliverables missing): Amber warning "1 required deliverable missing"
- "Submit Final Work" — primary black button (full width, disabled if required items missing)
- Below button: "Submissions are final and cannot be recalled." — muted, 12px, centered

---

## PAGE 2 — UPLOAD VALIDATION & PROGRESS STATES

These are inline states within Page 1, documented separately for clarity.

**Uploading state (file row):**
- Filename + size
- Progress bar: thin animated black fill under the filename
- Cancel button (×) — stops upload

**Upload success:**
- Green checkmark icon
- Filename in black (600 weight)
- Size in muted text
- × remove button

**Upload error states:**
| Error | Message shown | Color |
|---|---|---|
| File too large | "File exceeds 25 MB limit" | Red |
| Invalid format | "File type not accepted (PDF, DOCX, XLSX, PNG, JPG, MP4 only)" | Red |
| Upload failed | "Upload failed. Check your connection and try again." + "Retry" link | Red |
| Video too long | "Video exceeds 5-minute limit" | Red |

**All files uploaded, ready to submit:**
- Upload zone border changes to green dashed
- "All files ready" indicator appears at top of upload zone (green dot + text)

**Submitting state (after clicking "Submit Final Work"):**
- Button shows spinner + "Submitting…"
- All form fields disabled
- Full-page loading overlay with: "Uploading your submission… 2 of 3 files uploaded" (with overall progress bar)

---

## PAGE 3 — SUBMISSION CONFIRMATION PAGE

**Shown:** Immediately after successful submission. Replaces the submission portal page.

**Layout:** Centered card, max 560px, white bg with subtle #F9F9F9 page bg

**Card (white, 16px radius, shadow LG):**

**Top (black accent strip — 4px top border on card):**
- Large black checkmark circle (64px, black bg, white ✓ inside) centered
- Headline (H2): "Submission received!"
- Subtext: "Your work has been submitted and is now in the review queue."

**Submission details (inside card, divider-separated rows):**
- Challenge: [Challenge Name]
- Submitted: "Today at 3:45 PM"
- Review type: "AI Review" (for Class C/D) or "Expert Review" (for Class A/B)
- Expected outcome by: "Within 4 hours" (AI) or "Within 72 hours" (Expert)
- Tracking ID: Mono, small, muted — "SUB-2026-0048"

**Status pill (centered below details):** "UNDER REVIEW" — yellow pill (yellow bg, yellow-700 text, yellow dot)

**Actions:**
- "View My Submissions" — primary black button
- "Back to Challenges" — ghost button

**Email confirmation note:** "A confirmation email has been sent to [email]" — muted, 13px, centered, below buttons

---

## PAGE 4 — SUBMISSION TRACKING (UNDER REVIEW STATES)

**URL:** /submissions/:id
**Purpose:** The graduate can check on a submission while it's being reviewed.

**Layout:** Two-column (desktop: main content left, status panel right), single column mobile

---

### Main Content (Left)

**Header:**
- "Submission #SUB-2026-0048" (label style, muted)
- Challenge name (H2)
- Class badge chip + Field chip
- Status pill (large, prominent): varies by state (see below)

**Submission contents summary:**
- List of submitted files: file icon + name + size + "Download" link
- GitHub link (if applicable): clickable
- Self-assessment note (displayed in a quote block)
- Submitted timestamp

**Status Timeline (vertical):**
A visual timeline showing the review stages:
- ○ → "Submitted" — completed (black circle, checkmark inside)
- ○ → "Assigned for Review" — completed or pending
- ○ → "Under Review" — current (animated pulse ring)
- ○ → "Outcome Delivered" — upcoming (empty gray circle)
Connecting line: vertical 2px solid black between completed nodes, 2px dashed #E5E5E5 for upcoming

---

### Status Panel (Right Sidebar — Sticky)

White card, 1px border, 12px radius:

**State 1 — AI Review (Class C/D), Pending:**
- Status pill: "UNDER REVIEW" (yellow)
- "Review Type: AI Automated"
- "Expected by: Within 4 hours"
- Progress indicator: Animated three-dot pulse below the pill
- Info note (muted, 13px): "Our AI is evaluating your submission against the challenge rubric."

**State 2 — Human Review (Class A/B), Assigned:**
- Status pill: "UNDER REVIEW" (yellow)
- "Review Type: Expert Reviewer"
- "Assigned to a reviewer in your field"
- "Expected by: Within 72 hours"
- "Assigned: [date]"
- Note: "Reviewer names are not disclosed until review is complete."

**State 3 — Review Complete, Outcome Pending:**
- Status pill: "OUTCOME READY" (green)
- Auto-redirects to outcome page, or shows "View Your Results →" button

---

## PAGE 5 — REVIEW OUTCOME: PASS

**URL:** /submissions/:id/outcome
**Layout:** Centered card, max 640px

**Card — Green accent (4px top border: #16A34A):**

**Top:**
- Green circle (64px, #DCFCE7 bg, #16A34A checkmark) centered
- Headline (H2): "You passed!"
- Subtext: "Great work. Your submission has been reviewed and approved."

**Score display (large, centered):**
- "84 / 100" — mono, 56px, 700 weight, black
- "Pass threshold: 65/100" — muted, 13px, below score
- Score bar: Full-width progress bar (track: #E5E5E5, fill: #16A34A at 84% width)

**Challenge summary row:**
- Challenge name (H4)
- Class badge chip
- "Reviewed by: AI Engine" or "Reviewed by: Expert Reviewer"
- Date completed

**Badge earned banner (black bg, white text, full-width card):**
- Left: Badge icon (32px, white)
- Center: "Badge Earned: [Challenge Name] — Class C" (H4, white)
- Right: "View Badge →" white ghost button

**Progress update:**
- If class unlock triggered: Green celebration banner — "🎉 Class C Unlocked! You've completed 5 Class D challenges." — with "Explore Class C Challenges →" button
- If not yet: Progress bar showing "3 of 5 Class D challenges completed"

**Actions row:**
- "View My Badge" — primary black button
- "Continue Challenges" — ghost button
- "View Full Feedback →" — ghost link (below, smaller)

---

## PAGE 6 — REVIEW OUTCOME: FAIL

**URL:** /submissions/:id/outcome
**Layout:** Centered card, max 640px

**Card — Red accent (4px top border: #DC2626):**

**Top:**
- Red circle (64px, #FEE2E2 bg, #DC2626 × mark) centered
- Headline (H2): "Not quite there yet."
- Subtext: "Your submission didn't meet the pass threshold this time. That's okay — review the feedback and try again."
- Tone: Supportive, never harsh. This is not a failure, it's a learning moment.

**Score display:**
- "52 / 100" — mono, 56px, 700 weight, black
- "Pass threshold: 65/100" — muted, 13px
- Score bar: track #E5E5E5, fill: #DC2626 at 52% width

**What this means:**
- Status pill: "FAILED — NOT COUNTED AGAINST PROGRESSION" — small, muted gray pill
- Info box (#FEF9C3 bg, amber left border 4px, 12px padding): "Failed attempts are recorded but do not affect your class progression. Your class standing is unchanged."

**Resubmit countdown:**
- "Resubmit available in: 71:42:10" — large mono, black, countdown timer
- Or: "Resubmission available now →" — if 72 hours have passed

**Actions:**
- "View Detailed Feedback" — primary black button
- "Resubmit When Ready" — secondary button (disabled with countdown if within cooling period, enabled after)
- "Try a Different Challenge" — ghost button

---

## PAGE 7 — DETAILED FEEDBACK REPORT

**URL:** /submissions/:id/feedback
**Purpose:** Show the graduate exactly what the reviewer/AI said about their work. Must be scannable and educational.

**Layout:** Two-column (desktop: feedback content left, summary panel right)

---

### Left Column — Feedback Content

**Page header:**
- "Feedback Report" (H2)
- Challenge name + Class badge chip + date
- Score pill: large, shows score/100

**Overall Summary (AI or Reviewer written):**
Black-bordered quote block (left border 4px black, #F9F9F9 bg):
"Your analysis demonstrated a solid understanding of the core concepts. However, the data model section lacked the required entity relationships and the implementation was incomplete. Focus on completeness of all deliverables in your next attempt."
— Attribution: "AI Review Engine" or "Expert Reviewer (domain expert)"

**Rubric Breakdown Section:**
For each rubric criterion:

**Criterion row (card style):**
- Criterion name (H4, 600 weight)
- Score: "28 / 40" (mono, right-aligned)
- Score bar: same style as score bar, fills proportionally
- Status icon: Green ✓ (passed) or Red × (failed this criterion)
- Feedback comment (indented, 14px, line height 1.6): Specific note about this criterion
- Divider between criteria

Example criteria cards:
- "Deliverable Completeness (40%)" → Score: 28/40 → Comment: "Written analysis and diagram were present. Code repository was missing."
- "Content Quality (35%)" → Score: 18/35 → Comment: "Analysis was surface-level. Entity relationships between tables were not defined."
- "Presentation (25%)" → Score: 6/25 → Comment: "Report was well-formatted but below minimum word count (620 words vs 800 required)."

**Plagiarism Check (Class C/D only):**
- Small info row: "Originality check: Passed — no matches found in submission database." — green dot + text

---

### Right Column — Summary Panel (Sticky)

White card, 1px border, 12px radius:
- Score: Large mono "52/100"
- Pass/Fail pill
- "Areas to improve" quick list (amber bullets):
  - Deliverable completeness
  - Word count requirements
- "Areas done well" quick list (green bullets):
  - Formatting and presentation structure
- Divider
- "Resubmit" button (primary black, shows countdown if locked)
- "Download Report (PDF)" — ghost button

---

## PAGE 8 — RESUBMIT FLOW

**URL:** /submissions/new?challenge=:id&resubmit=true
**Shown when:** Graduate clicks "Resubmit" after 72-hour cooldown.

**Banner at top of submission portal (amber strip):**
"This is a resubmission. Review your previous feedback before uploading new work."

**Previous feedback summary (collapsible, collapsed by default):**
Amber-bordered card showing brief summary of last attempt score + top feedback points. Graduate can expand to read full feedback inline.

**Rest of the page:** Same as the standard Submission Portal (Page 1) but with:
- Pre-filled note: Previous self-assessment is cleared (blank)
- Upload area: Clean, no previous files pre-loaded
- Submit button: "Resubmit Final Work →"

**After resubmission confirmation:** Same Submission Confirmation page (Page 3) with "Resubmission received!" headline.

---

## PAGE 9 — MY SUBMISSIONS (HISTORY PAGE)

**URL:** /submissions
**Purpose:** A complete log of all the graduate's submissions — pass, fail, in progress, expired.

**Layout:** Full-content area, no right sidebar

**Page header:** "My Submissions" (H2) + count "14 total"

**Filter tabs:** "All" | "Passed" | "Under Review" | "Failed" | "Expired"

**Filter row:** Field dropdown + Class dropdown + Date range picker

**Submissions table/list:**

Each submission row (card on mobile, table row on desktop):
- Class badge chip (compact)
- Challenge name (H4, 600 weight, black)
- Field chip (label)
- Submitted date (muted)
- Review type ("AI" or "Expert" chip)
- Score (mono: "84/100" or "—" if pending)
- Status pill (Passed/Failed/Under Review/Expired)
- "View →" ghost button (right)

**Mobile card style (each submission):**
- Card with: Challenge name (H4) + Class chip + Status pill (top row) + Score + Date + "View →" button

**Empty state:** Upload icon + "No submissions yet" + "Start your first challenge →" button

**Pagination:** "Load more" button at bottom

---

## GLOBAL UX NOTES FOR PHASE 5

1. **The submission experience is high-stakes for graduates.** Every step must feel controlled and clear. No ambiguity about what's required, what's been uploaded, or what happens next.
2. **Pass outcomes should feel celebratory without being juvenile.** A clean, confident "You passed!" with a prominent score and an instant badge reveal. No confetti — just clean design confidence.
3. **Fail outcomes must never feel punishing.** Tone: supportive coaching. Emphasize that it doesn't affect progression. Countdown to resubmit gives a concrete next action.
4. **Feedback report is the most educational page on the platform.** Make it readable. The rubric breakdown with individual criterion scores and specific comments is gold — display it like a professional assessment, not a wall of text.
5. **Upload reliability is non-negotiable.** Show per-file progress. Allow individual file removal. Show clear success confirmation per file. Validate formats before submission, not after.
6. **Mobile submission must work perfectly.** File picker must open device storage. Video upload must use the camera roll. All upload states must be clear on a small screen.
7. **The 72-hour cooldown must be communicated with a live countdown.** Never just say "try again later" — show the exact time remaining. This respects the graduate's time.
