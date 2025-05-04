
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Здоровый образ жизни доступен каждому
          </h1>
          <p className="text-lg mb-8 opacity-90">
            Откройте для себя проверенные методики, которые помогут вам улучшить здоровье, 
            повысить энергию и жить полноценной жизнью.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Начать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
      <div 
        className="absolute bottom-0 right-0 w-full h-full max-w-xl opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1000')", 
          backgroundSize: "contain", 
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom" 
        }}
      />
    </section>
  );
};
