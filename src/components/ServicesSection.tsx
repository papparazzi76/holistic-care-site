import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Hand, Waves, Activity, Users, Leaf, Target } from "lucide-react";

const services = [
  {
    icon: Hand,
    title: "Quiromasaje Terapéutico",
    description: "Técnicas manuales especializadas para aliviar tensiones musculares y articulares, restaurando el equilibrio natural de tu cuerpo.",
    benefits: ["Alivia dolores", "Mejora movilidad", "Reduce estrés"],
    duration: "60-90 min"
  },
  {
    icon: Waves,
    title: "Masajes Relajantes",
    description: "Experiencia de relajación profunda que combina aromaterapia y técnicas suaves para renovar cuerpo y mente.",
    benefits: ["Relajación total", "Mejora circulación", "Bienestar mental"],
    duration: "60 min"
  },
  {
    icon: Activity,
    title: "Pilates Terapéutico",
    description: "Método personalizado que fortalece el core, mejora la postura y aumenta la flexibilidad de forma segura y efectiva.",
    benefits: ["Fortalece core", "Mejora postura", "Aumenta flexibilidad"],
    duration: "55 min"
  },
  {
    icon: Users,
    title: "Pilates para Mayores",
    description: "Programa adaptado especialmente para adultos mayores, enfocado en mantener la movilidad y independencia funcional.",
    benefits: ["Mantiene movilidad", "Previene caídas", "Socialización"],
    duration: "45 min"
  },
  {
    icon: Leaf,
    title: "Asesoría Natural",
    description: "Consultoría personalizada en métodos naturales de cuidado personal y técnicas de autocuidado para el hogar.",
    benefits: ["Métodos naturales", "Cuidado integral", "Prevención"],
    duration: "30 min"
  },
  {
    icon: Target,
    title: "Planes Personalizados",
    description: "Combinación de servicios diseñada específicamente para tus necesidades y objetivos de bienestar personal.",
    benefits: ["100% personalizado", "Seguimiento continuo", "Resultados medibles"],
    duration: "Variable"
  }
];

export const ServicesSection = () => {
  return (
    <Section className="bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
          Nuestros Servicios de Bienestar y Terapias Naturales
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Cada servicio está diseñado para ofrecerte una experiencia única de bienestar, 
          combinando técnicas tradicionales con enfoques modernos.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="service-card border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="text-primary w-8 h-8" />
              </div>
              <CardTitle className="text-xl font-serif mb-2">{service.title}</CardTitle>
              <div className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full inline-block">
                {service.duration}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-base leading-relaxed">
                {service.description}
              </CardDescription>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-foreground">Beneficios:</h4>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full mt-4 border-primary/20 text-primary hover:bg-primary/5 transition-smooth"
              >
                Más Información
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button 
          size="lg" 
          className="btn-primary text-lg px-8 py-6 rounded-full shadow-natural"
        >
          Ver Todos los Servicios
        </Button>
      </div>
    </Section>
  );
};
