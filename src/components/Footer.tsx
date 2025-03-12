
import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12 relative">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-semibold tracking-tight">
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-primary-foreground/70 mt-1">
              {personalInfo.title}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-primary-foreground/70 text-sm mt-1">
              Designed and built with ❤️
            </p>
          </div>
        </div>
      </div>
      
      <a 
        href="#home" 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-3 rounded-full transition-all hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
