/**
 * App
 * Main React shell for the FOSSEE workshop booking redesign.
 * Uses hash-based routing, accessible sections, and a lightweight data fetch for the workshop list.
 */
import React from 'react';

const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'workshops', label: 'Workshops' },
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
  statistics: {
    title: 'FOSSEE Workshop Booking | Statistics',
    description: 'Review workshop statistics and filter results in a dashboard-style view.',
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
      <main className={route === 'home' ? 'app-main app-main--home' : 'app-main'}>
        {route === 'home' && <HomePage navigate={navigate} />}
        {route === 'workshops' && <WorkshopsPage />}
        {route === 'login' && <LoginPage navigate={navigate} />}
        {route === 'register' && <RegisterPage navigate={navigate} />}
        {route === 'statistics' && <StatisticsPage />}
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
          <h1>FOSSEE</h1>
          <p className="hero-split__lead hero-split__lead--title">Workshop Booking Portal</p>
          <p className="eyebrow">by IIT Bombay</p>
          <ul className="hero-split__list">
            <li>Free workshops for all students</li>
            <li>Certified by IIT Bombay</li>
            <li>500+ workshops conducted</li>
          </ul>
        </div>
        <aside className="hero-split__panel" aria-label="Quick sign in preview">
          <div className="panel-card">
            <span className="panel-card__brand">FOSSEE</span>
            <span className="panel-card__subbrand">Workshop Portal</span>
            <h2>Sign in</h2>
            <p className="panel-card__helper">Enter your credentials to continue</p>
            <label>
              Username
              <input type="text" placeholder="Username" />
            </label>
            <label>
              Password
              <input type="password" placeholder="Password" />
            </label>
            <button type="button" className="btn btn--solid">Sign In</button>
            <div className="panel-card__divider"><span>or</span></div>
            <p className="auth-card__foot">New around here? <button type="button" className="text-button" onClick={() => navigate('register')}>Register</button></p>
            <p className="panel-card__meta">© 2024 FOSSEE, IIT Bombay</p>
          </div>
        </aside>
      </section>

      <section className="faq-strip">
        <div className="faq-strip__inner">
          <p className="faq-strip__label">FAQ</p>
          <h2 className="faq-strip__title">Frequently Asked Questions</h2>
          <div className="faq-grid faq-grid--compact">
            {faq.map((item) => <FaqItem key={item.q} question={item.q} answer={item.a} compact />)}
          </div>
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
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <section className="auth-screen" aria-label="Login page">
      <div className="auth-screen__hero">
        <h1>FOSSEE</h1>
        <p>Workshop Booking Portal</p>
        <small>by IIT Bombay</small>
        <ul>
          <li>Free workshops for all students</li>
          <li>Certified by IIT Bombay</li>
          <li>500+ workshops conducted</li>
        </ul>
      </div>
      <div className="auth-screen__panel">
        <div className="auth-card auth-card--exact">
        <span className="auth-card__brand">FOSSEE</span>
        <span className="auth-card__subtitle">Workshop Portal</span>
        <h2>Sign in</h2>
        <p className="panel-card__helper">Enter your credentials to continue</p>
        <label>
          Username
          <input type="text" placeholder="Username" />
        </label>
        <label>
          Password
          <div className="input-with-icon">
            <input type={showPassword ? 'text' : 'password'} placeholder="Password" />
            <button
              type="button"
              className="field-icon-btn"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              onClick={() => setShowPassword((value) => !value)}
            >
              {showPassword ? '🙈' : '👁'}
            </button>
          </div>
          <ul className="field-helper-list" aria-label="Password requirements">
            <li>At least 8 characters</li>
            <li>Contains a number</li>
            <li>Contains uppercase letter</li>
          </ul>
        </label>
        <p className="auth-card__link-row"><button type="button" className="text-button">Forgot password?</button></p>
        <button type="button" className="btn btn--solid">Sign In</button>
        <div className="panel-card__divider"><span>or</span></div>
        <p className="auth-card__foot">New around here? <button type="button" className="text-button" onClick={() => navigate('register')}>Register</button></p>
        <p className="panel-card__meta">© 2024 FOSSEE, IIT Bombay</p>
        </div>
      </div>
    </section>
  );
}

