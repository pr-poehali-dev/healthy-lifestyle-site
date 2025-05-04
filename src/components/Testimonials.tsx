
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const testimonials = [
  {
    id: 1,
    name: "Анна Смирнова",
    role: "Молодая мама",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
    quote: "Благодаря советам с этого сайта я смогла нормализовать режим дня и наладить здоровое питание для всей семьи. Моя энергия вернулась!",
    rating: 5
  },
  {
    id: 2,
    name: "Николай Петров",
    role: "Офисный работник",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
    quote: "Сидячая работа давала о себе знать. Программа упражнений, которую я нашел здесь, не отнимает много времени, но результаты впечатляют.",
    rating: 5
  },
  {
    id: 3,
    name: "Елена Иванова",
    role: "Учитель",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150",
    quote: "Техники медитации и работы со стрессом помогли мне справиться с профессиональным выгоранием. Спасибо за ваши ценные материалы!",
    rating: 4
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы наших пользователей</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Узнайте, как изменилась жизнь людей, которые следуют принципам здорового образа жизни
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover-scale">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        size={16} 
                        className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
