# SkillBridge — Phase 9: Reviewer & University Partner Portals
## Google Stitch Design Brief

---

## OVERVIEW

This phase covers two distinct secondary portals: the Reviewer Portal and the University Partner Portal. Reviewers are domain experts doing paid, focused work — their interface must be task-efficient and distraction-free. University partners are institutional administrators monitoring their graduates — their interface must be clean, aggregated, and official-feeling. Both portals share the same design system but have their own distinct navigation and purpose.

**Design System Reference:** Phase 1 definitions apply throughout.

**Pages in this phase:**

**Reviewer Portal:**
1. Reviewer Dashboard
2. Assigned Submissions List
3. Submission Review Interface
4. Rubric Scoring Form
5. Review Submitted Confirmation
6. Reviewer Payment History

**University Partner Portal:**
7. University Partner Dashboard
8. Graduate Statistics Overview
9. Credential Co-signing Interface

---

## REVIEWER APP SHELL

### Sidebar (Desktop, 240px)

Reviewer profile card at top:
- Avatar (40px circle) + Name + Reviewer label chip ("REVIEWER", black chip, white text)
- Field expertise chip: "COMPUTER ENGINEERING"
- Rating: "4.8 ★ reviewer" (mono, muted, small)

**Navigation:**
- Dashboard (grid icon)
- My Assignments (clipboard icon)
- Completed Reviews (check-circle icon)
- Payment History (wallet icon)
- Settings (gear icon)

**Bottom of sidebar:**
- "Earnings this month: 14,000 XAF" — mono, green, muted label above
- Log Out

---

## PAGE 1 — REVIEWER DASHBOARD

**Purpose:** Quick overview of workload, earnings, and pending tasks.

---

### Stats Row (4 cards)

| Card | Content |
|---|---|
| Pending Reviews | Count (large mono) + "assignments waiting" |
| Completed This Month | Count + earnings for those reviews |
| Avg. Review Score | "4.8 / 5.0" — quality rating from platform |
| This Month Earnings | "14,000 XAF" — mono, green, bold |

---

### Urgent Assignments Banner

If any assignment has < 24 hours remaining:
Full-width amber card:
- Left: Warning icon + "1 assignment due in less than 24 hours"
- Right: "Review Now →" primary black button

---

### Assignments Overview Section

Section header: "Active Assignments" (H3) + count badge

Compact list of top 3 assigned submissions (preview cards):
Each shows: Graduate name (anonymous — see note below), challenge title, class badge, assigned date, "Due in: 48h" countdown, "Start Review →" ghost button

**Anonymity note:** Graduate names are shown in reviewer's view (they can see who submitted), but the brief shown to graduates does NOT show the reviewer's name until after review.

---

### Completion History (Mini Chart)

Horizontal bar chart showing reviews per week (last 4 weeks):
- Bars: Black fill, white bg
- X-axis: Week labels
- Y-axis: Count
- Below chart: "42 total reviews completed"

---

## PAGE 2 — ASSIGNED SUBMISSIONS LIST

**URL:** /assignments
**Filter tabs:** "Pending" | "Overdue" | "Completed"

---

### List Header

"My Assignments" (H2) + count
Sort: Dropdown — "Due soonest ▾"

---

### Assignment Cards (List view, full width)

Each assignment card:
- **White card, 1px border, 12px radius**
- **Top row:** Class badge chip (Class A or B) + Urgency chip:
  - "DUE IN 48H" — amber
  - "DUE IN 24H" — red
  - "OVERDUE" — red, pulsing border
  - "COMPLETED" — green (in completed tab)
- **Submission title** (H4): Challenge or project name
- **Graduate name** (14px, muted): Graduate's name
- **Field chip + Sub-topic chip**
- **Assigned date** + **Due date** (with clock icon)
- **Review compensation:** "3,500 XAF" (mono, green, small) — for Class A
- **Action buttons (right side):**
  - "Begin Review →" — primary black button
  - "View Brief" — ghost button (opens challenge brief in a drawer)

**Overdue styling:** Red left border (4px) on card, "OVERDUE" red chip, red due date text

---

## PAGE 3 — SUBMISSION REVIEW INTERFACE

**URL:** /assignments/:id/review
**Purpose:** The reviewer's primary workspace. Must be focused, readable, and structured.

**Layout:** Two-column (submission content left 55%, scoring panel right 45%)

---

### Top Bar (Review Mode)

Simplified top bar (same concept as Active Challenge work mode):
- Left: "← Back to Assignments" small ghost link
- Center: "Reviewing: [Challenge Title]" (H4) + Class badge chip
- Right: "Submit Review" button (primary black, disabled until all scores filled) + "72h deadline" timer (amber if < 12 hours)

---

### Left Column — Submission Content

**Graduate info strip (above content):**
- Graduate name (H4) + Field chip + Class badge chip
- Submitted: [Date and time]
- Submission ID (mono, muted)

