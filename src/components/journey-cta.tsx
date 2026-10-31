import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function JourneyCta() {
  return (
    <section
      aria-labelledby="journey-cta-title"
      className="relative isolate flex min-h-[300px] items-center justify-center overflow-hidden bg-slate-900 bg-cover bg-center px-6 py-16 text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=2400&q=85')",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(5,20,24,0.45)_0%,rgba(10,16,18,0.85)_100%)]"
      />
      <div className="max-w-3xl">
        <h2
          id="journey-cta-title"
          className="text-3xl leading-tight font-normal tracking-[-0.05em] md:text-[40px]"
        >
          Ready To Start Your Journey?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/90">
          Join thousands of travelers who have discovered the world with us
        </p>
        <Link
          href="/destinations"
          className="mt-7 inline-flex min-h-11 items-center justify-center gap-5 bg-white px-5 py-3 text-xs font-medium text-neutral-950 uppercase transition-colors hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Book Your Trip Today
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
