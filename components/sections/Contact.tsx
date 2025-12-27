"use client";

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { personalInfo } from '@/lib/data';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaSkype } from 'react-icons/fa';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se implementaría la lógica de envío del formulario
    console.log('Form submitted:', formData);
    alert('¡Mensaje enviado! (Funcionalidad de demostración)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-container bg-[rgb(var(--color-surface))]/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">{t.contact.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t.contact.name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-lg focus:outline-none focus:border-[rgb(var(--color-primary))] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t.contact.phone}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-lg focus:outline-none focus:border-[rgb(var(--color-primary))] transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.contact.email}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-lg focus:outline-none focus:border-[rgb(var(--color-primary))] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder={t.contact.subject}
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-lg focus:outline-none focus:border-[rgb(var(--color-primary))] transition-colors"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder={t.contact.message}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-lg focus:outline-none focus:border-[rgb(var(--color-primary))] transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                {t.contact.send}
                <span className="text-xl">↗</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Phone */}
            <div className="card group hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/10 dark:bg-lime-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <HiPhone className="w-6 h-6 text-green-500 dark:text-lime-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{t.contact.phoneNumber}</h3>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="card group hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/10 dark:bg-lime-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <HiMail className="w-6 h-6 text-green-500 dark:text-lime-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{t.contact.email}</h3>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Skype */}
            <div className="card group hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/10 dark:bg-lime-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FaSkype className="w-6 h-6 text-green-500 dark:text-lime-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{t.contact.skype}</h3>
                  <p className="text-[rgb(var(--color-text-secondary))]">WilliamDesignUX</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="card group hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/10 dark:bg-lime-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <HiLocationMarker className="w-6 h-6 text-green-500 dark:text-lime-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{t.contact.address}</h3>
                  <p className="text-[rgb(var(--color-text-secondary))]">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
