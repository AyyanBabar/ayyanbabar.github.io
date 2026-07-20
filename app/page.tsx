import { OpsConsole } from "@/components/OpsConsole";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/lib/profile";

const nav = [
  { label: "Runbook", href: "#runbook" },
  { label: "Evidence", href: "#evidence" },
  { label: "Security", href: "#security" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" }
];

function Blueprint() {
  return (
    <div className="blueprint" aria-label="System blueprint">
      <div className="blueprint-label">
        <span>field diagram</span>
        <strong>industrial telemetry path</strong>
      </div>
      <div className="blueprint-track">
        <span>OPC</span>
        <i />
        <span>IoT Hub</span>
        <i />
        <span>Event Hub</span>
        <i />
        <span>Kafka</span>
        <i />
        <span>ADX</span>
        <i />
        <span>API</span>
      </div>
      <div className="blueprint-notes">
        <p>validate before trust</p>
        <p>retain offsets for replay</p>
        <p>keep failures observable</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="mark" href="#top" aria-label={`${profile.name} home`}>
          <span>AB</span>
          <strong>{profile.name}</strong>
        </a>
        <nav aria-label="Primary navigation">
          {nav.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <a className="mail-link" href={`mailto:${profile.email}`}>open channel</a>
      </header>

      <section className="hero" id="top">
        <Reveal className="case-id">
          <span>portfolio file</span>
          <strong>AYYAN / DATA SYSTEMS / SECURITY-AWARE ENGINEERING</strong>
        </Reveal>

        <Reveal className="hero-main">
          <div className="hero-copy">
            <p className="eyebrow">production systems, not portfolio theater</p>
            <h1>{profile.headline}</h1>
            <p>{profile.summary}</p>
            <div className="hero-actions">
              <a className="button dark" href="#runbook">Open runbook</a>
              <a className="button plain" href="#evidence">Read evidence</a>
            </div>
          </div>
          <Blueprint />
        </Reveal>

        <Reveal className="stat-strip">
          {profile.highlights.map((item) => (
            <div key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <div id="runbook">
        <OpsConsole />
      </div>

      <section className="section evidence" id="evidence">
        <Reveal className="section-rail">
          <span>evidence ledger</span>
          <h2>Actual operating problems, not decorative buzzwords.</h2>
        </Reveal>

        <div className="ledger">
          {profile.caseStudies.map((item, index) => (
            <Reveal className="ledger-row" key={item.title}>
              <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <small>{item.context}</small>
                <h3>{item.title}</h3>
                <p>{item.result}</p>
              </div>
              <ul>
                {item.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section capability-section">
        <Reveal className="section-rail">
          <span>capability map</span>
          <h2>The through-line is reliability under pressure.</h2>
        </Reveal>

        <div className="capability-stack">
          {profile.capabilities.map((item) => (
            <Reveal className="capability-file" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <strong>{item.proof}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section security-memo" id="security">
        <Reveal className="memo-heading">
          <span>security memo</span>
          <h2>Security is a behavior of the data path.</h2>
          <p>
            I am not presenting cybersecurity as a badge pasted onto the page. The point is to
            build systems that assume malformed payloads, abnormal access, replay needs, and
            investigation trails are part of production.
          </p>
        </Reveal>
        <Reveal className="memo-list">
          {profile.securitySignals.map((signal) => <p key={signal}>{signal}</p>)}
        </Reveal>
      </section>

      <section className="section stack-manifest" id="stack">
        <Reveal className="section-rail">
          <span>stack manifest</span>
          <h2>Tools I use when the system has to explain itself.</h2>
        </Reveal>
        <div className="manifest-grid">
          {profile.stackGroups.map((group) => (
            <Reveal className="manifest-column" key={group.title}>
              <h3>{group.title}</h3>
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section principles">
        {profile.principles.map((principle) => (
          <Reveal className="principle-line" key={principle}>
            <span />
            <p>{principle}</p>
          </Reveal>
        ))}
      </section>

      <footer className="footer" id="contact">
        <Reveal>
          <span>contact</span>
          <h2>Send the messy system. I prefer the real one.</h2>
          <p>{profile.availability}</p>
        </Reveal>
        <Reveal className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn / update URL</a>
        </Reveal>
      </footer>
    </main>
  );
}
