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
    imageUrl: "https://iwzjemetiiiqflomwquh.supabase.co/storage/v1/object/public/images/leptina-blog-entrada1.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: "¿Qué es la Leptina y Cómo Funciona?\n\nLa leptina es una hormona proteica secretada principalmente por los adipocitos (células grasas) del tejido adiposo blanco. Su función principal es \"enviar señales al cerebro sobre las reservas de grasa en el cuerpo\". Actúa fundamentalmente sobre el hipotálamo, una región cerebral que regula funciones vitales como el hambre, la sed, la temperatura corporal y el sueño.\n\nCuando las reservas de grasa son suficientes, la leptina se libera en mayor cantidad, lo que indica al cerebro que \"se puede reducir el apetito y aumentar el gasto energético\". Por el contrario, \"cuando hay poca grasa, la leptina disminuye y el cerebro responde con aumento del apetito y menor gasto energético\", lo que es una estrategia ancestral para conservar energía en tiempos de escasez.\n\nFunciones Clave de la Leptina\n\nAunque su rol más conocido es el de regulador del apetito, la leptina está implicada en diversas funciones fisiológicas esenciales:\n\nRegulación del Apetito: Se une a receptores en el hipotálamo, donde \"inhibe la producción de neuropéptidos que estimulan el hambre\" y \"favorece los que promueven la saciedad\", creando un equilibrio para mantener un peso corporal saludable.\n\nGasto Energético: Niveles altos de leptina indican al cuerpo que hay suficiente energía, promoviendo \"mayor actividad y termogénesis\" (aumento del gasto calórico).\n\nReproducción y Fertilidad: Influye en el eje hipotalámico-hipofisario-gonadal, siendo necesaria para la \"ovulación y el funcionamiento menstrual en las mujeres, así como para la producción de testosterona en los hombres\".\n\nFunciones Inmunológicas: Modula la actividad de células inmunes como macrófagos, linfocitos T y neutrófilos, favoreciendo una \"respuesta inmune equilibrada\". Niveles extremadamente bajos pueden comprometer la capacidad de luchar contra infecciones.\n\nRegulación del Sueño y el Estado de Ánimo: Se han relacionado niveles inadecuados de leptina con \"trastornos del sueño y del estado de ánimo\", influyendo en la calidad del sueño, los niveles de energía y la sensación de bienestar general.\n\nLeptina y Obesidad: El Problema de la Resistencia a la Leptina\n\nParadójicamente, \"muchas personas con obesidad presentan niveles elevados de leptina, pero no experimentan la supresión del apetito que debería producirse\". Este fenómeno se conoce como resistencia a la leptina.\n\nEn la resistencia a la leptina, el hipotálamo \"deja de responder adecuadamente a la señal, como si el cerebro estuviera 'sordo' a su presencia\". Esto conlleva a:\n\nAumento del apetito.\nDisminución del gasto energético.\nAlmacenamiento continuo de grasa.\n\nFactores que contribuyen a esta resistencia incluyen:\n\n\"Dietas altas en azúcares refinados y grasas trans\".\n\"Inflamación crónica de bajo grado\".\n\"Estrés sostenido y falta de sueño\".\n\"Alteraciones hormonales\".\n\nLa resistencia a la leptina crea un \"ciclo vicioso que perpetúa el sobrepeso\", ya que a mayor grasa corporal, más leptina se produce, pero menos eficaz es su acción.\n\nEfectos de Niveles Bajos de Leptina\n\nAunque menos común, los niveles bajos de leptina también tienen consecuencias significativas para la salud, observándose en personas con muy bajo porcentaje de grasa corporal, trastornos alimentarios como la anorexia nerviosa o ejercicio extremo. Los efectos incluyen:\n\nAmenorrea (ausencia de menstruación).\nBaja libido y alteración hormonal.\nFatiga crónica.\nDisminución de la densidad ósea.\nDebilitamiento del sistema inmune.\n\nEn estos casos, el cuerpo interpreta una escasez de energía y entra en \"modo supervivencia\".\n\nControl de la Leptina a Través de Hábitos Diarios\n\nAunque la producción de leptina está ligada a la grasa corporal, el estilo de vida puede mejorar o empeorar la sensibilidad a esta hormona:\n\nDieta Equilibrada: Reducir alimentos ultraprocesados, azúcares y grasas saturadas. Incluir fibra, omega-3, frutas, verduras y proteínas magras.\n\nDormir Bien: La falta de sueño afecta negativamente la regulación de la leptina y aumenta la grelina. Dormir \"entre 7 y 9 horas diarias mejora la respuesta leptínica\".\n\nEjercicio Físico: El ejercicio regular, tanto de fuerza como aeróbico, \"mejora la sensibilidad a la leptina, incluso sin necesidad de perder mucho peso\".\n\nReducir el Estrés: El cortisol (hormona del estrés) puede interferir con la leptina. Prácticas como mindfulness, meditación y respiración profunda tienen un impacto positivo.\n\nTratamientos y Terapias en Estudio\n\nLa investigación sobre la leptina ha explorado terapias hormonales. Sin embargo, el uso de leptina como tratamiento para la obesidad no ha tenido éxito debido a la resistencia existente. Actualmente, se estudian alternativas como:\n\nSensibilizadores de leptina.\nCombinación con otras hormonas (amilina o insulina).\nTerapias antiinflamatorias.\n\nLa leptina recombinante ha sido exitosa en casos raros de deficiencia congénita de leptina.\n\nConclusión: El Papel de la Leptina en la Salud Integral\n\nLa leptina es \"mucho más que una hormona del hambre\". Es un \"regulador maestro del equilibrio energético, con implicaciones en la reproducción, la inmunidad, el sueño y la salud metabólica en general\".\n\nEs crucial entender que \"lo más importante no es tanto cuánta leptina tenemos, sino cómo responde el cuerpo a ella\". Tanto los niveles excesivos como los bajos pueden ser perjudiciales. Adoptar \"hábitos de vida saludables es clave para mantener una buena sensibilidad a la leptina\", lo que no solo ayuda a controlar el peso corporal sino también a prevenir enfermedades como la diabetes tipo 2, el síndrome metabólico y problemas cardiovasculares.\n\nComprender la leptina nos ofrece una \"visión más completa del cuerpo humano como un sistema integrado\", donde el tejido graso es un \"órgano endocrino activo que regula procesos esenciales para la vida\", y no solo un almacén de energía."
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
                  className="w-full h-full object-cover transition-smooth duration-300"
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-smooth" />
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
