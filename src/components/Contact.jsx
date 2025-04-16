import { useRef } from "react";
import { Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const GITHUB_URL = "https://github.com/sainithinkatta"
  const LINKEDIN_URL = "https://www.linkedin.com/in/sai-nithin-katta-1401001b7";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // EmailJS template ID
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out to me through any of the channels below.
          </p>
        </div>
        
        {/* Centered Contact Form */}
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-center text-xl font-semibold mb-6">Send Me a Message</h3>
              
              <form 
                ref={formRef} 
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name here"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email here"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" >
                  <span className="flex items-center">
                    Send Message
                    <Send size={16} className="ml-2" />
                  </span>
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="font-medium mb-3">Connect with me</p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href={LINKEDIN_URL} 
                    target="_blank"
                    className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>

                  <a 
                    href={GITHUB_URL} 
                    target="_blank"
                    className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;