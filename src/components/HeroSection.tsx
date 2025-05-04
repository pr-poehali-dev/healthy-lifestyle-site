
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Путь к <span className="text-primary">здоровой</span> и <span className="text-primary">счастливой</span> жизни
            </h1>
            <p className="text-lg text-muted-foreground">
              Начните свое путешествие к лучшей версии себя с нашими экспертными советами по питанию, 
              физическим упражнениям и ментальному здоровью.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="font-medium">
                Начать сейчас
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 blur-xl opacity-30 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Здоровый образ жизни" 
                className="relative rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
