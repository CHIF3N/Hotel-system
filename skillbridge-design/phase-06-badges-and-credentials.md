# SkillBridge — Phase 6: Badges & Credentials
## Google Stitch Design Brief

---

## OVERVIEW

Credentials and badges are the product of everything a graduate does on SkillBridge. This phase is the "reward" phase — every page here should feel like achievement recognition. The badge system is the core value proposition of the entire platform. Designs must make graduates feel proud and make employers trust what they see. Badges must look verifiable, professional, and beautiful enough to be shared.

**Design System Reference:** All colors, typography, spacing, and components follow Phase 1 definitions.
**App Shell Reference:** Sidebar + top bar from Phase 3 applies.

**Pages in this phase:**
1. My Credentials — Full Overview Page
2. Badge Detail Page (Modal + Full Page)
3. Class Unlock Celebration Screen
4. Progression & Rank Overview Page
5. Public Badge Verification Page (Standalone — No Login)

---

## PAGE 1 — MY CREDENTIALS (FULL OVERVIEW)

**URL:** /credentials
**Purpose:** The graduate's complete credential vault. All earned badges in one place, filterable and shareable.

---

### Page Header

- Headline (H2): "My Credentials"
- Subtext (muted): "Every badge here is a verified proof of your skill. Share them freely."
- Stats row (3 metrics, inline):
  - "14 Total Badges"
  - "3 Fields"
  - "Top 18% in Computer Engineering"

---

### Class Summary Cards Row

Horizontal row of 4 class summary cards (one per class: D, C, B, A):

**Each class card:**
- White card, 1px border, 12px radius
- Class badge chip at top (large version)
- Count: "5 badges" (mono, H3, bold)
- Subtext: "Class D — Beginner"
- Progress status:
  - Completed class: Green checkmark + "Completed"
  - Current class: Progress bar showing X/Y
  - Locked class: Lock icon + "Complete 3 more challenges"
- Cards for locked classes: slightly muted (0.6 opacity on count and status text)

---

### Filter & Sort Bar

- Filter tabs: "All" | "Practice Challenges" | "Paid Projects" | "Class D" | "Class C" | "Class B" | "Class A"
- Sort dropdown: "Newest First ▾"
- View toggle: Grid / List icons

---

### Badge Grid (Main Content)

**3-column grid (desktop), 2-column (tablet), 1-column (mobile)**

Each **Badge Card:**
- White card, 1px #E5E5E5 border, 12px radius, shadow SM
- Hover: shadow MD + scale(1.01), smooth transition

**Card anatomy:**
- **Top strip (8px height, black)** — color accent at top of card (all black for uniform design)
- **Badge icon zone (48px centered, 24px padding below strip):**
  - Field-specific icon (outline style): laptop for CS, circuit for EE, chart for Finance, megaphone for Marketing
  - Icon is 48px, black outline
- **Badge title (H4, 14px, 700 weight, centered):** Challenge name (2 lines max)
- **Class badge chip (centered):** e.g., "CLASS C"
- **Field chip (centered, label style):** "COMPUTER ENGINEERING"
- **Score row (centered):** "Score: 84/100" — mono, 13px, muted
- **Date (centered):** "Earned Jun 12, 2026" — 12px, muted
- **Divider**
- **Bottom row (two icon buttons):**
  - Share icon button + "Share" label
  - External link icon button + "Verify" label
- **"REAL PROJECT" amber chip** (only on paid project badges, floated top-right inside card)

**Empty state (when filter returns nothing):**
- Award icon (64px, centered)
- "No badges in this category yet"
- "Browse challenges →" button

---

### List View (Alternative)

Each badge as a horizontal row:
- Badge icon (40px, left)
- Badge title (H4) + field chip + class chip (center)
- Score (right)
- Date (right)
- Share + Verify icon buttons (far right)

---

## PAGE 2 — BADGE DETAIL PAGE

**Two access points:** Clicking a badge card → opens as a modal (desktop) or full page (mobile)

---

### Modal (Desktop)

**Overlay:** Dark backdrop rgba(0,0,0,0.5)
**Modal card:** White, 16px radius, shadow XL, max 560px wide, 90vh max height, scrollable

**Modal structure:**

