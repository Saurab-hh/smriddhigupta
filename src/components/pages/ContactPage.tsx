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
      <div className="w-10 h-0.5 bg-book-gold mb-5" />

      <form onSubmit={handleSubmit} className="space-y-3 flex-1">
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
          className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-md hover:bg-primary/90 transition-colors"
        >
          <Send className="w-4 h-4" /> Send Message
        </button>
      </form>

      <div className="mt-5 pt-4 border-t border-border/50">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-body text-xs text-muted-foreground">
            <Mail className="w-3.5 h-3.5 text-primary" /> your.email@example.com
          </div>
          <div className="flex items-center gap-2 font-body text-xs text-muted-foreground">
            <Phone className="w-3.5 h-3.5 text-primary" /> +1 234 567 890
          </div>
        </div>
        <div className="flex gap-3 mt-3">
          {[
            { icon: Github, href: '#' },
            { icon: Linkedin, href: '#' },
            { icon: Twitter, href: '#' },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
