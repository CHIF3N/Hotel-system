# SkillBridge — Phase 10: Admin Dashboard
## Google Stitch Design Brief

---

## OVERVIEW

The Admin Dashboard is the control room for the entire SkillBridge platform. It is used exclusively by the platform's internal operations team. It must be functional, data-dense, and professional — not beautiful in a consumer sense, but efficient in a professional sense. The admin sees everything: users, challenges, reviews, transactions, and system health. The design prioritizes information density and operational efficiency over visual elegance.

**Design System Reference:** Phase 1 definitions apply. Admin UI uses the same colors and components but at higher density — more content per screen, smaller cards, denser tables.

**Pages in this phase:**
1. Admin Overview Dashboard
2. Challenge Library Management
3. Create / Edit Challenge Form
4. User Management (All User Types)
5. Reviewer Management & Onboarding
6. Financial Ledger & Transaction Export
7. University Partnership Management
8. Project Classification Review Queue
9. AI Review Engine Monitor
10. System Health & Monitoring
11. Global Platform Settings

---

## ADMIN APP SHELL

### Sidebar (Desktop, 260px — wider than graduate/employer sidebars for more nav items)

**Top:**
- "ADMIN PANEL" label chip (red bg, white text — signals elevated access)
- Admin name + "ADMINISTRATOR" role chip

**Navigation (grouped):**

**Overview:**
- Dashboard

**Content:**
- Challenge Library
- Create Challenge

**Users:**
- All Users
- Reviewer Management

**Finance:**
- Transaction Ledger
- Disbursements

**Partnerships:**
- University Partners

**Operations:**
- Project Classification Queue
- AI Engine Monitor
- System Health

**Config:**
- Platform Settings

**Bottom:**
- "Logged in as: [Name]" (small, muted)
- Log Out

### Top Bar

- Page title (H3)
- Global search: "Search users, challenges, transactions..."
- Right: "System Status" chip (green dot + "Operational" or amber "Degraded")
- Notification bell (admin alerts only)
- Admin avatar

---

## PAGE 1 — ADMIN OVERVIEW DASHBOARD

**Purpose:** A single-screen health check of the entire platform.

---

### Hero Stats Row (6 cards in a 3+3 layout or 6-column)

| Card | Metric | Format |
|---|---|---|
| Total Graduates | Count | Mono H2 + "+X this week" (green) |
| Active Employers | Count | Mono H2 + subscription tier breakdown |
| Challenges Completed | Count | Mono H2 + "this month" period |
| Revenue This Month | "XAF amount" | Mono H2, green, bold |
| Reviews Pending | Count | Mono H2 — amber if > 20, red if > 50 |
| Platform Uptime | "99.8%" | Mono H2, green |

---

### Charts Row

**Left chart (60% width):** "Graduate Registrations" — line chart, last 30 days
- X-axis: Dates
- Y-axis: Registrations
- Two lines: "Graduates" (black) + "Employers" (gray)
- Hover tooltip: Shows count for that day

**Right chart (40% width):** "Revenue Breakdown" — donut/pie chart
- Segments: Employer Subscriptions (black), Project Posting Fees (dark gray), Graduate Premium (medium gray), Sponsored Challenges (light gray)
- Center: Total "248,500 XAF" (mono, bold)
- Legend below with amounts

---

### Alerts & Actions Panel (Full Width)

Section header: "Requires Attention" (H3) + count badge (red if any)

Cards for items needing admin action:
Each alert card:
- Left: Colored icon (red = urgent, amber = moderate)
- Content: Description + link
- Right: "Resolve →" button

Examples:
- "3 project classification disputes awaiting review" — amber → "Review Queue →"
- "AI engine error on submission SUB-2026-0082" — red → "View Error →"
- "Reviewer pool in Finance: 0 active reviewers" — red → "Manage Reviewers →"
- "University partnership MoU pending signature" — amber

---

### Recent Activity Feed (Full Width)

Section header: "Platform Activity" (H3) + "View all →" link

Timeline-style feed:
- Registration events (green dot)
- Review completions (black dot)
- Payment events (green dot)
- Error events (red dot)
- Admin actions by other admins (gray dot)

---

## PAGE 2 — CHALLENGE LIBRARY MANAGEMENT

**URL:** /admin/challenges
**Purpose:** View, filter, publish, archive, and manage all practice challenges.

