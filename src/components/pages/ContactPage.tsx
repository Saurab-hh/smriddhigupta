import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Twitter, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Demo)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full h-full page-paper p-6 md:p-8 flex flex-col overflow-y-auto">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">Contact</h2>
      <div className="w-10 h-0.5 bg-book-gold mb-4" />

      <form onSubmit={handleSubmit} className="space-y-2.5 flex-1">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-3 py-2 bg-card border border-border rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-3 py-2 bg-card border border-border rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-3 py-2 bg-card border border-border rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          required
        />
        <button
          type="submit"
          className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-md hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-primary/30 relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-book-gold/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
          <Send className="w-4 h-4 relative z-10" />
          <span className="relative z-10">Send Message</span>
        </button>
      </form>

      <div className="mt-4 pt-3 border-t border-border/50">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 font-body text-xs text-muted-foreground">
            <Mail className="w-3.5 h-3.5 text-primary" /> smriddhi.gupta@example.com
          </div>
          <div className="flex items-center gap-2 font-body text-xs text-muted-foreground">
            <Phone className="w-3.5 h-3.5 text-primary" /> +91 XXXXX XXXXX
          </div>
        </div>
        <div className="flex gap-3 mt-3">
          {[
            { icon: Github, href: '#' },
            { icon: Linkedin, href: '#' },
            { icon: Twitter, href: '#' },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 hover:rotate-6 text-muted-foreground">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
