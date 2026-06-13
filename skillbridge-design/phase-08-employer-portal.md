# SkillBridge — Phase 8: Employer Portal
## Google Stitch Design Brief

---

## OVERVIEW

The Employer Portal is the demand side of SkillBridge and its primary revenue source. Employers must feel like they're accessing a premium, professional hiring tool — not a student database. Every interaction must communicate trust in the credentials. The talent search must be powerful but intuitive. Project posting must feel like a professional workflow. The design should borrow confidence from the best B2B SaaS tools — clean, data-forward, and respectful of the employer's time.

**Design System Reference:** Phase 1 definitions apply throughout.
**Important:** The employer app shell is different from the graduate app shell. Different sidebar nav, different top bar color (still white, but different navigation items).

**Pages in this phase:**
1. Employer Dashboard
2. Talent Search & Filter Interface
3. Search Results Page
4. Graduate Full Profile (Employer View)
5. Shortlist Management
6. Post a Project (Multi-step Form)
7. My Projects (Active / Filled / Closed)
8. Subscription Management
9. Transaction History & Receipts
10. Sponsored Challenge Setup
11. Employer Settings

---

## EMPLOYER APP SHELL

### Sidebar (Desktop, 240px)

Same structural style as graduate sidebar (white, 1px right border).

**Company card at top:**
- Company logo/avatar (40px circle, initials fallback) + Company name (14px, 600 weight) + Subscription tier chip ("STANDARD" or "PREMIUM" — black chip, white text)

**Navigation links:**
- Dashboard (grid icon)
- Search Talent (search icon)
- My Shortlist (bookmark icon)
- Post a Project (plus-circle icon)
- My Projects (briefcase icon)
- Subscription (credit-card icon)
- Transactions (receipt icon)
- Settings (gear icon)

**Bottom of sidebar:**
- If Standard tier: Upgrade prompt — small amber-accented card "Upgrade to Premium — Unlimited contacts & projects" + "Upgrade" button
- Log Out

### Top Bar

**Left:** Page title (H3)
**Right:** "Post a Project" shortcut button (primary black, small) + Notification bell + Company avatar dropdown

### Bottom Nav (Mobile)

5 icons: Dashboard, Search, Shortlist, Projects, Settings

---

## PAGE 1 — EMPLOYER DASHBOARD

**Purpose:** Quick overview of hiring activity + CTAs to core actions.

---

### Stats Row (4 cards)

| Card | Content |
|---|---|
| Graduates Contacted | Large mono number + "this month" + limit info (e.g., "6 of 10 contacts used") |
| Active Projects | Count + "View all →" link |
| Applications Received | Count across all active projects |
| Subscription Status | Tier chip + renewal date |

---

### Quick Actions Row

3 large action buttons (side by side on desktop, stacked mobile):
- "Search Talent →" — primary black
- "Post a Project →" — secondary outlined
- "View Shortlist →" — ghost

---

### Recent Activity Feed

Section header: "Recent Activity"
Chronological list of events:
- New application received for [project]
- Graduate [name] viewed (from search)
- Project [name] filled
- Subscription renewed
Same item style as graduate activity feed but employer-relevant events.

---

### Subscription Summary Card (Full Width)

Black bg card:
- Left: Current plan (H3, white) + tier chip
- Center: Features remaining this month — contacts used/limit, projects used/limit
- Right: "Upgrade Plan" white button (if Standard) or "Manage" ghost button (if Premium)

---

### Recommended Graduates Section

"Top Graduates in [Company's Field of Interest]" — section header

3 graduate profile cards (horizontal scroll mobile, 3-column desktop):
Each card (same as search result card, see Page 3)

---

## PAGE 2 — TALENT SEARCH & FILTER INTERFACE

**URL:** /search
**Layout:** Two-column (filter sidebar left 280px, results right)

---

### Filter Sidebar

Header: "Filters" + "Clear all" link

**Search fields (above filters, always visible):**
- Keyword search: Input "Search by skill, challenge, or name..." with search icon
- Field: Multi-select dropdown — Computer Engineering, Electrical Engineering, Finance, Marketing

**Filter Groups:**

