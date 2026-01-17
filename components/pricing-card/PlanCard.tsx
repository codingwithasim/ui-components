import { PlanCardProps } from "./types";


export function PlanCard({
  plan,
  price,
  period,
  description,
  features,
  badge,
  cta,
  size = "standard",
}: PlanCardProps) {
  const isCompact = size === "compact";

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white ${
        isCompact ? "p-5" : "p-8"
      } shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)]`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-emerald-300 via-sky-300 to-cyan-300" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 ${
              isCompact ? "text-[10px]" : ""
            }`}
          >
            {plan}
          </span>
          {badge ? (
            <span
              className={`rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ${
                isCompact ? "px-2 text-[10px]" : ""
              }`}
            >
              {badge}
            </span>
          ) : null}
        </div>
        <div className={`${isCompact ? "mt-4" : "mt-6"} flex items-end gap-2`}>
          <span
            className={`${
              isCompact ? "text-3xl" : "text-4xl"
            } font-semibold text-slate-900`}
          >
            {price}
          </span>
          <span
            className={`${isCompact ? "text-xs" : "text-sm"} text-slate-500`}
          >
            {period}
          </span>
        </div>
        <p
          className={`${
            isCompact ? "mt-2 text-xs" : "mt-3 text-sm"
          } text-slate-500`}
        >
          {description}
        </p>
        <ul
          className={`${
            isCompact ? "mt-5 space-y-2 text-xs" : "mt-6 space-y-3 text-sm"
          } text-slate-700`}
        >
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span
                className={`mt-2 rounded-full bg-emerald-500 ${
                  isCompact ? "h-1.5 w-1.5" : "h-2 w-2"
                }`}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={`${
            isCompact ? "mt-6 py-2.5 text-xs" : "mt-8 py-3 text-sm"
          } w-full rounded-full bg-slate-900 font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800`}
        >
          {cta}
        </button>
        <p
          className={`${
            isCompact ? "mt-3 text-[10px]" : "mt-4 text-xs"
          } text-center text-slate-500`}
        >
          Cancel anytime. 14-day free trial.
        </p>
      </div>
    </div>
  );
}
