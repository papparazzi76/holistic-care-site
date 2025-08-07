import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { BookOpen, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "La leptina: el \"interruptor maestro\" del hambre y el metabolismo",
    description: "¿Sabías que tu hambre y tu metabolismo están controlados por una hormona llamada leptina? Puede que estés comiendo de más… ¡no por gula, sino porque tu cerebro no está recibiendo las señales correctas! En este artículo descubrirás cómo funciona la leptina, por qué puede fallar en personas con obesidad, qué consecuencias tiene tenerla demasiado baja, y cómo puedes mejorar su acción con simples hábitos diarios. Conoce el papel clave de esta \"hormona del hambre\" en tu salud, tu energía y tu peso corporal.",
    imageUrl: "/lovable-uploads/4eabfea8-4026-41ed-81bc-b28b37a63549.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: "El masaje terapéutico es una práctica ancestral que combina técnicas manuales específicas para aliviar tensiones, mejorar la circulación y promover la relajación profunda. Esta disciplina no solo aporta beneficios físicos, sino que también contribuye significativamente al bienestar mental y emocional. Los estudios científicos han demostrado que el masaje regular puede reducir los niveles de cortisol, la hormona del estrés, mientras aumenta la producción de endorfinas, conocidas como las hormonas de la felicidad."
  },
  {
    id: "2", 
    title: "Técnicas de Relajación Natural",
    description: "Aprende métodos naturales para reducir el estrés y encontrar la paz interior.",
    imageUrl: "/lovable-uploads/73176c96-6ab7-4353-91f1-ca8269c05514.png",
    videoUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
    content: "Las técnicas de relajación natural son herramientas poderosas que nos permiten gestionar el estrés cotidiano de manera efectiva y sostenible. Desde la respiración consciente hasta la meditación mindfulness, estas prácticas milenarias han sido adaptadas para el mundo moderno, ofreciendo un refugio de calma en medio del ritmo acelerado de la vida actual. La relajación natural no requiere equipos especiales ni grandes inversiones de tiempo, solo la disposición de conectar con nuestro ser interior y escuchar las necesidades de nuestro cuerpo y mente."
  },
  {
    id: "3",
    title: "Alimentación Consciente y Bienestar",
    description: "Explora la conexión entre una alimentación mindful y tu salud integral.",
    imageUrl: "/lovable-uploads/4eabfea8-4026-41ed-81bc-b28b37a63549.png",
    videoUrl: "https://www.youtube.com/embed/rickroll",
    content: "La alimentación consciente va más allá de simplemente elegir alimentos saludables; se trata de desarrollar una relación mindful con la comida que nutre tanto el cuerpo como el alma. Esta práctica invita a prestar atención plena a cada aspecto de la experiencia alimentaria: desde la selección y preparación de los alimentos hasta el proceso de masticación y digestión. Al cultivar la conciencia alimentaria, no solo mejoramos nuestra digestión y absorción de nutrientes, sino que también desarrollamos una mayor apreciación por los sabores, texturas y aromas que nos ofrece la naturaleza."
  }
];

export const BlogSection = () => {
  const [visiblePosts, setVisiblePosts] = useState(3);

  const handleShowMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  const handleReadArticle = (post: BlogPost) => {
    // Create URL with post data as query parameters
    const postData = encodeURIComponent(JSON.stringify(post));
    const articleUrl = `/article?data=${postData}`;
    window.open(articleUrl, '_blank');
  };

  return (
    <Section id="blog" className="bg-muted/30">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <BookOpen className="h-8 w-8 text-primary" />
          <h2 className="text-4xl font-bold text-foreground">Blog de Bienestar</h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Descubre artículos, consejos y recursos para mejorar tu bienestar integral
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogPosts.slice(0, visiblePosts).map((post) => (
          <Card 
            key={post.id} 
            className="group service-card bg-card border-border overflow-hidden hover:shadow-glow transition-smooth"
          >
            <div className="relative overflow-hidden">
              <div className="h-48 bg-muted flex items-center justify-center transition-smooth group-hover:scale-105">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-smooth duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-smooth" />
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-smooth">
                {post.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {post.description}
              </p>
              
              <Button 
                onClick={() => handleReadArticle(post)}
                className="btn-primary w-full group/btn"
              >
                Leer Artículo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {visiblePosts < blogPosts.length && (
        <div className="text-center">
          <Button 
            onClick={handleShowMore}
            variant="outline"
            size="lg"
            className="btn-accent text-lg px-8"
          >
            Mostrar Más Artículos
          </Button>
        </div>
      )}
    </Section>
  );
};