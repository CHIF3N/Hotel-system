# SkillBridge — Phase 4: Challenge Engine
## Google Stitch Design Brief

---

## OVERVIEW

The Challenge Engine is the core product experience for graduates. This is where they spend most of their time on the platform. It must feel focused, motivating, and distraction-free. The challenge browsing experience should feel like a professional task board. The active challenge view must feel like a clean workspace — nothing unnecessary, just the brief and a way to submit work.

**Design System Reference:** All colors, typography, spacing, and components follow Phase 1 definitions.
**App Shell Reference:** Sidebar navigation and top bar from Phase 3 apply to all pages here.

**Pages in this phase:**
1. Challenge Browse / Marketplace
2. Challenge Detail Page
3. Start Challenge Confirmation (Modal)
4. Active Challenge Dashboard (with live timer)
5. Challenge Expired State
6. Empty State (for new graduates — no eligible challenges scenario)

---

## PAGE 1 — CHALLENGE BROWSE / MARKETPLACE

**URL:** /challenges
**Purpose:** Let graduates discover and start practice challenges. Must feel like a curated, professional catalog — not an endless dump.

---

### Layout

**Two-column layout (desktop):**
- **Left column (280px):** Filter sidebar
- **Right column (remaining):** Challenge grid/list

**Mobile:** Filters collapsed behind a "Filter" button (top-right of list). Tapping opens a bottom sheet (slides up from bottom of screen) with filters.

---

### Filter Sidebar (Desktop Left Column)

**Header:** "Filters" (H4) + "Clear all" ghost link (right, only shown if any filter is active)

White card, 1px border, 12px radius, sticky on scroll.

**Filter Groups (each group expandable/collapsible with chevron):**

**Class Level:**
- Checkbox list with class badge chips next to each label:
  - ☐ Class D — Beginner
  - ☐ Class C — Intermediate
  - ☐ Class B — Advanced (locked if not eligible — show lock icon, muted text)
  - ☐ Class A — Expert (locked if not eligible)
- Locked classes: Greyed out, lock icon, "Complete X more challenges to unlock" tooltip

**Estimated Duration:**
- Radio options: Under 2 hours · 2–4 hours · 4–8 hours · Over 8 hours

**Review Type:**
- ☐ AI Reviewed (Classes C & D)
- ☐ Expert Reviewed (Classes A & B)

**Sub-topic / Domain:**
- Tag-style filter chips: e.g., "Algorithms", "Databases", "Financial Modeling", "Market Research" — each a toggleable chip (inactive: outlined; active: black fill, white text)

**Your Progress:**
- ☐ Not started
- ☐ In progress
- ☐ Completed

---

### Top Bar (Above Challenge Grid)

**Left:** "Challenges" (H2) + count badge ("82 available")
**Right:** Sort dropdown ("Sort by: Recommended ▾") + View toggle (grid icon / list icon)

**Filter chips row (active filters shown):** Below the top bar, a horizontal scrollable row showing active filter chips. Each chip: filter name + × to remove. "Clear all" button at end.

---

### Challenge Grid (Right Column)

**Default view: Grid (2 columns on desktop, 1 on mobile)**

Each **Challenge Card:**
- White card, 1px #E5E5E5 border, 12px radius, shadow SM
- Hover: shadow MD + translateY(-1px), smooth transition
- **Top row:** Class badge chip (left) + Review type chip (right: "AI REVIEWED" or "EXPERT REVIEWED" — small black/outlined chip)
- **Title (H4, 600 weight, 2 lines max):** Challenge name
- **Field chip:** Label-style chip below title (e.g., "COMPUTER ENGINEERING")
- **Description (13px, muted, 3 lines max):** First sentence of the challenge brief
- **Divider**
- **Bottom row (3 items):**
  - Clock icon + "4–6 hours" (estimated duration)
  - Document icon + "3 deliverables" (number of expected outputs)
  - User icon + "142 attempts" (optional engagement stat, muted)
