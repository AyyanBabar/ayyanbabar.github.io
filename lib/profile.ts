export const profile = {
  name: "Ayyan Babar",
  role: "Data Systems Engineer",
  email: "ayyan.babar@octopusdtl.com",
  linkedin: "https://www.linkedin.com",
  headline: "I build reliable real-time data systems for industrial operations.",
  summary:
    "I work where backend engineering, cloud data platforms, industrial telemetry, and cybersecurity awareness meet. My focus is production systems: clean ingestion, reliable streaming, observable failures, and recovery paths that teams can actually operate.",
  availability: "Open to data engineering, backend, IoT, and security-focused systems work.",
  highlights: [
    { value: "100k+", label: "high-volume telemetry points handled per second" },
    { value: "~2s", label: "target latency after replacing slower batch paths" },
    { value: "50+", label: "customer streams designed for scalable delivery" },
    { value: "CEH", label: "cybersecurity foundation through EC-Council certification" }
  ],
  capabilities: [
    {
      title: "Real-time data engineering",
      description:
        "Designing ingestion paths for IoT and industrial data using Azure IoT Hub, Event Hub, Azure Functions, ADX, Kafka, WebSockets, and Python services.",
      proof: "Built low-latency telemetry paths with schema handling, replay, customer stream separation, and KQL-ready storage."
    },
    {
      title: "Backend and platform reliability",
      description:
        "Building APIs, workers, monitoring flows, retry behavior, and operational tooling around systems that cannot silently fail.",
      proof: "Worked on watchdogs, reconnect/replay behavior, validation scripts, and failure-focused system visibility."
    },
    {
      title: "Cybersecurity-aware architecture",
      description:
        "Applying security thinking to data systems: identity boundaries, payload validation, anomaly detection, rate limits, audit trails, and incident recovery.",
      proof: "CEH-certified and actively shaping systems around safe ingestion, quarantine paths, and traceable operational behavior."
    }
  ],
  caseStudies: [
    {
      title: "Industrial IoT telemetry pipeline",
      context: "Azure IoT Hub, Event Hub, Azure Functions, ADX",
      result: "Moved industrial telemetry toward live analytics with clean mapping, streaming ingestion, and query-ready storage.",
      details: ["Large tag payload handling", "Low-latency transform path", "ADX/KQL-ready modeling"]
    },
    {
      title: "Kafka stream distribution layer",
      context: "Kafka, retention, WebSockets, customer delivery",
      result: "Reduced dependence on repeated polling by designing a stream distribution layer with replay and consumer-focused delivery.",
      details: ["Customer-topic separation", "Reconnect recovery", "Replay from retained offsets"]
    },
    {
      title: "Edge monitoring and watchdog visibility",
      context: "Docker, Windows metrics, logs, device health",
      result: "Improved operational confidence by collecting service health, logs, ping checks, internet speed, and machine-level metrics.",
      details: ["Container health visibility", "Windows exporter metrics", "Edge failure detection"]
    },
    {
      title: "Raw vs ADX validation tooling",
      context: "Python, timestamp alignment, data quality",
      result: "Built comparison tooling to isolate missing values, nulls, timestamp-window mismatches, and export useful reports.",
      details: ["Fault filtering", "Time-window comparison", "Excel-ready mismatch exports"]
    }
  ],
  securitySignals: [
    "Payload validation and schema-drift detection before trusted storage",
    "Rate limiting and identity-aware API boundary design",
    "Quarantine paths for malformed or suspicious telemetry",
    "Audit-friendly logs for replay, recovery, and investigation",
    "Sentinel-style thinking for impossible travel and anomalous access patterns"
  ],
  incidents: [
    {
      id: "INC-204",
      label: "payload drift",
      severity: "contained",
      route: ["OPC", "IoT Hub", "Validate", "Quarantine", "ADX"],
      log: [
        "10:42:11 schema drift detected on telemetry frame",
        "10:42:13 invalid payload moved to quarantine topic",
        "10:42:15 trusted offset preserved for replay",
        "10:42:18 clean stream resumed to ADX"
      ]
    },
    {
      id: "INC-317",
      label: "stream lag",
      severity: "degraded",
      route: ["Event Hub", "Kafka", "Consumer", "Replay", "Client"],
      log: [
        "14:06:02 consumer lag crossed operating threshold",
        "14:06:05 replay window pinned to retained offsets",
        "14:06:09 websocket stream switched to newest trusted data",
        "14:06:16 backlog returning to normal range"
      ]
    },
    {
      id: "INC-451",
      label: "credential spray",
      severity: "contained",
      route: ["API", "Rate Limit", "Identity", "Alert", "Audit"],
      log: [
        "02:18:41 abnormal login spread detected at API edge",
        "02:18:43 rate limit tightened for suspect identity set",
        "02:18:47 alert context written for investigation",
        "02:18:52 customer stream remains isolated"
      ]
    }
  ],
  stackGroups: [
    { title: "Languages", items: ["Python", "TypeScript", "SQL", "KQL"] },
    { title: "Backend", items: ["FastAPI", "WebSockets", "Workers", "REST APIs"] },
    { title: "Data", items: ["ADX", "Event Hub", "Kafka", "Polars"] },
    { title: "Cloud and Ops", items: ["Azure", "IoT Hub", "Docker", "Monitoring"] },
    { title: "Security", items: ["CEH", "Validation", "Rate limits", "Quarantine"] }
  ],
  principles: [
    "Measure production behavior before guessing.",
    "Treat bad data as a normal operating condition.",
    "Make failures visible, explainable, and recoverable.",
    "Design systems that operators can understand under pressure."
  ]
};
