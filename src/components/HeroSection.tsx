
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
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
            <div className="pt-4 flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <div className="rounded-full bg-success/20 p-1">
                  <svg className="h-4 w-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2">Проверенные советы</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-success/20 p-1">
                  <svg className="h-4 w-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2">Персональные планы</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-success/20 p-1">
                  <svg className="h-4 w-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2">Экспертная поддержка</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent blur-xl opacity-30 rounded-2xl"></div>
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
