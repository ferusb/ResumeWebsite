# Brian Ferus - Software Engineer

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)

**Full-stack Software Engineer specializing in React, TypeScript, and building scalable enterprise applications**

[Live Portfolio](https://ferusb.github.io) · [LinkedIn](https://linkedin.com/in/brian-ferus) · [GitHub](https://github.com/ferusb)

</div>

---

## 👨‍💻 About Me

I'm a **Software Engineer III** with **8+ years of experience** building high-performance web applications and leading engineering initiatives in healthcare technology and enterprise retail systems.

### Current Role
**Verily (Alphabet)** - Software Engineer III
- Leading UI engineering for greenfield medical-grade web applications enabling bi-directional streaming to diabetic retinopathy cameras
- Building React apps with gRPC, C++, and React Native for clinical studies with real patients
- Redesigned and refactored production camera applications, reducing production bugs by **60%+**
- Engineering cutting-edge health platform experiences with AI features (calorie estimates, chat assistants) and secure third-party health data integration

### Previous Experience
**Target Corporation** - Senior Software Engineer (5+ years)
- Delivered high-impact TypeScript/React components in a **12,000+ commit** enterprise codebase serving **30+ business categories**
- Implemented Node GraphQL aggregation layer powering **100+ Redux-managed data types**
- Designed and deployed CI/CD, network debugging, and database tools resolving **400+ production issues**
- Expanded automated testing with Cypress/Jest: **200% coverage increase**, **20% fewer production defects**, **70% faster test runtime**
- Built file-transporter service supporting **7,000+ daily users** across multiple React apps
- Co-founded React component library adopted across **100+ internal applications**
- Migrated legacy codebase to Apollo GraphQL and React, reducing code size by **25%** and eliminating **50,000+ lines**

---

## 🛠️ Technical Expertise

### Frontend Development
**JavaScript/TypeScript**: React.js, Next.js, Redux.js, GraphQL, Micro Frontends, AngularJS
**Styling & UI**: Sass, AG Grid, Figma, UX Design
**Animation**: Framer Motion
**Testing**: Jest, Cypress (200% coverage increase, 70% faster runtime)
**State Management**: Redux.js, Apollo Client, Context API

### Backend & Infrastructure
**Languages**: Node.js, Java, Python, Golang, C++
**Frameworks**: Express.js, Spring Boot, gRPC
**Databases**: PostgreSQL, MongoDB, Elasticsearch
**Real-time**: WebSockets, Socket.io, Protobuf
**Cloud & DevOps**: GCP, Docker, Kubernetes, Nginx, CI/CD

### Tools & Practices
**Version Control**: Git, GitHub, NX Monorepos
**Monitoring**: Datadog, Kibana, Grafana, Google Analytics
**Development**: AI Coding Tools, Webpack, Linux/Unix
**Methodologies**: Agile/Scrum, Micro Frontends Architecture

---

## ✨ Portfolio Features

### 🎨 **Multi-Theme System**
- 🌙 **Dark Mode** - Eye-friendly dark theme
- ☀️ **Light Mode** - Clean and bright appearance
- ⚡ **Neon Mode** - Vibrant and energetic colors
- 🌅 **Sunset Mode** - Warm and relaxing tones
- 🌲 **Forest Mode** - Nature-inspired green theme
- 💾 LocalStorage theme persistence

### 🎭 **Animations & Effects**
- 🎪 Smooth page transitions with Framer Motion
- 🎨 Scroll-triggered animations
- ✨ Hover effects and micro-interactions
- 🌈 Animated gradient backgrounds

### 📱 **Responsive Design**
- 📱 Mobile-first approach (320px - 1440px+)
- 💻 Tablet optimization
- 🖥️ Desktop widescreen support
- 🔄 Perfect display on all devices

### ⚙️ **Centralized Configuration**
- 📝 Single config file (`lib/config.js`) for all site content
- 👤 Personal information
- 💼 Experience & career timeline
- 🛠️ Skills & technologies
- 🚀 Projects (GitHub integration)
- 📧 Contact information
- 🎯 Goals & achievements

### 🔥 **GitHub Integration**
- 🔗 Auto-fetch repositories from GitHub API
- ⭐ Sort projects by star count
- 🖼️ OpenGraph preview images
- 🏷️ Language-based filtering
- 📊 Display stats (stars, forks)

### ⚡ **Performance Optimized**
- 🚀 Next.js 14 with SSG & SSR
- 📦 Optimized bundle size (~130 kB)
- 🎯 Code splitting & lazy loading
- 🔧 Production-ready build
- 📈 SEO optimized

---

## 🏗️ Portfolio Tech Stack

This portfolio showcases modern web development practices and technologies:

### Core Technologies
- **React.js 19.2** & **Next.js 15.5** - Latest React features with server-side rendering
- **TypeScript** - Type-safe development
- **Sass** - Powerful CSS preprocessing
- **Framer Motion** - Smooth animations and transitions

### Features Demonstrated
- **Component Architecture** - Reusable, maintainable React components
- **Performance Optimization** - Code splitting, lazy loading, SSR/SSG
- **Responsive Design** - Mobile-first approach across all devices
- **GitHub API Integration** - Dynamic project fetching and display
- **Theme System** - Multi-theme support with CSS variables
- **Modern JavaScript** - ES6+, async/await, destructuring

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ferusb/ResumeWebsite.git
cd ResumeWebsite
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure your settings**

Edit `lib/config.js` with your information:
```javascript
export const siteConfig = {
  personal: {
    name: "Your Name",
    username: "yourusername",
    email: "your@email.com",
    // ... more settings
  },
  // ... other configurations
}
```

4. **Run development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## 📁 Project Structure

```
portfolio/
├── components/          # React components
│   ├── NewHeader.js     # Navigation header
│   ├── HeroSection.js   # Landing section with animated background
│   ├── SkillsSection.js # Skills & technologies display
│   ├── ExperienceSection.js # Career timeline
│   ├── ProjectsSection.js   # GitHub projects gallery
│   ├── ContactSection.js    # Contact information
│   └── ThemeSwitcher.js     # Theme selection UI
├── pages/               # Next.js pages
│   ├── _app.jsx         # App wrapper
│   ├── _document.jsx    # HTML document
│   ├── index.jsx        # Home page
│   ├── projects.jsx     # Projects page
│   ├── contact.jsx      # Contact page
│   └── api/             # API routes
│       └── github-repos.js  # GitHub API integration
├── lib/                 # Utilities
│   ├── config.js        # 🎯 MAIN CONFIGURATION FILE
│   └── swr.js           # SWR hooks
├── contexts/            # React contexts
│   └── ThemeContext.js  # Theme management
├── public/              # Static assets
│   └── assets/
│       └── techs/       # Technology icons
└── styles/              # Global styles
    └── globals.css      # CSS variables & utilities
```

---

## ⚙️ Configuration Guide

All site content is managed in `lib/config.js`:

### Personal Information
```javascript
personal: {
  name: "Your Name",
  username: "yourusername",
  email: "your@email.com",
  location: "Your City, Country",
  // ...
}
```

### Skills & Technologies
```javascript
skills: {
  frontend: [
    { name: "React.js", level: 95, icon: "react.svg" },
    // ...
  ],
  backend: [...],
  tools: [...]
}
```

### GitHub Integration
```javascript
githubUsername: "yourusername"  // Your GitHub username
```

### Themes
Customize theme colors in `themes` object:
```javascript
themes: {
  dark: {
    colors: { primary: "#3B82F6", ... },
    styles: { fontWeight: "normal", ... }
  },
  // ...
}
```

---

## 🎨 Theme Customization

Each theme has:
- **Colors**: Primary, secondary, accent, background, surface, text
- **Styles**: Font weights, shadows, glows, borders

Themes use CSS variables for real-time switching:
```css
var(--color-primary)
var(--color-secondary)
var(--style-glow)
var(--style-shadow)
```

---

## 📦 Build Output

```
Route (pages)                              Size     First Load JS
┌ ○ /                                      9.99 kB         138 kB
├ ○ /contact                               2.41 kB         127 kB
└ ○ /projects                              1.54 kB         129 kB
+ First Load JS shared by all              130 kB
  ├ chunks/framework.js                    45.2 kB
  ├ chunks/main.js                         31.8 kB
  └ chunks/pages/_app.js                   46.4 kB
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Manual Deployment

```bash
npm run build
npm start
```

---

## 🤝 Contributing

This is my personal portfolio website, but feel free to fork it and customize it for yourself!

1. Fork the project at [github.com/ferusb/ResumeWebsite](https://github.com/ferusb/ResumeWebsite)
2. Customize `lib/config.js` with your own information
3. Update styling and content to match your preferences
4. Deploy to your own hosting platform

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Connect With Me

**Brian Ferus** - Software Engineer III

- Portfolio: [ferusb.github.io](https://ferusb.github.io)
- LinkedIn: [linkedin.com/in/brian-ferus](https://linkedin.com/in/brian-ferus)
- GitHub: [@ferusb](https://github.com/ferusb)

### Education
**Michigan Technological University** - Bachelor's in Computer Science (2013-2017)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Material-UI](https://mui.com/) - React Component Library
- [Vercel](https://vercel.com/) - Deployment Platform

---

<div align="center">

Made with ❤️ by Brian Ferus

</div>
