
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Герой секция */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Путь к здоровой и счастливой жизни
              </h1>
              <p className="text-lg mb-8 opacity-90">
                Научно-обоснованные рекомендации по питанию, физической активности, сну и 
                ментальному здоровью для полноценной и активной жизни.
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
        </section>
        
        {/* Секция преимуществ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Комплексный подход к здоровью</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Мы объединяем экспертные знания в различных областях для создания целостного подхода к здоровью
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <Icon name="Apple" className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Здоровое питание</h3>
                  <p className="text-gray-600">
                    Сбалансированные рационы, полезные рецепты и рекомендации по питанию от экспертов.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <Icon name="Dumbbell" className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Физическая активность</h3>
                  <p className="text-gray-600">
                    Эффективные тренировки для разных уровней подготовки, упражнения и программы.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-purple-100 p-4 rounded-full mb-4">
                    <Icon name="Brain" className="text-purple-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Ментальное здоровье</h3>
                  <p className="text-gray-600">
                    Техники медитации, борьба со стрессом и поддержание позитивного мышления.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Секция "Последние статьи" */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-3xl font-bold">Последние статьи</h2>
              <Button variant="outline">Все статьи</Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=500" 
                  alt="Здоровое питание" 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="text-sm text-green-600 font-medium mb-2">Питание</div>
                  <h3 className="text-xl font-semibold mb-2">10 правил здорового питания, которые работают</h3>
                  <p className="text-gray-600 mb-4">Простые принципы, которые помогут улучшить ваш рацион и поддержать здоровье организма.</p>
                  <Button variant="link" className="p-0">Читать дальше</Button>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500" 
                  alt="Тренировки" 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">Физическая активность</div>
                  <h3 className="text-xl font-semibold mb-2">Эффективные тренировки для занятых людей</h3>
                  <p className="text-gray-600 mb-4">Как найти время для физической активности, даже когда график переполнен делами.</p>
                  <Button variant="link" className="p-0">Читать дальше</Button>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=500" 
                  alt="Сон" 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="text-sm text-purple-600 font-medium mb-2">Здоровый сон</div>
                  <h3 className="text-xl font-semibold mb-2">Как улучшить качество сна: 7 научных советов</h3>
                  <p className="text-gray-600 mb-4">Проверенные техники и рекомендации для глубокого и восстанавливающего сна.</p>
                  <Button variant="link" className="p-0">Читать дальше</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Секция призыва к действию */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Начните свой путь к здоровью сегодня</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Присоединитесь к тысячам людей, которые уже изменили свою жизнь к лучшему с помощью наших рекомендаций
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Присоединиться бесплатно
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