**Submitted artefacts section:**
- Section label: "SUBMITTED ARTEFACTS"
- Each submitted file as a row:
  - File icon + filename + size + "Download" button + "Preview" button (opens in a lightbox or new tab)
- GitHub link (if submitted): External link button "View Repository"
- Demo video (if submitted): Embedded video player (small, 16:9, black controls)
- Demo link: External link button

**Graduate's self-assessment note:**
- Section label: "GRADUATE'S NOTE"
- Quote block (left border 4px black, #F9F9F9 bg): Graduate's own description of their approach

**Challenge Brief Panel (collapsible, expanded by default):**
- Section label: "CHALLENGE BRIEF" (with toggle to collapse)
- Full challenge brief and expected deliverables list for reference during review

---

### Right Column — Scoring Panel (Sticky)

White card, 1px border, 12px radius, shadow SM, sticky on scroll:

**Panel header:** "Scoring Rubric" (H3) + "All fields required" (muted, 13px)

**Rubric criteria (one per criterion, in order):**

Each **Criterion Scoring Block:**
- Criterion name (H4, 14px, bold): e.g., "Deliverable Completeness"
- Weight label (muted): "40% of total score"
- **Score input:** Large number input — circle field, 64px, centered, 24px mono font, 0–100 range, arrow up/down buttons
  - Or: A visual 0–100 slider bar (cleaner on mobile)
- **Mandatory comment field (textarea, 3 rows):** "Your feedback on this criterion (required)"
  - Red border + error message if submit attempted without filling
  - Character counter: "0/500"
- Divider between criteria

**Score summary (below all criteria):**
- "Current aggregate score: 74/100" — live calculation as scores are entered, mono, bold
- Pass threshold reminder: "Pass: 65/100"
- Score color: Green if ≥ 65, red if < 65
- Score bar (full width): Black fill progress bar
- "Outcome: PASS" or "Outcome: FAIL" — large status pill, live-updating

**Second reviewer trigger note (if score 60–70):**
- Amber info box: "Your score (67) falls in the validation range. A second reviewer will be automatically assigned to confirm."

**Submit button:** "Submit Review →" (primary black, full width)
- Disabled state: "Fill all comment fields" tooltip on hover
- Loading state on submit: "Submitting review..."

---

## PAGE 4 — RUBRIC SCORING FORM (DETAIL)

This is the same as the right column of the Review Interface, documented as a standalone page for mobile (where the two columns stack vertically).

**Mobile layout:**
- Top: Full-width submission content (artefacts, files, graduate note) — collapsible
- Below: Scoring panel takes over the full page
- Fixed bottom bar: Score summary + "Submit Review" button

---

## PAGE 5 — REVIEW SUBMITTED CONFIRMATION

Centered card, max 480px:

- Black checkmark circle (64px) centered
- "Review submitted!" (H2)
- "Thank you. Your review has been accepted and the graduate has been notified."
- Details:
  - Challenge: [Name]
  - Graduate: [Name]
  - Your score: "74/100" (mono, bold)
  - Outcome: "PASS" or "FAIL" (status pill)
  - Compensation: "3,500 XAF — disbursed within 48 hours" (green)
- Actions:
  - "Back to Assignments" — primary black
  - "View Payment History" — ghost button

---

## PAGE 6 — REVIEWER PAYMENT HISTORY

**URL:** /payments

**Earnings summary card (full-width, black bg, white text):**
- "Total Earned: 98,000 XAF" (mono, large, white) — all-time
- "This month: 14,000 XAF" (mono, muted white)
- "Disbursed to: MTN MoMo ****1234" (muted)

**Payments table:**
| Date | Review | Class | Amount | Status | Method |
|---|---|---|---|---|---|
| Jun 12, 2026 | Data Structures — [Name] | Class B | 2,000 XAF | Paid | MTN MoMo |
| Jun 10, 2026 | Security Audit — [Name] | Class A | 3,500 XAF | Pending | Scheduled |

Status pills: "Paid" (green) / "Pending" (amber) / "Failed" (red)

**Failed disbursement card (if any):**
Red left-border card: "Payment failed for review on [date]. Admin notified. Retry in progress." — with contact admin ghost link.

---

---

## UNIVERSITY PARTNER APP SHELL

### Top Bar (No Sidebar — Different Shell)

University partners have a simpler top-bar-only navigation (no sidebar). The interface is minimal — they have few pages.

**Top bar:**
- Left: University logo (from onboarding) + University name
- Center: Navigation links — "Dashboard" | "Graduates" | "Credentials" | "Co-signing"
- Right: Language toggle + Settings gear icon + Log out

---

## PAGE 7 — UNIVERSITY PARTNER DASHBOARD

**Purpose:** Institutional overview of how the university's graduates are performing on SkillBridge.

---

### Header Card (Black bg, white text, full-width)

- University name (H2, white)
- "Partner since: January 2026" (muted white)
- "Co-signing active: Yes ✓" (green) or "Co-signing not active" (amber)
- "Partnership tier: Standard" chip

---

### Stats Grid (4 cards)

| Card | Content |
|---|---|
| Registered Graduates | Total count from this university |
| Credentialed Graduates | Count with at least one badge |
| Class A Graduates | Count at expert level |
| Avg. Challenge Score | Platform average for this university |

---

### Progression Breakdown

**Section header:** "Graduate Class Distribution"

Horizontal stacked bar chart (full width):
- Each class a segment: Class D (lightest gray), Class C (medium gray), Class B (dark gray), Class A (black)
- Below: Legend with class labels + counts + percentages
- Compare toggle: "Compare to platform average" — ghost button

---

### Top Graduates List

"Top 10 Graduates from [University]" — section header

Compact table:
| Rank | Name | Field | Class | Credentials | Rank Percentile |
|---|---|---|---|---|---|
| 1 | [Name] | Computer Eng. | Class A | 18 | Top 4% |
| 2 | ... | ... | ... | ... | ... |

Note: "Detailed individual scores and submission content are not visible to university partners per SkillBridge privacy policy." — muted info below table.

---

### Field Performance Cards

One card per field with graduates from this university:
- Field name + icon
- Graduate count in this field
- Average score
- Completion rate

---

## PAGE 8 — GRADUATE STATISTICS OVERVIEW

**URL:** /graduates (university partner view)
**Access:** Aggregate, anonymized data only. No individual submission content. No individual scores.

**Page header:** "Graduate Statistics" (H2) + university name + date range picker

**Aggregate stats:**
- Challenges completed per week (line chart)
- Pass/fail rate over time (area chart)
- Field distribution (donut/pie chart)
- Class progression funnel: How many graduates at each class level

**Class progression funnel:**
Vertical funnel visualization:
- Class D: "340 graduates" (widest bar)
- Class C: "210 graduates" (narrower)
- Class B: "88 graduates"
- Class A: "31 graduates"
- Labels and percentages on each bar

---

## PAGE 9 — CREDENTIAL CO-SIGNING INTERFACE

**URL:** /co-signing
**Purpose:** The university can opt to co-sign credentials issued to their graduates. Their name and logo then appear on the badge's public verification page.

---

### Co-signing Status Card

**If co-signing is active (green border card):**
- "Co-signing: Active" status (green pill)
- "Your institution's name and logo are appearing on all new credentials issued to your registered graduates."
- University logo preview (shows how it appears on a badge)
- "Disable co-signing" — red ghost button

**If co-signing is not active (amber border card):**
- "Co-signing: Inactive" (amber pill)
- "Activate co-signing to have your institution's name appear on graduate credentials."
- Requirements:
  - ☑ Signed partnership agreement: "Received Jun 2026"
  - ☑ Institution logo submitted: "Approved"
  - ☑ Admin approval: "Approved"
- "Enable Co-signing" — primary black button

---

### Co-signing Preview

A live preview of what a badge looks like with the university's co-sign:
- Badge card mockup (same as public verification page design)
- Shows: "Issued by SkillBridge | Co-signed by [University Name]" + university logo

---

### Co-signing History

Table of recent co-signed credentials:
| Date | Graduate | Challenge | Class | Badge ID |
|---|---|---|---|---|
| Jun 12 | [Name] | [Title] | Class B | [ID] |
(Last 20, "Load more" below)

Note at top: "Per our privacy policy, individual graduate performance data is not displayed here. Co-signing history shows only that credentials were issued."

---

### Logo Management

- Current uploaded logo preview (shows as it appears on badges)
- "Update Logo" — secondary button (upload SVG/PNG, admin review required before active)
- Logo requirements: "SVG preferred · Minimum 200×200px PNG · Transparent background required"

---

## GLOBAL UX NOTES FOR PHASE 9

1. **Reviewers are time-pressured professionals.** The review interface must be efficient. Submission artefacts on the left, scoring on the right. No unnecessary clicks to get to the rubric. The 72-hour deadline countdown is always visible.
2. **Every rubric comment field must have visual friction if skipped.** The mandatory comment fields are non-negotiable per the SRS. Make the "Submit" button clearly disabled and show which fields are incomplete.
3. **Score calculation must be live and visible.** As a reviewer enters scores, the running total updates in real time. "Current score: 74/100 — PASS" — this helps them calibrate as they go.
4. **Reviewer anonymity matters.** Never show the reviewer's name to the graduate during review. After outcome delivery it can be shown as "Reviewed by: Expert (Computer Engineering)."
5. **University portal is an institutional dashboard, not a surveillance tool.** Privacy is explicit and enforced. Aggregate only. Individual scores and submission content are completely absent. The UI should communicate this clearly without being defensive about it.
6. **Co-signing is a trust signal for the platform.** The activation UI should feel official and formal — like countersigning a document. The preview of how the badge looks with the university logo is the key UX moment.
7. **Reviewer payment history is a trust builder.** If a reviewer can see their full disbursement history (paid, pending, scheduled), they trust the platform. Clear status on every payment entry is essential.