**Left section (40% width, black bg, 16px radius left-only):**
- Field icon (64px, white outline) centered vertically
- "SkillBridge" watermark text (white, muted, bottom)
- "Certified" label (white, small, top)

**Right section (60% width, white):**
- Close ✕ button (top-right)
- Class badge chip (top)
- Badge title (H2, 24px, bold)
- Field chip
- Score: "84 / 100" (mono, 32px, bold, black)
- Status pill: "COMPLETED" — green, large
- **Divider**
- **Metadata grid (2 columns):**
  - Graduate: [Name]
  - Field: Computer Engineering
  - Class: Class C — Intermediate
  - Date Issued: June 12, 2026
  - Issued By: SkillBridge Platform
  - Co-signed By: University of Buea (if applicable), logo next to it
  - Review Method: AI Engine / Expert Reviewer
  - Badge ID: SUB-2026-0048-BADGE (mono, small)
- **Divider**
- **Action buttons (stacked, full width):**
  - "Copy Verification Link" — primary black button (copy to clipboard on click → button text changes to "Link Copied ✓" for 2 seconds)
  - "Download Badge (PNG)" — secondary outlined button
  - "Share to LinkedIn" — ghost button with LinkedIn icon

---

### Full Page (Mobile / Direct URL)

**URL:** /credentials/:badge-id
Same content as modal but laid out vertically in a full page within the app shell.

The left black section becomes a top banner strip (full width, 120px height) with the field icon centered.

---

## PAGE 3 — CLASS UNLOCK CELEBRATION SCREEN

**Trigger:** Appears as a full-screen overlay immediately when the system detects a class has been unlocked. Displayed once, then dismissed. Can be replayed from activity feed.

**Style:** Full-screen black overlay (full viewport, z-index above everything)

---

**Center content:**

**Animated badge area:**
- Class badge chip (extra large, 40px height, white bg, black text, animated: scales from 0 to full size with a satisfying spring animation)
- Below chip: Large class name "CLASS C UNLOCKED" (H1, 48px, white, 800 weight)
- Below: "You completed 5 Class D challenges." (Body Large, white, muted)

**Credential strip (white card, centered, max 400px):**
- Inside: List of the 5 (or however many required) earned Class D badges displayed as small badge chips in a horizontal row — confirmation of what was accomplished
- Below: "Your credentials have been added to your profile."

**What's next section:**
- "New challenges now available:" (label, white, muted)
- 2 preview challenge cards (white cards, compact) sliding in from bottom — first 2 recommended Class C challenges

**Actions:**
- "Explore Class C Challenges →" — white fill, black text button (primary-inverse)
- "View My Profile" — white ghost button

**Dismiss:** Small "Maybe later" ghost link (bottom center, white, muted)

**Auto-dismiss:** If no interaction in 15 seconds, a soft fade to the challenges page automatically. 15-second progress indicator (thin white line across the bottom of the screen, depleting).

---

## PAGE 4 — PROGRESSION & RANK OVERVIEW PAGE

**URL:** /credentials/progress
**Purpose:** A bird's-eye view of the graduate's entire journey — past, present, and what lies ahead.

---

### Section 1 — Class Journey Map

Full-width visual timeline:

**Desktop:** Horizontal timeline with 4 milestone nodes
**Mobile:** Vertical timeline

**Each milestone node:**
- Circle (48px) — state:
  - Completed: Black filled circle, white checkmark ✓
  - Current: Pulsing black circle (subtle animation), white center
  - Future: White circle, black outline, dashed border
- Class badge chip below circle
- Class name below chip
- Completion stats: "5/5 completed ✓" or "2/4 completed" or "Locked" (muted)
- Below that: small list of earned badge titles (truncated to 3) for completed classes

**Connecting lines:** 2px solid black between completed nodes, 2px dashed #E5E5E5 for upcoming

---

### Section 2 — Rank Score Card

**Full-width white card:**
- Left: Large rank display
  - "Top 18%" — mono, 56px, 800 weight, black
  - "in Computer Engineering" — H4, muted
  - Rank movement: "↑ +4% this month" — green, 14px
- Right: Rank score breakdown (table or list):
  - Class weight: "Class C badges (weighted 1.5×)"
  - Recency boost: "8 completions in last 60 days (+1.5× multiplier)"
  - Avg. review score: "81.4 / 100 average"
  - Decay note: "Older completions decay at 5%/month — stay active!"

