import Banner from "@/components/banner";
import WhyChooseUs from "@/components/why-choose-us";
import Testimonials from "@/components/testimonials";
import JourneyCta from "@/components/journey-cta";
import FeaturedDestinations from "@/components/featured-destinations";

export default function Home() {
  return (
    <div className="relative">

      <main>
        <Banner />
        <FeaturedDestinations />
        <WhyChooseUs />
        <Testimonials />
        <JourneyCta />
      </main>
    </div>
  );
}