---

### Page Header

- "Challenge Library" (H2) + total count
- "Create New Challenge" — primary black button (top-right)

---

### Filter Bar

- Field: Dropdown multi-select
- Class: Multi-select (D / C / B / A)
- Status: Dropdown — Published / Draft / Archived
- Search: Text input "Search by title..."

---

### Challenge Table (Dense, data-heavy)

Each row is a challenge. Sortable columns:
| Column | Content |
|---|---|
| Class | Class badge chip (compact) |
| Title | Challenge name (H4, 14px) — truncated with tooltip |
| Field | Field chip |
| Status | Published (green) / Draft (amber) / Archived (gray) status pill |
| Attempts | Mono number |
| Pass Rate | "72%" — green if >60%, amber if 40–60%, red if <40% |
| Created | Date (muted) |
| Actions | Edit · Archive · Preview (3 ghost link buttons) |

**Bulk actions bar (appears when checkboxes selected):**
"3 challenges selected" + "Publish" button + "Archive" button + "Delete" button (red, behind confirmation)

**Pagination:** 25 per page, page nav at bottom

**Empty state by filter:** "No challenges match — [clear filters]" link

---

### Challenge Cards View (Toggle from table)

Same information as table but in a 3-column card grid. Cards show: Class chip, Title, Field chip, Status pill, Pass Rate bar, action buttons.

---

## PAGE 3 — CREATE / EDIT CHALLENGE FORM

**URL:** /admin/challenges/new or /admin/challenges/:id/edit
**Layout:** Centered, max 800px, single column

**Form header:** "New Practice Challenge" or "Edit: [Challenge Title]" (H2)

---

### Section 1 — Basic Info

- Challenge Title: Input
- Field: Single select dropdown
- Class Level: Single select (D / C / B / A)
- Sub-topic / Domain tag: Input with tag chips (type + enter to add)
- Estimated Duration: Dropdown (Under 2h / 2–4h / 4–8h / 8h+)
- Status: Draft / Published toggle

---

### Section 2 — Challenge Content

- Business Context: Large textarea — "Invented company/scenario description"
- Challenge Brief: Large rich-text-like textarea — "The full challenge prompt"
- Expected Deliverables: Dynamic row list (same as employer project form)
  - Each row: Deliverable text + Format requirement + "Required / Optional" toggle
  - "+ Add Deliverable" ghost link

---

### Section 3 — Submission Format

Checkboxes for accepted formats:
- ☑ PDF Document
- ☑ DOCX Document
- ☐ Spreadsheet (XLSX)
- ☑ Images (PNG/JPG)
- ☑ GitHub Repository Link
- ☐ Demo Video (25MB max)
- ☑ Live URL

---

### Section 4 — Review Rubric

- Review Type: "AI Review" (auto for D/C) or "Expert Review" (auto for A/B) — read-only, auto-set by class
- Pass Threshold: Number input (default: 65, range 50–85)
- Rubric Criteria: Dynamic rows:
  - Each row: Criterion name + Weight (%) + Description
  - Total weight must = 100% (validated live: shows "Total: 95% — must be 100%" error)
  - "+ Add Criterion" ghost link

---

### Section 5 — Challenge Source

- Source: Dropdown — "Platform Team" / "Faculty Authored" / "AI Generated" / "Contributed (Survey)"
- Author name (optional): Text input
- Notes (admin-only): Textarea — "Internal notes about this challenge"

---

### Action bar (sticky footer)

- "Save as Draft" (secondary) + "Publish Challenge" (primary black) + "Cancel" (ghost)
- Validation: If required fields empty, "Publish" button shows error tooltip, "Save as Draft" always enabled

---

## PAGE 4 — USER MANAGEMENT

**URL:** /admin/users
**Tabs:** "Graduates" | "Employers" | "Reviewers" | "University Partners" | "Admins"

---

### Users Table (Per Tab)

**Graduates tab columns:**
| Column | Content |
|---|---|
| Name | Avatar + Name (H4, 14px) |
| Email | muted |
| Field | Field chip |
| Class | Class badge chip |
| Credentials | Mono count |
| Registered | Date |
| Status | Active (green) / Deactivated (gray) |
| Actions | View · Deactivate · Delete |

**Search bar:** Above table — "Search by name or email..."

