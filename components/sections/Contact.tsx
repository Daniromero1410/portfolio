"use client";

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { personalInfo } from '@/lib/data';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Crear mailto link
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Contacto desde Portfolio')}&body=${encodeURIComponent(`Nombre: ${formData.name}\nTeléfono: ${formData.phone}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`;
    window.open(mailtoLink);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactItems = [
    {
      icon: HiPhone,
      label: t.contact.phoneNumber,
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: HiMail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: personalInfo.linkedin,
      href: `https://${personalInfo.linkedin}`
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: personalInfo.github,
      href: `https://${personalInfo.github}`
    },
    {
      icon: HiLocationMarker,
      label: language === 'es' ? 'Ubicación' : 'Location',
      value: personalInfo.location,
      href: "#"
    }
  ];

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-label justify-center">Contact</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.name}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgb(var(--color-surface-lighter))] border border-[rgb(var(--color-border))] rounded-lg focus:outline-none focus:border-[rgb(var(--color-primary))] transition-colors font-mono text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t.contact.phone}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[rgb(var(--color-surface-lighter))] border border-[rgb(var(--color-border))] rounded-lg focus:outline-none focus:border-[rgb(var(--color-primary))] transition-colors font-mono text-sm"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgb(var(--color-surface-lighter))] border border-[rgb(var(--color-border))] rounded-lg focus:outline-none focus:border-[rgb(var(--color-primary))] transition-colors font-mono text-sm"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder={t.contact.subject}
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[rgb(var(--color-surface-lighter))] border border-[rgb(var(--color-border))] rounded-lg focus:outline-none focus:border-[rgb(var(--color-primary))] transition-colors font-mono text-sm"
                />
              </div>

              <textarea
                name="message"
                placeholder={t.contact.message}
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-[rgb(var(--color-surface-lighter))] border border-[rgb(var(--color-border))] rounded-lg focus:outline-none focus:border-[rgb(var(--color-primary))] transition-colors font-mono text-sm resize-none"
              />

              <button type="submit" className="btn-primary w-full justify-center">
                {t.contact.send}
                <HiPaperAirplane className="w-5 h-5 rotate-90" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="card-simple p-5 flex items-center gap-4 group card-hover block"
              >
                <div className="w-12 h-12 bg-[rgb(var(--color-primary))]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-[rgb(var(--color-primary))]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold font-mono text-[rgb(var(--color-text))] text-sm">
                    {item.label}
                  </h3>
                  <p className="text-xs text-[rgb(var(--color-text-secondary))] font-mono group-hover:text-[rgb(var(--color-primary))] transition-colors truncate">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
