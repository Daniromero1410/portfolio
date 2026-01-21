# Portfolio - Daniel Alejandro Romero Moreno

Portfolio personal desarrollado con Next.js 14, TypeScript, Tailwind CSS y Framer Motion.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 🌓 Modo oscuro y claro
- 🌍 Soporte multiidioma (Español/Inglés)
- 🎨 Animaciones suaves con Framer Motion
- 📱 Mobile-first design
- ⚡ Optimizado para rendimiento
- 📄 Descarga de CV

## 🛠️ Tecnologías Utilizadas

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Temas:** next-themes
- **Iconos:** React Icons
- **Fuentes:** Next/Font (Inter)

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/daniromero1410/portfolio.git

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 📁 Estructura del Proyecto

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── sections/         # Secciones de la página
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── LanguageToggle.tsx
│   └── Providers.tsx
├── lib/                   # Utilidades y datos
│   ├── data.ts           # Datos del portfolio
│   ├── translations.ts   # Traducciones
│   └── LanguageContext.tsx
├── public/               # Archivos estáticos
│   ├── cv/              # CV en PDF
│   └── images/          # Imágenes
└── package.json
```

## 🎨 Personalización

### Datos Personales

Edita el archivo `lib/data.ts` para actualizar:
- Información personal
- Experiencia laboral
- Educación
- Proyectos
- Habilidades técnicas

### Traducciones

Edita el archivo `lib/translations.ts` para actualizar las traducciones de la interfaz.

### Temas

Los colores del tema se pueden personalizar en `tailwind.config.ts` y `app/globals.css`.

### CV

Reemplaza el archivo `public/cv/Daniel_Romero_CV.pdf` con tu CV en formato PDF.

## 🚀 Despliegue

Este proyecto puede ser desplegado en:

- **Vercel** (recomendado): Despliega automáticamente desde GitHub
- **Netlify**: Compatible con Next.js
- **AWS Amplify**: Soporte completo para Next.js
- **Railway**: Deploy con contenedores

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

## 👤 Autor

**Daniel Alejandro Romero Moreno**

- Email: danielromero.software@gmail.com
- LinkedIn: [danielromeromoreno](https://linkedin.com/in/danielromeromoreno)
- GitHub: [@daniromero1410](https://github.com/daniromero1410)

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!
