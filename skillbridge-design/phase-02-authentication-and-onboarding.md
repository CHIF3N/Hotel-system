# SkillBridge — Phase 2: Authentication & Onboarding
## Google Stitch Design Brief

---

## OVERVIEW

This phase covers every screen a new or returning user sees before they reach their dashboard. Authentication must be effortless, clear, and fast — especially on mobile. The multi-step registration flows must feel like guided journeys, not forms. Onboarding walkthroughs must teach users the platform without frustrating them.

**Design System Reference:** All colors, typography, spacing, and components follow Phase 1 definitions exactly.

**Pages in this phase:**
1. Login Page
2. Graduate Registration — Step 1: Account Setup
3. Graduate Registration — Step 2: Personal & Academic Info
4. Graduate Registration — Step 3: Field Selection
5. OTP Verification Page
6. Employer Registration — Step 1: Business Info
7. Employer Registration — Step 2: Contact & Plan
8. Forgot Password Page
9. Reset Password Page
10. Graduate First-Login Onboarding Walkthrough (overlay)
11. Employer First-Login Onboarding Walkthrough (overlay)

---

## AUTH LAYOUT SHELL

All authentication pages share a common split-screen layout shell:

**Desktop (≥ 1024px):**
- **Left panel (40% width):** Black background (#000000). Displays brand content — logo at top-left (white), a quote or platform pitch in the center, and trust indicators at the bottom. This panel is fixed (does not scroll with form).
- **Right panel (60% width):** White background. Contains the form content, scrollable if needed.

**Left Panel Content (Changes by page type):**
- Logo: "SkillBridge" wordmark, white, top-left, 24px
- Center content: Large italic quote related to the page context (e.g., for graduate registration: "Your credentials begin here."), white text, H2 size, centered with top/bottom 32px padding
- Below quote: A minimal floating badge card (mockup) — white card with a badge icon, challenge title, "CLASS B — PASSED" label — to hint at what they're working toward
- Bottom: Row of 3 mini trust stats in white (small label + mono number)

**Mobile (< 1024px):**
- Left panel collapses. Show only the logo at the top of a white page, centered.
- Form takes full screen width with 16px horizontal padding.
- No decorative left panel.

---

## PAGE 1 — LOGIN

**Right panel content:**

**Top section:**
- Small label above: "WELCOME BACK" — label style (#6B6B6B)
- Headline (H2): "Sign in to SkillBridge"
- Subtext: "Don't have an account? [Create one free →]" — inline link, black, underlined

**Form (max 400px wide, centered in right panel):**
- Email field: Label "Email address", input with mail icon left-side
- Password field: Label "Password", input with lock icon, eye toggle icon on right to show/hide
- Row below password: "Remember me" checkbox left + "Forgot password?" link right (black, 14px)
- Submit button: Full-width primary black button "Sign In"
- Divider: "— or —" text with horizontal lines
- Secondary options: "Sign in as Employer" ghost button (centered)

**Error state:** Red helper text below affected field + red border on field. "Incorrect email or password." — appears as a banner above the form with a red left border and red dot.

**Loading state:** Submit button shows spinner and "Signing in…" text, disabled.

**Left panel quote (Login):** "Every credential you've built is waiting for you."

---

## PAGE 2 — GRADUATE REGISTRATION: STEP 1

**Step indicator:** Progress steps row at top of right panel (inside the form area, not in header):
- 3 dots/steps in a row: "Account" (active/filled black circle) → "Profile" (empty circle) → "Field" (empty circle)
- Connecting lines between dots: thin gray lines
- Step labels below each dot (12px, muted)

**Top section:**
- Label: "GRADUATE REGISTRATION"
- Headline (H2): "Create your account"
- Subtext: "Already registered? [Sign in]"

**Form:**
- Full Name field: "Full name" label, single input
- Email field: "Email address" label, mail icon
- Password field: "Password" label, minimum 8 characters hint below in muted text
- Confirm Password field: "Confirm password" label
- Terms checkbox: "I agree to the [Terms of Service] and [Privacy Policy]" — links are underlined, black
- Submit button: Full-width "Continue →" primary black button

**Left panel quote:** "Your journey to verified expertise starts now."

---

## PAGE 3 — GRADUATE REGISTRATION: STEP 2

**Step indicator:** Step 2 active ("Profile" dot filled, step 1 dot shows checkmark, step 3 empty)

**Top section:**
- Label: "STEP 2 OF 3 — YOUR PROFILE"
- Headline (H2): "Tell us about yourself"

**Form:**
- Profile photo upload: Centered circular upload area (80px dashed circle), camera icon inside, "Upload photo (optional)" text below — click triggers file browser
- Full Name (pre-filled, editable): Read-only display, with small "edit" link
- Bio field: Textarea "Short bio (optional)", 300 word max counter shown live at bottom-right of textarea (e.g., "287/300")
- University field: Text input with "University of Buea" as example placeholder
- Faculty/Department field: Text input
- Year of Graduation: Dropdown (2020–2028 range)
- GitHub / Portfolio URL field: "Optional — link to your work" placeholder

**Navigation row:** Back link (ghost, left) + "Continue →" button (primary, right)

---

## PAGE 4 — GRADUATE REGISTRATION: STEP 3 (FIELD SELECTION)

**Step indicator:** Step 3 active (all previous steps show checkmark icons)

**Top section:**
- Label: "STEP 3 OF 3 — YOUR FIELD"
- Headline (H2): "Choose your primary field"
- Subtext: "This determines which challenges are shown to you first. You can explore other fields later."

**Field Selection Grid (2×2 on desktop, 2×2 on mobile):**
Each field is a large selectable card:
- Width: ~280px desktop, full 48% mobile
- Height: 160px
- Content: Large outline icon (48px, centered), field name (H4), short description (2 lines, muted)
- Unselected state: White bg, 1px #E5E5E5 border, white
- Selected state: Black bg, white text and icon, no border — prominent selection

**Cards:**
1. **Computer Engineering** — laptop/code icon — "Software, systems, algorithms, databases"
2. **Electrical Engineering** — circuit icon — "Electronics, power, signal systems"
3. **Finance** — chart/coin icon — "Financial analysis, modeling, accounting"
4. **Marketing & Content** — megaphone/pencil icon — "Strategy, copywriting, digital campaigns"

**Note below grid (muted, 13px):** "More fields will be added. You will be notified when your field expands."

**Navigation row:** Back link + "Complete Registration →" primary button

**Success transition:** After clicking "Complete Registration", show a brief full-screen success overlay:
- Black background
- Large white checkmark circle (64px)
- "Account Created!" headline (H2, white)
- Subtext (white, muted): "Check your email for your verification code."
- Then auto-redirect to OTP page after 1.5 seconds

---

## PAGE 5 — OTP VERIFICATION PAGE

**Layout:** Centered single column (no left panel split on desktop — full white page, centered card)

**Card (max 440px, white, 16px radius, shadow LG, centered):**

**Top of card:**
- Mail icon (48px, outlined, black) centered
- Headline (H2): "Verify your email"
- Subtext: "We sent a 6-digit code to [email@example.com]. It expires in 10 minutes."

**OTP Input:**
- 6 individual input boxes in a row (not a single field)
- Each box: 52px × 64px, 8px radius, 1px #E5E5E5 border, centered digit, 24px mono font, black text
- Active/focused box: 1px black border + ring
- Filled box: Black border, black digit
- Auto-advance to next box on digit entry
- Mobile: Large tap targets, same layout

**Below inputs:**
- "Verify Code" — primary black button, full width of the 6 boxes combined
- "Resend Code" — ghost text link, centered, "Resend code (available in 2:00)" — countdown timer, grayed out until countdown ends, then turns active black link
- "Wrong email? Go back" — small muted link

**Error state:** All 6 boxes turn red border + red text if code is incorrect. Error message appears below: "Incorrect code. Please try again." (red, 13px)

**Success state:** Boxes briefly turn green border + green checkmark inside → then fade to success screen (redirect to dashboard)

---

## PAGE 6 — EMPLOYER REGISTRATION: STEP 1

**Step indicator:** 2-step progress, Step 1 active

**Label:** "EMPLOYER REGISTRATION"
**Headline (H2):** "Create your employer account"

**Form:**
- Business Name field: "Official business name"
- Business Email field: "Work email address"
- Business Phone field: with country code prefix (+237 for Cameroon pre-filled)
- RCCM Number field: "Business registration number (RCCM)" + tooltip icon: hover shows "Required for payment setup. You can add this later."
- Password + Confirm Password fields
- Terms checkbox

**Navigation:** "Continue →" primary button

**Left panel quote:** "Find talent you can trust. Verified credentials only."

---

## PAGE 7 — EMPLOYER REGISTRATION: STEP 2

**Step indicator:** Step 2 active

**Label:** "STEP 2 OF 2 — YOUR PLAN"
**Headline (H2):** "Choose your subscription plan"
**Subtext:** "You can start browsing the talent pool immediately. Subscription activates contact and project features."

**Plan Cards (same style as Pricing page — compact version):**
Both cards side by side, centered within the form area:
- Standard card (outlined, white)
- Premium card (black, elevated)
- Free Browse note below: "All accounts get free talent pool browsing. Subscribe to unlock hiring."

**Payment method note:** "Subscriptions billed via MTN MoMo or Orange Money. No card required."

**Button:** "Complete Registration →" — primary

**Skip option:** "I'll choose a plan later" — ghost link below button (underlined, muted)

---

## PAGE 8 — FORGOT PASSWORD PAGE

**Layout:** Centered single-column card (same as OTP page — no left panel)

**Card content:**
- Lock icon (48px) centered
- Headline (H2): "Forgot your password?"
- Subtext: "Enter your email and we'll send you a reset link."
- Email input field (full width within card)
- "Send Reset Link" — primary black button, full width
- "Remember it? [Sign in]" — small muted link below

**Sent state (after button click):**
- Mail icon turns to a sent/outgoing icon (or checkmark)
- Headline changes: "Check your inbox"
- Subtext: "A reset link was sent to [email]. It expires in 30 minutes."
- Button changes to: "Resend email" (ghost style) + countdown

---

## PAGE 9 — RESET PASSWORD PAGE

**Layout:** Centered card, same shell

**Card content:**
- Lock + key icon (48px) centered
- Headline (H2): "Set a new password"
- New Password field (with strength indicator bar below — fills left to right, color: red→amber→green as password strength increases)
- Confirm Password field
- "Update Password" — primary button
- After success: Green checkmark + "Password updated. [Sign in now →]"

---

## PAGE 10 — GRADUATE ONBOARDING WALKTHROUGH

**Trigger:** Appears automatically on first login after registration. Semi-transparent dark overlay (rgba(0,0,0,0.6)) covers the actual dashboard behind it. The actual dashboard content is barely visible behind.

**Style:** Spotlight-style overlay — a bright cutout circle/rectangle highlights the specific element being explained. The rest of the screen is dimmed.

**Step indicator:** "1 of 5", "2 of 5", etc. — top-right of the modal tooltip, small, black on white

**Walkthrough tooltip card:**
- White card, 12px radius, shadow XL, max 320px wide
- Arrow pointer pointing to the highlighted element
- Step title (H4): Short name
- Description (Body, 14px): One or two sentences
- Navigation: "Skip tour" (ghost link, left) + "Next →" (primary black button, right) or "Done ✓" on last step

**5 Steps:**
1. **Class Progress Bar** — "This shows your current class and progress toward the next level. You start at Class D."
2. **Challenge Library** — "Browse and start practice challenges here. Each one you complete brings you closer to Class A."
3. **My Credentials** — "Every challenge you pass earns a verified digital badge. They live here."
4. **Notification Bell** — "We'll notify you of review outcomes, class unlocks, and more."
5. **Profile Page** — "Your public profile shows employers your credentials. Keep it updated."

**Skip behavior:** Clicking "Skip tour" fades the overlay out immediately. A small "Replay tour" link appears in account settings.

**Last step:** Shows a celebratory micro-moment — the tooltip says "You're all set! 🎉 Start your first challenge." with a "Start First Challenge →" primary button that navigates to the challenge browser.

---

## PAGE 11 — EMPLOYER ONBOARDING WALKTHROUGH

Same overlay style as Graduate walkthrough.

**5 Steps:**
1. **Search Bar** — "Use this to search graduates by field, class, and rank. Filters are on the left."
2. **Graduate Profile Cards** — "Each card shows a graduate's field, class, and top credentials. Click any card to view their full profile."
3. **Shortlist Button** — "Save graduates you're interested in here. Build your shortlist before reaching out."
4. **Post a Project** — "Need work done? Post a real project. Class A and B graduates will apply."
5. **Subscription Status** — "Your plan controls how many graduates you can contact per month. Upgrade anytime."

**Last step:** "You're ready to find verified talent. [Search the talent pool →]" button.

---

## GLOBAL UX NOTES FOR PHASE 2

1. **Registration must feel like 3 easy steps, not a form.** Each step should show only 4–6 fields max. Use a clean step indicator so users always know where they are.
2. **Instant feedback on inputs.** Validate email format in real-time (as user types). Show password strength bar. Show character count on bio field.
3. **Back navigation is always visible.** Never trap a user mid-flow without a back option.
4. **OTP experience is critical.** 6 separate boxes (not one field), auto-focus advance, large touch targets on mobile, visible countdown timer.
5. **Mobile auth is primary.** All forms must be perfectly usable on a 375px screen. Inputs must be ≥ 44px height. Keyboard must not obscure submit button.
6. **Error messages are human.** Not "Error 400". Say "That email is already registered. [Sign in instead →]"
7. **Loading states on all form submissions.** Never let a user wonder if their tap/click worked.
8. **Onboarding walkthrough is skippable at any time.** Never force it. Always re-accessible from settings.
