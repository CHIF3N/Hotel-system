# SkillBridge — Phase 1: Design System & Public Pages
## Google Stitch Design Brief

---

## OVERVIEW

This is the foundational phase. It establishes the complete visual language of SkillBridge and covers every public-facing page that requires no login. All subsequent phases build on top of this system. SkillBridge is a credentialing and talent marketplace platform for Cameroonian university graduates and employers. The design must feel world-class, trustworthy, and clean — like a premium SaaS product built for Africa.

**Pages in this phase:**
1. Design System / Token Sheet
2. Landing / Home Page
3. How It Works Page
4. Pricing Page
5. Public Badge Verification Page

---

## SECTION 1 — DESIGN SYSTEM

### 1.1 Color Palette

**Primary Colors (Core Identity):**
- `Black` — #000000 — Primary backgrounds, headings, primary buttons, key UI elements
- `White` — #FFFFFF — Page backgrounds, card surfaces, text on black backgrounds
- `Off-White` — #F9F9F9 — Alternate section backgrounds, input fields, card fills
- `Border Gray` — #E5E5E5 — Dividers, card borders, input borders
- `Muted Text` — #6B6B6B — Secondary text, captions, placeholder text
- `Subtle Hover` — #F3F3F3 — Ghost button hover, list item hover state

**Status / Semantic Colors (Action & Feedback Only):**
- `Success Green` — #16A34A — Completed, passed, approved, active subscription
  - Light bg: #DCFCE7 — Green pill backgrounds
  - Dark text: #14532D — Text inside green pills
- `Error Red` — #DC2626 — Declined, failed, error states
  - Light bg: #FEE2E2 — Red pill backgrounds
  - Dark text: #7F1D1D — Text inside red pills
- `Amber Pending` — #D97706 — Pending, awaiting action
  - Light bg: #FEF3C7 — Amber pill backgrounds
  - Dark text: #78350F — Text inside amber pills
- `Yellow Review` — #CA8A04 — Under review, in evaluation
  - Light bg: #FEF9C3 — Yellow pill backgrounds
  - Dark text: #713F12 — Text inside yellow pills

**Rule:** Status colors are ONLY used for status pills, badges, progress indicators, and feedback messages. Never use them as decorative colors or in navigation.

---

### 1.2 Typography

**Font Family:** Inter (Primary), with fallback to system-ui, sans-serif. Use monospace (JetBrains Mono or system monospace) for numerical stats and metrics only.

**Type Scale:**
| Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| Display | 56px | 800 | 1.1 | Hero headlines only |
| H1 | 40px | 700 | 1.2 | Page titles |
| H2 | 32px | 700 | 1.25 | Section headers |
| H3 | 24px | 600 | 1.3 | Card titles, subsections |
| H4 | 18px | 600 | 1.4 | Widget titles |
| Body Large | 16px | 400 | 1.6 | Primary reading text |
| Body | 14px | 400 | 1.6 | Standard UI text |
| Small | 12px | 400 | 1.5 | Captions, meta info |
| Label | 11px | 600 | 1.4 | ALL CAPS, 0.8px letter-spacing, tags, category labels |
| Mono | 14px | 500 | 1.5 | Stats, scores, amounts |

---

### 1.3 Spacing & Grid

**Base unit:** 4px. All spacing is a multiple of 4.
**Common values:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px

**Grid System:**
- Desktop: 12-column grid, 1280px max container, 24px gutters
- Tablet: 8-column grid, 768px breakpoint, 20px gutters
- Mobile: 4-column grid, 375px base, 16px gutters

---

### 1.4 Border Radius

| Token | Value | Usage |
|---|---|---|
| Radius SM | 4px | Small tags, tiny chips |
| Radius MD | 8px | Buttons, inputs, small cards |
| Radius LG | 12px | Standard cards, panels |
| Radius XL | 16px | Feature cards, modals |
| Radius 2XL | 24px | Large hero cards |
| Radius Full | 9999px | Status pills, avatar circles |

---

### 1.5 Shadows

- `Shadow XS:` 0 1px 2px rgba(0,0,0,0.05) — Subtle depth on inputs
- `Shadow SM:` 0 2px 8px rgba(0,0,0,0.07) — Default card shadow
- `Shadow MD:` 0 4px 16px rgba(0,0,0,0.08) — Elevated cards, dropdowns
- `Shadow LG:` 0 8px 32px rgba(0,0,0,0.10) — Modals, popovers
- `Shadow XL:` 0 24px 64px rgba(0,0,0,0.14) — Hero elements, feature highlights

