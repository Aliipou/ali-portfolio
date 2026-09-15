// Source of truth for every factual claim on this site: profile.yaml and
// projects.yaml in the JobAgent project (D:\jobagent) — the same vetted data
// used for real job applications, QA-checked against the actual repos.

export const identity = {
  name: "Ali Pourrahim",
  role: "Software Engineer",
  location: "Helsinki, Finland",
  email: "alipourrahim.ap@gmail.com",
  github: "https://github.com/Aliipou",
  linkedin: "https://linkedin.com/in/ali-pourrahim",
  summary:
    "Recent B.Eng. graduate (Information Technology, Centria, 2026) who builds " +
    "production-grade backend systems, full-stack products and infrastructure — " +
    "Python/FastAPI and Go, React and TypeScript, Kubernetes and cloud — with a " +
    "strong testing and observability habit. Independently formally-verified a " +
    "capability-security kernel in Rust and Lean4.",
};

export const education = {
  degree: "B.Eng. Information Technology",
  school: "Centria University of Applied Sciences, Kokkola, Finland",
  dates: "2023–2026",
  detail:
    "348 ECTS completed (240 required). Thesis: Multi-Tenancy in Kubernetes for SaaS Applications (grade 4/5).",
};

export const experience = [
  {
    org: "Kpedu (AIMlearningProject, EU co-funded)",
    role: "Software Developer Intern",
    dates: "Oct 2025 – Dec 2025",
    location: "Kokkola, Finland",
    bullets: [
      "Built Lukudiplomi, a reading-diploma game with 2,000+ active users, as both a web app and a React Native (Expo) mobile app for Android and iOS.",
      "Implemented backend logic, database modeling, authentication, and deployment on a Node.js (Fastify) + PostgreSQL/Prisma + Redis stack.",
    ],
  },
  {
    org: "Peero AB",
    role: "Full-Stack Developer",
    dates: "Jul 2025 – Aug 2025",
    location: "Kokkola, Finland",
    bullets: [
      "Fixed bugs and improved the UI of a meal-ordering system handling ~100–150 meals/day.",
      "Automated admin data workflows (Excel upload, PDF label printing); added RBAC and multilingual support.",
    ],
  },
  {
    org: "TechNova",
    role: "Backend Developer Intern",
    dates: "Jan 2025 – May 2025",
    location: "Warsaw, Poland (remote)",
    bullets: [
      "Built scalable APIs with FastAPI and Django, including authentication.",
      "Optimized database queries and wrote automated tests.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  facts: string[];
  stack: string[];
  repo: string;
  demo?: string;
};

// The strongest, most-demonstrative work — shown as full case studies.
export const featured: Project[] = [
  {
    slug: "asuntohaku-gate",
    name: "asuntohaku-gate",
    tagline:
      "A housing search and eligibility-application platform for a Finnish non-profit housing operator, across four regulated housing forms.",
    facts: [
      "Full pipeline driven live end to end against the real deployment: search → application → adaptive eligibility form → rule-engine decision with cited evidence → admin ranking by need, wealth and income — every outcome backed by a rule id and the exact numbers compared.",
      "10-table Postgres schema with meaning encoded in the DDL: rent/price XOR constraint, a row-locking trigger that makes viewing-capacity overbooking structurally impossible under concurrency.",
      "14-rule eligibility engine, every rule a pure function of (application, apartment, limits) — no clock, session or database read inside a rule — with a generated rule catalogue CI fails on drift against.",
      "Deployed on Vercel (Neon Postgres) as two projects, frontend and API; CI runs backend (ruff, mypy strict, pytest) and frontend (eslint, tsc, vitest, next build) independently.",
    ],
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Next.js", "TypeScript", "MapLibre GL"],
    repo: "https://github.com/Aliipou/asuntohaku-gate",
    demo: "https://asuntohaku-gate-web.vercel.app",
  },
  {
    slug: "authgate-kernel",
    name: "authgate-kernel",
    tagline: "A formally-verified capability-security kernel (TCB) for AI agents.",
    facts: [
      "1,096 tests; zero use of `sorry` anywhere in the Lean4 proofs.",
      "Typed SemanticGate trait and a RightsViolationMetric — authority is a first-class, provable property, not a runtime check bolted on after the fact.",
    ],
    stack: ["Rust", "Lean4", "TLA+"],
    repo: "https://github.com/Aliipou/authgate-kernel",
    demo: "https://ali-authgate-kernel.vercel.app",
  },
  {
    slug: "pipelineguard",
    name: "PipelineGuard",
    tagline: "Async multi-tenant SaaS backend that detects silent data-pipeline failures before anyone notices the data is wrong.",
    facts: [
      "346 tests; RS256 JWT auth; RBAC (VIEWER < MEMBER < ADMIN < OWNER); Clean Architecture with Protocol ports.",
      "Silent-failure detection: a run reporting SUCCEEDED with zero records processed is re-classified and alerted CRITICAL.",
      "Latency drift caught via rolling p50/p95 + z-score anomaly detection, not a static threshold.",
    ],
    stack: ["FastAPI", "PostgreSQL", "Celery", "Redis", "Prometheus", "Grafana", "Terraform"],
    repo: "https://github.com/Aliipou/PipelineGuard",
    demo: "https://ali-pipelineguard.vercel.app",
  },
  {
    slug: "logforge",
    name: "LogForge",
    tagline: "A log-analytics pipeline: Kafka-buffered ingestion, full-text-searchable Postgres storage, and real-time alerting.",
    facts: [
      "Four services (ingestion, processor, query, alerting) connected by a dead-letter queue with idempotent re-delivery.",
      "Redis rate limiting and query caching in front of the search path.",
    ],
    stack: ["FastAPI", "Kafka", "PostgreSQL", "Redis", "Docker"],
    repo: "https://github.com/Aliipou/logforge",
    demo: "https://ali-logforge.vercel.app",
  },
  {
    slug: "multitenancy-k8s",
    name: "Multi-Tenant Kubernetes Platform",
    tagline: "Namespace-based multi-tenant isolation on Kubernetes — his thesis, extended into a research project.",
    facts: [
      "Three formally-defined metrics: Interference Index, Resource Fairness Deviation, Autoscaling Stability Score.",
      "A federated-learning extension with differential privacy and Byzantine-robust aggregation; 111 tests at 100% coverage.",
    ],
    stack: ["Kubernetes", "Helm", "RBAC", "NetworkPolicy", "AWS"],
    repo: "https://github.com/Aliipou/multi-tenancy-kubernet",
  },
  {
    slug: "ride-startup",
    name: "Ride & Chill",
    tagline: "A bike-taxi platform: rider, driver and admin PWAs on one FastAPI backend with live WebSocket ride tracking.",
    facts: [
      "Installable PWAs for iOS and Android; Stripe payments, Mapbox navigation, phone OTP and Google OAuth.",
      "Admin KPI dashboard with CSV exports.",
    ],
    stack: ["FastAPI", "PostgreSQL", "Redis", "Next.js", "WebSocket", "Stripe"],
    repo: "https://github.com/Aliipou/ride-startup",
    demo: "https://ride-startup.vercel.app",
  },
];

// Everything else — real, shipped, just not given a full case study here.
export const more: Project[] = [
  {
    slug: "streaming-data-pipeline",
    name: "streaming-data-pipeline",
    tagline: "Real-time sensor-event pipeline in Go: Kafka consumer groups, layered anomaly detection, WebSocket broadcast.",
    facts: [],
    stack: ["Go", "Kafka", "PostgreSQL", "WebSocket"],
    repo: "https://github.com/Aliipou/streaming-data-pipeline",
    demo: "https://ali-streaming-data-pipeline.vercel.app",
  },
  {
    slug: "distributedjobscheduler",
    name: "distributedJobscheduler",
    tagline: "Distributed job scheduler: Redis-backed queues, PostgreSQL persistence, cron scheduling, stateless workers.",
    facts: [],
    stack: ["Go", "Gin", "PostgreSQL", "Redis"],
    repo: "https://github.com/Aliipou/distributedJobscheduler",
    demo: "https://ali-distributedjobscheduler.vercel.app",
  },
  {
    slug: "observability-platform",
    name: "observability-platform",
    tagline: "OpenTelemetry tracing, Prometheus metrics, Grafana dashboards and Alertmanager routing, correlated by trace ID.",
    facts: [],
    stack: ["Go", "OpenTelemetry", "Prometheus", "Grafana", "Jaeger"],
    repo: "https://github.com/Aliipou/observability-platform",
    demo: "https://observability-platform-demo.vercel.app",
  },
  {
    slug: "cloudcostguard",
    name: "cloudcostguard",
    tagline: "CLI that scans AWS and Azure for wasted resources and reports monthly and annual savings.",
    facts: [],
    stack: ["Go", "AWS", "Azure"],
    repo: "https://github.com/Aliipou/cloudcostguard",
    demo: "https://ali-cloudcostguard.vercel.app",
  },
  {
    slug: "azure-calibration",
    name: "Azure Calibration Platform",
    tagline: "Multi-tenant ISO 17025 calibration-records platform: measurement ingestion, anomaly flagging, certificate generation.",
    facts: [],
    stack: ["FastAPI", "PostgreSQL", "Azure Container Apps", "KEDA", "Terraform"],
    repo: "https://github.com/Aliipou/azure-portfolio",
    demo: "https://ali-cloud-calibration.vercel.app",
  },
  {
    slug: "cascade-conformal",
    name: "cascade-conformal",
    tagline: "Provably valid end-to-end prediction sets for multi-stage ML pipelines (research).",
    facts: [],
    stack: ["Python", "conformal prediction"],
    repo: "https://github.com/Aliipou/cascade-conformal",
    demo: "https://ali-cascade-conformal.vercel.app",
  },
  {
    slug: "haiip",
    name: "HAIIP",
    tagline: "Industrial AI platform for Nordic SMEs: predictive maintenance and anomaly detection, designed for EU AI Act compliance.",
    facts: [],
    stack: ["Python", "PyTorch", "FastAPI", "Streamlit"],
    repo: "https://github.com/Aliipou/HAIIP",
  },
  {
    slug: "student-retention",
    name: "Student-Retention-Prediction",
    tagline: "End-to-end ML system flagging students at dropout risk early enough to intervene.",
    facts: [],
    stack: ["scikit-learn", "SHAP", "FastAPI", "Streamlit"],
    repo: "https://github.com/Aliipou/Student-Retention-Prediction",
  },
  {
    slug: "finnish-nlp",
    name: "Finnish-nlp-2.0",
    tagline: "Finnish NLP API: morphological analysis across all 15 grammatical cases, verb conjugation, text normalization.",
    facts: [],
    stack: ["FastAPI", "Voikko", "spaCy", "PostgreSQL"],
    repo: "https://github.com/Aliipou/Finnish-nlp-2.0",
  },
  {
    slug: "culture-identifier",
    name: "culture-identifier",
    tagline: "Matches a user's writing style to French literary figures via semantic vectors.",
    facts: [],
    stack: ["sentence-transformers"],
    repo: "https://github.com/Aliipou/culture-identifier",
    demo: "https://culture-identifier.vercel.app",
  },
  {
    slug: "fingrid-dashboard",
    name: "Fingrid-dashboard",
    tagline: "Real-time grid monitoring on Fingrid's (the Finnish national grid operator) open real-time API.",
    facts: [],
    stack: ["FastAPI", "Redis", "Kubernetes"],
    repo: "https://github.com/Aliipou/Fingrid-dashboard",
  },
  {
    slug: "soite-feedback",
    name: "Soite feedback kiosk",
    tagline: "Anonymous, offline-first patient-feedback kiosk (PWA) for a Finnish home rehabilitation team.",
    facts: [],
    stack: ["FastAPI", "PostgreSQL", "React", "TypeScript"],
    repo: "https://github.com/Aliipou/soite-feedback",
  },
  {
    slug: "maze-solution-app",
    name: "maze-solution-app",
    tagline: "IoT maze game: ESP32 firmware with Hall-effect sensors, a Go REST API, React dashboard, React Native app.",
    facts: [],
    stack: ["Go", "React", "React Native", "C++", "ESP32"],
    repo: "https://github.com/Aliipou/maze-solution-app",
  },
  {
    slug: "lukudiplomi",
    name: "Lukudiplomi",
    tagline: "Reading-diploma game where students log books to advance on an adaptive game board — 2,000+ active users.",
    facts: [],
    stack: ["React Native", "Expo", "React", "Fastify", "PostgreSQL"],
    repo: "https://github.com/AIMlearningProject/game-diploma-project",
  },
];

export const skills = {
  Languages: ["Python", "Go", "TypeScript", "Rust", "Lean4"],
  Backend: ["FastAPI", "Django", "Fastify", "Celery"],
  Frontend: ["React", "Next.js", "React Native / Expo"],
  Data: ["PostgreSQL", "Redis", "Kafka"],
  "Cloud & infra": ["Kubernetes", "Docker", "Terraform", "AWS", "Azure"],
  "Formal & security": ["Lean4", "TLA+", "capability security"],
};

export const certifications = [
  "Linux Foundation Certified System Administrator (LFCS)",
  "AWS Cloud Practitioner Essentials",
  "CS50 (Harvard)",
];
