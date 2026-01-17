export type PlanCardProps = {
  plan: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  badge?: string;
  cta: string;
  size?: "standard" | "compact";
};