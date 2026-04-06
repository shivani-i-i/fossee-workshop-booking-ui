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

<img src="screenshots/before/before-home.png?v=20260406" alt="Legacy landing page from original workshop portal" width="980" />
<br/>
<em>Legacy UI: Minimal, unbranded layout.</em>

<br/><br/>

<table>
	<tr>
		<th>Modernized Desktop</th>
		<th>Modernized Mobile</th>
	</tr>
	<tr>
		<td align="center"><img src="screenshots/after/after-home-desktop.png?v=20260406" alt="Modernized landing page desktop view with hero and quick actions" width="550" /></td>
		<td align="center"><img src="screenshots/after/after-home-mobile.png?v=20260406" alt="Modernized landing page mobile view" width="220" /></td>
	</tr>
</table>

#### What’s New

- IIT Bombay institutional branding applied through the primary palette: navy #003366 and accent #FF6B00.
- Mobile-optimized FAQ uses accessible accordion interactions for compact, touch-friendly discovery.
- Improved visual hierarchy introduces clearer first-screen actions and stronger CTA prominence.

#### Home Section Details

##### About

<table>
	<tr>
		<th>Desktop</th>
		<th>Mobile</th>
	</tr>
	<tr>
		<td align="center"><img src="screenshots/after/home-about-desktop.png?v=20260406" alt="About section of the modernized home page on desktop" width="550" /></td>
		<td align="center"><img src="screenshots/after/home-about-mobile.png?v=20260406" alt="About section of the modernized home page on mobile" width="220" /></td>
	</tr>
</table>

##### How It Works

<table>
	<tr>
		<th>Desktop</th>
		<th>Mobile</th>
	</tr>
	<tr>
		<td align="center"><img src="screenshots/after/home-how-desktop.png?v=20260406" alt="How It Works section of the modernized home page on desktop" width="550" /></td>
		<td align="center"><img src="screenshots/after/home-how-mobile.png?v=20260406" alt="How It Works section of the modernized home page on mobile" width="220" /></td>
	</tr>
</table>

##### FAQs

<table>
	<tr>
		<th>Desktop</th>
		<th>Mobile</th>
	</tr>
	<tr>
		<td align="center"><img src="screenshots/after/home-faq-desktop.png?v=20260406" alt="FAQ section of the modernized home page on desktop" width="550" /></td>
		<td align="center"><img src="screenshots/after/home-faq-mobile.png?v=20260406" alt="FAQ section of the modernized home page on mobile" width="220" /></td>
	</tr>
</table>

<br/>&nbsp;<br/>

<br/>&nbsp;<br/>

### 🔐 Authentication (Login)

<img src="screenshots/before/before-login.png?v=20260406" alt="Legacy login page from original workshop portal" width="980" />
<br/>
<em>Legacy UI: Minimal, unbranded layout.</em>

<br/><br/>

<table>
	<tr>
		<th>Modernized Desktop</th>
		<th>Modernized Mobile</th>
	</tr>
	<tr>
		<td align="center"><img src="screenshots/after/after-login-desktop.png?v=20260406" alt="Modernized login desktop view with split layout" width="550" /></td>
		<td align="center"><img src="screenshots/after/after-login-mobile.png?v=20260406" alt="Modernized login mobile view" width="220" /></td>
	</tr>
</table>

#### What’s New

- IIT Bombay institutional branding is integrated directly into the authentication context for trust and continuity.
- Mobile-optimized FAQ accordion remains accessible in the redesigned flow to reduce support friction on small screens.
- Improved visual hierarchy with a clear Sign In CTA, better spacing, and stronger form focus.

<br/>&nbsp;<br/>

### 📝 Registration (Create Account)

<img src="screenshots/before/before-register.png?v=20260406" alt="Legacy registration form from original workshop portal" width="980" />
<br/>
<em>Legacy UI: Minimal, unbranded layout.</em>

<br/><br/>

<table>
	<tr>
		<th>Modernized Desktop</th>
		<th>Modernized Mobile</th>
	</tr>
	<tr>
		<td align="center"><img src="screenshots/after/after-register-desktop.png?v=20260406" alt="Modernized registration desktop view with structured field groups" width="550" /></td>
		<td align="center"><img src="screenshots/after/after-register-mobile.png?v=20260406" alt="Modernized registration mobile view" width="220" /></td>
	</tr>
</table>

#### What’s New

- IIT Bombay institutional branding is retained with consistent primary and accent treatment (#003366 and #FF6B00).
- Mobile-first field grouping improves scanning and keeps inputs usable on narrow screens.
- Stronger visual hierarchy clarifies form flow and keeps account actions easy to identify.

<br/>&nbsp;<br/>

### 📚 Workshop Portal (List + Discovery)

<img src="screenshots/before/before-workshops.png?v=20260406" alt="Legacy workshop list from original portal" width="980" />
<br/>
<em>Legacy UI: Minimal, unbranded layout.</em>

<br/><br/>

<table>
	<tr>
		<th>Modernized Desktop</th>
		<th>Modernized Mobile</th>
	</tr>
	<tr>
		<td align="center"><img src="screenshots/after/after-workshops-desktop.png?v=20260406" alt="Modernized workshop portal desktop view with search and filters" width="550" /></td>
		<td align="center"><img src="screenshots/after/after-workshops-mobile.png?v=20260406" alt="Modernized workshop portal mobile view" width="220" /></td>
	</tr>
</table>

#### What’s New

- IIT Bombay-aligned visual system keeps page hierarchy and calls-to-action consistent (#003366 and #FF6B00).
- Mobile-optimized browsing behavior improves discoverability for filters, cards, and workshop states.
- Improved visual hierarchy moves users from search to selection with clearer, structured content blocks.

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