---

### 1.6 Component Library

**Buttons:**
- **Primary:** Black (#000000) fill, white text, 8px radius, 40px height (desktop), 48px height (mobile), bold 14px label, 0 transition on hover → lighten to #1A1A1A
- **Secondary:** White fill, 1px solid #000000 border, black text, same sizing as primary, hover → #F9F9F9 fill
- **Ghost:** Transparent fill, no border, black text, hover → #F3F3F3 fill
- **Destructive:** #DC2626 fill, white text
- **Success:** #16A34A fill, white text
- **Disabled:** #E5E5E5 fill, #9CA3AF text, not-allowed cursor
- **Icon Button:** 40px square, border or ghost variant, centered icon

**Status Pills / Badges:**
- Height: 24px, horizontal padding: 10px, radius: 9999px (full round)
- Format: Colored dot (6px circle) + label text at 11px, 600 weight
- Completed → Green dot + "Completed"
- Under Review → Yellow dot + "Under Review"
- Pending → Amber dot + "Pending"
- Declined → Red dot + "Declined"
- Failed → Red dot + "Failed"
- In Progress → Black dot + "In Progress"
- Expired → #6B6B6B dot + "Expired"

**Class Badges (Unique to SkillBridge):**
- Rectangular chips, 28px height, 8px radius
- Class D: White bg, black border, black text "CLASS D"
- Class C: Light gray (#E5E5E5) bg, dark gray text "CLASS C"
- Class B: Black bg, white text "CLASS B"
- Class A: Black bg, white text, subtle gold-amber (#D97706) left border accent "CLASS A"
- All caps, 11px, 700 weight, 1px letter spacing

**Input Fields:**
- Height: 44px, 8px radius, 1px solid #E5E5E5 border, white bg, #000000 text
- Placeholder: #9CA3AF
- Focus state: 1px solid #000000 border, 0 0 0 3px rgba(0,0,0,0.06) ring
- Error state: 1px solid #DC2626 border, red helper text below
- Label: 13px, 500 weight, black, above field, 6px gap

**Cards:**
- Background: #FFFFFF, border: 1px solid #E5E5E5, radius: 12px, shadow: Shadow SM
- Hover state (interactive cards): shadow escalates to Shadow MD, slight translateY(-1px)
- Internal padding: 24px (desktop), 16px (mobile)

**Navigation (Top Bar):**
- Background: #FFFFFF, bottom border: 1px solid #E5E5E5
- Height: 64px (desktop), 56px (mobile)
- Logo left-aligned, nav links center or right-aligned
- Sticky on scroll with shadow activation

**Dividers:**
- 1px solid #E5E5E5, full width
- Vertical dividers: 1px solid #E5E5E5, specific height

**Avatar:**
- Circle shape, border: 2px solid #E5E5E5
- Sizes: 32px, 40px, 48px, 64px, 80px
- Fallback: Black bg, white initials, body-sized text

**Progress Bar:**
- Track: #E5E5E5, 8px height, radius full
- Fill: #000000, animated left-to-right
- With percentage label beside or above

**Tooltips:**
- Black bg (#000000), white text, 8px radius, 12px text, max 200px width, arrow pointer

---

### 1.7 Icon Style

Use **Lucide Icons** or equivalent outline-style icons throughout. Never use filled icons unless representing active state. Stroke width: 1.5px. Icon sizes: 16px (inline), 20px (UI default), 24px (feature icons), 32px (section icons), 48px (empty states).

---

### 1.8 Illustration & Imagery Style

- No photography of people. Use abstract geometric shapes, lines, and minimal illustrations.
- Empty states: Simple centered illustration (black outline, no fill), short message below, action button
- Hero visuals: Floating card mockups of the platform itself (profile cards, badge cards) arranged in a clean composition — no gradients, use subtle shadows only
- All illustrations: Black outline on white, with a single status color accent at most

---

## SECTION 2 — LANDING / HOME PAGE

**Purpose:** Convert visitors into registered graduates or employer accounts. Communicate what SkillBridge does in under 5 seconds.

**URL:** skillbridge.cm (root)

**Layout:** Full-width sections stacked vertically. White and #F9F9F9 sections alternating for visual rhythm.

---

### 2.1 Navigation Bar (Sticky)

- **Left:** SkillBridge wordmark logo (black, bold, no icon needed or minimal geometric mark)
- **Center (desktop only):** Links — "How It Works", "For Graduates", "For Employers", "Pricing"
- **Right:** "Log In" (ghost button) + "Get Started" (primary black button)
- Mobile: Hamburger menu icon (right), logo (left), full-screen slide-down menu on open

---

### 2.2 Hero Section

**Background:** Pure white (#FFFFFF)

**Layout:** Two-column on desktop (text left, visual right), single column stacked on mobile (text on top, visual below)

**Left column (text):**
- Small label chip at top: Black bg, white text, 11px all-caps — "GRADUATE CREDENTIAL PLATFORM"
- Headline (Display size, 800 weight): "Prove Your Skills. Get Hired." — two lines, no more
- Subheadline (Body Large, 400 weight, #6B6B6B): "SkillBridge connects Cameroonian graduates with verified credentials to employers who need real talent. No diploma guessing. Just proof." — max 2 lines
- Two CTA buttons side by side: Primary ("Start for Free" — black) + Secondary ("I'm an Employer" — outlined black)
- Small trust text below buttons: "Free for graduates · Trusted by employers · Verified credentials"

**Right column (visual):**
- Floating card composition showing 3 overlapping UI mockup cards:
  - Card 1: A graduate profile card (name, field, class badge "CLASS A", progress bar, 3 badge icons)
  - Card 2: A credential badge card (badge icon, challenge name, "PASSED", green status pill, date)
  - Card 3: A project listing card (project title, company name, compensation amount in XAF, "CLASS B" requirement chip)
- Cards are rotated slightly (-4deg, 0deg, +4deg) for depth effect
- All cards use the design system card style: white bg, black border 1px, 12px radius, shadow MD

**Mobile:** Stack vertically. Cards show as a single scrollable horizontal strip or just one card.

---

### 2.3 Social Proof Bar

**Background:** #F9F9F9
**Height:** 80px
**Content:** Single row of stats, center-aligned, separated by vertical dividers:
- "10,000+ Graduates" | "320 Practice Challenges" | "4 Academic Fields" | "Trusted by UB FET"
- Stat numbers: Mono 24px, 700 weight, black
- Labels: 12px, 400 weight, #6B6B6B
- Mobile: Scroll horizontally or 2x2 grid

---

### 2.4 How It Works (Summary — 3 Steps)

**Background:** White
**Layout:** Centered, max 900px width

**Section label:** "HOW IT WORKS" — label style, black
**Section headline (H2):** "From student to verified professional in 4 steps"

**Steps:** Horizontal row of 3 step cards (stacked on mobile)
Each card:
- Step number: Large mono "01", "02", "03", "04" — 40px, 800 weight, black
- Icon: 32px outline icon
- Title (H4): Short step name
- Description (Body, #6B6B6B): 2 sentence max
- Connector line between cards on desktop (1px dashed #E5E5E5)

Steps content:
1. "Register Free" — Create your graduate profile and pick your field
2. "Complete Challenges" — Work through platform challenges from Beginner to Expert
3. "Earn Credentials" — Get reviewed and receive verified digital badges
4. "Get Hired" — Employers find you by your class, field, and rank

---

### 2.5 Feature Split Section — Graduates

**Background:** #F9F9F9
**Layout:** Two column — left: text content, right: feature visual

**Label:** "FOR GRADUATES"
**Headline (H2):** "Build credentials that employers actually trust"
**Body text:** Explain the progressive class system (D→C→B→A), free access, badges
**Feature list:** 4 bullet points with check icons (black checkmarks):
- Free to join — no credit card required
- Progress through 4 class levels at your own pace
- AI-reviewed and expert-reviewed submissions
- Verifiable digital badges on your public profile

**Visual (right):** A Graduate Dashboard mockup card showing the progression bar, class badges row, and recent activity list — clean white card, realistic data

**CTA:** "Create Free Account" — primary black button

---

### 2.6 Feature Split Section — Employers

**Background:** White
**Layout:** Two column reversed — left: visual, right: text content

**Label:** "FOR EMPLOYERS"
**Headline (H2):** "Hire graduates you've seen perform, not just promise"
**Body text:** Explain the talent search, class-verified profiles, paid project board
**Feature list:** 4 bullet points:
- Search talent by field, class level, and rank
- View full credential history and submission scores
- Post real projects and pay via Mobile Money
- Sponsored challenges to surface top talent in your domain

**Visual (left):** An Employer Search results mockup showing 2 graduate profile cards in a list, with filter sidebar, class badges, rank percentile labels

**CTA:** "Browse Talent Pool" — primary black button

---

### 2.7 Class System Explanation

**Background:** Black (#000000)
**Text:** White

**Layout:** Centered, max 960px

**Headline (H2, white):** "Four classes. One path. Real proof."
**Subtext (Body, #9CA3AF):** "Every graduate starts at Class D. Each step up requires demonstrated competence — no shortcuts."

**Class progression visual:**
- Four large cards side by side (or 2x2 on mobile) on dark background
- Each card: White bg, 12px radius, padding 24px
  - Class label chip at top (using class badge style)
  - Class name: "Beginner", "Intermediate", "Advanced", "Expert"
  - Review type: "AI Reviewed" or "Expert Reviewed" with appropriate icon
  - Unlock requirement: "Complete 5 challenges" etc.
  - Arrow connector between cards (white arrow, desktop only)
- Class A card has a subtle amber accent on the left border to signal "top tier"

---

### 2.8 Testimonials / Social Proof (Placeholder Ready)

**Background:** #F9F9F9
**Layout:** 3-column grid (1-column stacked on mobile)

**Label:** "WHAT GRADUATES SAY"
**Headline (H2):** "Real stories from real graduates"

Three testimonial cards (placeholder/designed):
- Each: White card, 12px radius, shadow SM
- Opening quote mark in large black text
- Testimonial text (Body, italic)
- Divider line
- Avatar circle (initials fallback) + name + field + class badge

---

### 2.9 Final CTA Section

**Background:** Black (#000000)

**Layout:** Centered, single column, max 600px

**Headline (H2, white):** "Your credentials are waiting to be built."
**Subtext (Body, #9CA3AF):** "Join thousands of graduates building verified proof of their skills."
**Two CTA buttons:** 
- Primary (white fill, black text): "Get Started Free"
- Ghost (white text, white border, 1px): "Learn More"

---

### 2.10 Footer

**Background:** White, top border: 1px solid #E5E5E5

**Layout:** 4-column grid on desktop, stacked on mobile

**Column 1:** Logo + tagline (2 lines) + social links (icon buttons)
**Column 2:** Platform — How It Works, For Graduates, For Employers, Pricing
**Column 3:** Company — About, Contact, Privacy Policy, Terms of Service
**Column 4:** Support — FAQ, Help Center, Report Issue

**Bottom bar:** Full-width divider + "© 2026 SkillBridge. All rights reserved." left + language toggle (English | Français) right

---

## SECTION 3 — HOW IT WORKS PAGE

**URL:** /how-it-works
**Purpose:** Detailed explanation of the platform flow for both graduates and employers.

**Layout:** Long-form content page, alternating white and #F9F9F9 sections, sticky nav highlight

**Page Header:**
- Top section: White bg, centered, headline "How SkillBridge Works", subtext 2 lines, breadcrumb "Home / How It Works"

**Section A — The Class System:**
- Full explanation of Class D → Class C → Class B → Class A
- Visual: Vertical timeline on desktop (horizontal scroll cards on mobile) — each class is a milestone node with icon, label, description, and requirements
- Timeline line: 2px solid black, connecting dots of 12px each

**Section B — Graduate Journey:**
- Step-by-step illustrated flow: Register → Browse Challenges → Submit Work → Get Reviewed → Earn Badge → Progress → Paid Projects
- Each step: icon, headline, 2-sentence description
- Connected with dashed line arrows

**Section C — AI vs Expert Review:**
- Two-column comparison cards side by side:
  - Left card: "AI Review" — Classes C & D, within 4 hours, automated rubric scoring, instant feedback
  - Right card: "Expert Review" — Classes A & B, domain experts, 72-hour turnaround, detailed feedback
- Both cards: White bg, black border, 12px radius

**Section D — Employer Journey:**
- Similar step flow: Register Business → Subscribe → Search Talent → Post Projects → Pay via MoMo

**Section E — Credentials & Badges:**
- Visual explanation of the Open Badges standard, what metadata is inside a badge, and the public verification link
- Badge card mockup with expand view showing metadata

---

## SECTION 4 — PRICING PAGE

**URL:** /pricing
**Purpose:** Show employer subscription tiers and explain graduate free access clearly.

**Page Header:**
- Headline (H1): "Transparent pricing for every use case"
- Subtext: "Graduates join free. Employers choose the plan that fits their hiring needs."

**Graduate Card (Full Width Top):**
- Black bg card, white text, full-width horizontal
- Left: "For Graduates" label + "Always Free" in large mono text + feature list
- Right: "Create Account" white button
- Feature list: Free registration, unlimited challenge access, digital credential issuance, public profile, class progression, paid project board (Class A/B)

**Employer Pricing Cards (Two Cards Side by Side):**

Card 1 — Standard:
- White bg, black border, 12px radius
- Plan name: "Standard" (H3)
- Price: "25,000 XAF" (mono, large) + "/month" (small, muted)
- Annual discount note: "Save 15% yearly"
- Feature list (check icons): Search & filter talent pool, Contact up to 10 graduates/month, Post up to 2 paid projects/month, Transaction history
- CTA: Primary black button "Get Standard"

Card 2 — Premium (Highlighted):
- Black bg, white text, slightly larger card (elevated)
- "MOST POPULAR" chip at top (amber pill)
- Plan name: "Premium" (H3, white)
- Price: "60,000 XAF" (mono, large, white) + "/month"
- Feature list with white checkmarks: Everything in Standard, Unlimited graduate contacts, Unlimited project postings, Sponsored challenge access, Priority talent pool ranking, WhatsApp account manager
- CTA: White button with black text "Get Premium"

**One-time Fees Section:**
- Below the cards, full-width section with #F9F9F9 bg
- Table or card row showing: SME Project Posting Fee (2,500–5,000 XAF), Sponsored Challenge (from 150,000 XAF, custom)
- Payment method note: "All payments via MTN MoMo or Orange Money"

**FAQ Accordion Section:**
- 6 common questions, expandable accordion
- Each: Row with question text (Body, 600 weight) + plus/minus icon, expand to reveal answer

---

## SECTION 5 — PUBLIC BADGE VERIFICATION PAGE

**URL:** /verify/:badge-id
**Purpose:** Anyone with a badge link can verify its authenticity. No login required.

**Layout:** Centered single column, max 640px, white background

**Header:** Navigation bar (logo only, no nav links, no login button — minimal) 

**Top Section:**
- Large green checkmark circle (48px icon, green color #16A34A) centered
- Headline (H2): "Badge Verified"
- Subtext: "This credential is authentic and was issued by SkillBridge."

**Badge Card (Main Content):**
- White card, 1px black border, 16px radius, shadow MD, centered
- Top area: Badge icon (large, 80px, styled with field icon) + field color accent strip at top (subtle 4px top border, black)
- Badge title (H3): Challenge or project name
- Class badge chip (using class badge design)
- Status pill: "COMPLETED" — green

**Metadata Section (inside card, below badge):**
- Divider
- Grid of metadata fields, 2 columns:
  - Graduate Name: Full name (black, 600 weight)
  - Field: e.g., "Computer Engineering"
  - Class Level: "Class B — Advanced"
  - Date Issued: "12 June 2026"
  - Issued By: "SkillBridge Platform"
  - Co-issued By: University name (if applicable), with university logo (small, 20px)
  - Review Score: Score/100 (mono)
  - Badge ID: Unique ID (mono, small, muted)

**Actions Row:**
- "Share Badge" button (secondary) + "Download Badge" button (secondary)
- Small text: "This badge conforms to the IMS Global Open Badges 2.0 standard."

**Footer:** Minimal — logo + "© 2026 SkillBridge" — no full footer nav

**Error State (Invalid Badge ID):**
- Red X circle (48px) centered
- Headline: "Badge Not Found"
- Subtext: "This badge ID does not exist or may have been revoked."
- Single button: "Visit SkillBridge" → home page

---

## GLOBAL UX NOTES FOR PHASE 1

1. **Whitespace is a feature.** Every section needs breathing room. Never crowd elements. Use 80px+ vertical padding between sections.
2. **Typography does the heavy lifting.** The design is primarily typographic. Big, bold, confident headlines. Let the words communicate.
3. **No decorative gradients.** Black, white, and status colors only. Gradients are explicitly forbidden.
4. **Mobile-first.** Design every page at 375px wide first. Every section must work perfectly on mobile before desktop.
5. **Hover states on everything interactive.** Buttons, cards, links, nav items — all must have visible hover states.
6. **Empty states are designed.** Every list, every section has a designed empty state (icon + message + action).
7. **Language toggle.** Every page has English/French toggle in the nav or footer.
8. **Loading states.** Show skeleton screens (gray animated placeholder bars) not spinners for content loading.
