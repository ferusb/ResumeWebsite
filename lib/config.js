// ============================================
// 🎨 PORTFOLIO CONFIGURATION
// ============================================
// Manage all your site information from here!

export const siteConfig = {
  // Personal Information
  personal: {
    name: "Brian Ferus",
    username: "ferusb",
    tagline: "Full-Stack Developer & Software Engineer",
    title: "Software Developer & Technology Enthusiast",
    age: 30,
    birthDate: "January 1, 1999",
    location: "United States",
    avatar: "https://github.com/ferusb.png",
    email: "btferus@gmail.com",
    resumeUrl: "#",
  },

  // About & Bio
  about: {
    intro: "Hi! I'm <strong>Brian Ferus</strong>, a full-stack developer and software engineer passionate about creating innovative web applications. I specialize in modern web technologies and building scalable solutions.",

    description: `I'm a software developer with expertise in full-stack web development, specializing in React, Next.js, and Node.js.
    I'm passionate about creating elegant, user-friendly applications and staying current with the latest web technologies.
    My focus is on writing clean, maintainable code and delivering high-quality software solutions that solve real-world problems.`,

    highlights: [
      "💻 Full-Stack Developer specializing in React & Next.js",
      "🚀 Passionate about modern web technologies",
      "🎯 Focus on clean code and best practices",
      "🌟 Building scalable and maintainable applications"
    ]
  },

  // Experience
  experience: [
    {
      title: "Full-Stack Web Developer",
      duration: "2020 - Present",
      description: "Developing modern web applications using React, Next.js, and Node.js. Building responsive, performant applications with focus on user experience and code quality. Working with various databases including MongoDB and PostgreSQL.",
      icon: "💻"
    },
    {
      title: "Frontend Development",
      duration: "5+ Years",
      description: "Specializing in React ecosystem, creating interactive user interfaces with modern tools like Next.js, TypeScript, and Tailwind CSS. Experienced in building component libraries and design systems.",
      icon: "⚛️"
    },
    {
      title: "Backend Development",
      duration: "4+ Years",
      description: "Building RESTful APIs and server-side applications using Node.js, Express, and various database technologies. Implementing authentication, real-time features with Socket.IO, and scalable architectures.",
      icon: "🔧"
    },
    {
      title: "Open Source Contributor",
      duration: "Ongoing",
      description: "Contributing to open-source projects and maintaining personal projects on GitHub. Passionate about sharing knowledge and collaborating with the developer community.",
      icon: "🌟"
    }
  ],

  // Social Media
  social: {
    facebook: "https://facebook.com/ferusb",
    instagram: "https://instagram.com/ferusb",
    telegram: "https://t.me/ferusb",
    youtube: "https://youtube.com/@ferusb",
    github: "https://github.com/ferusb",
    twitter: "https://twitter.com/ferusb",
    linkedin: "https://linkedin.com/in/ferusb",
    discord: "ferusb",
    discordServer: "https://discord.gg/ferusb",
  },

  // Skills & Technologies
  skills: {
    frontend: [
      { name: "React.js", level: 95, icon: "react.svg" },
      { name: "Next.js", level: 90, icon: "nextjs.svg" },
      { name: "JavaScript", level: 95, icon: "javascript.svg" },
      { name: "TypeScript", level: 85, icon: "typescript.svg" },
      { name: "Tailwind CSS", level: 90, icon: "tailwindcss.svg" },
      { name: "HTML5", level: 95, icon: "html.svg" },
      { name: "CSS3", level: 90, icon: "css.svg" },
    ],
    
    backend: [
      { name: "Node.js", level: 90, icon: "nodejs.svg" },
      { name: "Express.js", level: 85, icon: "expressjs.svg" },
      { name: "Socket.IO", level: 80, icon: "nodejs.svg" },
      { name: "Go", level: 75, icon: "github.svg" },
      { name: "MongoDB", level: 85, icon: "mongodb.svg" },
      { name: "PostgreSQL", level: 80, icon: "mysql.svg" },
    ],
    
    tools: [
      { name: "Git", level: 90, icon: "git.svg" },
      { name: "GitHub", level: 90, icon: "github.svg" },
      { name: "Linux", level: 85, icon: "linux.svg" },
      { name: "Windows", level: 90, icon: "github.svg" },
      { name: "Vercel", level: 85, icon: "nextjs.svg" },
      { name: "Heroku", level: 80, icon: "heroku.svg" },
      { name: "Glitch", level: 75, icon: "nodejs.svg" },
    ]
  },

  // Projects - Auto-fetched from GitHub
  githubUsername: "ferusb",

  // Goals
  goals: [
    "Build innovative software solutions that solve real-world problems",
    "Master modern web technologies and stay current with industry trends",
    "Contribute to open-source projects and help developers worldwide",
    "Create clean, maintainable, and scalable applications",
    "Expand expertise in emerging technologies like AI and cloud computing",
    "Share knowledge and best practices with the developer community"
  ],

  // SEO & Meta
  seo: {
    title: "Brian Ferus | Full-Stack Developer & Software Engineer",
    description: "Full-stack developer specializing in React, Next.js, and Node.js. Building modern web applications with clean code and best practices.",
    keywords: "ferusb, brian ferus, full-stack developer, react developer, next.js, software engineer, web development, javascript, typescript",
    ogImage: "/og-image.png",
    twitterHandle: "@ferusb"
  }
};

