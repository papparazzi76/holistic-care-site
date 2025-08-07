import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUp, Home } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  content: string;
}

export const Article = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const postData = searchParams.get('data');
    if (postData) {
      try {
        const decodedPost = JSON.parse(decodeURIComponent(postData));
        setPost(decodedPost);
      } catch (error) {
        console.error('Error parsing post data:', error);
        navigate('/');
      }
    } else {
      navigate('/');
    }
  }, [searchParams, navigate]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    window.location.href = '/';
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Cargando artículo...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Full-width video section with hover effect */}
      <div className="relative w-full h-96 md:h-[500px] group overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-smooth z-10" />
        <iframe
          src={post.videoUrl}
          title={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute bottom-6 left-6 z-20">
          <Button
            onClick={goHome}
            variant="secondary"
            className="bg-background/90 hover:bg-background text-foreground shadow-lg"
          >
            <Home className="mr-2 h-4 w-4" />
            Volver a Inicio
          </Button>
        </div>
      </div>

      {/* Article content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.description}
            </p>
          </header>

          <div className="text-foreground leading-relaxed space-y-6">
            {post.content.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="text-lg leading-8">
                  {paragraph.trim()}
                </p>
              )
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="lg"
                className="btn-primary"
              >
                <ArrowUp className="mr-2 h-4 w-4" />
                Volver al Inicio
              </Button>
              
              <Button
                onClick={goHome}
                size="lg"
                className="btn-accent"
              >
                <Home className="mr-2 h-4 w-4" />
                Ir a la Página Principal
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};