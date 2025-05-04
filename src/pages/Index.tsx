
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { HeroSection } from "@/components/HeroSection";
import { HealthCategories } from "@/components/HealthCategories";
import { HealthTips } from "@/components/HealthTips";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Heart" className="text-primary" size={28} />
          <h1 className="text-xl font-bold text-primary">ЗдоровьеПлюс</h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
          <a href="#" className="text-gray-700 hover:text-primary transition-colors">Питание</a>
          <a href="#" className="text-gray-700 hover:text-primary transition-colors">Физическая активность</a>
          <a href="#" className="text-gray-700 hover:text-primary transition-colors">Психология</a>
          <a href="#" className="text-gray-700 hover:text-primary transition-colors">Блог</a>
        </nav>
        <Button variant="outline" className="hidden md:flex">
          <Icon name="User" className="mr-2" size={16} />
          Войти
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" />
        </Button>
      </header>

      <main>
        <HeroSection />
        <HealthCategories />
        <HealthTips />
        
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-center mb-8">Присоединяйтесь к нашему сообществу</h2>
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 mb-6">Получайте полезные советы, рецепты и программы тренировок прямо на вашу почту</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Подписаться</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Heart" className="text-primary" size={28} />
              <h1 className="text-xl font-bold text-primary">ЗдоровьеПлюс</h1>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" />
              </Button>
            </div>
          </div>
          <Separator />
          <div className="pt-8 text-center text-gray-500 text-sm">
            © 2025 ЗдоровьеПлюс. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
