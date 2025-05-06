
import { ArrowDown } from "lucide-react";
import { personalInfo } from "@/lib/constants";
import { useAnimateOnScroll } from "@/lib/animations";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  const { isVisible: isVisible1, ref: ref1 } = useAnimateOnScroll();
  const { isVisible: isVisible2, ref: ref2 } = useAnimateOnScroll({ threshold: 0.2 });
  const { isVisible: isVisible3, ref: ref3 } = useAnimateOnScroll({ threshold: 0.3 });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="container-tight py-20 mt-16 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 px-4">
          <span 
            ref={ref1} 
            className={`px-4 py-1 rounded-full text-xs font-medium bg-secondary/80 backdrop-blur-sm text-secondary-foreground uppercase tracking-wider ${isVisible1 ? 'animate-fade-in' : 'opacity-0'}`}
          >
            {personalInfo.title}
          </span>

          <h1 
            ref={ref2} 
            className={`text-4xl md:text-5xl lg:text-7xl font-bold leading-tight max-w-5xl ${isVisible2 ? 'animate-slide-in' : 'opacity-0'}`}
          >
            Crafting digital experiences with clean, elegant code
          </h1>

          <p 
            ref={ref3} 
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl ${isVisible3 ? 'animate-fade-in' : 'opacity-0'}`} 
            style={{ animationDelay: '0.2s' }}
          >
            {personalInfo.bio}
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 mt-6 ${isVisible3 ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <a 
              href="#projects" 
              className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary transition-all"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border border-input bg-background/60 backdrop-blur-sm hover:bg-secondary transition-colors text-foreground px-8 py-3 rounded-md font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors z-10"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
