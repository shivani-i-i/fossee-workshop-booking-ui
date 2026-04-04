import React from 'react';

const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'workshops', label: 'Workshops' },
];

const workshopCards = [
  { title: 'Python for Beginners', tag: 'Python', schedule: 'To be announced', status: 'Upcoming' },
  { title: 'Scilab Fundamentals', tag: 'Scilab', schedule: 'To be announced', status: 'Upcoming' },
  { title: 'OpenFOAM Essentials', tag: 'Hardware', schedule: 'To be announced', status: 'Upcoming' },
  { title: 'Data Analytics with Python', tag: 'Python', schedule: 'To be announced', status: 'Upcoming' },
  { title: 'Electronics Lab Basics', tag: 'Hardware', schedule: 'To be announced', status: 'Upcoming' },
  { title: 'Scientific Computing Toolkit', tag: 'Scilab', schedule: 'To be announced', status: 'Upcoming' },
];

const stats = [
  { value: '500+', label: 'Workshops Conducted' },
  { value: '10,000+', label: 'Students Trained' },
  { value: '20+', label: 'FOSS Topics' },
  { value: '100%', label: 'Free for Students' },
];

const featuredStats = [
  { value: '92%', label: 'Reported higher confidence' },
  { value: '4.8/5', label: 'Average learner satisfaction' },
  { value: '350+', label: 'Active institutions' },
];

const faq = [
  { q: 'Are FOSSEE workshops free?', a: 'Yes. Core workshops on this portal are free for students and educators.' },
  { q: 'Who can join these workshops?', a: 'Anyone with an academic or skill-building interest in open-source technologies.' },
  { q: 'How do I stay updated?', a: 'Use the workshop listing page and register to receive updates on new sessions.' },
];

const routeMeta = {
  home: {
    title: 'FOSSEE Workshop Booking | Home',
    description: 'Book free workshops by IIT Bombay. A React redesign focused on mobile-first UX, accessibility, and performance.',
  },
  workshops: {
    title: 'FOSSEE Workshop Booking | Workshops',
    description: 'Browse workshop categories, filters, and upcoming sessions in a clean React interface.',
  },
  login: {
    title: 'FOSSEE Workshop Booking | Login',
    description: 'Sign in to the redesigned FOSSEE Workshop Booking portal.',
  },
  register: {
    title: 'FOSSEE Workshop Booking | Register',
    description: 'Create your FOSSEE Workshop Booking account in a modern, accessible registration flow.',
  },
};

function useHashRoute() {
  const getRoute = React.useCallback(() => {
    const hash = window.location.hash.replace('#', '').trim();
    return hash || 'home';
  }, []);

  const [route, setRoute] = React.useState(getRoute);

  React.useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    if (!window.location.hash) {
      window.location.hash = '#home';
    }
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [getRoute]);

  return [route, setRoute];
}

function useSeo(route) {
  React.useEffect(() => {
    const meta = routeMeta[route] || routeMeta.home;
    document.title = meta.title;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.name = 'description';
      document.head.appendChild(tag);
    }
    tag.content = meta.description;
  }, [route]);
}

function App() {
  const [route, setRoute] = useHashRoute();
  useSeo(route);

  const navigate = (nextRoute) => {
    window.location.hash = `#${nextRoute}`;
    setRoute(nextRoute);
  };

  return (
    <div className="app-shell">
      <Header route={route} navigate={navigate} />
      <main className="app-main">
        {route === 'home' && <HomePage navigate={navigate} />}
        {route === 'workshops' && <WorkshopsPage />}
        {route === 'login' && <LoginPage navigate={navigate} />}
        {route === 'register' && <RegisterPage navigate={navigate} />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}

function Header({ route, navigate }) {
  return (
    <header className="site-header">
      <a className="site-logo" href="#home" aria-label="FOSSEE home">
        <span className="site-logo__mark" aria-hidden="true">
          <img className="site-brand__image" src="https://fossee.in/sites/all/themes/software_responsive_theme/img/logo.png" alt="" />
        </span>
        <span className="site-logo__text">
          <span className="site-logo__title">FOSSEE</span>
          <span className="site-logo__tagline">by IIT Bombay</span>
        </span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <div className="site-nav__links">
        {navItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={route === item.key ? 'site-nav__link active' : 'site-nav__link'}
            aria-current={route === item.key ? 'page' : undefined}
            onClick={() => navigate(item.key)}
          >
            {item.label}
          </button>
        ))}
        </div>
        <div className="site-nav__divider" aria-hidden="true" />
        <div className="site-nav__actions">
        <button type="button" className="site-nav__button site-nav__button--outline" onClick={() => navigate('login')}>Login</button>
        <button type="button" className="site-nav__button site-nav__button--solid" onClick={() => navigate('register')}>Register</button>
        </div>
      </nav>
    </header>
  );
}

