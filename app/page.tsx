import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Students from "@/components/Students";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Companies from "@/components/Companies";

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-gray-800">
      <Hero />
      <Courses />
      <About />
      <CTA />
      <Students />
      <Testimonials />
      <FAQ />
      <Companies />
    </div>
  );
}
