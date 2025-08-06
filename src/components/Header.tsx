import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Left spacer for mobile menu */}
          <div className="flex items-center md:hidden">
            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Logo - Centered */}
          <div className="flex items-center justify-center flex-1 md:flex-none">
            <img 
              src="https://iwzjemetiiiqflomwquh.supabase.co/storage/v1/object/public/images/soloporhoy_transparent.png" 
              alt="SOLOPORHOY" 
              className="h-24 w-auto"
            />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button size="sm" className="hidden sm:inline-flex">
              Reservar Cita
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="px-4 py-6 space-y-4">
            <a 
              href="#servicios" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#nosotros" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
            <Button size="sm" className="w-full mt-4">
              Reservar Cita
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
