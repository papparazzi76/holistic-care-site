import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Award } from "lucide-react";
const heroImage = "/lovable-uploads/4eabfea8-4026-41ed-81bc-b28b37a63549.png";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Parallax Background */}
      <div className="absolute inset-0 w-full h-[120%]" style={{
      transform: `translateY(${scrollY * 0.5}px)`
    }}>
        <img src={heroImage} alt="Sesión de masaje terapéutico en ambiente natural" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-serif font-bold text-white leading-tight">
                  Bienestar Natural
                  <span className="block text-primary-glow">Para Tu Cuerpo</span>
                </h1>
                <p className="text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl">
                  Descubre el equilibrio perfecto entre tradición y técnicas modernas. 
                  Quiromasaje, terapias naturales y pilates especializado para tu bienestar integral.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Button size="lg" className="btn-primary text-xl px-12 py-8 rounded-full shadow-glow hover:shadow-natural transition-smooth text-primary-foreground">
                  Reserva tu Sesión
                </Button>
                <Button variant="outline" size="lg" className="text-xl px-12 py-8 rounded-full border-2 border-primary/30 hover:bg-primary/10 backdrop-blur-sm transition-smooth text-primary-glow">
                  Conoce Nuestros Servicios
                </Button>
              </div>
              
              <div className="flex items-center space-x-12 pt-12">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary-glow">15+</div>
                  <div className="text-lg text-white/80">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary-glow">500+</div>
                  <div className="text-lg text-white/80">Clientes Satisfechos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary-glow">100%</div>
                  <div className="text-lg text-white/80">Natural</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Certification Card */}
          <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-glow max-w-sm">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="text-primary w-8 h-8" />
              </div>
              <div>
                <div className="font-semibold text-foreground text-lg">Certificado Profesional</div>
                <div className="text-muted-foreground">Terapias Naturales</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};
