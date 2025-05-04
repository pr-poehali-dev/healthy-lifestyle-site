
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const categories = [
  {
    id: 1,
    title: "Здоровое питание",
    description: "Правильное питание - основа здорового образа жизни",
    icon: "Apple",
    color: "bg-red-100",
    iconColor: "text-red-500"
  },
  {
    id: 2,
    title: "Физическая активность",
    description: "Регулярные тренировки для поддержания тонуса",
    icon: "Dumbbell",
    color: "bg-blue-100",
    iconColor: "text-blue-500"
  },
  {
    id: 3,
    title: "Психологическое здоровье",
    description: "Методики для снижения стресса и улучшения настроения",
    icon: "Brain",
    color: "bg-purple-100",
    iconColor: "text-purple-500"
  }
];

export const HealthCategories = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Ключевые аспекты здорового образа жизни</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Card key={category.id} className="hover-scale">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className={`${category.color} p-4 rounded-full mb-4`}>
                <Icon name={category.icon} className={category.iconColor} size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-500">{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