**Clicking "View" on any user:** Opens a detail side panel (slides in from right on desktop, full page on mobile):
- Full user profile info
- Activity log
- For graduates: Full credential list, submission history
- For employers: Subscription info, project history, transaction history
- Admin actions: "Deactivate", "Reset password", "Change role", "Delete"

---

## PAGE 5 — REVIEWER MANAGEMENT & ONBOARDING

**URL:** /admin/reviewers
**Purpose:** Manage the pool of expert reviewers who evaluate Class A and B submissions.

---

### Page Header

"Reviewer Management" (H2) + "Invite New Reviewer" primary button

---

### Reviewer Pool Stats

4 stat cards:
- Total Active Reviewers: Count
- Reviewers Needed (Field gaps): Count — red if any field has < 2 reviewers
- Pending Review Queue: Count per field breakdown
- Avg. Review Time: "34 hours average"

---

### Field Coverage Warning Cards

If any field has < 2 active reviewers: Red alert card for that field:
- "Finance: 0 active reviewers" — red
- "ACTION: Invite reviewers for this field immediately. Submissions will not be processed without coverage."

---

### Reviewer Table

| Column | Content |
|---|---|
| Name | Avatar + Name |
| Email | muted |
| Field | Field chip |
| Status | Active (green) / Inactive (gray) / Suspended (red) |
| Pending | Pending assignment count |
| Completed | Total completed reviews |
| Avg. Score Quality | Reviewer quality rating |
| Actions | View · Deactivate · Suspend |

---

### Invite New Reviewer Modal

- Triggered by "Invite New Reviewer" button
- Form: Full name, email, phone, field of expertise (multi-select), institution/company, note to include in invite email
- Send Invite → primary button
- Sends invitation email via Brevo, creates a pending reviewer account

---

## PAGE 6 — FINANCIAL LEDGER & TRANSACTION EXPORT

**URL:** /admin/transactions
**Purpose:** Complete financial history of every transaction on the platform.

---

### Summary Cards (Full Width, 4-column)

- Total Revenue (all time): Mono, large, green
- Revenue This Month: Mono, green
- Disbursements This Month (graduates + reviewers): Mono, amber
- Net Platform Revenue This Month: Mono, black

---

### Filter Bar

- Date range: Date picker (from–to)
- Transaction type: Dropdown — All / Subscription / Project Posting / Commission / Disbursement / Premium Profile / Sponsored Challenge
- Status: All / Completed / Pending / Failed
- Party: Search input "Filter by user/company name..."

---

### Transaction Table

Dense, sortable table:
| Column | Content |
|---|---|
| ID | Mono, small, muted |
| Date | Timestamp |
| Type | Type chip (colored: subscription=black, disbursement=green, posting=gray) |
| From | Party name |
| To | Party name |
| Amount | Mono, right-aligned |
| Status | Status pill |
| Method | "MTN MoMo" / "Orange Money" chip |
| Actions | View Receipt · Retry (if failed) |

**Pagination:** 50 per page

**Export row (above table):**
- "Export CSV" button (ghost) + date range shown
- "Export PDF Report" button (ghost)

---

### Failed Transactions Panel

If any failed disbursements: Persistent red alert card at top:
- "3 failed disbursements require attention"
- List of failed items with "Retry" button per item

---

## PAGE 7 — UNIVERSITY PARTNERSHIP MANAGEMENT

**URL:** /admin/universities
**Purpose:** Manage university partner accounts, agreements, and co-signing status.

---

### Partner List

Each university as a card:
- University logo (40px) + Name (H4) + Location
- Status: Active (green) / Pending (amber) / Suspended (gray)
- Co-signing: Enabled / Disabled toggle (admin-controlled)
- "Registered Graduates" count
- "Manage →" ghost button

---

### Onboard New Partner Form (Modal or Full Page)

- University name
- Country and city
- Primary contact (name + email + phone)
- Logo upload (SVG/PNG)
- Partnership type: Standard / Custom
- MoU status: "Pending" / "Signed" / "Expired" — with upload field for signed MoU document
- Co-signing: Enable / Disable toggle
- Admin notes textarea

---

## PAGE 8 — PROJECT CLASSIFICATION REVIEW QUEUE

**URL:** /admin/classification-queue
**Purpose:** Review SME-contested project class suggestions.

