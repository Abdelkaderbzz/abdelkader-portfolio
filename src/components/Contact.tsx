import { useEffect, useState } from 'react';
import { Send, Github, Linkedin, Twitter, Loader2, ArrowUpRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendEmail, type EmailData } from '@/services/emailService';
import { contentfulClient } from '@/lib/contentfulClient';
import SectionHeader from '@/components/SectionHeader';

const Contact = ({ personalDetails }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [socials, setSocials] = useState([]);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Invalid form',
        description: 'Please fill out all required fields correctly.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    const success = await sendEmail({ name, email, message } as EmailData);

    if (success) {
      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }

    setLoading(false);
  };

  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: 'socials' })
      .then((response) => {
        setSocials(
          response.items.map((item) => ({
            id: item.sys.id,
            ...(item.fields as Record<string, unknown>),
          }))
        );
      })
      .catch(console.error);
  }, []);

  const inputClass = (hasError: boolean) =>
    `w-full bg-transparent border-b py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-colors ${
      hasError
        ? 'border-destructive'
        : 'border-[hsl(var(--paper-line))] focus:border-brand'
    }`;

  return (
    <section
      id="contact"
      className="section-padding border-t border-[hsl(var(--paper-line))]"
    >
      <div className="container-tight">
        <SectionHeader
          index="07"
          label="Contact"
          title={
            <>
              Let's build
              <br />
              <span className="italic text-brand">something good.</span>
            </>
          }
          description="Have a project in mind or just want to say hello? Send a message or reach out directly."
        />

        <div className="grid md:grid-cols-[1fr_320px] gap-12 lg:gap-20">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className={inputClass(!!errors.name)}
                placeholder="Your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={inputClass(!!errors.email)}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className={`${inputClass(!!errors.message)} resize-none`}
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors({ ...errors, message: undefined });
                }}
              />
              {errors.message && (
                <p className="mt-1.5 text-sm text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary group disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <Send size={15} />
                </>
              )}
            </button>
          </form>

          <div className="space-y-10">
            <div className="space-y-5">
              <a
                href={`mailto:${personalDetails?.email}`}
                className="group block"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Email
                </p>
                <p className="text-lg group-hover:text-brand transition-colors break-all">
                  {personalDetails?.email}
                </p>
              </a>
              <a href={`tel:${personalDetails?.phone}`} className="group block">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Phone
                </p>
                <p className="text-lg group-hover:text-brand transition-colors">
                  {personalDetails?.phone}
                </p>
              </a>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Location
                </p>
                <p className="text-lg">{personalDetails?.location}</p>
              </div>
            </div>

            {socials.length > 0 && (
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Elsewhere
                </p>
                <div className="flex flex-col">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-2.5 border-t border-[hsl(var(--paper-line))] last:border-b hover:text-brand transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        {social.name === 'GitHub' && <Github size={16} />}
                        {social.name === 'LinkedIn' && <Linkedin size={16} />}
                        {social.name === 'Twitter' && <Twitter size={16} />}
                        {social.name}
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
