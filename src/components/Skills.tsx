
import { useAnimateOnScroll } from "@/lib/animations";
import { skillsData } from "@/lib/constants";

const Skills = () => {
  const { isVisible: headerVisible, ref: headerRef } = useAnimateOnScroll({
    threshold: 0.2,
    rootMargin: "-50px"
  });

  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="container-tight">
        <div 
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-500 ease-out ${
            headerVisible ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I specialize in creating responsive and intuitive user interfaces with modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => {
            const { isVisible, ref } = useAnimateOnScroll({ 
              threshold: 0.1,
              rootMargin: "-20px" 
            });
            const Icon = category.icon;
            
            return (
              <div 
                key={category.name}
                ref={ref}
                className={`bg-white rounded-2xl p-6 shadow-sm transition-all duration-500 ease-out transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  willChange: 'transform, opacity'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-lg font-semibold">{category.name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