function RegisterPage({ navigate }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <section className="auth-screen" aria-label="Register page">
      <div className="auth-screen__hero">
        <h1>FOSSEE</h1>
        <p>Workshop Booking Portal</p>
        <small>by IIT Bombay</small>
        <ul>
          <li>Free workshops for all students</li>
          <li>Certified by IIT Bombay</li>
          <li>500+ workshops conducted</li>
        </ul>
      </div>
      <div className="auth-screen__panel">
      <div className="register-card register-card--exact">
        <span className="auth-card__brand">FOSSEE</span>
        <span className="auth-card__subtitle">Workshop Portal</span>
        <h2>Create account</h2>
        <div className="register-grid">
          <label>
            First Name
            <input type="text" placeholder="First Name" />
          </label>
          <label>
            Last Name
            <input type="text" placeholder="Last Name" />
          </label>
          <label>
            Email
            <input type="text" placeholder="Email" />
          </label>
          <label>
            Username
            <input type="text" placeholder="Username" />
          </label>
          <label>
            Institute Name
            <input type="text" placeholder="Institute Name" />
          </label>
          <label>
            Role
            <div className="select-wrap">
              <select defaultValue="" aria-label="Role">
                <option value="" disabled>Select role</option>
                <option value="computer engineering">Computer Science</option>
                <option value="information technology">Information Technology</option>
                <option value="civil engineering">Civil Engineering</option>
                <option value="electrical engineering">Electrical Engineering</option>
                <option value="mechanical engineering">Mechanical Engineering</option>
                <option value="chemical engineering">Chemical Engineering</option>
                <option value="aerospace engineering">Aerospace Engineering</option>
                <option value="biosciences and bioengineering">Biosciences and BioEngineering</option>
                <option value="electronics">Electronics</option>
                <option value="energy science and engineering">Energy Science and Engineering</option>
              </select>
              <span className="select-wrap__arrow" aria-hidden="true">▾</span>
            </div>
          </label>
          <label>
            Password
            <div className="input-with-icon">
              <input type={showPassword ? 'text' : 'password'} placeholder="Password" />
              <button
                type="button"
                className="field-icon-btn"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onClick={() => setShowPassword((value) => !value)}
              >
                {showPassword ? '🙈' : '👁'}
              </button>
            </div>
            <ul className="field-helper-list" aria-label="Password requirements">
              <li>At least 8 characters</li>
              <li>Contains a number</li>
              <li>Contains uppercase letter</li>
            </ul>
          </label>
          <label>
            Confirm Password
            <div className="input-with-icon">
              <input type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm Password" />
              <button
                type="button"
                className="field-icon-btn"
                aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                onClick={() => setShowConfirmPassword((value) => !value)}
              >
                {showConfirmPassword ? '🙈' : '👁'}
              </button>
            </div>
            <span className="field-helper">Re-enter the same password to confirm.</span>
          </label>
        </div>
        <button type="button" className="btn btn--solid">Create Account</button>
        <p className="auth-card__foot">Already have an account? <button type="button" className="text-button" onClick={() => navigate('login')}>Sign in</button></p>
      </div>
      </div>
    </section>
  );
}

