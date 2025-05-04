
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">ЗдравЖизнь</h3>
            <p className="text-muted-foreground">
              Ваш проводник в мир здорового образа жизни.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Разделы</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#nutrition" className="text-muted-foreground hover:text-primary">Питание</Link>
              </li>
              <li>
                <Link to="#exercises" className="text-muted-foreground hover:text-primary">Упражнения</Link>
              </li>
              <li>
                <Link to="#mental-health" className="text-muted-foreground hover:text-primary">Ментальное здоровье</Link>
              </li>
              <li>
                <Link to="#recipes" className="text-muted-foreground hover:text-primary">Рецепты</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Поддержка</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#faq" className="text-muted-foreground hover:text-primary">Частые вопросы</Link>
              </li>
              <li>
                <Link to="#contact" className="text-muted-foreground hover:text-primary">Связаться с нами</Link>
              </li>
              <li>
                <Link to="#privacy" className="text-muted-foreground hover:text-primary">Политика конфиденциальности</Link>
              </li>
              <li>
                <Link to="#terms" className="text-muted-foreground hover:text-primary">Условия использования</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Подписка</h4>
            <p className="text-muted-foreground">Подпишитесь на нашу рассылку, чтобы получать советы и новости о здоровом образе жизни.</p>
            <div className="flex mt-2">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="px-4 py-2 border border-border rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-md">
                Подписаться
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} ЗдравЖизнь. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