---

### Queue List

Each item as a card:
- Project title (H4)
- Company name
- AI suggested class: "CLASS B" chip
- Company's requested class: "CLASS A" chip (with amber "CONTESTED" label)
- Submitted: Date
- Deadline for resolution: "48 hours remaining" — countdown (red if < 6 hours)
- "Review →" primary button

---

### Review Modal (triggered by "Review →")

Full review interface:
- Left: Project details (title, brief, deliverables, compensation, estimated hours)
- Right: Classification decision:
  - AI suggestion + reasoning
  - Company's request + justification (if provided)
  - Admin decision: Class A or Class B (two large selectable cards)
  - Decision note (textarea): "Required — explain your classification decision"
  - "Confirm Classification" — primary button
  - Both parties are notified automatically on confirmation

---

## PAGE 9 — AI REVIEW ENGINE MONITOR

**URL:** /admin/ai-monitor
**Purpose:** Monitor the health, accuracy, and error rate of the automated review pipeline.

---

### Status Banner

If engine operational: Green "AI Engine: Operational" status banner
If degraded: Amber "AI Engine: Degraded — processing at 60% capacity. Admin action required."
If down: Red "AI Engine: OFFLINE — all submissions auto-escalated to human reviewers."

---

### Engine Stats (4 cards)

- Reviews Processed Today: Count
- Average Processing Time: "1.2 hours" (mono)
- Error Rate: "0.4%" — green if < 1%, amber if 1–3%, red if > 3%
- Accuracy vs Expert Score: "Mean deviation: 7.3 points" — green if < 8, amber if 8–12, red if > 12

---

### Recent AI Reviews Table

| Submission ID | Challenge | Score | Time Taken | Status | Error |
|---|---|---|---|---|---|
| SUB-2026-0091 | Data Structures | 78/100 | 1.1h | Completed | — |
| SUB-2026-0089 | SQL Design | — | — | Error | View log |
| ... | ... | ... | ... | ... | ... |

Error rows: Red tinted row + "View error log" link → opens a code-style log viewer modal

---

### Calibration Graph (Full Width)

Line chart comparing AI scores vs. expert reviewer scores on a validation set:
- X-axis: Submission samples (last 50)
- Y-axis: Score (0–100)
- Line 1 (black): AI scores
- Line 2 (dashed gray): Expert scores
- Deviation shaded area between lines
- "Current mean deviation: 7.3 pts" label

---

### Error Queue

List of errored submissions that were auto-escalated:
- Submission ID + error message summary
- Graduate name + challenge
- Status: "Escalated to human reviewer" (amber) or "Resolved" (green)
- Admin action: "Assign reviewer manually" button

---

## PAGE 10 — SYSTEM HEALTH & MONITORING

**URL:** /admin/system
**Purpose:** Technical overview of platform infrastructure.

---

### Status Grid (3×2)

Each service as a status card:
| Service | Status Indicator | Last checked |
|---|---|---|
| API Server | ● Operational (green) | 1 min ago |
| Database (Primary) | ● Operational | 1 min ago |
| Database (Read Replica) | ● Operational | 1 min ago |
| Cloudflare R2 Storage | ● Operational | 5 min ago |
| AI Review Engine | ● Operational | 1 min ago |
| Brevo Email API | ● Operational | 10 min ago |
| MTN MoMo API | ● Operational | 5 min ago |
| Orange Money API | ⚠ Degraded (amber) | 15 min ago |

Degraded services: Amber dot + amber card border + "View details" link

---

### Uptime Charts (2 charts side by side)

- API uptime — last 30 days: Bar chart (green bars, red for downtime periods)
- Database uptime — last 30 days: Same

---

### Backup Status

- "Last backup: Today at 02:00 WAT" — green checkmark
- "Next scheduled: Tomorrow at 02:00 WAT"
- Backup storage: "Cloudflare R2 — US Region" (geographically separate)
- "Trigger manual backup" — secondary button

---

## PAGE 11 — GLOBAL PLATFORM SETTINGS

**URL:** /admin/settings
**Left nav:** General · Class Progression · Review · Payments · Notifications · Maintenance

**General section:**
- Platform name
- Supported languages toggle (English ✓ / French ✓)
- Maintenance mode toggle (puts site in read-only mode with banner)
- Contact email for admin notifications

