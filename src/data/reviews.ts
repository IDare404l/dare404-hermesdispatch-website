export interface Review {
  productSlug: string;
  author: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  verified?: boolean;
}

export const reviews: Review[] = [
  {
    productSlug: "nvidia-rtx-4090",
    author: "AI builder",
    rating: 5,
    title: "Best consumer GPU for local LLMs",
    body: "Running Llama 3 70B Q4 at 25 tok/sec. Worth every dollar if you need local inference.",
    date: "2026-06-15",
    verified: false
  },
  {
    productSlug: "amd-rx-7900-xtx",
    author: "Budget rig builder",
    rating: 4,
    title: "Great VRAM per dollar",
    body: "24GB at a lower price than RTX 4090. ROCm support is improving but still behind CUDA ecosystem.",
    date: "2026-06-10",
    verified: false
  },
  {
    productSlug: "antminer-s21",
    author: "Home miner",
    rating: 4,
    title: "Solid efficiency for current gen",
    body: "Runs stable at 17.5 J/TH. Noise is loud but efficiency is good if you have cheap power.",
    date: "2026-06-12",
    verified: false
  },
  {
    productSlug: "ledger-nano-x",
    author: "Security focused",
    rating: 5,
    title: "Still the hardware wallet standard",
    body: "Bluetooth + mobile app make it usable daily. Seed stays offline.",
    date: "2026-06-08",
    verified: false
  },
  {
    productSlug: "tradingview",
    author: "Technical trader",
    rating: 5,
    title: "Essential for charting",
    body: "Pine Script, community scripts, and multi-chart layout are unmatched.",
    date: "2026-06-14",
    verified: false
  }
];

export function getReviewsForProduct(slug: string): Review[] {
  return reviews.filter(r => r.productSlug === slug);
}

export function getAggregateRating(slug: string): { ratingValue: number; reviewCount: number } | null {
  const productReviews = getReviewsForProduct(slug);
  if (productReviews.length === 0) return null;
  const avg = productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length;
  return {
    ratingValue: Math.round(avg * 10) / 10,
    reviewCount: productReviews.length
  };
}
