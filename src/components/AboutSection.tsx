import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sprout, Target } from "lucide-react";
import therapistImage from "@/assets/therapist-portrait.jpg";

const certifications = [
  "Certificación en Quiromasaje Terapéutico",
  "Instructor Certificado de Pilates",
  "Especialización en Terapias Naturales"
];

const values = [
  {
    icon: Heart,
    title: "Cuidado Personalizado",
    description: "Cada sesión se adapta completamente a tus necesidades específicas y objetivos personales."
  },
  {
    icon: Sprout,
    title: "Métodos Naturales",
    description: "Priorizamos técnicas naturales y holísticas que respetan los procesos de sanación del cuerpo."
  },
  {
    icon: Target,
    title: "Resultados Duraderos",
    description: "Nuestro enfoque se centra en soluciones a largo plazo, no solo en alivio temporal."
  }
];

export const AboutSection = () => {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Sobre Mí: 15 Años de Experiencia en Terapias Naturales
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Con más de 15 años de experiencia en el mundo del bienestar y las terapias naturales, 
              me dedico a ayudar a las personas a encontrar su equilibrio físico y mental.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Mi pasión por las terapias manuales y el movimiento consciente comenzó cuando descubrí 
              el poder transformador del toque terapéutico y las técnicas naturales de sanación. 
              Desde entonces, he dedicado mi carrera a perfeccionar mis habilidades y a brindar 
              el mejor cuidado posible a cada persona que confía en mí.
            </p>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Certificaciones:</h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 transition-smooth"
          >
            Conoce Mi Historia Completa
          </Button>
        </div>
        
        <div className="space-y-8">
          <div className="relative">
            <img 
              src={therapistImage} 
              alt="Terapeuta experta en quiromasaje y pilates en Madrid" 
              className="w-full h-[500px] object-cover rounded-3xl shadow-card"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-2xl shadow-glow">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Años</div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-4">
            {values.map((value, index) => (
              <Card key={index} className="border-0 bg-muted/50 hover:bg-muted/70 transition-smooth">
                <CardContent className="p-4 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-primary w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
