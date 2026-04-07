export interface Product {
  slug: string;
  name: string;
  price: number;
  artist: string;
  category: string;
  status: "available" | "sold-out" | "low-stock";
  description: string;
  details: string[];
  dimensions: string;
  material: string;
  image: string;
}

export const products: Product[] = [
  {
    slug: "oatmeal-pitcher",
    name: "Oatmeal Pitcher",
    price: 120,
    artist: "Soren K.",
    category: "Vessels",
    status: "sold-out",
    description:
      "A quietly sculptural pour vessel, thrown on the wheel and finished with our signature oatmeal glaze. The organic irregularities in its form speak to the hand that shaped it — every dimple, every ripple preserved in the firing.",
    details: [
      "Wheel-thrown stoneware",
      "Food-safe oatmeal glaze",
      "Microwave & dishwasher safe",
      "Each piece is one-of-a-kind",
    ],
    dimensions: "H 18cm × W 14cm × D 10cm",
    material: "High-fire stoneware clay, reduction fired to cone 10",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4k2A5KldPaXcnCJSK7_YcC1XS4OYZO9e1v9YupGbIpxIawFwFPTKjVpjlm-UaRU9iiCMbGLh5rfgWezsTmnViJATBl1TwhsLsnX-r8LhuBtLsWfLeK5B5LT3Tj0Vw4Sx-F20KoAXhN07Qd9GrxSbkjypXWXqpaWDpPyBsBvAGXiwXWkcLwWLJQdxnXqSZsoPoyJZFe-js6gMP78QDLLefmJKE2RL6sEbnmg1P_w88EuKw_ZueUgwuyR8Ykd53_yrbwBHvtGyfjKmt",
  },
  {
    slug: "nesting-trio",
    name: "Nesting Trio",
    price: 185,
    artist: "Anna Maria",
    category: "Tableware",
    status: "available",
    description:
      "Three shallow bowls that nest together like a memory of the earth they came from. The terracotta bodies are left unglazed on the exterior, while the interiors wear a deep charcoal slip that pools beautifully in use.",
    details: [
      "Hand-formed terracotta",
      "Charcoal interior slip",
      "Set of 3 graduating sizes",
      "Suitable for dry foods & display",
    ],
    dimensions: "Ø 22cm / 18cm / 14cm × H 5cm",
    material: "Red terracotta clay with charcoal slip interior",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIwhNxeYzS6dZtkYUjWJj3cEfov6gO6SWljIaQMuJ9-t7oBI2n0H22WSUHPehL4TTqasAbQjEjSqWEIAsf89MEmO7Yol43WK9ctwxOK3xnCttlwzB2M__zXSfggrfctMdfvxqNlsDsYlxQQ8Wt8ydUbPtdmVDOt97hcHJ5WGdsWB6MA-wajBLp7l81Ls93ReCKBSCTrP7dqYGO8cgPAv_eZnjk1tOBqD36_CnGMGWrjrLlhACpcJ1h4C0apg5BEfmDbHjaSVsHgkqj",
  },
  {
    slug: "monolith-vase",
    name: "Monolith Vase",
    price: 240,
    artist: "Eriksson Studio",
    category: "Sculpture",
    status: "available",
    description:
      "Inspired by Scandinavian stone cairns, this tall vase commands attention with its raw, textured surface. The volcanic glaze creates a landscape of craters and ridges that evolve with every angle of light.",
    details: [
      "Slab-built stoneware",
      "Volcanic crater glaze",
      "Watertight interior",
      "Suitable for fresh or dried flowers",
    ],
    dimensions: "H 32cm × W 16cm × D 14cm",
    material: "White stoneware with volcanic ash glaze",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAit7sqyb6hgZZZZPWlBaCXids9m6CbiuZCIXIeITzgIVxfPrHqDn5C9z1hnnU29gaaOF-DBJfwBncsD07QK6bELk4vBXrubL0GnYtB11ZdGvaCwaDG9MIQFRqZ16gSIdqcEQY4t-ePCGeyT5yL7L6KG_DclTiu6FG7OBXcc_UjIT5F01ECfDh8uxLvffbfYcgrviMpcNUbsawEoKPHN6Zeaes_VRwkR_5rU2vEZWQl2jc_hpAbzCgOdysI_3fXp0KyInJgXpVguTgy",
  },
  {
    slug: "earth-plate-set",
    name: "Earth Plate Set",
    price: 160,
    artist: "Anna Maria",
    category: "Tableware",
    status: "available",
    description:
      "A set of four dinner plates with the simplicity of well-worn river stones. Each plate carries a slightly different tonal variation — from cool ash to warm sand — unifying the table while celebrating individuality.",
    details: [
      "Set of 4 dinner plates",
      "Wheel-thrown stoneware",
      "Matte earth-tone glaze",
      "Microwave & dishwasher safe",
    ],
    dimensions: "Ø 27cm × H 2.5cm (each)",
    material: "High-fire stoneware with matte ash glaze",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3z-x9wl7AvbtPY-_b7xmxnVLRiqbAUQYghMAWKc4uriZcHVsUxnH1gHfTw4IzfPAuuONRsPxG28pkvuykL2EGk-7g7TL0FRog8gR7rFrGDgi0TiWzBuGP7jB2WZ7knYbpN3Hs1FFjO70j5Knu9sQwn_fMXeA990qYW6F4LZ8UKcjWFGDFFwR4j69TTwAi3A0uor6lDhKYBIlVwbCLinNRFBZwDIHmB-_xUeFa4D1o3G2OiQIjHhjaw_2mmu1fKkfZAMRcUe4zBVER",
  },
  {
    slug: "ceremonial-cup",
    name: "Ceremonial Cup",
    price: 85,
    artist: "Soren K.",
    category: "Vessels",
    status: "low-stock",
    description:
      "A meditative vessel designed for the daily ritual of tea or coffee. The thick walls retain warmth, and the thumb rest is shaped to settle naturally into the grip of the hand.",
    details: [
      "Wheel-thrown stoneware",
      "Satin celadon glaze",
      "Ergonomic thumb rest",
      "Holds approximately 300ml",
    ],
    dimensions: "H 9cm × Ø 8cm",
    material: "Porcelain-blend stoneware with celadon glaze",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBeBgz51rwnHv-LC_E2lwvHZzUbEsNaNAxXgyh6Pv46Y9hoMPRCo_FkKeqyMGJRi7oc9esejUm0l6QnSS54_GIGVHEhCgleN8R7fz5A9BXmyuJEsMDFEa8ESwPBhbiSlwzXW5AhfqzgBfOxRk4z6cEZBuL5HXzSkdLhtpjmWthEFi-qcbOM-Lmkr7Gt0PpVvOGhfTVFH0yqjFFDNImmxpSlwBTeM3LF_F8qDHU3xa1vYPI_aY9Yb-HsS31QcdC1wfp7Qsh1he3EaGb",
  },
  {
    slug: "wabi-sabi-bowl",
    name: "Wabi-Sabi Bowl",
    price: 95,
    artist: "Eriksson Studio",
    category: "Tableware",
    status: "available",
    description:
      "An intentionally imperfect serving bowl that celebrates the beauty of natural asymmetry. The crackled glaze and organic rim create a piece that looks as though it grew rather than was made.",
    details: [
      "Hand-pinched stoneware",
      "Crackled ivory glaze",
      "Organic, asymmetric rim",
      "Food-safe & dishwasher safe",
    ],
    dimensions: "Ø 20cm × H 8cm",
    material: "Dark stoneware with crackled ivory glaze",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIwhNxeYzS6dZtkYUjWJj3cEfov6gO6SWljIaQMuJ9-t7oBI2n0H22WSUHPehL4TTqasAbQjEjSqWEIAsf89MEmO7Yol43WK9ctwxOK3xnCttlwzB2M__zXSfggrfctMdfvxqNlsDsYlxQQ8Wt8ydUbPtdmVDOt97hcHJ5WGdsWB6MA-wajBLp7l81Ls93ReCKBSCTrP7dqYGO8cgPAv_eZnjk1tOBqD36_CnGMGWrjrLlhACpcJ1h4C0apg5BEfmDbHjaSVsHgkqj",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
