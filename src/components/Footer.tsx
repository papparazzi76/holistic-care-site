const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">Bienestar Natural</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Tu centro de confianza para terapias naturales, quiromasaje y pilates especializado. 
              Más de 15 años cuidando tu bienestar integral.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-smooth">Quiromasaje Terapéutico</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-smooth">Masajes Relajantes</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-smooth">Pilates Terapéutico</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-smooth">Pilates para Mayores</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-smooth">Asesoría Natural</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <div className="space-y-2 text-sm text-background/80">
              <p>📍 Calle Bienestar 123<br />28001 Madrid, España</p>
              <p>📞 +34 600 123 456</p>
              <p>✉️ info@bienestarnatural.es</p>
              <p className="text-xs mt-4">
                Lun-Vie: 9:00-20:00<br />
                Sáb: 10:00-15:00
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2024 Bienestar Natural. Todos los derechos reservados. 
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-background transition-smooth">Política de Privacidad</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-background transition-smooth">Términos de Servicio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;