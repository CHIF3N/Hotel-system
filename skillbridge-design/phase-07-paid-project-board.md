# SkillBridge — Phase 7: Paid Project Board
## Google Stitch Design Brief

---

## OVERVIEW

The Paid Project Board is the premium destination for Class A and Class B graduates. This is where credentials convert into income. It must feel like a curated professional marketplace — focused, respectful of the graduate's earned status, and designed to make applying for real work feel achievable. For SMEs, posting a project must feel as simple as posting a job on any professional platform.

**Design System Reference:** Phase 1 definitions apply throughout.
**App Shell Reference:** Sidebar + top bar from Phase 3 applies.
**Access restriction:** This entire section is invisible to Class C and Class D graduates — not locked, not blurred — completely absent from their sidebar navigation.

**Pages in this phase:**
1. Paid Project Board (Graduate View)
2. Project Detail Page
3. Project Application Form
4. Application Submitted Confirmation
5. My Applications — Status Tracker
6. Project In-Progress View
7. Enrollment Fee Payment Page
8. Project Deliverables Submission
9. Awaiting SME Approval State
10. Payment Received / Project Completed

---

## PAGE 1 — PAID PROJECT BOARD

**URL:** /projects
**Purpose:** Browse real SME-posted projects. The graduate's reward for reaching Class A or B.

---

### Access Banner (First Visit Only)

Full-width black card at top:
- Left: "You've unlocked the Paid Project Board." (H3, white)
- Subtext (white, muted): "You're Class B. Real companies post real projects here. Apply and get paid."
- Right: Class badge chip "CLASS B" (white outlined)
- Dismiss × button

---

### Layout

Two-column: Left filter sidebar (260px) + Right project grid

---

### Filter Sidebar

Same style as Challenge Browser sidebar. Groups:
- **Class Required:** ☐ Class A · ☐ Class B
- **Field:** ☐ Computer Engineering · ☐ Electrical Engineering · ☐ Finance · ☐ Marketing
- **Compensation Range:** Slider or radio — Under 25,000 XAF · 25,000–75,000 · 75,000–150,000 · Over 150,000 XAF
- **Posted:** Last 7 days · Last 14 days · Last 30 days
- **Status:** Open · Filled · Closing Soon

---

### Top Bar (Above Grid)

- Left: "Paid Projects" (H2) + count badge
- Right: Sort dropdown ("Sort by: Newest ▾") + View toggle (grid/list)
- Active filters strip below

---

### Project Grid (2 columns desktop, 1 mobile)

Each **Project Card:**
- White card, 1px border, 12px radius, shadow SM
- Hover: shadow MD + translateY(-1px)

