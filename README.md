# FOSSEE Workshop Booking UI

React + Django redesign of the FOSSEE workshop booking portal. The goal of this submission is to modernize usability, preserve IIT Bombay identity, and keep the data flow honest by reading workshops from the Django backend.

## Live Demo

https://fossee-workshop-booking-d3qru89c3-shivani-i-is-projects.vercel.app

## Highlights

- Mobile-first redesign for Home, Login, Registration, and Workshop Discovery pages.
- IIT Bombay visual identity using a consistent palette: navy #003366 and orange #FF6B00.
- Real backend integration for workshop listing via Django endpoint (no fabricated data).
- Clean empty, loading, and filter states for transparent UX when database content is limited.

## Setup Instructions

### Prerequisites

- Python 3.8+
- Node.js 18+
- Git

### 1. Clone repository

```bash
git clone https://github.com/shivani-i-i/fossee-workshop-booking-ui.git
cd fossee-workshop-booking-ui
```

### 2. Run Django backend

Windows PowerShell:

```bash
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend URL: http://127.0.0.1:8000

### 3. Run React frontend

Open a second terminal in the same repository:

```bash
cd frontend
npm install
npm run dev
```

Frontend URL: http://127.0.0.1:5173

Note: Vite is configured to proxy `/workshop` requests to Django during local development.

## Before and After

> Before: Original FOSSEE portal (github.com/FOSSEE/workshop_booking)
> After: React redesign for this submission

<div align="center">

### Landing Page (Home)

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

#### Improvements

- Clearer first-screen CTAs and better information hierarchy.
- Quick-jump links for About, How It Works, and FAQs.
- Accessible FAQ accordion behavior tuned for mobile browsing.

### Authentication (Login)

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

#### Improvements

- Stronger form focus with cleaner spacing and action hierarchy.
- Mobile-friendly layout that avoids cramped side-by-side blocks.
- Password input helper and visibility toggle support.

<br/>&nbsp;<br/>

### Registration (Create Account)

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

#### Improvements

- Better field grouping for faster scanning and fewer input mistakes.
- Expanded profile fields required for workshop coordination.
- Consistent visual behavior across desktop and mobile forms.

<br/>&nbsp;<br/>

### Workshop Portal (List and Discovery)

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

#### Improvements

- Integrated search and filters for faster workshop discovery.
- Better card hierarchy for workshop status and metadata.
- Honest empty state when no workshops are available in backend data.

</div>

## Design Approach

### Principles

- I started with mobile screens first and only then expanded to desktop layouts.
- I reduced visual noise so users can quickly find the next action (browse, sign in, register).
- I kept IIT Bombay branding consistent across all pages using #003366 and #FF6B00.
- I reused CSS custom properties to keep spacing and colors consistent while editing fast.

### Responsiveness

I used Grid and Flexbox so the same components reflow naturally instead of maintaining separate mobile pages. Navigation, auth panels, workshop cards, and filters collapse cleanly at smaller widths and stay readable on desktop.

### Performance Trade-offs

1. I avoided heavy UI libraries and kept styling in plain CSS.
2. I used a simple Django JSON endpoint instead of adding a complex API layer.
3. I kept effects minimal so the app feels clean without slowing first load.

### Challenges

1. React and Django had to work together during local development. I solved this using the Vite proxy for `/workshop`.
2. Workshop data can be empty. Instead of adding fake records, I built proper loading and empty states.

## Reflection

### What design principles guided the improvements?
I followed three things throughout: mobile-first layout, clear action hierarchy, and IIT Bombay brand consistency. Most decisions came down to "can a first-time student understand the next step quickly?"

### How did you ensure responsiveness across devices?
I tested each page in mobile and desktop widths while building it, not just at the end. I used responsive Grid/Flex patterns and adjusted breakpoints mainly for the header, auth forms, and workshop cards.

### What trade-offs did you make between design and performance?
I intentionally skipped animation-heavy UI patterns. The design is simpler than a flashy landing page, but it loads faster and is easier to maintain.

### What was the most challenging part of the task and how did you approach it?
The toughest part was keeping the UI useful even when backend workshop data is missing or small. I handled this by showing honest loading and empty states and connecting filters to real API responses only.

## Tech Stack

| Technology | Usage |
|------------|-------|
| Django | Backend application and data source |
| React | Frontend user interface |
| Vite | Frontend development server and build tool |
| JavaScript | UI logic and data handling |
| CSS | Styling, tokens, and responsive behavior |

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
| NPTEL | Academic content hierarchy and information density patterns |
| Coursera | Course discovery and card scanning behavior |
| Vercel | Crisp layout rhythm and section spacing discipline |
| Linear | Minimal component surfaces and status treatment |
| IIT Bombay website | Institutional brand and color direction |

## License

MIT License. See the repository LICENSE file for complete terms.
