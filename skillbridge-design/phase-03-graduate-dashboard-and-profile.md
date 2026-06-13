# SkillBridge — Phase 3: Graduate Dashboard & Profile
## Google Stitch Design Brief

---

## OVERVIEW

This phase covers the graduate's home base — the dashboard and every profile-related page. These are the screens graduates will return to every day. They must feel motivating, informative, and personal. The dashboard must make the graduate's next action instantly obvious. The profile must feel like a proud showcase of earned credentials.

**Design System Reference:** All colors, typography, spacing, and components follow Phase 1 definitions.

**Pages in this phase:**
1. Graduate Dashboard (Main Home)
2. My Profile — Own View
3. Edit Profile Page
4. Public Profile — How Employers See It
5. Notification Center
6. Account Settings
7. Premium Profile Upgrade Page

---

## APP SHELL (LAYOUT WRAPPER)

All authenticated graduate pages share a consistent app shell.

**Desktop Layout (≥ 1024px):**
- **Left sidebar (240px, fixed):** Navigation sidebar
- **Main content area (remaining width):** Scrollable page content
- **Top bar (64px, sticky):** Page title + search + right-side actions

**Mobile Layout (< 1024px):**
- No sidebar. Bottom navigation bar (56px, fixed to bottom)
- Top bar: Logo/page title + notification bell + avatar
- Content: Full screen width with 16px padding

---

### Sidebar Design (Desktop)

**Background:** White, right border: 1px solid #E5E5E5

**Top section (inside sidebar):**
- Logo: "SkillBridge" wordmark (black, top, 20px padding)
- Divider
- Graduate mini-card: Avatar (40px circle) + name (14px, 600 weight) + class badge chip ("CLASS B" etc.)