function WorkshopsPage() {
  const [workshops, setWorkshops] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadError, setLoadError] = React.useState('');
  const [query, setQuery] = React.useState('');
  const [activeType, setActiveType] = React.useState('All');
  const [activeStatus, setActiveStatus] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('newest');

  React.useEffect(() => {
    const controller = new AbortController();

    const loadWorkshops = async () => {
      setIsLoading(true);
      setLoadError('');

      try {
        const response = await fetch('/workshop/api/workshops/', { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setWorkshops(Array.isArray(data.workshops) ? data.workshops : []);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setLoadError('Unable to load workshop data right now.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadWorkshops();

    return () => controller.abort();
  }, []);

  const filteredWorkshops = React.useMemo(() => {
    let results = [...workshops];

    if (activeType !== 'All') {
      results = results.filter((item) => item.type === activeType);
    }

    if (activeStatus !== 'All') {
      results = results.filter((item) => item.status === activeStatus);
    }

    if (query.trim()) {
      const term = query.trim().toLowerCase();
      results = results.filter((item) => {
        const haystack = `${item.title} ${item.type} ${item.status} ${item.durationLabel} ${item.dateLabel} ${item.coordinator}`.toLowerCase();
        return haystack.includes(term);
      });
    }

    results.sort((a, b) => {
      if (sortBy === 'oldest') {
        return new Date(a.date) - new Date(b.date);
      }
      if (sortBy === 'az') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'za') {
        return b.title.localeCompare(a.title);
      }
      return new Date(b.date) - new Date(a.date);
    });

    return results;
  }, [activeStatus, activeType, query, sortBy, workshops]);

  const workshopTypes = React.useMemo(() => {
    const types = workshops.map((item) => item.type).filter(Boolean);
    return ['All', ...Array.from(new Set(types))];
  }, [workshops]);

  const workshopStatuses = React.useMemo(() => {
    const statuses = workshops.map((item) => item.status).filter(Boolean);
    return ['All', ...Array.from(new Set(statuses))];
  }, [workshops]);

  const clearFilters = () => {
    setQuery('');
    setActiveType('All');
    setActiveStatus('All');
    setSortBy('newest');
  };

  return (
    <>
      <section className="workshops-screen" aria-label="Available workshops page">
        <div className="workshops-screen__panel">
          <h1>Available Workshops</h1>
          <p>Browse, filter, and find the workshop that fits your interests in seconds.</p>

          {loadError ? <p className="workshops-screen__note workshops-screen__note--error">{loadError}</p> : null}

          <label className="workshops-screen__search" aria-label="Search workshops">
            <input
              type="text"
              placeholder="Search workshops by name, type, mode, or duration"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <div className="workshops-screen__chips" aria-label="Workshop type filters">
            {workshopTypes.map((item) => (
              <button
                key={item}
                className={`chip ${activeType === item ? 'is-active' : ''}`}
                type="button"
                onClick={() => setActiveType(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="workshops-screen__chips" aria-label="Workshop status filters">
            {workshopStatuses.map((item) => (
              <button
                key={item}
                className={`chip ${activeStatus === item ? 'is-active' : ''}`}
                type="button"
                onClick={() => setActiveStatus(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="workshops-screen__toolbar">
            <p className="workshops-screen__result-count">Showing {filteredWorkshops.length} workshop{filteredWorkshops.length === 1 ? '' : 's'}</p>
            <div className="workshops-screen__sort">
              <span>Sort</span>
              <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} aria-label="Sort workshops">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="az">Name A-Z</option>
              <option value="za">Name Z-A</option>
            </select>
            </div>
            <button type="button" className="btn btn--muted" onClick={clearFilters}>Reset</button>
          </div>

          {isLoading ? (
            <div className="workshops-screen__empty" aria-live="polite">
              <h2>Loading workshops</h2>
              <p>Fetching the latest workshop records from the backend.</p>
            </div>
          ) : filteredWorkshops.length === 0 ? (
            <div className="workshops-screen__empty">
              <h2>No workshops match your filters</h2>
              <p>{workshops.length === 0 ? 'No workshop records are available yet.' : 'Try a broader search or clear filters to see all available workshops.'}</p>
              <button type="button" className="btn btn--solid" onClick={clearFilters}>Show All Workshops</button>
            </div>
          ) : (
            <div className="workshops-screen__cards" aria-label="Workshop results">
              {filteredWorkshops.map((workshop) => (
                <article key={workshop.id} className="workshops-card">
                  <div className="workshops-card__top">
                    <span className="workshops-card__type">{workshop.type}</span>
                    <span className={`workshops-card__status workshops-card__status--${workshop.status.toLowerCase()}`}>{workshop.status}</span>
                  </div>
                  <h3>{workshop.title}</h3>
                  <p>{workshop.durationLabel} | Coordinator: {workshop.coordinator}</p>
                  <div className="workshops-card__bottom">
                    <span>{workshop.dateLabel}</span>
                    <button type="button" className="btn btn--solid">View Details</button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="faq-strip">
        <div className="faq-strip__inner">
          <p className="faq-strip__label">FAQ</p>
          <h2 className="faq-strip__title">Frequently Asked Questions</h2>
          <div className="faq-grid faq-grid--compact">
            {faq.map((item) => <FaqItem key={item.q} question={item.q} answer={item.a} compact />)}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div>
          <h2>Stay updated on new workshops</h2>
          <p>Get notified when new workshops are announced</p>
        </div>
        <button type="button" className="btn btn--solid">View All Workshops</button>
      </section>
    </>
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
    <>
      <section className="stats-screen" aria-label="Workshop statistics dashboard">
        <aside className="stats-screen__filters">
          <h2>Filters</h2>
          <div className="stats-filter-group">
            <h3>State Range</h3>
            <label><input type="checkbox" /> 00-099</label>
            <label><input type="checkbox" /> 100-999</label>
          </div>

          <div className="stats-filter-group">
            <h3>Workshop Type</h3>
            <label><input type="checkbox" /> Python</label>
            <label><input type="checkbox" /> Scilab</label>
          </div>

          <div className="stats-filter-group">
            <h3>Location</h3>
            <label><input type="checkbox" /> City</label>
            <label><input type="checkbox" /> State</label>
          </div>

          <div className="stats-filter-group">
            <h3>Sort by</h3>
            <label><input type="radio" name="sort" /> Date</label>
            <label><input type="radio" name="sort" /> Latest</label>
          </div>

          <button type="button" className="btn btn--solid">Apply</button>
          <button type="button" className="btn btn--muted">Clear All</button>
          <button type="button" className="btn btn--muted">Download</button>
        </aside>

        <div className="stats-screen__content">
          <div className="stats-screen__cards">
            <article className="stats-kpi"><h3>Total Workshops</h3><strong>0</strong></article>
            <article className="stats-kpi"><h3>Total Reports</h3><strong>0</strong></article>
            <article className="stats-kpi"><h3>Most Popular</h3><strong>N/A</strong></article>
          </div>

          <section className="stats-chart-card">
            <div className="stats-chart-card__head">
              <h3>Workshop Distribution</h3>
              <span>type</span>
            </div>
            <div className="stats-chart">
              <div className="stats-chart__bar" style={{ width: '18%' }}>
                <span>Python</span>
                <span>100% workshops</span>
              </div>
            </div>
          </section>

          <section className="stats-table-card">
            <div className="stats-table-card__head">
              <h3>Showing 0 results</h3>
              <button type="button" className="stats-page-btn">1</button>
            </div>
            <table>
              <thead>
                <tr><th>S No.</th><th>State</th><th>Coordinator Name</th><th>Institute Name</th><th>Instructor Name</th><th>Workshop Name</th><th>Workshop Date</th></tr>
              </thead>
              <tbody>
                <tr><td colSpan={7} className="stats-table-empty">No records match your filters</td></tr>
              </tbody>
            </table>
            <div className="stats-table-card__pagination">
              <button type="button" className="stats-page-btn">1</button>
            </div>
          </section>
        </div>
      </section>

      <section className="faq-strip">
        <div className="faq-strip__inner">
          <p className="faq-strip__label">FAQ</p>
          <h2 className="faq-strip__title">Frequently Asked Questions</h2>
          <div className="faq-grid faq-grid--compact">
            {faq.map((item) => <FaqItem key={item.q} question={item.q} answer={item.a} compact />)}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div>
          <h2>Stay updated on new workshops</h2>
          <p>Get notified when new workshops are announced</p>
        </div>
        <button type="button" className="btn btn--solid">View All Workshops</button>
      </section>
    </>
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
              <li><button type="button" className="text-button text-button--footer" onClick={() => navigate('register')}>Register</button></li>
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
        <div className="site-footer__initiative" aria-label="Institution footer badges">
          <img className="site-footer__mini-icon" src="https://fossee.in/sites/all/themes/software_responsive_theme/img/iitb-logo.png" alt="IIT Bombay" />
          <img className="site-footer__mini-logo" src="https://fossee.in/sites/all/themes/software_responsive_theme/img/logo.png" alt="FOSSEE" />
          <span>MoE Govt. of India</span>
        </div>
        <p className="site-footer__copy">An initiative of IIT Bombay under the National Mission on Education</p>
        <p className="site-footer__copy">© 2026 FOSSEE, IIT Bombay. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FaqItem({ question, answer, compact = false }) {
  const [open, setOpen] = React.useState(false);
  return (
    <article className={compact ? 'faq-item faq-item--compact' : 'faq-item'}>
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span>{question}</span>
        <span aria-hidden="true">▾</span>
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
