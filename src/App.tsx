import React from 'react';
import './styles.css';

const features = [
  {
    title: 'Unified customer view',
    description:
      'Bring tickets, call transcripts, and account history into a single workspace so agents can resolve issues faster.',
  },
  {
    title: 'AI-assisted workflows',
    description:
      'Automated summaries and suggested replies keep your team focused on meaningful conversations instead of manual updates.',
  },
  {
    title: 'Realtime reliability',
    description:
      'Monitor service uptime, SLA adherence, and routing health at a glance with built-in analytics and alerts.',
  },
];

const plans = [
  { name: 'Starter', price: '$29', detail: 'Perfect for small teams that need quick setup.' },
  { name: 'Growth', price: '$79', detail: 'Advanced routing, analytics, and AI suggestions.' },
  { name: 'Scale', price: 'Let\'s chat', detail: 'Custom rollouts, white-glove onboarding, and dedicated support.' },
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="badge">Tricetel platform</p>
        <h1>Delight customers with responsive support</h1>
        <p className="lede">
          Coordinate every customer touchpoint in one intuitive console. Tricetel keeps your team aligned and your
          customers heard.
        </p>
        <div className="cta-group">
          <button className="primary">Book a demo</button>
          <button className="ghost">See pricing</button>
        </div>
      </header>

      <section className="panel">
        <h2>Why teams choose Tricetel</h2>
        <div className="grid">
          {features.map((feature) => (
            <article key={feature.title} className="card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Plans that meet you where you are</h2>
        <div className="plans">
          {plans.map((plan) => (
            <article key={plan.name} className="plan-card">
              <header>
                <p className="plan-name">{plan.name}</p>
                <p className="plan-price">{plan.price}</p>
              </header>
              <p className="plan-detail">{plan.detail}</p>
              <button className="secondary">Talk to sales</button>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">Built with React + Vite</footer>
    </div>
  );
}