**Card structure:**
- **Top row:** Class badge chip (left: "CLASS B" or "CLASS A") + Days left chip (right: "12 days left" — amber if < 7 days, red if < 3 days)
- **Company name** (label style, muted, 12px): "Yaoundé Digital Solutions"
- **Project title** (H4, 16px, 700 weight, 2 lines max): "Monthly Financial Reporting Dashboard for SME"
- **Field chip:** "FINANCE"
- **Brief excerpt** (13px, muted, 3 lines): First 2 sentences of project brief
- **Divider**
- **Bottom row:**
  - Compensation: "75,000 XAF" (mono, 600 weight, green: #16A34A)
  - Deadline: Calendar icon + "Jul 15, 2026"
  - Applicants: User icon + "4 applicants"
- **CTA:** "View Project →" — ghost button (always visible on mobile, on-hover on desktop)

**Filled project card:** Same but with status pill "FILLED" (muted gray) and a light gray overlay wash. Title and content still readable but card is visually deprioritized.

**Closing soon card:** Red border (1px #DC2626) instead of gray, "CLOSING SOON" amber pill at top-right.

---

### Empty State

When no projects match filters:
- Briefcase icon (64px) + "No projects match your filters" + "Clear filters" ghost button

When no projects available at all:
- Clock icon (64px) + "No projects posted yet" + "Check back soon — companies post new projects weekly."

---

## PAGE 2 — PROJECT DETAIL PAGE

**URL:** /projects/:id
**Layout:** Two-column (brief content left 65%, action panel right 35%)

---

### Left Column — Project Brief

**Breadcrumb:** Projects / Finance / Monthly Financial Reporting Dashboard

**Top:**
- Company name (label, muted)
- Project title (H1, 40px, bold)
- Row: Class badge chip + Field chip + Compensation (mono, 600 weight, green: "75,000 XAF") + Deadline
- Days remaining: "12 days to apply" — muted, with clock icon. Red if < 3 days.

**Status banner (contextual):**
- Already applied: Amber banner "You've applied to this project. [View your application →]"
- Project filled (not you): Red banner "This project has been filled."

**About the Company:**
- Section label: "COMPANY"
- Company name (H4) + brief description (2-3 lines muted)
- Industry chip + Location chip

**Project Brief:**
- Section label: "PROJECT BRIEF"
- Full project description in a clean reader view (Body 16px, 1.7 line-height)
- Business context quote block (if any)

**Expected Deliverables:**
- Same numbered list style as challenge deliverables
- Each with format requirements

**Compensation & Terms:**
- Section label: "PAYMENT TERMS"
- Amount: "75,000 XAF" (H3, mono, bold)
- Payment method: "Paid via MTN MoMo or Orange Money upon completion"
- Platform commission note: "Platform fee: 9,000 XAF (12%). You receive: 66,000 XAF" — muted, 13px
- Enrollment fee: "Upon selection, you'll pay a 9,000 XAF enrollment fee (the 12% commission) to confirm your commitment."

---

### Right Sidebar — Action Panel (Sticky)

White card, 1px border, 12px radius, shadow SM:

- Company name (muted, 12px)
- Compensation: "75,000 XAF" (mono, 28px, bold, green)
- Net payout: "You receive: 66,000 XAF" (muted, 13px)
- Divider
- Deadline: "Jul 15, 2026 (12 days)"
- Required class: Class badge chip
- Current applicants: "4 applied"
- Divider
- "Apply to This Project" — primary black button, full width
- Note (muted, 12px): "You'll need to select 2–3 credentials to support your application."

**Already applied state:** Replace button with amber "Application Submitted ✓" chip + "View Application" ghost link

**Ineligible state (Class mismatch):** Replace button with muted message "This project requires Class A. You are Class B." + "See Class A projects →" ghost link

---

## PAGE 3 — PROJECT APPLICATION FORM

**URL:** /projects/:id/apply
**Layout:** Centered single column, max 680px

**Page header:**
- "Apply for Project" (H2)
- Project title (H3, muted below)

---

### Section 1 — Application Statement

- Label: "YOUR APPLICATION" (section label)
- Subtext: "Tell the client why you're the right graduate for this project. Max 150 words."
- Textarea (6 rows, full width, 150-word counter bottom-right)
- Word count: "0/150" — turns amber at 130+, green when 80–150

---

### Section 2 — Supporting Credentials

- Label: "SELECT YOUR TOP CREDENTIALS" (section label)
- Subtext: "Choose 2–3 badges that best demonstrate your ability for this project."
- Credential picker grid (shows all earned credentials as selectable cards, same as badge cards but compact):
  - Each: 20% smaller than standard badge card
  - Selected state: Black bg, white text, checkmark icon overlay
  - Unselected: White card, 1px border, hover: #F3F3F3
- Max 3 selectable (4th click shows tooltip: "Maximum 3 credentials. Deselect one to choose another.")
- Selection counter: "2 of 3 credentials selected" (below grid, muted)

---

### Section 3 — Confirm Details

Summary row:
- Applying to: [Project Title]
- Company: [Company Name]
- Class required: Class badge chip
- Your compensation: "66,000 XAF (after 12% platform fee)"

---

### Submit row:
- "Submit Application →" — primary black button (disabled until 1 credential selected + statement written)
- "Cancel" — ghost link (left)

---

## PAGE 4 — APPLICATION SUBMITTED CONFIRMATION

Centered card, same style as submission confirmation:

- Black checkmark circle (64px) centered
- "Application submitted!" (H2)
- "The company will review your application and notify you of their decision."
- Details: Project name, Company, Applied on date
- Status pill: "PENDING REVIEW" — amber
- "View My Applications →" primary button
- "Back to Projects" ghost button

---

## PAGE 5 — MY APPLICATIONS (STATUS TRACKER)

**URL:** /applications

Filter tabs: "All" | "Pending" | "Accepted" | "Rejected" | "In Progress" | "Completed"

Each application row (card on mobile):
- Company name (label, muted)
- Project title (H4, bold)
- Class badge chip
- Applied date
- Status pill (Pending/Accepted/Rejected/In Progress/Completed)
- "View →" ghost button

---

## PAGE 6 — PROJECT IN-PROGRESS VIEW

**URL:** /projects/:id/active
**Shown after:** Graduate is selected AND has paid the enrollment fee.

**Layout:** Two-column (brief left, workspace right)

**Top banner (black bg, white text):**
- "Project In Progress" (label, white)
- Project title (H3, white)
- Deadline countdown: "14 days 3 hours remaining" (mono, white, amber if < 3 days)
- Company name + "Contact via platform" icon button

**Left — Project Brief (same as detail page, read-only)**

**Right — Submission Workspace (same as active challenge workspace from Phase 4 but adapted for paid projects):**
- "Submit Deliverables" section
- Upload area
- GitHub link field
- Self-assessment note
- "Submit to Client →" primary button
- Note: "The client has 72 hours to review. If no response, it's auto-approved."

---

## PAGE 7 — ENROLLMENT FEE PAYMENT PAGE

**Trigger:** Graduate is selected by SME. This page appears before they can begin work.

**URL:** /projects/:id/enroll

**Layout:** Centered card, max 540px

**Card (white, 16px radius, shadow LG):**

**Header:**
- Congratulations icon (trophy/star, 48px, black) centered
- "You've been selected!" (H2, centered)
- "Confirm your commitment by paying the platform enrollment fee to begin work." (Body, muted, centered)

**Project summary:**
- Project title (H4)
- Company name (muted)
- Agreed compensation: "75,000 XAF"

**Fee breakdown (table style):**
| | Amount |
|---|---|
| Agreed project value | 75,000 XAF |
| Platform fee (12%) | 9,000 XAF |
| You receive on completion | **66,000 XAF** |
| **Enrollment fee to pay now** | **9,000 XAF** |

The enrollment fee row: Black bg, white text, highlighted

**Payment instruction:**
- "Pay 9,000 XAF via MTN MoMo or Orange Money"
- MoMo merchant code: large mono text "1234567" — with copy icon button
- Payment amount: "9,000 XAF" — large mono, red (exact amount required)
- "I have completed the payment" — primary black button
- Note: "Payment is verified automatically. If not confirmed within 24 hours, your slot may be given to another applicant."

---

## PAGE 8 — PROJECT DELIVERABLES SUBMISSION

Same design as the Submission Portal (Phase 5, Page 1) but adapted:
- Title: "Submit Project Deliverables"
- Header banner: Company name + project title + deadline reminder
- Deliverables list from project brief
- Upload area
- "Submit to [Company Name] →" primary button
- Warning: "The client will review your work within 72 hours."

---

## PAGE 9 — AWAITING SME APPROVAL STATE

**URL:** /projects/:id/awaiting-approval

Centered card:
- Clock icon (48px, amber) centered
- "Awaiting client review" (H2)
- "Deliverables submitted on [date]. The client has until [date+72hrs] to review."
- Progress timeline: "Submitted → Under Review → Approved → Paid" — same timeline style as submission tracking
- "If no response by [date], your submission is auto-approved." (amber info box)
- Status pill: "AWAITING APPROVAL" (amber)

---

## PAGE 10 — PAYMENT RECEIVED / PROJECT COMPLETED

**URL:** /projects/:id/completed

Full-screen black celebration card (max 600px, centered):

**Black bg, white content:**
- Large money/check icon (64px, white) centered
- "Payment sent!" (H1, white, 48px)
- Amount: "66,000 XAF" (mono, 56px, 700 weight, green: #16A34A)
- "Sent to your MTN MoMo account within 24 hours." (Body, white, muted)

**White details card (inset inside black card):**
- Project: [Title]
- Company: [Name]
- Completed: [Date]
- Payment: 66,000 XAF (after 12% fee)
- Disbursement: Within 24 hours

**Badge earned:**
- Black banner below: "Project Badge Earned: [Project Title]" with "REAL PROJECT" amber chip
- "View Badge →" white ghost button

**Actions:**
- "View My Credentials" — white outlined button
- "Browse More Projects" — white ghost button

---

## GLOBAL UX NOTES FOR PHASE 7

1. **The Project Board must feel earned, not intimidating.** Graduates worked to get here. The board should welcome them, not overwhelm them. The access banner on first visit sets this tone.
2. **Compensation figures must be prominent and accurate.** Graduates make financial decisions based on this. Show the gross amount prominently, but also clearly explain the net after platform commission. No hidden deductions.
3. **The enrollment fee payment must feel transparent.** Explain why it exists (commitment confirmation + pre-funds the commission). Show the exact math. Never hide it.
4. **Application statement is a professional cover letter lite.** The 150-word limit is intentional — encourage quality over quantity. The word counter helps graduates craft thoughtfully.
5. **Credential selection for applications is a storytelling tool.** The graduate is choosing their best evidence. The visual selection UI must make this feel intentional and strategic.
6. **The payment received screen is the ultimate reward moment.** Make it feel as good as it should. Green numbers on black. The company paid. Real money. This is the platform's promise delivered.
7. **Deadline urgency is real.** Color-code approaching deadlines: amber at 7 days, red at 3 days. Countdown timers on In-Progress projects. This is money on the line.
