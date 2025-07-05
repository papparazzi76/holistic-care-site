import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Gift } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    details: ["Calle Bienestar 123", "28001 Madrid", "España"]
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+34 600 123 456", "Lun-Vie: 9:00-20:00", "Sáb: 10:00-15:00"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@bienestarnatural.es", "Respuesta en 24h", "Consultas gratuitas"]
  }
];

export const ContactSection = () => {
  return (
    <Section className="bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
          Contacto y Reservas
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          ¿Listo para comenzar tu camino hacia el bienestar? Contáctanos para una consulta 
          personalizada o reserva directamente tu primera sesión.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="grid gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 bg-card/80 backdrop-blur-sm hover:shadow-natural transition-smooth">
                 <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <info.icon className="text-primary w-5 h-5" />
                    </div>
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="border-0 bg-primary/5 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Gift className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Primera Consulta Gratuita</h3>
                  <p className="text-sm text-muted-foreground">
                    Reserva tu primera consulta sin compromiso. Evaluamos tus necesidades 
                    y diseñamos un plan personalizado.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Envíanos un Mensaje</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input 
                  id="name" 
                  placeholder="Tu nombre" 
                  className="border-muted focus:border-primary transition-smooth"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+34 600 000 000" 
                  className="border-muted focus:border-primary transition-smooth"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="tu@email.com" 
                className="border-muted focus:border-primary transition-smooth"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service">Servicio de interés</Label>
              <select className="w-full px-3 py-2 border border-muted rounded-md focus:border-primary transition-smooth bg-background">
                <option value="">Selecciona un servicio</option>
                <option value="quiromasaje">Quiromasaje Terapéutico</option>
                <option value="masaje-relajante">Masaje Relajante</option>
                <option value="pilates">Pilates Terapéutico</option>
                <option value="pilates-mayores">Pilates para Mayores</option>
                <option value="asesoria">Asesoría Natural</option>
                <option value="plan-personalizado">Plan Personalizado</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea 
                id="message" 
                placeholder="Cuéntanos sobre tus necesidades o cualquier pregunta que tengas..."
                className="min-h-[120px] border-muted focus:border-primary transition-smooth resize-none"
              />
            </div>
            
            <Button 
              className="w-full btn-primary text-lg py-6 rounded-full shadow-natural"
              size="lg"
            >
              Enviar Mensaje
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              Al enviar este formulario, aceptas que podamos contactarte para responder a tu consulta.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};