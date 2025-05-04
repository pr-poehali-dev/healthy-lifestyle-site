
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const OurMission = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">Наша миссия</h2>
            <p className="text-gray-700 mb-4">
              Мы стремимся помочь каждому человеку достичь оптимального здоровья и благополучия через 
              осознанный подход к образу жизни.
            </p>
            <p className="text-gray-700 mb-6">
              Наша команда экспертов — диетологов, фитнес-тренеров и психологов — разрабатывает 
              научно-обоснованные рекомендации, которые легко интегрировать в повседневную жизнь.
            </p>
            <div className="flex gap-4">
              <Button>
                <Icon name="Users" className="mr-2" size={16} />
                О нашей команде
              </Button>
              <Button variant="outline">
                <Icon name="Mail" className="mr-2" size={16} />
                Связаться с нами
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md hover-scale">
              <Icon name="Award" className="text-yellow-500 mb-2" size={36} />
              <h3 className="text-lg font-semibold mb-2">Экспертный опыт</h3>
              <p className="text-gray-600">Более 10 лет работы в сфере ЗОЖ</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md hover-scale">
              <Icon name="UserCheck" className="text-green-500 mb-2" size={36} />
              <h3 className="text-lg font-semibold mb-2">Индивидуальный подход</h3>
              <p className="text-gray-600">Персонализированные рекомендации</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md hover-scale">
              <Icon name="BookOpen" className="text-blue-500 mb-2" size={36} />
              <h3 className="text-lg font-semibold mb-2">Научная база</h3>
              <p className="text-gray-600">Все советы основаны на исследованиях</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md hover-scale">
              <Icon name="Heart" className="text-red-500 mb-2" size={36} />
              <h3 className="text-lg font-semibold mb-2">Забота о людях</h3>
              <p className="text-gray-600">Здоровье каждого — наш приоритет</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
