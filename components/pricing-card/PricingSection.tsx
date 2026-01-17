import { PlanCard } from "./PlanCard";

const plans = [
  {
    plan: "Starter",
    price: "$12",
    period: "/month",
    description: "For solo builders validating a product idea.",
    features: [
      "Unlimited projects and team spaces",
      "Basic analytics and usage insights",
      "Community support with weekly updates",
      "Starter templates and onboarding flows",
    ],
    cta: "Start free trial",
  },
  {
    plan: "Pro",
    price: "$29",
    period: "/month",
    description: "For fast-moving product teams shipping weekly.",
    features: [
      "Custom domain with auto SSL",
      "Real-time analytics dashboards",
      "Priority support with 2-hour SLA",
      "Role-based access controls",
    ],
    badge: "Most Popular",
    cta: "Get Started",
  },
  {
    plan: "Scale",
    price: "$79",
    period: "/month",
    description: "For multi-team orgs scaling across markets.",
    features: [
      "Dedicated account success partner",
      "Advanced security and audit logs",
      "Multi-region performance routing",
      "Quarterly roadmap reviews",
    ],
    cta: "Book a demo",
  },
];

const included = [
  "Unlimited seats on every tier",
  "Guided migration assistance",
  "99.99% uptime SLA",
  "API access with webhooks",
];


export default function PricingSection() {
  return (
    <section
      aria-labelledby="pricing-title"
      className="relative min-h-screen overflow-hidden px-6 py-20 font-sans sm:px-10"
    >
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-sky-50" />
      <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_10%_10%,rgba(14,116,144,0.08),transparent_60%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Pricing
            </p>
            <h2
              id="pricing-title"
              className="text-3xl font-semibold text-slate-900 sm:text-4xl"
            >
              Plans that scale from pilot to global launch.
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Pick a plan built for velocity today, then scale into advanced
              governance, security, and performance as you grow.
            </p>
          </div>
          <div className="flex items-center w-fit gap-2 rounded-full border border-slate-200 bg-white/80 p-1 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">
            <button
              type="button"
              className="rounded-full bg-slate-900 px-4 py-2 text-white shadow-sm"
            >
              Monthly
            </button>
            <button type="button" className="rounded-full px-4 py-2">
              Annual -20%
            </button>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <PlanCard {...plans[0]} />
          <div className="lg:-translate-y-6">
            <PlanCard {...plans[1]} />
          </div>
          <PlanCard {...plans[2]} />
        </div>

       
      </div>
    </section>
  );
}
