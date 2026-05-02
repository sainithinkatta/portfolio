import { useRef, useState } from "react";
import { Send, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('sent');
          formRef.current.reset();
          setTimeout(() => setStatus('idle'), 4000);
        },
        () => {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 4000);
        }
      );
  };

  return (
    <section id="contact" className="py-32 lg:py-48 border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20"
        >
          <p className="text-caption uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Contact
          </p>
          <h2 className="text-headline text-foreground text-balance">
            Let's work together.
          </h2>
          <p className="mt-5 text-body text-muted-foreground max-w-2xl">
            Have a project in mind, or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <p className="text-caption uppercase tracking-[0.18em] text-muted-foreground mb-3">
                Email
              </p>
              <a
                href="mailto:sainithinkatta09@gmail.com"
                className="inline-flex items-center gap-2 text-body text-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                sainithinkatta09@gmail.com
              </a>
            </div>

            <div>
              <p className="text-caption uppercase tracking-[0.18em] text-muted-foreground mb-3">
                Location
              </p>
              <p className="inline-flex items-center gap-2 text-body text-foreground">
                <MapPin className="h-4 w-4" />
                USA
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="rounded-lg bg-surface p-8 sm:p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-caption font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-caption font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-caption font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="Project inquiry" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-caption font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project."
                    rows={6}
                    required
                    className="resize-none"
                  />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <Button type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : (
                      <>
                        Send message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>

                  {status === 'sent' && (
                    <span className="text-caption text-accent">Message sent.</span>
                  )}
                  {status === 'error' && (
                    <span className="text-caption text-destructive">Failed to send. Try again.</span>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