- **CTA:** "View Challenge →" ghost button (appears on hover on desktop, always visible on mobile)

**Locked challenge card (for inaccessible classes):**
- Same card but with a lock overlay: semi-transparent white overlay on the card, centered lock icon (24px) + "Unlock by completing 2 more Class D challenges" (small text)
- Card content still visible but greyed out behind overlay

**List view (alternative):**
Each challenge is a horizontal row:
- Left: Class badge chip
- Center: Title + field chip + description (1 line)
- Right: Duration + deliverables count + "View" ghost button

---

### Progress Banner (Top of Page — Contextual)

Shown if graduate is close to a class unlock:

Full-width info card (black bg, white text):
- Left: Progress bar (white track, amber fill) showing "3 of 5 Class D challenges complete"
- Center: "2 more challenges to unlock Class C"
- Right: "Challenges left" stat in large mono white text

---

## PAGE 2 — CHALLENGE DETAIL PAGE

**URL:** /challenges/:id
**Purpose:** Full brief before deciding to start. Must give the graduate everything they need to make an informed decision — and then remove all hesitation with a clear CTA.

---

### Layout

**Two-column (desktop):**
- **Left (main, 65% width):** Challenge brief content
- **Right sidebar (35% width):** Action panel (sticky)

---

### Left Column — Challenge Brief

**Breadcrumb:** Challenges / Computer Engineering / Class C

**Top section:**
- Class badge chip + Review type chip (inline row)
- Challenge title (H1, 40px, 700 weight) — full name
- Field chip + Sub-topic chip
- Meta row (muted, 13px): Clock icon + "Estimated: 4–6 hours" | Document icon + "4 deliverables" | Calendar icon + "Added: May 2026"

**Status banner (if applicable):**
- If already completed: Green banner "You've completed this challenge. Score: 84/100."
- If already in progress: Amber banner "This challenge is currently in progress. [Continue →]"
- If failed: Red banner "You attempted this on 10 June. Resubmit available after 72 hours."

