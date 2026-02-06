import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { CTA } from "@/components/home/CTA";
import { AboutUs } from "@/components/home/AboutUs";

export default function HomePage() {
  return (
    <main className="bg-[#F8FAFC]">
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FeaturedProjects />
      <CTA />
      <AboutUs />
    </main>
  );
}