// Theme Colors (For each theme)
export const themes = {
  purple: {
    name: "Purple",
    colors: {
      primary: "#8B5CF6",
      secondary: "#A78BFA",
      accent: "#C084FC",
      background: "#1E1B4B",
      surface: "#312E81",
      text: "#F5F3FF",
      textSecondary: "#C4B5FD",
    },
    styles: {
      fontWeight: "normal",
      headingWeight: "700",
      shadow: "0 4px 6px -1px rgba(139, 92, 246, 0.4)",
      glow: "0 0 25px rgba(139, 92, 246, 0.5)",
      cardBorder: "1px solid rgba(167, 139, 250, 0.3)",
    }
  },

  deepPurple: {
    name: "Deep Purple",
    colors: {
      primary: "#7C3AED",
      secondary: "#9333EA",
      accent: "#A855F7",
      background: "#0F0A1E",
      surface: "#1E1438",
      text: "#FAF5FF",
      textSecondary: "#D8B4FE",
    },
    styles: {
      fontWeight: "normal",
      headingWeight: "700",
      shadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
      glow: "0 0 30px rgba(124, 58, 237, 0.6)",
      cardBorder: "1px solid rgba(168, 85, 247, 0.3)",
    }
  },

  midnight: {
    name: "Midnight",
    colors: {
      primary: "#6366F1",
      secondary: "#8B5CF6",
      accent: "#A78BFA",
      background: "#0C0A1D",
      surface: "#1A1625",
      text: "#EEF2FF",
      textSecondary: "#C7D2FE",
    },
    styles: {
      fontWeight: "normal",
      headingWeight: "700",
      shadow: "0 4px 20px rgba(99, 102, 241, 0.4)",
      glow: "0 0 35px rgba(99, 102, 241, 0.5), 0 0 70px rgba(139, 92, 246, 0.3)",
      cardBorder: "2px solid rgba(167, 139, 250, 0.2)",
    }
  },

  lavender: {
    name: "Lavender",
    colors: {
      primary: "#A78BFA",
      secondary: "#C4B5FD",
      accent: "#8B5CF6",
      background: "#F5F3FF",
      surface: "#FFFFFF",
      text: "#4C1D95",
      textSecondary: "#7C3AED",
    },
    styles: {
      fontWeight: "normal",
      headingWeight: "600",
      shadow: "0 2px 8px rgba(139, 92, 246, 0.15)",
      glow: "0 0 20px rgba(167, 139, 250, 0.3)",
      cardBorder: "1px solid rgba(196, 181, 253, 0.5)",
    }
  },

  cyberpunk: {
    name: "Cyberpunk",
    colors: {
      primary: "#A855F7",
      secondary: "#06B6D4",
      accent: "#F0ABFC",
      background: "#000000",
      surface: "#0D0D0D",
      text: "#FFFFFF",
      textSecondary: "#E0E0E0",
    },
    styles: {
      fontWeight: "500",
      headingWeight: "800",
      shadow: "0 0 15px rgba(168, 85, 247, 0.6)",
      glow: "0 0 40px rgba(168, 85, 247, 0.7), 0 0 80px rgba(6, 182, 212, 0.5)",
      cardBorder: "2px solid rgba(168, 85, 247, 0.4)",
    }
  },

  royal: {
    name: "Royal",
    colors: {
      primary: "#7C3AED",
      secondary: "#D97706",
      accent: "#FBBF24",
      background: "#1E1438",
      surface: "#2D1B69",
      text: "#FAF5FF",
      textSecondary: "#FDE68A",
    },
    styles: {
      fontWeight: "normal",
      headingWeight: "700",
      shadow: "0 8px 20px rgba(124, 58, 237, 0.4)",
      glow: "0 0 30px rgba(124, 58, 237, 0.5), 0 0 15px rgba(251, 191, 36, 0.3)",
      cardBorder: "2px solid rgba(217, 119, 6, 0.3)",
    }
  },

  ocean: {
    name: "Ocean",
    colors: {
      primary: "#6366F1",
      secondary: "#3B82F6",
      accent: "#06B6D4",
      background: "#0A1929",
      surface: "#1E3A5F",
      text: "#E0F2FE",
      textSecondary: "#7DD3FC",
    },
    styles: {
      fontWeight: "normal",
      headingWeight: "700",
      shadow: "0 4px 16px rgba(99, 102, 241, 0.3)",
      glow: "0 0 25px rgba(59, 130, 246, 0.4)",
      cardBorder: "1px solid rgba(6, 182, 212, 0.3)",
    }
  },

  dark: {
    name: "Dark",
    colors: {
      primary: "#8B5CF6",
      secondary: "#A78BFA",
      accent: "#C4B5FD",
      background: "#0F172A",
      surface: "#1E293B",
      text: "#F1F5F9",
      textSecondary: "#94A3B8",
    },
    styles: {
      fontWeight: "normal",
      headingWeight: "700",
      shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
      glow: "0 0 20px rgba(139, 92, 246, 0.4)",
      cardBorder: "1px solid rgba(148, 163, 184, 0.1)",
    }
  },

  light: {
    name: "Light",
    colors: {
      primary: "#7C3AED",
      secondary: "#A78BFA",
      accent: "#6366F1",
      background: "#F8FAFC",
      surface: "#FFFFFF",
      text: "#0F172A",
      textSecondary: "#64748B",
    },
    styles: {
      fontWeight: "normal",
      headingWeight: "600",
      shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      glow: "0 0 15px rgba(124, 58, 237, 0.3)",
      cardBorder: "1px solid rgba(226, 232, 240, 1)",
    }
  },

  neon: {
    name: "Neon",
    colors: {
      primary: "#D946EF",
      secondary: "#A855F7",
      accent: "#F0ABFC",
      background: "#000000",
      surface: "#0A0A0A",
      text: "#FFFFFF",
      textSecondary: "#E9D5FF",
    },
    styles: {
      fontWeight: "500",
      headingWeight: "800",
      shadow: "0 0 15px rgba(217, 70, 239, 0.6)",
      glow: "0 0 40px rgba(217, 70, 239, 0.8), 0 0 80px rgba(168, 85, 247, 0.6)",
      cardBorder: "2px solid rgba(240, 171, 252, 0.4)",
    }
  },

  sunset: {
    name: "Sunset",
    colors: {
      primary: "#F97316",
      secondary: "#EC4899",
      accent: "#FBBF24",
      background: "#18181B",
      surface: "#27272A",
      text: "#FAFAFA",
      textSecondary: "#A1A1AA",
    },
    styles: {
      fontWeight: "normal",
      headingWeight: "700",
      shadow: "0 10px 25px -5px rgba(249, 115, 22, 0.3)",
      glow: "0 0 25px rgba(249, 115, 22, 0.4)",
      cardBorder: "1px solid rgba(249, 115, 22, 0.2)",
    }
  },

  forest: {
    name: "Forest",
    colors: {
      primary: "#10B981",
      secondary: "#14B8A6",
      accent: "#84CC16",
      background: "#064E3B",
      surface: "#065F46",
      text: "#ECFDF5",
      textSecondary: "#6EE7B7",
    },
    styles: {
      fontWeight: "normal",
      headingWeight: "700",
      shadow: "0 4px 6px -1px rgba(16, 185, 129, 0.3)",
      glow: "0 0 20px rgba(16, 185, 129, 0.4)",
      cardBorder: "1px solid rgba(16, 185, 129, 0.2)",
    }
  },

  cherry: {
    name: "Cherry Blossom",
    colors: {
      primary: "#EC4899",
      secondary: "#F472B6",
      accent: "#FBCFE8",
      background: "#500724",
      surface: "#831843",
      text: "#FCE7F3",
      textSecondary: "#F9A8D4",
    },
    styles: {
      fontWeight: "normal",
      headingWeight: "700",
      shadow: "0 4px 12px rgba(236, 72, 153, 0.4)",
      glow: "0 0 25px rgba(236, 72, 153, 0.5)",
      cardBorder: "1px solid rgba(244, 114, 182, 0.3)",
    }
  },

  matrix: {
    name: "Matrix",
    colors: {
      primary: "#22C55E",
      secondary: "#4ADE80",
      accent: "#86EFAC",
      background: "#000000",
      surface: "#0A0F0A",
      text: "#D1FAE5",
      textSecondary: "#6EE7B7",
    },
    styles: {
      fontWeight: "500",
      headingWeight: "700",
      shadow: "0 0 10px rgba(34, 197, 94, 0.4)",
      glow: "0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(74, 222, 128, 0.4)",
      cardBorder: "1px solid rgba(134, 239, 172, 0.3)",
    }
  }
};

export default siteConfig;


