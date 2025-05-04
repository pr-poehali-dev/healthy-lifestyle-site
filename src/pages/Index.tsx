
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HealthCategories from "@/components/HealthCategories";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HealthCategories />
      </main>
    </div>
  );
};

export default Index;
