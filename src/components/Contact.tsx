
import { useState } from "react";
import { personalInfo } from "@/lib/constants";
import { Mail, MapPin, Send, Phone, Github, Linkedin, Twitter, Loader2 } from "lucide-react";
import { useAnimateOnScroll } from "@/lib/animations";
import { useToast } from "@/hooks/use-toast";
import { sendEmail, type EmailData } from "@/services/emailService";

const Contact = () => {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  // Form validation state
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  
  const { toast } = useToast();
  
  // Animation hooks
  const { isVisible: headerVisible, ref: headerRef } = useAnimateOnScroll();
  const { isVisible: formVisible, ref: formRef } = useAnimateOnScroll({ threshold: 0.2 });
  const { isVisible: infoVisible, ref: infoRef } = useAnimateOnScroll({ threshold: 0.3 });

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: {
      name?: string;
      email?: string;
      message?: string;
    } = {};
    
    // Validate name
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    
    // Validate email
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Validate message
    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form first
    if (!validateForm()) {
      toast({
        title: "Invalid form",
        description: "Please fill out all required fields correctly.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Prepare email data
    const emailData: EmailData = {
      name,
      email,
      message
    };
    
    // Send email
    const success = await sendEmail(emailData);
    
    if (success) {
      // Reset form on success
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    }
    
    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-tight">
        <div 
          ref={headerRef}
          className={`mb-16 text-center ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div 
            ref={formRef}
            className={`glass rounded-2xl p-6 md:p-8 ${formVisible ? 'animate-slide-in' : 'opacity-0'}`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 bg-red-50/10' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) {
                      setErrors({ ...errors, name: undefined });
                    }
                  }}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 bg-red-50/10' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) {
                      setErrors({ ...errors, email: undefined });
                    }
                  }}
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 bg-red-50/10' : 'border-input'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none`}
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) {
                      setErrors({ ...errors, message: undefined });
                    }
                  }}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-all disabled:opacity-70"
                aria-live="polite"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div 
            ref={infoRef}
            className={`space-y-6 md:pt-8 ${infoVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
          >
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out using the form or directly via email or phone. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg text-foreground">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Email</h5>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg text-foreground">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Phone</h5>
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg text-foreground">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Location</h5>
                  <p className="text-muted-foreground">{personalInfo.location}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-sm font-medium mb-4">Follow me</h4>
              <div className="flex gap-4">
                {personalInfo.socials.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                    aria-label={social.name}
                  >
                    {social.name === "GitHub" && <Github size={20} />}
                    {social.name === "LinkedIn" && <Linkedin size={20} />}
                    {social.name === "Twitter" && <Twitter size={20} />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
