import { Headset, Map, ShieldCheck } from "lucide-react";

const benefits = [
  {
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    icon: ShieldCheck,
  },
  {
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
    icon: Map,
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
    icon: Headset,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-us-title"
      className="bg-[#ecfcff] px-6 py-16 text-neutral-950 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2
            id="why-choose-us-title"
            className="text-3xl font-normal tracking-[-0.05em] md:text-[40px] md:leading-tight"
          >
            Why Choose Wanderlust
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article key={title} className="bg-white px-7 py-8 shadow-[0_1px_2px_rgb(0_0_0/0.04)]">
              <Icon
                aria-hidden="true"
                className="size-8 text-cyan-600"
                strokeWidth={2.25}
              />
              <h3 className="mt-5 text-[22px] leading-tight font-normal tracking-[-0.04em]">
                {title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-neutral-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