function HomePage({ navigate }) {
  return (
    <>
      <section className="hero-split">
        <div className="hero-split__copy">
          <p className="eyebrow">Book Free Workshops by IIT Bombay</p>
          <h1>FOSSEE Workshop Booking Portal</h1>
          <p className="hero-split__lead">Learn from experts. Build real skills. Get certified.</p>
          <ul className="hero-split__list">
            <li>Free workshops for all students</li>
            <li>Certified by IIT Bombay</li>
            <li>500+ workshops conducted</li>
          </ul>
          <div className="hero-split__actions">
            <button type="button" className="btn btn--solid" onClick={() => navigate('workshops')}>Browse Workshops</button>
            <button type="button" className="btn btn--outline" onClick={() => navigate('register')}>Register Free</button>
          </div>
        </div>
        <aside className="hero-split__panel" aria-label="Quick sign in preview">
          <div className="panel-card">
            <span className="panel-card__brand">FOSSEE</span>
            <span className="panel-card__subbrand">Workshop Portal</span>
            <h2>Sign in</h2>
            <label>
              Username
              <input type="text" placeholder="Username" />
            </label>
            <label>
              Password
              <input type="password" placeholder="Password" />
            </label>
            <button type="button" className="btn btn--solid">Sign In</button>
          </div>
        </aside>
      </section>

      <section className="stats-strip" aria-label="FOSSEE impact stats">
        {stats.map((item) => (
          <article key={item.label} className="stats-strip__item">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="trust-row" aria-label="Institution support">
        <span>Supported by</span>
        <strong>IIT Bombay</strong>
        <strong>FOSSEE</strong>
        <span>MoE, Govt. of India</span>
      </section>

      <section className="content-section">
        <SectionHeading label="About Us" title="About FOSSEE Workshop Portal" />
        <div className="about-grid">
          <div className="info-card">
            <p>The FOSSEE Workshop Portal is an IIT Bombay initiative that helps institutions host high-quality, practical workshops on free and open-source software.</p>
            <p>Our goal is to make technical learning accessible, hands-on, and career-relevant for every learner.</p>
          </div>
          <div className="feature-list">
            <article>
              <strong>IIT Bombay</strong>
              <span>Academic leadership and trusted pedagogy</span>
            </article>
            <article>
              <strong>Open Source Focus</strong>
              <span>Learn tools that are free and industry-used</span>
            </article>
            <article>
              <strong>Institution Ready</strong>
              <span>Designed for scalable campus delivery</span>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading label="Why FOSSEE Works" title="Built For Serious Learning" />
        <div className="why-grid">
          <Card icon="01" title="Learner-first pacing" text="Workshops move from fundamentals to applied practice without overwhelming students." />
          <Card icon="02" title="Trusted academic content" text="Sessions are guided by IIT ecosystem mentors with practical, open-source teaching materials." />
          <Card icon="03" title="Career-relevant outcomes" text="Each track focuses on portfolio-ready workflows that build confidence and employability." />
        </div>
      </section>

      <section className="content-section">
        <SectionHeading label="Workshops" title="Workshop Categories" />
        <div className="chip-grid">
          {['Python', 'Scilab', 'OpenFOAM', 'Circuit Design', 'Data Analytics', 'Open Source'].map((label) => (
            <button key={label} className="chip" type="button" onClick={() => navigate('workshops')}>{label}</button>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading label="How It Works" title="How It Works" />
        <div className="steps-grid">
          <Card icon="1" title="Browse" text="Explore workshop categories and schedules." />
          <Card icon="2" title="Register" text="Book your preferred workshop in a few clicks." />
          <Card icon="3" title="Attend" text="Join live sessions and build practical skills." />
        </div>
      </section>

      <section className="content-section faq-block">
        <SectionHeading label="FAQ" title="Frequently Asked Questions" />
        <div className="faq-grid">
          {faq.map((item) => <FaqItem key={item.q} question={item.q} answer={item.a} />)}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <h2>Stay updated on new workshops</h2>
          <p>Get notified when new workshops are announced</p>
        </div>
        <button type="button" className="btn btn--solid" onClick={() => navigate('workshops')}>View All Workshops</button>
      </section>
    </>
  );
}

function LoginPage({ navigate }) {
  return (
    <section className="auth-split">
      <div className="auth-split__hero">
        <h1>FOSSEE</h1>
        <p>Workshop Booking Portal</p>
        <small>by IIT Bombay</small>
        <ul>
          <li>Free workshops for all students</li>
          <li>Certified by IIT Bombay</li>
          <li>500+ workshops conducted</li>
        </ul>
      </div>
      <div className="auth-card">
        <span className="auth-card__brand">FOSSEE</span>
        <span className="auth-card__subtitle">Workshop Portal</span>
        <h2>Sign in</h2>
        <label>
          Username
          <input type="text" placeholder="Username" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Password" />
        </label>
        <button type="button" className="btn btn--solid">Sign In</button>
        <p className="auth-card__foot">New around here? <button type="button" className="text-button" onClick={() => navigate('register')}>Register</button></p>
      </div>
    </section>
  );
}

function RegisterPage({ navigate }) {
  const fields = ['First Name', 'Last Name', 'Email', 'Username', 'Institute Name', 'Role', 'Password', 'Confirm Password'];
  return (
    <section className="register-layout">
      <div className="register-card">
        <span className="auth-card__brand">FOSSEE</span>
        <span className="auth-card__subtitle">by IIT Bombay</span>
        <h2>Create your account</h2>
        <div className="register-grid">
          {fields.map((field) => (
            <label key={field}>
              {field}
              <input type={field.toLowerCase().includes('password') ? 'password' : 'text'} placeholder={field} />
            </label>
          ))}
        </div>
        <button type="button" className="btn btn--solid">Create Account</button>
        <p className="auth-card__foot">Already have an account? <button type="button" className="text-button" onClick={() => navigate('login')}>Sign in</button></p>
      </div>
    </section>
  );
}

function WorkshopsPage() {
  return (
    <section className="page-shell">
      <SectionHeading label="Workshops" title="Available Workshops" />
      <div className="filter-row" aria-label="Workshop filters">
        {['All', 'Python', 'Scilab', 'Hardware', 'Pending', 'Accepted', 'Rejected'].map((item) => (
          <button key={item} className={`chip ${item === 'All' ? 'is-active' : ''}`} type="button">{item}</button>
        ))}
      </div>
      <div className="card-grid">
        {workshopCards.map((card) => (
          <article key={card.title} className="workshop-card">
            <span className="workshop-card__tag">{card.tag}</span>
            <h3>{card.title}</h3>
            <p>{card.schedule}</p>
            <span className="workshop-card__status">{card.status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProposePage() {
  return (
    <section className="page-shell">
      <SectionHeading label="Propose Workshop" title="Submit a Workshop Proposal" />
      <div className="two-column">
        <div className="info-card">
          <p>Tell us the topic, format, and expected audience. We keep the UI simple and mobile-friendly so coordinators can submit quickly.</p>
        </div>
        <form className="form-card">
          <label>Workshop Title<input type="text" placeholder="Workshop Title" /></label>
          <label>Coordinator Name<input type="text" placeholder="Coordinator Name" /></label>
          <label>Preferred Date<input type="text" placeholder="Preferred Date" /></label>
          <label>Description<textarea placeholder="Describe the workshop"></textarea></label>
          <button type="button" className="btn btn--solid">Submit Proposal</button>
        </form>
      </div>
    </section>
  );
}

function StatisticsPage() {
  return (
    <section className="page-shell">
      <SectionHeading label="Statistics" title="Workshop Statistics" />
      <div className="stats-grid">
        {featuredStats.map((item) => (
          <article key={item.label} className="stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
      <div className="two-column">
        <div className="form-card">
          <h3>Monthly Workshop Count</h3>
          <div className="bar-chart" aria-hidden="true">
            {[22, 32, 28, 48, 36, 52, 44, 58, 62, 72, 54, 68].map((height, index) => (
              <div key={index} className="bar-chart__bar" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
        <div className="form-card table-card">
          <h3>Upcoming Workshops</h3>
          <table>
            <thead>
              <tr><th>Coordinator</th><th>Workshop</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>FOSSEE Team</td><td>Python Basics</td><td>Upcoming</td></tr>
              <tr><td>Campus Coordinator</td><td>Scilab Lab</td><td>Accepted</td></tr>
              <tr><td>Instructor Panel</td><td>Open Source Intro</td><td>Pending</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function DashboardPage({ type }) {
  const title = `${type} Dashboard`;
  return (
    <section className="page-shell">
      <SectionHeading label={type} title={title} />
      <div className="stats-grid">
        {['12 Workshops', '8 Pending', '4 Accepted'].map((label) => (
          <article key={label} className="stat-card"><strong>{label.split(' ')[0]}</strong><span>{label.split(' ').slice(1).join(' ')}</span></article>
        ))}
      </div>
      <div className="card-grid">
        <article className="workshop-card"><h3>Recent Activity</h3><p>Submitted proposals, feedback notes, and approval updates appear here.</p></article>
        <article className="workshop-card"><h3>Assigned Workshops</h3><p>A compact list of your latest workshop assignments and next actions.</p></article>
        <article className="workshop-card"><h3>Comments</h3><p>Profile comments and review threads remain visible in a readable card layout.</p></article>
      </div>
    </section>
  );
}

function ProfilePage() {
  return (
    <section className="page-shell">
      <SectionHeading label="Profile" title="Your Profile" />
      <div className="two-column">
        <div className="info-card">
          <h3>Instructor Profile</h3>
          <p>Name, institute, phone number, and role are presented clearly for quick review.</p>
        </div>
        <div className="form-card">
          <label>Name<input type="text" value="FOSSEE User" readOnly /></label>
          <label>Institute<input type="text" value="IIT Bombay" readOnly /></label>
          <label>Phone<input type="text" value="+91 90000 00000" readOnly /></label>
        </div>
      </div>
    </section>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__logo-row" aria-label="Institution logos">
          <img className="site-footer__logo-image" src="https://fossee.in/sites/all/themes/software_responsive_theme/img/logo.png" alt="FOSSEE logo" />
          <img className="site-footer__logo-image" src="https://fossee.in/sites/all/themes/software_responsive_theme/img/iitb-logo.png" alt="IIT Bombay logo" />
        </div>
        <div className="site-footer__grid">
          <div>
            <h3>About</h3>
            <p>Book hands-on FOSSEE workshops, collaborate with instructors, and build practical open-source skills guided by IIT Bombay experts.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><button type="button" className="text-button text-button--footer" onClick={() => navigate('home')}>Home</button></li>
              <li><button type="button" className="text-button text-button--footer" onClick={() => navigate('workshops')}>Workshops</button></li>
              <li><button type="button" className="text-button text-button--footer" onClick={() => navigate('login')}>Login</button></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>Email: contact@fossee.in</li>
              <li>Website: fossee.in</li>
              <li>Location: IIT Bombay, Mumbai</li>
            </ul>
          </div>
        </div>
        <p className="site-footer__copy">© 2026 FOSSEE, IIT Bombay. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = React.useState(false);
  return (
    <article className="faq-item">
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        {question}
      </button>
      {open && <p>{answer}</p>}
    </article>
  );
}

function SectionHeading({ label, title }) {
  return (
    <div className="section-heading">
      <span>{label}</span>
      <h2>{title}</h2>
    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <article className="info-tile">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default App;
