
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "Здоровое питание",
    description: "Сбалансированное питание для поддержания энергии и здоровья организма.",
    icon: "🥗",
    color: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    title: "Физическая активность",
    description: "Эффективные тренировки для укрепления тела и повышения выносливости.",
    icon: "💪",
    color: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Ментальное здоровье",
    description: "Практики для снижения стресса и поддержания психологического равновесия.",
    icon: "🧠",
    color: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    title: "Здоровый сон",
    description: "Рекомендации для качественного отдыха и восстановления организма.",
    icon: "😴",
    color: "bg-indigo-100",
    iconColor: "text-indigo-600"
  }
];

const HealthCategories = () => {
  return (
    <section className="py-16 bg-muted/40" id="categories">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Основные направления здорового образа жизни</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Исследуйте различные аспекты здорового образа жизни и найдите то, что поможет вам достичь гармонии и баланса.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="border hover:shadow-md transition-shadow duration-300 h-full">
              <CardContent className="pt-6">
                <div className={`rounded-full p-3 inline-flex mb-4 ${category.color}`}>
                  <span className={`text-2xl ${category.iconColor}`}>{category.icon}</span>
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