**Class Progression section:**
- Min challenges to unlock Class C: Number input (default: 5)
- Min challenges to unlock Class B: Number input (default: 4)
- Min challenges to unlock Class A: Number input (default: 3)
- Changes require "Save & Apply" button with confirmation modal: "This will affect all graduates currently in progress."

**Review section:**
- AI pass threshold: Number input (default: 65)
- Human review pass threshold: Number input (default: 65)
- Cooling-off period (hours): Number input (default: 72)
- Second reviewer trigger range: "Score within X points of threshold" — Number input (default: 5)

**Payments section:**
- Platform commission %: Number input (default: 12%)
- Project posting fee range: Min XAF + Max XAF inputs
- Reviewer Class B fee: Number input (default: 2,000 XAF)
- Reviewer Class A fee: Number input (default: 3,500 XAF)
- Graduate premium monthly: Number input (default: 1,500 XAF)

**Notifications section:**
- SMTP settings (Brevo API key, sender name, sender email)
- WhatsApp Business API settings (Phase 3+)
- Test notification button: "Send test email" + "Send test WhatsApp" (when enabled)

**All settings:** Have a "Save changes" button per section. Changed but unsaved fields show an amber dot next to their section in the left nav.

---

## GLOBAL UX NOTES FOR PHASE 10

1. **Admin UI is optimized for power, not polish.** Denser information, more per screen, fewer decorative elements. The admin understands the platform — they don't need hand-holding.
2. **Every destructive admin action requires confirmation.** Delete user, archive challenges, cancel partnership, change commission rate — all require a modal confirmation with typed confirmation (e.g., type "DELETE" to confirm account deletion).
3. **System alerts must be impossible to ignore.** Red banners for urgent issues (AI engine down, payment failures, no reviewers in a field) must appear at the top of the Dashboard and in the top bar. Admins should never be surprised.
4. **Tables are the primary UI pattern.** Admins manage large datasets. Sortable, filterable, paginated tables with bulk actions are the backbone of every management page.
5. **Financial data must be audit-ready.** Every transaction has an ID, timestamp, parties, amount, method, and status. Export to CSV/PDF in one click. This is a financial product.
6. **Settings changes must be logged.** Every time an admin changes a platform setting (commission rate, progression thresholds), it should be recorded in an audit log (visible in the settings page or a dedicated audit log).
7. **Mobile admin experience is minimal but functional.** Admins primarily work on desktop. Mobile view should show the most critical alerts and basic stats. Complex table management can redirect to "best experienced on desktop."

---

## PHASE 10 COMPLETION — FULL SYSTEM VERIFICATION CHECKLIST

All functional and non-functional requirements from the SRS must be addressed across phases 1–10:

**Functional Requirements Coverage:**
- FR-OP: Graduate onboarding — Phase 2 (registration) + Phase 3 (profile)
- FR-CL: Class system — Phase 3 (dashboard) + Phase 4 (challenges) + Phase 6 (credentials)
- FR-PC: Practice challenges — Phase 4
- FR-PP: Paid projects — Phase 7
- FR-SR: Submission & review — Phase 5 + Phase 9 (reviewer)
- FR-CB: Credentials & badges — Phase 6
- FR-EM: Employer portal — Phase 8
- FR-PAY: Payment system — Phase 7 (enrollment), Phase 8 (subscriptions), Phase 6 (disbursements)
- FR-UP: University partnership — Phase 9
- FR-NT: Notifications — In-app bell (all phases) + email confirmations (Phases 2, 4, 5)

**Non-Functional Requirements Coverage:**
- NFR-PF (Performance): Skeleton loading states (all phases), pagination (Phases 8, 10)
- NFR-SC (Security): HTTPS-only UI, password strength meter (Phase 2), RBAC via role-specific shells
- NFR-SL (Scalability): Architecture shown via separate portals per user type
- NFR-US (Usability): Bilingual toggle (Phase 1), mobile-first throughout, onboarding walkthroughs (Phase 2)
- NFR-AV (Availability): Maintenance mode (Phase 10), system health page (Phase 10)
- DC-001 (Mobile-first): Documented per page across all phases
- DC-003 (MoMo): Payment instructions and MoMo merchant flow in Phases 2, 7, 8
- DC-004 (Bilingual): Language toggle in navigation across all phases
