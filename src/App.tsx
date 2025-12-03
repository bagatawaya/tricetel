import './App.css';

const features = [
  {
    title: 'Fast start',
    description: 'Vite + React + TypeScript set up for quick iteration and modern DX.',
  },
  {
    title: 'Typed from the core',
    description: 'Strict TypeScript settings catch issues early while you prototype.',
  },
  {
    title: 'UI ready',
    description: 'Pre-styled layout with accessible controls you can customize.',
  },
  {
    title: 'Deployable',
    description: 'Production build via `npm run build` outputs an optimized bundle.',
  },
];

export default function App() {
  return (
    <div className="app">
      <main className="card" aria-label="Trice demo overview">
        <div className="header">
          <div>
            <span className="badge" aria-label="Tech stack">
              <span aria-hidden>⚡</span> Vite + React + TS
            </span>
            <h1 className="heading">Trice Demo Starter</h1>
            <p className="subtitle">
              A polished starting point for experimenting with UI ideas, showcasing features, or
              integrating APIs. Build on top of this structure to ship quickly with confidence.
            </p>
          </div>
          <div className="actions">
            <a className="button primary" href="mailto:team@trice.example" aria-label="Contact team">
              <span aria-hidden>✉️</span>
              Contact team
            </a>
            <a
              className="button secondary"
              href="https://vitejs.dev/guide/"
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden>📘</span>
              Vite guide
            </a>
          </div>
        </div>

        <section className="content" aria-label="Feature highlights">
          {features.map((feature) => (
            <article className="feature" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </section>

        <section className="meta" aria-label="Project meta">
          <div>
            <strong>Scripts:</strong> npm run dev · npm run build · npm run preview
          </div>
          <div>
            <strong>Next steps:</strong> add API data, wire in routing, and plug your own branding.
          </div>
        </section>
      </main>
    </div>
  );
}
