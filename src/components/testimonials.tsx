"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Michael Chen",
    location: "Singapore",
    quote:
      "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=500&q=85",
  },
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    quote:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=500&q=85",
  },
];

// Embla needs offscreen slides to loop when two cards are visible on desktop.
const carouselTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="bg-white px-6 py-16 text-neutral-950 md:px-12 md:py-20"
    >
      <Carousel opts={{ align: "start", loop: true, slidesToScroll: 1 }} aria-labelledby="testimonials-title" className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-5">
          <div>
            <h2
              id="testimonials-title"
              className="text-3xl font-normal tracking-[-0.05em] md:text-[40px] md:leading-tight"
            >
              What Travelers Say
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Real experiences from our happy travelers
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <CarouselPrevious className="static inset-auto m-0 size-11 rounded-full border-neutral-300 text-neutral-400 hover:border-cyan-600 hover:text-cyan-600" />
            <CarouselNext className="static inset-auto m-0 size-11 rounded-full border-neutral-300 text-neutral-400 hover:border-cyan-600 hover:text-cyan-600" />
          </div>
        </div>

        <div className="mt-8">
          <CarouselContent>
            {carouselTestimonials.map((testimonial, index) => (
              <CarouselItem key={`${testimonial.name}-${index}`} className="md:basis-1/2" aria-label={`Review by ${testimonial.name}`}>
              <figure className="grid h-full grid-cols-[minmax(0,1fr)_38%] gap-4 border border-neutral-100 p-4 sm:gap-6">
                <div className="flex min-w-0 flex-col justify-between gap-8">
                  <blockquote className="text-base leading-[1.15] tracking-[-0.035em]">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <figcaption>
                    <p className="text-sm text-cyan-600">— {testimonial.name}</p>
                    <p className="mt-1 pl-4 text-[10px] text-neutral-500">
                      {testimonial.location}
                    </p>
                  </figcaption>
                </div>
                <Image
                  src={testimonial.image}
                  alt=""
                  width={300}
                  height={366}
                  unoptimized
                  className="h-full min-h-44 w-full object-cover"
                />
              </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
}
