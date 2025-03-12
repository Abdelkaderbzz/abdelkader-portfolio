
import { personalInfo } from "@/lib/constants";
import { useAnimateOnScroll } from "@/lib/animations";
import { Github, Linkedin, Twitter } from "lucide-react";

const About = () => {
  const { isVisible: isVisible1, ref: ref1 } = useAnimateOnScroll();
  const { isVisible: isVisible2, ref: ref2 } = useAnimateOnScroll({ threshold: 0.2 });
  const { isVisible: isVisible3, ref: ref3 } = useAnimateOnScroll({ threshold: 0.3 });
  const { isVisible: isVisible4, ref: ref4 } = useAnimateOnScroll({ threshold: 0.3 });

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-tight">
        <div 
          ref={ref1}
          className={`mb-12 ${isVisible1 ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Get to know me</h3>
        </div>

        <div className="split">
          <div 
            ref={ref2}
            className={`${isVisible2 ? 'animate-slide-in' : 'opacity-0'}`}
          >
            <div className="aspect-square overflow-hidden rounded-2xl relative">
              <div className="absolute inset-0 bg-black/10 z-10"></div>
              <img 
                src="/lovable-uploads/24c2dac9-ca87-4477-9992-cc640f298fbb.png" 
                alt={personalInfo.name} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className={`space-y-6 flex flex-col justify-center ${isVisible2 ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
              <p className="text-muted-foreground">{personalInfo.title} based in {personalInfo.location}</p>
            </div>

            <p className="text-base md:text-lg">{personalInfo.longBio}</p>

            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href={personalInfo.socials[0].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={personalInfo.socials[1].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={personalInfo.socials[2].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={ref3}
          className={`mt-20 ${isVisible3 ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          
          <div className="space-y-10">
            {personalInfo.experience?.map((job, index) => (
              <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                <div className="absolute w-4 h-4 rounded-full bg-primary top-0 -left-[9px]"></div>
                <div className="mb-2">
                  <h4 className="text-xl font-semibold">{job.title}</h4>
                  <p className="text-muted-foreground">{job.company} | {job.period}</p>
                </div>
                <ul className="space-y-2 mt-4">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground before:content-['•'] before:mr-2 before:text-primary">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div 
          ref={ref4}
          className={`mt-20 ${isVisible4 ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          
          <div className="space-y-10">
            {personalInfo.education?.map((edu, index) => (
              <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                <div className="absolute w-4 h-4 rounded-full bg-primary top-0 -left-[9px]"></div>
                <div className="mb-2">
                  <h4 className="text-xl font-semibold">{edu.institution}</h4>
                  <p className="text-muted-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.location} | {edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
