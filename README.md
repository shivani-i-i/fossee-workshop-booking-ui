# FOSSEE Workshop Booking UI

React + Django redesign for the FOSSEE workshop booking portal. This submission modernizes the interface for mobile-first use, keeps the IIT Bombay visual identity, connects the workshop list to Django data, and documents the work clearly for screening review.

## 🚀 Live Demo

https://fossee-workshop-booking-d3qru89c3-shivani-i-is-projects.vercel.app

## Setup Instructions

### Django backend
Prerequisites: Python 3.8+, pip, and Git.

```bash
git clone https://github.com/shivani-i-i/fossee-workshop-booking-ui.git
cd fossee-workshop-booking-ui
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The Django app runs at http://127.0.0.1:8000.

### React frontend
Open a second terminal in the same repo and run:

```bash
cd frontend
npm install
npm run dev
```

The React app runs at http://127.0.0.1:5173.

## 📸 Before & After

> **Before** — Original FOSSEE repo (github.com/FOSSEE/workshop_booking)
> **After** — My React redesign (live: https://fossee-workshop-booking-d3qru89c3-shivani-i-is-projects.vercel.app)

<div align="center">

### 🏠 Landing Page (Home)

<img src="screenshots/before/before-home.png" alt="Legacy landing page from original workshop portal" width="980" />
<br/>
<em>Legacy UI: Minimal, unbranded layout.</em>

<br/><br/>

<table>
	<tr>
		<th>Modernized Desktop</th>
		<th>Modernized Mobile</th>
	</tr>
	<tr>
		<td align="center"><img src="screenshots/after/home-desktop.png" alt="Modernized landing page desktop view with hero and quick actions" width="550" /></td>
		<td align="center"><img src="screenshots/after/home-mobile.png" alt="Modernized landing page mobile view" width="220" /></td>
	</tr>
</table>

#### What’s New

- IIT Bombay institutional branding applied through the primary palette: navy #003366 and accent #FF6B00.
- Mobile-optimized FAQ uses accessible accordion interactions for compact, touch-friendly discovery.
- Improved visual hierarchy introduces clearer first-screen actions and stronger CTA prominence.

<br/>&nbsp;<br/>

### 🔐 Authentication (Login)

<img src="screenshots/before/before-login.png" alt="Legacy login page from original workshop portal" width="980" />
<br/>
<em>Legacy UI: Minimal, unbranded layout.</em>

<br/><br/>

<table>
	<tr>
		<th>Modernized Desktop</th>
		<th>Modernized Mobile</th>
	</tr>
	<tr>
		<td align="center"><img src="screenshots/after/login-desktop.png" alt="Modernized login desktop view with split layout" width="550" /></td>
		<td align="center"><img src="screenshots/after/login-mobile.png" alt="Modernized login mobile view" width="220" /></td>
	</tr>
</table>

#### What’s New

- IIT Bombay institutional branding is integrated directly into the authentication context for trust and continuity.
- Mobile-optimized FAQ accordion remains accessible in the redesigned flow to reduce support friction on small screens.
- Improved visual hierarchy with a clear Sign In CTA, better spacing, and stronger form focus.

<br/>&nbsp;<br/>

| Feature | Legacy UI (Original) | Modernized UI (Redesign) |
|---|---|---|
| **Registration**<br/>Modernized form architecture with clearer field grouping and color-consistent action emphasis (#FF6B00). | <img src="screenshots/before/before-register.png" alt="Legacy registration form from original portal" width="400" /> | <img src="screenshots/after/register-desktop.png" alt="Modernized registration desktop form with grouped fields" width="400" /><br/><img src="screenshots/after/register-mobile.png" alt="Modernized registration mobile form" width="180" /><br/><ul><li><strong>Technical Impact:</strong> Refactored table-like legacy form patterns into responsive two-column grid that collapses cleanly on mobile, reducing interaction friction and overflow issues.</li></ul> |
| **Workshop Portal**<br/>Evolved list browsing into a modern discovery surface with readable card hierarchy and IIT palette continuity (#003366 / #FF6B00). | <img src="screenshots/before/before-workshops.png" alt="Legacy workshops listing interface" width="400" /> | <img src="screenshots/after/workshop-list-desktop.png" alt="Modernized workshops listing desktop with filters and cards" width="400" /><br/><img src="screenshots/after/workshop-list-mobile.png" alt="Modernized workshops listing mobile view" width="180" /><br/><ul><li><strong>Technical Impact:</strong> Rebuilt flat listing into searchable/filterable card-based interface with responsive layouts and predictable empty-state behavior.</li></ul> |

</div>

## Design Principles

**Mobile-first layout**. The interface was redesigned from the smallest screens upward because students are most likely to open the portal on phones. Navigation, cards, forms, and workshop lists were tuned to stay readable and tappable on narrow viewports first, then expanded for desktop.

**Clear visual hierarchy**. The redesign uses stronger typographic contrast, card spacing, and action emphasis so the user can immediately scan for the important route, action, and state. The workshop list now reads as a structured product surface instead of a flat static page.

**IIT Bombay identity**. The palette follows the institution’s recognizable navy and orange language with #003366 and #FF6B00. That keeps the redesign visually tied to FOSSEE and makes the product feel official rather than generic.

**Design tokens through variables.css**. Shared colors, spacing, radii, shadows, and sizing live in CSS custom properties so the UI stays consistent across pages. This makes future changes predictable and reduces the chance of drifting styles.

**Honesty over fabrication**. The workshop page now uses a real Django endpoint and shows a truthful empty state when there is no data in the database. I avoided fake workshop records so the submission remains accurate, reviewable, and aligned with the actual backend state.

## Responsiveness

Responsiveness was handled with flexible layout primitives rather than separate page variants. Grid and flexbox were used to let cards, headers, and controls reflow naturally across widths. The workshop list collapses to a single column on smaller screens, while the same components remain usable on larger screens without layout rewrites.

The typography and spacing scale down smoothly so headings, body text, chips, and buttons remain readable on 375px devices. Controls are sized for touch, and the design keeps enough vertical spacing to avoid accidental taps. The React app was also validated at mobile and desktop widths so the result behaves consistently across common student devices.

## Performance Tradeoffs

1. I used plain React and CSS instead of adding animation or UI libraries, which keeps the bundle smaller and easier to maintain.
2. I used a lightweight Django JSON endpoint for workshop data rather than introducing a heavier API layer, which keeps integration simple.
3. I kept visual effects restrained so the interface looks modern without relying on expensive blur-heavy surfaces or large image assets.
4. I accepted a smaller amount of dynamic logic in exchange for clarity and speed, because the screening task values quick load time and maintainability over flashy motion.

## Challenges

**React to Django API connection via Vite proxy**. The React app needed to fetch data from Django during development without cross-origin issues. I solved that by adding a Vite proxy to forward `/workshop` requests to the backend and then wiring the workshops page to read the JSON response directly.

**Honest empty state instead of fake data**. The database currently has no workshop records, so the UI could not truthfully show populated workshop cards. I redesigned the page to support loading, error, filter, and empty states so the experience stays useful even when no content exists.

## Tech Stack

| Technology | Usage |
|------------|-------|
| Django | Backend application and data source |
| React | Frontend user interface |
| Vite | React development server and build tool |
| JavaScript | UI logic and data handling |
| CSS | Visual styling and responsive layout |

## Project Structure

```text
workshop_booking/
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   └── vite.config.js
├── workshop_app/
├── workshop_portal/
├── screenshots/
│   ├── before/
│   └── after/
└── README.md
```

## Design References

| Reference | Why it informed the redesign |
|----------|-------------------------------|
| NPTEL | Clean academic portal structure and information density |
| Coursera | Card-based browsing and category scanning patterns |
| Vercel | Crisp layout, strong hierarchy, and efficient spacing |
| Linear | Minimal surfaces, status treatment, and compact controls |
| IIT Bombay official | Brand colors and institutional visual identity |

## License

MIT License. See the repository `LICENSE` file for full terms.
