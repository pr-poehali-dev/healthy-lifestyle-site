
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-background sticky top-0 z-50 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">ЗдравЖизнь</span>
            </Link>
          </div>

          {/* Desktop menu */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 text-sm font-medium hover:text-primary">
                Главная
              </Link>
              <Link to="#nutrition" className="px-3 py-2 text-sm font-medium hover:text-primary">
                Питание
              </Link>
              <Link to="#exercises" className="px-3 py-2 text-sm font-medium hover:text-primary">
                Упражнения
              </Link>
              <Link to="#mental-health" className="px-3 py-2 text-sm font-medium hover:text-primary">
                Ментальное здоровье
              </Link>
              <Link to="#about" className="px-3 py-2 text-sm font-medium hover:text-primary">
                О нас
              </Link>
              <Button variant="default" size="sm">
                Начать сейчас
              </Button>
            </div>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-foreground hover:bg-primary"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Открыть меню</span>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-primary-foreground"
              onClick={toggleMobileMenu}
            >
              Главная
            </Link>
            <Link
              to="#nutrition"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-primary-foreground"
              onClick={toggleMobileMenu}
            >
              Питание
            </Link>
            <Link
              to="#exercises"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-primary-foreground"
              onClick={toggleMobileMenu}
            >
              Упражнения
            </Link>
            <Link
              to="#mental-health"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-primary-foreground"
              onClick={toggleMobileMenu}
            >
              Ментальное здоровье
            </Link>
            <Link
              to="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-primary-foreground"
              onClick={toggleMobileMenu}
            >
              О нас
            </Link>
            <Button variant="default" className="w-full mt-2">
              Начать сейчас
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