**Class Level (checkboxes with class badge chips):**
- ☐ Class D — Beginner
- ☐ Class C — Intermediate
- ☐ Class B — Advanced
- ☐ Class A — Expert

**Minimum Credentials:**
- Range input or radio: 1+ · 5+ · 10+ · 20+

**Rank Percentile:**
- "Top 10%" | "Top 25%" | "Top 50%" | "Any"

**Specific Badge Earned:**
- Searchable dropdown of challenge names: "Has completed..."

**University:**
- Dropdown: University of Buea · University of Douala · University of Yaoundé I · Other

**Graduation Year:**
- Multi-select: 2022 · 2023 · 2024 · 2025 · 2026

**Premium Profiles Only:**
- Toggle switch (on/off) — "Show premium profiles first"

---

### Search Bar (Top of Results Area)

- Primary search input (large, 48px height, full width): "Search graduates..."
- "Search" button (primary black, right)

---

## PAGE 3 — SEARCH RESULTS PAGE

**URL:** /search?[params]
**Layout:** Results fill right column

---

### Results Header

- "247 graduates found" (H4, left)
- Sort: "Sort by: Rank (High to Low) ▾" (right)
- View: Grid/List toggle

---

### Graduate Profile Cards (Grid: 2 columns desktop, 1 mobile)

Each **Graduate Profile Card:**
- White card, 1px border, 12px radius, shadow SM
- Hover: shadow MD + subtle scale

**Card anatomy:**
- **Top row:** Class badge chip (left) + Rank percentile chip (right, green if top 25%: "Top 18%")
- **Avatar:** 48px circle + name (H4, 600 weight) + field chip below name
- **Premium indicator:** "PREMIUM" amber chip (if premium graduate, top-right corner of card)
- **Top badges row:** 3 recent badge icons (small, 24px, with tooltip showing badge name on hover)
- **Stats row (3 items):**
  - Credentials: "12" (mono, bold)
  - Avg. Score: "81/100" (mono)
  - Projects: "2" (mono)
- **Divider**
- **Actions row:**
  - "View Profile" — ghost button (left)
  - "Contact" — primary black button (right, disabled if contact limit reached or free account)
  - "Save" — bookmark icon button

**Contact limit reached state:** "Contact" button becomes muted gray + tooltip "Contact limit reached. Upgrade or wait for monthly reset."

**Free account state:** "Contact" button + lock icon + "Subscribe to contact graduates"

---

## PAGE 4 — GRADUATE FULL PROFILE (EMPLOYER VIEW)

