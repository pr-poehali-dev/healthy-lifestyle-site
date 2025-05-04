
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const tips = [
  {
    id: 1,
    title: "10 простых привычек для улучшения здоровья",
    excerpt: "Небольшие изменения, которые приведут к большим результатам в вашем здоровье...",
    author: "Елена Смирнова",
    authorRole: "Диетолог",
    date: "15 апреля 2025",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=500"
  },
  {
    id: 2,
    title: "Как правильно начать бегать: советы для новичков",
    excerpt: "Бег - один из самых доступных видов физической активности. Узнайте, как начать...",
    author: "Алексей Петров",
    authorRole: "Тренер",
    date: "2 мая 2025",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=500"
  },
  {
    id: 3,
    title: "Медитация для начинающих: простые техники",
    excerpt: "Снижение стресса и улучшение концентрации с помощью простых техник медитации...",
    author: "Марина Иванова",
    authorRole: "Психолог",
    date: "28 апреля 2025",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=500"
  }
];

export const HealthTips = () => {
  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Полезные советы для здоровой жизни</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Изучите наши экспертные рекомендации и научные статьи о здоровом образе жизни
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {tips.map((tip) => (
          <Card key={tip.id} className="overflow-hidden hover-scale">
            <img 
              src={tip.image} 
              alt={tip.title} 
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-600 mb-4">{tip.excerpt}</p>
              <Separator className="my-4" />
              <div className="flex items-center">
                <Avatar className="mr-2">
                  <AvatarFallback>{tip.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{tip.author}</p>
                  <p className="text-xs text-gray-500">{tip.authorRole}</p>
                </div>
                <div className="ml-auto flex items-center text-gray-500 text-sm">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  {tip.date}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
