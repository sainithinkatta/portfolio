import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, ArrowRight, Check, Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionFrame from '@/components/ui/section-frame';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Reveal from '@/components/motion/Reveal';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const submit = (event) => {
    event.preventDefault();
    setStatus('sending');
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      () => { setStatus('sent'); formRef.current?.reset(); window.setTimeout(() => setStatus('idle'), 4000); },
      () => { setStatus('error'); window.setTimeout(() => setStatus('idle'), 4000); }
    );
  };

  const labels = {
    idle: <><span>Send message</span><Send className="h-4 w-4" /></>,
    sending: <><span>Sending</span><motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: .8, ease: 'linear' }} className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white" /></>,
    sent: <><span>Message sent</span><Check className="h-4 w-4" /></>,
    error: <><span>Try again</span><AlertCircle className="h-4 w-4" /></>,
  };

  return (
    <SectionFrame id="contact" tone="plain" className="min-h-[760px] !border-[#b8d3ff] !bg-[#eef5ff] text-[#101217] dark:!border-[#2f6fbf]/60 dark:!bg-[#0d2744] dark:text-white">
      <div className="absolute -bottom-56 -left-24 h-[520px] w-[520px] rounded-full bg-[#dceaff]/80 dark:bg-[#174a7f]/45" />
      <div className="absolute -right-36 -top-48 h-[500px] w-[500px] rounded-full bg-[#8ec5ff]/25 blur-[90px] dark:bg-[#2d79c7]/20" />
      <div className="relative grid gap-12 xl:grid-cols-[.9fr_1.1fr] xl:items-center xl:gap-20">
        <Reveal y={20}>
          <p className="text-caption font-semibold uppercase tracking-[.18em] text-[#0767df] dark:text-[#59a2ff]">Let’s work together</p>
          <h2 className="mt-5 font-display text-[clamp(3rem,6vw,6rem)] font-semibold leading-[.95] tracking-[-.06em] text-balance">Have an idea worth building?</h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-black/60 dark:text-white/70">I’m always interested in ambitious products, thoughtful teams, and meaningful engineering challenges.</p>
          <div className="mt-10 space-y-4 border-t border-[#b8d3ff] pt-8 dark:border-[#2f6fbf]/60">
            <a href="mailto:sainithinkatta09@gmail.com" className="group flex items-center justify-between gap-4 rounded-2xl border border-[#b8d3ff] bg-white/70 p-4 text-[#0767df] backdrop-blur-xl transition-colors hover:bg-white dark:border-[#2f6fbf]/60 dark:bg-white/5 dark:text-[#79b5ff] dark:hover:bg-white/10"><span className="flex min-w-0 items-center gap-3"><Mail className="h-5 w-5 shrink-0" /><span className="truncate text-sm">sainithinkatta09@gmail.com</span></span><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            <div className="flex items-center gap-3 px-4 text-sm text-black/55 dark:text-white/65"><MapPin className="h-5 w-5 text-[#0767df] dark:text-[#79b5ff]" />Virginia, USA</div>
          </div>
        </Reveal>

        <Reveal y={20} delay={.1}>
          <form ref={formRef} onSubmit={submit} className="rounded-[30px] border border-[#c7dcf7] bg-white p-6 text-[#16161c] shadow-[0_30px_90px_-45px_rgba(7,103,223,.35)] dark:border-[#2f6fbf]/50 dark:bg-[#101b29] dark:text-white sm:p-9 lg:p-10">
            <div className="mb-8"><p className="font-display text-2xl font-semibold">Tell me about your project</p><p className="mt-2 text-sm text-black/50 dark:text-white/55">I usually reply within 1–2 business days.</p></div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-semibold">Name<Input name="name" placeholder="Your name" required className="mt-2" /></label>
              <label className="text-xs font-semibold">Email<Input name="email" type="email" placeholder="you@example.com" required className="mt-2" /></label>
            </div>
            <label className="mt-5 block text-xs font-semibold">Subject<Input name="subject" placeholder="Project inquiry" required className="mt-2" /></label>
            <label className="mt-5 block text-xs font-semibold">Message<Textarea name="message" placeholder="A little about the challenge, goals, and timeline..." rows={5} required className="mt-2 resize-none" /></label>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" disabled={status === 'sending'} className={`min-w-[180px] bg-[#0767df] text-white hover:bg-[#005bc8] ${status === 'sent' ? '!bg-emerald-600' : ''}`}>
                <AnimatePresence mode="wait" initial={false}><motion.span key={status} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="inline-flex items-center gap-2">{labels[status]}</motion.span></AnimatePresence>
              </Button>
              {status === 'error' && <span role="alert" className="text-xs font-medium text-red-600">Couldn’t send. Please try again.</span>}
            </div>
          </form>
        </Reveal>
      </div>
    </SectionFrame>
  );
};

export default Contact;
