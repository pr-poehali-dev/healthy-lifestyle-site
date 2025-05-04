
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Heart" className="text-primary" size={28} />
              <span className="text-xl font-bold text-primary">ЗдоровьеПлюс</span>
            </div>
            <p className="text-gray-600 mb-4">
              Ваш проводник в мир здорового образа жизни, долголетия и благополучия.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Instagram" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Facebook" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Twitter" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Youtube" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Разделы сайта</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/nutrition" className="text-gray-600 hover:text-primary transition-colors">Питание</Link></li>
              <li><Link to="/fitness" className="text-gray-600 hover:text-primary transition-colors">Физическая активность</Link></li>
              <li><Link to="/sleep" className="text-gray-600 hover:text-primary transition-colors">Здоровый сон</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">Блог</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">О нас</Link></li>
              <li><Link to="/experts" className="text-gray-600 hover:text-primary transition-colors">Наши эксперты</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">Частые вопросы</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Связаться с нами</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">Политика конфиденциальности</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Подпишитесь на рассылку</h3>
            <p className="text-gray-600 mb-4">Получайте новые статьи, рецепты и советы экспертов</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary flex-1"
              />
              <Button className="rounded-l-none">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 ЗдоровьеПлюс. Все права защищены.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-primary transition-colors">Условия использования</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Конфиденциальность</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Политика cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
