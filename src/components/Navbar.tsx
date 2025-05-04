
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Главная", path: "/" },
  { name: "Питание", path: "/nutrition" },
  { name: "Физическая активность", path: "/fitness" },
  { name: "Здоровый сон", path: "/sleep" },
  { name: "Блог", path: "/blog" },
  { name: "О нас", path: "/about" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="Heart" className="text-primary" size={28} />
          <span className="text-xl font-bold text-primary">ЗдоровьеПлюс</span>
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button>
            <Icon name="UserPlus" className="mr-2" size={16} />
            Регистрация
          </Button>
        </nav>

        {/* Мобильное меню */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-6 pt-10">
              {menuItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-4">
                <Icon name="UserPlus" className="mr-2" size={16} />
                Регистрация
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
