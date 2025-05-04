
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HealthCategories from "@/components/HealthCategories";
import OurMission from "@/components/OurMission";
import CalorieCalculator from "@/components/CalorieCalculator";
import HealthTips from "@/components/HealthTips";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HealthCategories />
        <OurMission />
        <CalorieCalculator />
        <HealthTips />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
