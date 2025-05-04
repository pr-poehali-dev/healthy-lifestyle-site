
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">ЗдоровьеПлюс</span>
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/nutrition" className="text-sm font-medium hover:text-primary transition-colors">
            Питание
          </Link>
          <Link to="/fitness" className="text-sm font-medium hover:text-primary transition-colors">
            Фитнес
          </Link>
          <Link to="/mental" className="text-sm font-medium hover:text-primary transition-colors">
            Ментальное здоровье
          </Link>
          <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Блог
          </Link>
          <Button>Регистрация</Button>
        </nav>

        {/* Мобильное меню */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu />
              <span className="sr-only">Меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link to="/" className="text-lg hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Главная
              </Link>
              <Link to="/nutrition" className="text-lg hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Питание
              </Link>
              <Link to="/fitness" className="text-lg hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Фитнес
              </Link>
              <Link to="/mental" className="text-lg hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Ментальное здоровье
              </Link>
              <Link to="/blog" className="text-lg hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Блог
              </Link>
              <Button className="mt-4">Регистрация</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
