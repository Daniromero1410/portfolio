"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: {
      es: "Optimiza tu Aplicación Web para Velocidad",
      en: "Optimize Your Web Application for Speed"
    },
    category: "Performance",
    date: "March 28, 2024",
    readTime: "3 min read",
    emoji: "📊"
  },
  {
    title: {
      es: "Mejores Prácticas para Desarrollo Web Seguro",
      en: "Best Practices for Secure Web Development"
    },
    category: "Security",
    date: "March 15, 2024",
    readTime: "5 min read",
    emoji: "🔒"
  },
  {
    title: {
      es: "10 Frameworks de JavaScript para 2024",
      en: "10 JavaScript Frameworks for 2024"
    },
    category: "Trending",
    date: "March 10, 2024",
    readTime: "4 min read",
    emoji: "📱"
  }
];

export default function Blog() {
  const { language, t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="blog" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-label justify-center">Blog</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono">
            {t.blog.title}
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {blogPosts.map((post, index) => (
            <motion.article 
              key={index} 
              variants={item} 
              className="card-simple card-hover group cursor-pointer"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[rgb(var(--color-primary))]/10 to-[rgb(var(--color-cyan))]/10 rounded-lg mb-4 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                {post.emoji}
              </div>

              {/* Category badge */}
              <div className="mb-3">
                <span className="px-3 py-1 text-xs rounded-full bg-[rgb(var(--color-primary))]/10 text-[rgb(var(--color-primary))] border border-[rgb(var(--color-primary))]/20 font-mono">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-2 font-mono group-hover:text-[rgb(var(--color-primary))] transition-colors">
                {language === 'es' ? post.title.es : post.title.en}
              </h3>

              {/* Meta info */}
              <p className="text-sm text-[rgb(var(--color-text-secondary))] font-mono mb-4">
                {post.date} • {post.readTime}
              </p>

              {/* Read more link */}
              <p className="text-[rgb(var(--color-primary))] text-sm font-mono">
                {t.blog.readMore} →
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