**Navigation links (from top to bottom):**
Each nav item: Icon (20px, outline) + label (14px, 500 weight). Active = black bg (#000000) on the item, white text and icon. Hover = #F3F3F3 bg.

Links:
- Dashboard (house icon)
- Challenges (grid/puzzle icon)
- My Submissions (upload icon)
- My Credentials (badge/award icon)
- Project Board (briefcase icon) — only visible for Class A or B
- My Profile (user icon)
- Settings (gear icon)

**Bottom of sidebar:**
- Divider
- Upgrade to Premium — if not premium: small card with amber accent, "Upgrade for more visibility" text + "Upgrade" button (black, small)
- Log Out link (muted, ghost)

---

### Top Bar Design

**Left:** Page title (H3, black) — changes based on current page (e.g., "Dashboard", "Challenges", "My Profile")
**Center (desktop only):** Global search input (muted placeholder "Search challenges, credentials...")
**Right:** Notification bell icon (with red dot badge for unread count) + Avatar (32px circle) → click opens a dropdown with: "View Profile", "Account Settings", "Log Out"

---

### Bottom Navigation (Mobile Only)

5 icons centered in a row, each with a label below (11px):
- Dashboard, Challenges, Credentials, Projects, Profile
- Active icon: Black fill, black label. Inactive: #6B6B6B outline, muted label.
- Bottom nav has top border (1px #E5E5E5) and white background

---

## PAGE 1 — GRADUATE DASHBOARD

**Purpose:** The first thing a graduate sees on login. Must immediately show: current standing, what to do next, and recent activity.

**Page structure:** Scrollable main content, no fixed right column

---

### Widget Row 1 — Welcome & Stats (Top)

Full-width row with 3 stat cards:

**Card A — Class & Progress:**
- White card, 1px border, 12px radius
- Top: Class badge chip (large, e.g., "CLASS B — ADVANCED")
- Headline: Graduate's first name + "," + motivational line (e.g., "Keep going — Class A is 3 challenges away.")
- Below: Progress bar (track: #E5E5E5, fill: black) showing e.g. "2 of 3 challenges completed"
- Under bar: "1 more challenge to unlock Class A" (muted, 13px)

**Card B — Credentials Earned:**
- Number: Large mono "12" (challenges completed, 40px, 700 weight, black)
- Label: "Total Credentials" (small, muted)
- Subinfo: "+2 this month" (green, small)

**Card C — Rank:**
- Number: Large mono "Top 22%" (40px, 700 weight)
- Label: "in Computer Engineering"
- Subinfo: Small sparkline chart or up arrow icon + "Rank improving"

---

### Widget Row 2 — Active Challenges

**Section header:** "Active Challenges" (H4) + "View All" link (right, black, 14px)

If challenges active (max 2): Two challenge cards side by side (or stacked on mobile)

**Active Challenge Card:**
- White card, 1px border, 12px radius
- Top row: Class badge chip (left) + Status pill "IN PROGRESS" (right)
- Challenge title (H4, 2 lines max)
- Field label: small chip (e.g., "Computer Engineering")
- Time remaining: Red clock icon + "5 hours 20 min remaining" (amber or red color when < 2 hours left)
- Progress bar (optional): If multi-part challenge
- Action button: "Continue Challenge →" (primary black, full width of card)

**If no active challenges:**
- Empty state: Puzzle piece icon (48px, centered) + "No active challenges" + "Start a challenge →" primary button

---

### Widget Row 3 — Recommended Challenges

**Section header:** "Recommended for You" (H4) + "Browse All →" link

**Horizontal scrollable row (mobile) or 3-column grid (desktop):**
Each card is a Challenge Suggestion Card:
- White card, 1px border, 12px radius
- Class badge chip (top-left)
- Challenge title (H4, 600 weight)
- Field chip (label style)
- Estimated time: clock icon + "4–6 hours"
- Review type chip: "AI REVIEWED" (black chip) or "EXPERT REVIEWED" (black outlined chip)
- "View Challenge →" ghost button

---

### Widget Row 4 — Recent Activity Feed

**Section header:** "Recent Activity" (H4)

Vertical list of activity items (max 5 shown, "See all" link):

Each activity item:
- Left: Circular icon (32px) — color coded:
  - Badge icon (green bg) → for earned credential
  - Upload icon (black bg) → for submission
  - Arrow-up icon (amber bg) → for class progression
  - Clock icon (muted bg) → for expired challenge
- Content: Bold title + description, 2 lines max
- Right: Relative timestamp ("2 hours ago", "3 days ago") — muted, 12px

Example items:
- ✓ "Badge earned" — "Data Structures Fundamentals — Class C · Passed"
- ↑ "Class C unlocked!" — "You've completed 5 Class D challenges"
- ↑ "Submission received" — "Financial Analysis Challenge — Under Review"

---

### Widget Row 5 — Class A Preview (Motivational)

Only shown if graduate is Class C or below.

**Full-width card, black background:**
- Left: White text — "Class A graduates earn real money." (H3, white) + "Paid projects from real companies are waiting. Keep building." (Body, muted white)
- Right: Ghost mockup of Paid Project Board (blurred or lock icon overlay)
- CTA: "See what awaits →" white ghost button

If graduate is Class B or A, this block is replaced with the Paid Project quick-access widget showing latest project listings.

---

## PAGE 2 — MY PROFILE (OWN VIEW)

**Purpose:** The graduate sees their own profile exactly as others see it, with an "Edit" button to modify.

**Layout:** Two-column on desktop (left: profile info, right: main content). Single column on mobile.

---

### Left Column (Profile Card — Sticky Desktop)

White card, 1px border, 12px radius, 24px padding:
- Avatar: 80px circle at top center (with initials fallback if no photo)
- Name (H3, centered)
- Field label (label style, muted, centered)
- Class badge chip (centered, large)
- Rank percentile: "Top 18% in Finance" (green text, 14px, centered)
- Divider
- Stats row (3 columns):
  - "12" — Credentials
  - "3" — In Progress
  - "2" — Projects Done
- Divider
- Bio text (Body, 14px, #6B6B6B)
- Divider
- Links: GitHub icon + link, Portfolio icon + link
- Divider
- "Edit Profile" — secondary outlined button (full width)
- "Share Profile" — ghost button (full width)
- "Upgrade to Premium" — amber-accent text button (if not premium)

---

### Right Column (Main Content)

**Tabs row:** "Badges & Credentials" | "Projects" | "Activity" — tab navigation, 14px, 500 weight, active tab has black bottom border (2px)

**Badges & Credentials Tab:**
Section header: "All Credentials" + count (e.g., "12 credentials")

Badge cards in a 3-column grid (2 on tablet, 1 on mobile):

Each **Credential Badge Card:**
- White card, 1px border, 12px radius
- Top: Field color strip (4px, black) + Badge icon (40px, centered below strip)
- Challenge/project title (H4, 14px, 600 weight, centered)
- Class badge chip (centered)
- Date: "Earned Jun 12, 2026" (muted, 12px)
- Score: "Score: 82/100" (mono, 13px, muted)
- Status pill: "COMPLETED" (green)
- Bottom: Two icon buttons — "Share" (chain link icon) + "Verify" (external link icon)
- Practice challenge badge vs Paid project badge: Paid project badges have an extra "REAL PROJECT" label (amber pill, small)

**Empty state (no badges yet):** Award icon (64px) + "No credentials yet" + "Start your first challenge →" button

**Projects Tab:**
Similar card grid for completed paid projects:
- Project title, company name (muted), class badge, compensation earned (mono, green), date, status pill
- "No paid projects" empty state (with lock icon if not eligible, or search icon if eligible but none done)

**Activity Tab:**
Chronological timeline of all activity. Same style as dashboard activity feed but full history.

---

## PAGE 3 — EDIT PROFILE PAGE

**Layout:** Centered main content, max 720px, white bg

**Page header:** "Edit Profile" (H2) + "Last saved: today at 2:14 PM" (muted, right)

**Sections with dividers:**

**Section 1 — Photo:**
Current avatar (80px circle) + "Change Photo" button (secondary) + "Remove Photo" ghost link

**Section 2 — Basic Info:**
- Full Name field
- Bio textarea (300 word counter)
- LinkedIn URL field (optional)
- GitHub URL field (optional)
- Portfolio URL field (optional)

**Section 3 — Academic Info:**
- University field (text, editable)
- Faculty/Department field
- Year of Graduation (dropdown)
- Note: "Field selection can be updated by contacting support." (muted, 13px)

**Section 4 — Notification Preferences:**
Toggle switches (black when on, gray when off) for:
- Email: Challenge review outcomes
- Email: Class unlock notifications
- Email: New recommended challenges
- Email: SkillBridge announcements

**Fixed action bar (bottom of page, sticky):**
- White bg, top border 1px #E5E5E5
- "Discard changes" (ghost, left) + "Save changes" (primary black, right)

**Unsaved changes indicator:** Small amber dot next to the page title when edits are unsaved

---

## PAGE 4 — PUBLIC PROFILE (EMPLOYER VIEW)

**Purpose:** How an employer or anyone with the link sees the graduate's profile. No edit controls. Clean showcase.

**URL:** /graduates/:username
**Note at top of right panel:** "Viewing your public profile — this is how employers see you" (amber strip, info banner, only visible to the profile owner when logged in)

**Layout:** Same two-column layout as My Profile, but:
- No "Edit Profile" button (or replaced with "Edit your profile" if own profile)
- Contact button visible if employer (hidden for graduates viewing another graduate)
- No private stats shown

**Header banner (optional):** If premium graduate, show a subtle "PREMIUM" label chip near the name

---

## PAGE 5 — NOTIFICATION CENTER

**Layout:** Full-page content area (no cards, just a list)

**Page header:** "Notifications" (H2) + "Mark all read" button (ghost, right)

**Filter tabs:** "All" | "Reviews" | "Challenges" | "Credentials" | "Projects" — tab row

**Notification list:**
Each notification row:
- Left: Colored circular icon (32px) — color based on type (green=badge, amber=pending, black=challenge, red=failed)
- Content (2 lines max):
  - Bold headline (14px, 600 weight)
  - Subtext (13px, muted)
- Right: Timestamp (muted, 12px)
- Unread indicator: Subtle black dot (6px) on the far left of unread items, and slightly different bg (#FAFAFA vs white)

**Clicking a notification:** Full-width expandable row that shows more detail, or navigates to the relevant page

**Empty state:** Bell icon + "You're all caught up." text, centered

**Pagination:** "Load more" button at bottom (ghost style)

---

## PAGE 6 — ACCOUNT SETTINGS

**Layout:** Two-column (left: settings nav, right: settings content)

**Left column (settings nav, 200px):**
White card with nav items:
- Account (active)
- Security
- Notifications
- Billing (premium only)
- Danger Zone

**Right column (settings content):**
Changes based on selected nav item. White card with sections.

**Account section:**
- Email display + "Change email" link
- Name display + "Change name" link
- Preferred language: English / Français toggle

**Security section:**
- "Change Password" — form with current + new + confirm password fields
- "Active sessions" — list of recent logins with device/time + "Sign out all devices" red ghost button

**Notifications section:**
Same toggles as Edit Profile, but more comprehensive with email/in-app toggles per event type. Table-style layout:

| Event | In-App | Email |
| --- | --- | --- |
| Review completed | ON (toggle) | ON (toggle) |
| Badge earned | ON | ON |
| Class unlocked | ON | ON |
| New challenges | ON | OFF |

**Danger Zone section (red-tinted section card):**
- Section header with red left border accent
- "Deactivate Account" — secondary outlined button
  - Explanation: "Your profile will be hidden. Credentials are preserved. Reactivate anytime."
- "Delete Account" — destructive red button (behind a confirmation dialog)

---

## PAGE 7 — PREMIUM PROFILE UPGRADE PAGE

**Layout:** Centered, max 640px, white bg with #F9F9F9 feature area

**Top section:**
- "⭐ Premium Profile" small label chip (amber bg, amber-800 text)
- Headline (H2): "Get discovered faster."
- Subtext: "Premium graduates appear higher in employer searches and get enhanced profile features. Your credentials and class standing are not affected."

**Comparison card — 2 columns:**
| Feature | Free | Premium |
|---|---|---|
| Digital credentials | ✓ | ✓ |
| Public profile | ✓ | ✓ |
| Employer search visibility | Standard | **Priority ranking** |
| Featured badge on profile | — | ✓ |
| Custom portfolio section | — | ✓ |
| Employer view analytics | — | "Who viewed your profile" |

Checkmarks: Black. Missing items: Muted dash. Premium column has a subtle amber header accent.

**Pricing:**
Large centered section:
- "1,500 XAF / month" — mono, 40px, 700 weight
- "or 15,000 XAF / year (save 17%)" — smaller, muted
- Monthly/Annual toggle (pill toggle switch)
- Payment: "Billed via MTN MoMo or Orange Money"

**CTA:**
- "Upgrade to Premium" — primary black button (full width of content)
- "No commitment. Cancel anytime." — muted text below button (13px, centered)

**Already premium state:**
Replace upgrade form with: Green checkmark + "You're a Premium member" + expiry date + "Manage subscription" button

---

## GLOBAL UX NOTES FOR PHASE 3

1. **Dashboard is a motivation engine.** Every widget should push the graduate toward their next achievement. Show the gap, make it feel closeable.
2. **Progress bars must always be prominent.** Class progression is the core loop — it must be unmissable on the dashboard.
3. **Profile must feel like a portfolio.** Treat it like a LinkedIn profile crossed with a Dribbble portfolio. The badges are the product.
4. **Empty states are invitations.** "No credentials yet" isn't a dead end — it's a "Start now →" button.
5. **Notification center must be scannable.** Use icons, colors, and bold text to make it glanceable in 2 seconds.
6. **Mobile dashboard is critical.** Most graduates access on phones. The stats row becomes a 1×3 horizontal scroll. The sidebar becomes a bottom nav.
7. **Premium upsell is never pushy.** It appears in one subtle sidebar widget and the upgrade page. Never a modal popup.
8. **Settings must be boring (in a good way).** Clear, predictable, no surprises. Every action has a confirmation.
