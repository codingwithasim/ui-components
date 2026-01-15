# UI Components Library

This repository contains reusable **UI components for SaaS and web applications** built with **Next.js and Tailwind CSS**.  
Each component is designed to be **highly visual, responsive, and Pinterest-ready**.

---

## 📂 Components

| Component           | Description                                        | Screenshot                 |
|--------------------|----------------------------------------------------|----------------------------|
| Pricing Card        | Simple SaaS pricing card with plan name, price, features, and CTA button | `components/pricing-card/screenshot.png` |
| Hero Section        | Minimal landing page hero with headline, subheadline, CTA | TBD                        |
| Dashboard Card      | Card for displaying stats or key metrics in dashboards | TBD                        |

> More components coming soon!

---

## ⚡ Usage

Import the component into your Next.js project:

```ts
import PricingCard from '../components/pricing-card/PricingCard';

function Page() {
  return <PricingCard />;
}