**URL:** /graduates/:username (employer's view)

**Same layout as graduate's Public Profile (Phase 3, Page 4) but with employer-specific additions:**

**Employer action bar (sticky right sidebar on desktop, bottom bar on mobile):**
White card, 1px border, 12px radius:
- Graduate name + class badge chip
- Rank: "Top 18% in Finance"
- "Contact This Graduate" — primary black button
  - If contacted before: "Contacted ✓" + "Send another message" ghost link
  - If limit reached: Muted + "Upgrade to contact more"
- "Save to Shortlist" — secondary button (changes to "Saved ✓" when saved)
- Divider
- "Suggest a Project" ghost button — opens project posting flow pre-filling the graduate's field

**Contact modal (triggered by Contact button):**
- Overlay modal, max 480px
- Title: "Contact [Graduate Name]"
- Message textarea: "Introduce yourself and describe the opportunity" (500 word max)
- Send button (primary) — sends in-platform message + email notification

---

## PAGE 5 — SHORTLIST MANAGEMENT

**URL:** /shortlist

**Page header:** "My Shortlist" (H2) + count + "Clear all" ghost link

**Filter row:** Field dropdown + Class dropdown

**Shortlist grid:** Same graduate profile card grid as search results but without the search bar.

**Notes feature (per shortlisted graduate):**
- Small note icon on each card
- Clicking opens a popover with a textarea: "Private note about this candidate..." (employer-only, graduate never sees it)
- Note saves inline (auto-save)

**Empty state:** Bookmark icon + "Your shortlist is empty" + "Search for graduates →" button

**Shortlist limit note (Standard tier):** "You can shortlist unlimited graduates. Contact quota: 10/month." (info bar, muted, top)

---

## PAGE 6 — POST A PROJECT (MULTI-STEP)

**URL:** /projects/new
**Steps:** 3-step progress indicator at top (same style as registration flow)

---

### Step 1 — Project Details

**Label:** "STEP 1 OF 3 — PROJECT INFO"
**Headline (H2):** "Describe the project"

**Form fields:**
- Project Title: "e.g., Monthly Sales Dashboard for Retail SME"
- Field (single select): Dropdown — Computer Engineering, Electrical Engineering, Finance, Marketing
- Project Brief: Large textarea (8 rows) with formatting hint: "Describe the work, context, and objectives. Be specific."
- Expected Deliverables: Dynamic add-rows input:
  - Pre-filled row 1: Text input "Deliverable 1 description"
  - "+ Add deliverable" ghost link button (adds a new row)
  - Each row has × to remove

**Navigation:** "Continue →" primary button

---

### Step 2 — Requirements & Compensation

**Label:** "STEP 2 OF 3 — REQUIREMENTS"
**Headline (H2):** "Set requirements and compensation"

**Form fields:**
- Deadline: Date picker (calendar UI, native or custom, min date = today + 7 days)
- Compensation Amount: Input with "XAF" suffix + "Suggested range for Class B: 25,000–100,000 XAF" helper text (muted, 13px)
- Estimated hours: "How many hours of work is this?" — dropdown (Under 10 hrs · 10–30 hrs · 30–60 hrs · 60+ hrs)
- AI class suggestion: After filling compensation + hours, a dynamic chip appears:
  - "Suggested class: CLASS B" (black chip) + "Why?" tooltip explaining the algorithm
  - "Accept suggestion" check + "Contest" link → if contested, note is sent to admin

---

### Step 3 — Review & Payment

**Label:** "STEP 3 OF 3 — REVIEW & POST"
**Headline (H2):** "Review and publish"

**Project summary card (full review before paying):**
All filled fields displayed in a clean read-only card:
- Project title, field, deadline, compensation, class requirement, deliverables list
- "Edit" icon-link next to each section

**Posting fee section:**
- "First 3 projects: FREE" info banner (green, if still within free quota)
- Or: "Posting fee: 2,500–5,000 XAF" with MoMo payment instruction
- Free quota counter: "1 of 3 free postings remaining"

**Confirm & Publish button:** "Publish Project" — primary black, full width
- On click (if fee required): MoMo payment modal appears
- On click (if free): Shows publishing success directly

**Publishing success state:**
- Black checkmark circle centered
- "Project published!" (H2)
- "Eligible graduates will see this project on the board."
- "View my project →" primary button

---

## PAGE 7 — MY PROJECTS

**URL:** /projects/mine
**Filter tabs:** "All" | "Open" | "Filled" | "Closed" | "In Review"

Each project row (card on mobile):
- Project title (H4, bold)
- Field chip + Class badge chip
- Compensation (mono, green)
- Deadline
- Applicants count: "7 applicants" — clickable
- Status pill
- Action buttons: "View Applicants" | "Edit" | "Close"

**Applicants drawer / sub-page:**
Clicking "View Applicants" on a project opens an applicants list:
- List of applicant cards (same style as graduate profile cards, more compact)
- Each applicant: avatar, name, class, rank percentile, top 2 credentials, 2-line application statement excerpt
- "View Full Profile" ghost button + "Select This Graduate" primary button (per applicant)
- Selecting triggers a modal: "Confirm selection? This graduate will be notified and must pay the enrollment fee."

---

## PAGE 8 — SUBSCRIPTION MANAGEMENT

**URL:** /subscription

**Current plan card (full-width, black bg, white text):**
- Plan name (H2, white): "Standard Plan"
- Price (mono, large, white): "25,000 XAF / month"
- Renewal date: "Renews: July 12, 2026"
- "Upgrade to Premium" — white button (Standard) or "Manage Plan" (Premium)

**Plan comparison (same as pricing page, but in-app context):**
- Current plan highlighted
- Features used this month: visual usage bars
  - "Contacts: 6 / 10 used" → progress bar
  - "Projects: 1 / 2 used" → progress bar

**Billing history (table, last 3 bills):**
- Date | Plan | Amount | Status | Download Receipt

**Cancel subscription:**
- Danger zone section: "Cancel Subscription" — red ghost button
- Cancellation modal explains: profile browsing remains active, contact and posting features stop at end of billing period

---

## PAGE 9 — TRANSACTION HISTORY & RECEIPTS

**URL:** /transactions
**Filter:** Date range picker + Transaction type dropdown

**Table (desktop) / Card list (mobile):**
| Date | Description | Amount | Status | Receipt |
|---|---|---|---|---|
| Jun 12, 2026 | Standard Subscription | 25,000 XAF | Paid | Download PDF |
| Jun 10, 2026 | Project Posting Fee | 3,500 XAF | Paid | Download PDF |
| Jun 3, 2026 | Project Posting Fee | 0 XAF | Free | — |

**Export button:** "Export CSV" — ghost button (top right)

Each receipt download opens/downloads a clean PDF-style receipt modal:
- SkillBridge logo
- Transaction ID, type, amount, parties, date, payment method

---

## PAGE 10 — SPONSORED CHALLENGE SETUP

**URL:** /sponsored-challenges (Premium only, or with custom arrangement)

**Access gate (for Standard users):**
- Lock icon + "Sponsored challenges are available on the Premium plan or via custom arrangement." + "Upgrade →" button

**Page content (Premium access):**

**Intro card:**
- "SPONSORED CHALLENGES" label
- "Your brand, your top talent." (H2)
- "Author a branded challenge. The top-performing graduates get your first-look. Starting at 150,000 XAF."

**Setup form:**
- Challenge title (branded)
- Field dropdown
- Class requirement: Class A only / Class B only / Both A and B
- Challenge brief (large textarea — platform reviews before publishing)
- Company description for brief display: "What text/logo should appear on the challenge brief?"
- Logo upload (SVG preferred)
- Budget (custom, min 150,000 XAF): Input with "XAF" suffix
- Contact preferences: "I want first-look at top 5 performers" toggle
- Submit: "Request Sponsorship →" primary button → triggers admin review
- Timeline note: "Our team will review and contact you within 2 business days."

---

## PAGE 11 — EMPLOYER SETTINGS

Two-column settings layout (nav left, content right):

**Settings nav:**
- Company Profile
- Security
- Notifications
- Billing (same as subscription page link)
- Danger Zone

**Company Profile section:**
- Business name (editable)
- Business email (editable, requires re-verification)
- Phone number
- RCCM number (editable, but flagged for admin review on change)
- Company description (textarea, 500 words max)
- Company logo upload (SVG or PNG, used in project posts)

**Notifications section (table):**
| Event | In-App | Email |
|---|---|---|
| New project application | ON | ON |
| Application deadline approaching | ON | ON |
| Subscription renewal reminder | ON | ON |
| New graduates in your field | OFF | OFF |

**Danger Zone:**
- "Deactivate Account" — all active projects closed, profile hidden
- "Delete Account" — red, behind confirmation modal

---

## GLOBAL UX NOTES FOR PHASE 8

1. **The employer portal is a premium B2B tool.** It should feel like a professional HR platform — confident, data-forward, precise. Not a startup toy.
2. **Contact quota UI is critical.** Employers on Standard need to see exactly how many contacts they have left. This is the core Standard-to-Premium upgrade pressure. Make usage bars visible and clear.
3. **Search results must be scannable in 2 seconds per card.** The class badge, rank percentile, and top credentials are the three signals that matter most. Lead with them visually.
4. **Project applicant review must be effortless.** The employer chose SkillBridge to simplify hiring. Reviewing applicants must feel faster and more confident than reviewing CVs. Lead with credentials, not words.
5. **The posting fee flow must never feel surprising.** Always show the free quota status clearly (1 of 3 remaining). When the free tier ends, explain the fee and make paying easy.
6. **Sponsored challenge setup is a sales touchpoint.** The page should be aspirational. Show what the company gets in return (branded challenge, top performer access). This is a premium product.
7. **Mobile employer experience matters.** HR managers review applications from their phones. Every approval workflow, applicant card, and project status view must work perfectly at 375px.