**Challenge Brief Section:**
- Section label: "CHALLENGE BRIEF" (label style)
- Headline: Challenge scenario headline (H3)
- Full challenge description text (Body, 16px, line height 1.7) — the full prompt the graduate will work from
- Invented business context: shown in a light gray quote block (left border 4px black, #F9F9F9 bg, 16px padding)

**Expected Deliverables Section:**
- Section label: "WHAT YOU'LL SUBMIT" (label style)
- Ordered list of deliverables:
  - Each item: Number circle (black, 20px, white text inside) + deliverable name (14px, 600 weight) + description (13px, muted)
  - E.g. "1. Written Analysis Report (PDF, minimum 800 words)" | "2. Data Model Diagram (PNG or PDF)" | "3. Implementation Code (GitHub repository link)"

**Submission Format Section:**
- Section label: "ACCEPTED FORMATS" (label style)
- Icon grid of accepted file types: PDF, DOCX, XLSX, PNG/JPG, GitHub Link, Video (each as a small chip with icon)
- Max video size: "25 MB maximum, 2–5 minutes"

**Scoring Rubric Section (expandable):**
- Section label: "HOW YOU'LL BE SCORED" (label style) + expand/collapse chevron
- If collapsed: Shows just the pass threshold "Pass: 65/100 minimum"
- If expanded: Table with rubric criteria and weights:
  | Criterion | Weight | Description |
  |---|---|---|
  | Deliverable completeness | 40% | All required sections present |
  | Content quality | 35% | Depth and accuracy of analysis |
  | Presentation | 25% | Clarity and formatting |

---

### Right Sidebar — Action Panel (Sticky)

White card, 1px border, 12px radius, shadow SM, sticky on scroll (desktop):

**Top summary:**
- Challenge title (truncated, H4)
- Class badge chip
- "AI Reviewed" chip

**Info list (divider-separated rows):**
- "Duration: 4–6 hours"
- "Pass score: 65/100"
- "Attempts: 142"
- "Review time: Within 4 hours"

**Slot availability:**
- If graduate already has 2 active challenges: Warning message — "You have 2 active challenges. Complete or submit one to start another." (amber, small)
- If slot available: "You can start this challenge now."

**Primary CTA:** "Start This Challenge" — full-width primary black button (only enabled if slot is available)

**Secondary actions:**
- "Save for later" — ghost button (bookmark icon + text)

**Already started:** Replace button with: Amber "Continue Challenge →" button + timer showing remaining time

**Already completed:** Replace button with: Green "Completed ✓" state + "View my submission" ghost link

---

## PAGE 3 — START CHALLENGE CONFIRMATION (MODAL)

**Trigger:** Clicking "Start This Challenge" button

**Style:** Centered modal overlay — dark semi-transparent backdrop (rgba 0,0,0,0.5) — white modal card, 16px radius, shadow XL, max 480px wide

---

**Modal header:**
- Title (H3): "Ready to begin?"
- Close ✕ icon (top-right)

**Modal content:**
- Challenge title (H4, 600 weight, black)
- Info summary (2 rows, gray):
  - "Duration: 4–6 hours from when you click Start"
  - "Timer begins immediately and cannot be paused"
- Amber warning box (left border 4px amber, #FEF3C7 bg, 12px padding):
  - "Once started, your timer runs continuously. Make sure you have enough uninterrupted time before beginning."
- Checklist (small, 13px, #6B6B6B):
  - "I have 4–6 hours available" (checkable)
  - "I've read the full challenge brief" (checkable)
  - "I understand I cannot pause the timer" (checkable)

**Modal footer:**
- "Cancel" ghost button (left) + "Start Challenge →" primary black button (right)
- Start button is **disabled** until all 3 checkboxes are ticked — button shows as grayed out with "Check all boxes above" tooltip on hover

---

## PAGE 4 — ACTIVE CHALLENGE DASHBOARD

**URL:** /challenges/:id/active
**Purpose:** The graduate's workspace while working on a challenge. Must feel focused and clean — like a professional task environment.

---

### Layout

**Full-screen work mode:**
- Top bar simplified: Only logo + challenge name (truncated) + timer + submit button
- No sidebar navigation (hidden or collapsed to minimize distractions)
- "Exit to dashboard" very small ghost link in top-left

---

### Top Bar (Simplified for Work Mode)

**Left:** "← Exit" (small ghost link) + SkillBridge logo (wordmark, small)
**Center:** Challenge name (H4, max 1 line, truncated if needed)
**Right:** Timer display + "Submit Work" button

**Timer Display:**
- Large countdown: "05:32:14" — mono font, 20px, 700 weight
- Color states:
  - > 2 hours: Black text, no bg
  - 1–2 hours: Amber (#D97706) text
  - < 1 hour: Red (#DC2626) text, subtle red bg pill
- Label below: "Remaining" (10px, muted)

---

### Main Content Area (Scrollable)

**Left column (65% desktop) — Challenge Brief Panel:**

Section label: "CHALLENGE BRIEF" (label style) + "Expand" toggle to go full-screen

A clean reader view of the challenge brief:
- The scenario / business context (quote block style)
- Full prompt text
- Deliverables list (numbered, with checkboxes the graduate can tick off as they work — purely visual, not submitted)

**Right column (35% desktop) — Submission & Actions:**

**Sticky card panel:**
- "Submit Your Work" section heading (H4)
- Deliverables checklist (reference only):
  - Deliverable 1: "Written Analysis (PDF)" — checkbox (visual only)
  - Deliverable 2: "Data Model Diagram" — checkbox
  - Deliverable 3: "GitHub Repository Link" — checkbox
- Divider
- Upload area: Dashed border box (2px dashed #E5E5E5, 8px radius, #F9F9F9 bg):
  - Upload icon (32px, centered)
  - "Drag & drop files here, or click to browse"
  - Accepted formats row (small chips)
  - Each uploaded file appears as a row: file icon + filename + size + red × to remove
- GitHub link field: Input "Paste your GitHub repository URL"
- Demo video/link field: Input "Paste a demo video link or upload (max 25 MB)"
- Self-assessment note: Textarea — "Optional: Describe your approach (max 100 words)" + counter
- Submit button: "Submit Final Work →" — primary black, full width — only enabled when at least one file/link is added
- Warning text below button: "Submissions are final. Make sure all deliverables are included."

**Mobile layout:** Timer is at top full-width. Brief and submission panels stack vertically.

---

### File Upload States (Inside the Upload Area)

**Uploading:** Progress bar (black, animated) inside each file row
**Uploaded:** Green checkmark icon + filename + size + × button
**Error:** Red × icon + "File too large" or "Invalid format" error message + red border on upload area
**Empty:** Default dashed border state

---

## PAGE 5 — CHALLENGE EXPIRED STATE

**URL:** /challenges/:id/expired
**Trigger:** When the timer reaches 0:00 before submission, or when a graduate views an expired active challenge.

**Layout:** Centered card in main content area

**Card (max 560px, white, 16px radius, shadow MD):**

**Top:**
- Clock icon (48px, muted gray) centered
- Headline (H2): "Time's up."
- Subtext: "Your time allowance for this challenge has expired."

**Info section (divider-separated):**
- Challenge name (H4, bold)
- Duration used: "You had 4–6 hours. Challenge expired on [date]."
- Outcome: Status pill "EXPIRED" — muted gray (#6B6B6B dot, gray bg)
- Note: "Expired attempts are recorded in your activity log but do not count as failures."

**Actions:**
- "Try This Challenge Again" — primary black button (starts a fresh attempt, new timer)
- "Browse Other Challenges →" — ghost button

**Info text below:** "Expired attempts have no negative impact on your class progression or rank."

---

## PAGE 6 — EMPTY STATE (NEW GRADUATE — CLASS D ONLY)

**Shown when:** A new graduate visits the Challenge Browse page immediately after registration.

**Layout:** Full-page empty state (replaces the grid)

**Centered content:**
- Puzzle icon (64px, black outline) centered
- Headline (H2): "Welcome to SkillBridge."
- Subtext (Body, muted): "You're starting at Class D — Beginner. Complete 5 challenges to unlock Class C."
- "Your field is: [Computer Engineering]" — field chip
- Spacer
- "Explore Your First Challenges" — primary black button
- Below: 3 horizontally scrollable challenge preview cards (the first 3 Class D challenges for their field) shown as teasers

---

## GLOBAL UX NOTES FOR PHASE 4

1. **The timer is the most important element when a challenge is active.** It must always be visible. On mobile, it pins to the top status bar area. Color-coding the timer based on urgency is critical for user behavior.
2. **The active challenge workspace must be distraction-free.** Hide the sidebar, minimize navigation. The graduate should feel like they're in a professional work environment.
3. **Locked challenges must still be visible.** Show them greyed out with a lock — not hidden. This is motivational. The graduate sees what they're working toward.
4. **The "Start Challenge" confirmation modal is a commitment device.** The checklist is intentional UX — it makes the graduate acknowledge the timer behavior before starting. All boxes must be checked.
5. **File upload must be robust.** Show individual file upload progress. Allow removing files before final submission. Validate before submission, not after.
6. **Mobile upload experience.** On mobile, file selection opens the device file browser or camera roll. The upload area must work as a tap target (not just drag/drop).
7. **Self-assessment note is optional but visible.** Reviewers value it. Nudge graduates to fill it without making it required.
8. **Empty state is a Welcome experience.** For new graduates, the empty challenge browse page is actually their first real platform moment — treat it with care.
