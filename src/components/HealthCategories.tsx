
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Utensils, Dumbbell, Brain } from "lucide-react";

const categories = [
  {
    title: "Здоровое питание",
    description: "Узнайте о принципах правильного питания и сбалансированной диеты для здорового тела.",
    icon: Utensils,
    color: "text-primary bg-primary/10"
  },
  {
    title: "Физическая активность",
    description: "Эффективные упражнения и тренировки для поддержания физической формы и укрепления тела.",
    icon: Dumbbell,
    color: "text-accent bg-accent/10"
  },
  {
    title: "Ментальное здоровье",
    description: "Советы и техники для снижения стресса, медитации и улучшения психического благополучия.",
    icon: Brain,
    color: "text-secondary bg-secondary/10"
  },
  {
    title: "Здоровье в целом",
    description: "Комплексный подход к здоровью, профилактика заболеваний и поддержание иммунитета.",
    icon: Heart,
    color: "text-red-500 bg-red-500/10"
  }
];

const HealthCategories = () => {
  return (
    <section className="py-16 bg-muted/30" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Основные направления здорового образа жизни</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Исследуйте различные аспекты здорового образа жизни и найдите то, что поможет вам достичь вашей лучшей версии.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="border hover:shadow-md transition-shadow duration-300 h-full">
              <CardContent className="pt-6">
                <div className={`rounded-full p-3 inline-flex mb-4 ${category.color}`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthCategories;