---

### Section 3 — Completion Stats Grid

4-column stats grid:
- Total Challenges: "14" (mono, H2)
- Pass Rate: "87%" (mono, H2)
- Avg. Score: "81.4" (mono, H2)
- Projects Done: "2" (mono, H2)

---

### Section 4 — Badge Timeline

Chronological vertical list of all earned badges (with month/year group headers):

**Month group header:** "June 2026" (label style, black, with horizontal line extending right)

Each badge entry (compact card):
- Class badge chip (left)
- Badge title + field chip (center)
- Score + date (right)
- Share icon button (far right)

---

## PAGE 5 — PUBLIC BADGE VERIFICATION PAGE (STANDALONE)

**URL:** skillbridge.cm/verify/:badge-id
**Access:** No login required. Anyone with the link can verify.
**Purpose:** Final proof to employers, clients, or institutions that a credential is authentic.

---

### Layout

Full page, max 680px centered, white bg, minimal chrome:

**Top bar (minimal):**
- Logo only (SkillBridge wordmark) — left-aligned
- No navigation, no login button
- Language toggle (English | Français) — right

---

### Verification Result Card (Main Content)

**Verified state:**

**Header section (card, black bg, white text, 16px radius top, no bottom radius):**
- Large shield-checkmark icon (64px, white outline) centered — the "verified" symbol
- "VERIFIED CREDENTIAL" — label style, white, centered, letter-spaced
- Graduate name (H2, white, centered)
- "This badge was issued by SkillBridge and its authenticity has been confirmed." (Body, #9CA3AF, centered)

**Details section (card, white bg, 16px radius bottom, connects to black header):**
- 2-column metadata grid:
  - Badge Title: [Name]
  - Field: Computer Engineering
  - Class Level: Class B — Advanced
  - Issue Date: June 12, 2026
  - Issued By: SkillBridge (with platform icon)
  - Co-signed By: University of Buea + UB FET logo (if applicable)
  - Score Achieved: 84/100
  - Review Method: Expert Reviewer
  - Badge ID: (mono, small, muted)
  - Standard: "IMS Global Open Badges 2.0"

- Divider
- **"CHALLENGE TYPE" section:**
  - Practice Challenge badge: "This was a platform-authored practice challenge. No real client was involved."
  - Paid Project badge: "This was completed for a real client. The graduate performed this work professionally." — amber chip "REAL PROJECT"

- Divider
- **Actions:**
  - "Share this badge" — primary black button (copies URL to clipboard)
  - "Download PNG" — secondary button

**Footer (minimal):**
- "© 2026 SkillBridge · Privacy Policy" — small, centered, muted
- "Powered by IMS Global Open Badges 2.0" — small, centered, muted

---

**Invalid / Not Found state:**

**Header section (red bg):**
- Warning triangle icon (64px, white)
- "BADGE NOT FOUND" — label style, white
- "This badge ID does not exist or may have been revoked." (Body, muted white)

**Details card (white):**
- "What does this mean?"
- Possible reasons: Badge ID incorrect, Badge was revoked by platform, Badge was never issued
- "Visit SkillBridge" — primary black button → home page
- "Report an issue" — ghost link

---

## GLOBAL UX NOTES FOR PHASE 6

1. **Badges must be beautiful enough to screenshot and share.** The badge card design is the platform's most-shared visual element. It must look like a real credential, not a game achievement.
2. **The class unlock celebration is a peak emotional moment.** It needs to feel earned and rewarding. Black and white with sharp typography > confetti animation. Confidence over cuteness.
3. **The public verification page is seen by employers and institutions.** It must look as professional and trustworthy as a university transcript or a Credly certification page.
4. **"Copy link" is the primary share action.** Most sharing on SkillBridge will be via WhatsApp links or pasting into LinkedIn. Make copying the link effortless.
5. **Real project badges must be visually distinct.** The "REAL PROJECT" amber chip is a premium signal. Employers care about this. Make it visible without overpowering the badge.
6. **Progress page should feel motivational, not analytical.** Yes, it has stats, but the primary emotion should be pride in what's been accomplished and excitement for what's next.
7. **Rank percentile is powerful social proof.** "Top 18% in Finance" is the kind of signal that motivates. Make it the biggest visual element on the rank card.
