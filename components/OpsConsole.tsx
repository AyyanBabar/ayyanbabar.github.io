"use client";

import { useMemo, useState } from "react";
import { profile } from "@/lib/profile";

export function OpsConsole() {
  const [activeIndex, setActiveIndex] = useState(0);
  const incident = profile.incidents[activeIndex];

  const health = useMemo(() => {
    const base = incident.severity === "contained" ? 92 : incident.severity === "degraded" ? 68 : 81;
    return {
      ingest: base,
      replay: Math.min(99, base + 5),
      security: incident.severity === "contained" ? 95 : 76
    };
  }, [incident.severity]);

  return (
    <section className="ops-console" aria-label="Interactive operations dossier">
      <div className="console-left">
        <div className="console-kicker">live runbook</div>
        <h2>Operate the system before you describe it.</h2>
        <p>
          This portfolio is framed like the work itself: diagnose the path, isolate the bad signal,
          preserve the data, and keep the customer-facing stream honest.
        </p>

        <div className="incident-tabs" aria-label="Incident scenarios">
          {profile.incidents.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              <span>{item.id}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="console-screen">
        <div className="screen-top">
          <span>ops://ayyan/runbook/{incident.id.toLowerCase()}</span>
          <strong>{incident.severity}</strong>
        </div>

        <div className="health-grid">
          <div>
            <span>ingest</span>
            <meter min="0" max="100" value={health.ingest}>{health.ingest}</meter>
            <strong>{health.ingest}%</strong>
          </div>
          <div>
            <span>replay</span>
            <meter min="0" max="100" value={health.replay}>{health.replay}</meter>
            <strong>{health.replay}%</strong>
          </div>
          <div>
            <span>security</span>
            <meter min="0" max="100" value={health.security}>{health.security}</meter>
            <strong>{health.security}%</strong>
          </div>
        </div>

        <pre>{incident.log.join("\n")}</pre>

        <div className="console-route" aria-hidden="true">
          {incident.route.map((step) => <span key={step}>{step}</span>)}
        </div>
      </div>
    </section>
  );
}
