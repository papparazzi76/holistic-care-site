import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import heroImage from "@/assets/hero-massage.jpg";

export const HeroSection = () => {
  return (
    <Section className="hero-gradient min-h-screen flex items-center py-0">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Bienestar Natural
              <span className="block text-primary">Para Tu Cuerpo</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Descubre el equilibrio perfecto entre tradición y técnicas modernas. 
              Quiromasaje, terapias naturales y pilates especializado para tu bienestar integral.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-6 rounded-full shadow-natural"
            >
              Reserva tu Sesión
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 rounded-full border-primary text-primary hover:bg-primary/10 transition-smooth"
            >
              Conoce Nuestros Servicios
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Natural</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <img 
              src={heroImage} 
              alt="Sesión de masaje terapéutico en ambiente natural" 
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-glow max-w-xs">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-xl">🌿</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Certificado</div>
                <div className="text-sm text-muted-foreground">Terapias Naturales</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};