// ============================================
// 🎨 PORTFOLIO CONFIGURATION
// ============================================
// Manage all your site information from here!

export const siteConfig = {
  // Personal Information
  personal: {
    name: "Brian Ferus",
    username: "ferusb",
    tagline: "Senior Software Engineer",
    title: "Software Engineer III @ Verily (Alphabet)",
    age: 30,
    location: "San Bruno, CA (But open to relocating)",
    avatar: "https://github.com/ferusb.png",
    email: "btferus@gmail.com",
    phone: "+1 (612) 368-3893",
    resumeUrl: "/resume.pdf",
  },

  // About & Bio
  about: {
    intro: "Senior Software Engineer with <strong>9+ years of experience</strong> designing scalable applications, delivering exceptional user experiences, developing high-performance APIs, and leading architectural and design initiatives. Passionate about continuous learning, staying current with modern technologies, and consistently delivering high-quality, innovative solutions.",

    description: `I specialize in React, TypeScript/JavaScript, Redux, Next.js, and Node.js with deep expertise across the full stack.
    I've solved unique and complex problems in enterprise environments at scale, taking apps to production with tens of thousands of users.
    I've led complete refactors of existing production applications, built medical-grade software used in clinical studies, and implemented GraphQL aggregation layers powering hundreds of data types.
    My favorite part of software development is when it all comes together for the user experience—helping people complete whatever they need to in a pleasant and efficient way.`,

    highlights: [
      "💻 9+ years building production applications",
      "🚀 Led UI engineering for both consumer and even medical-grade web apps",
      "🎯 Expert in React, TypeScript, Node.js & GraphQL",
      "🌟 Scaled apps to thousands of users and beyond",
      "😄 Passionate about exceptional UX",
      "💪 Always learning and growing tech skills"
    ]
  },

  // Experience
  experience: [
    {
      title: "Software Engineer III",
      company: "Verily (Alphabet)",
      location: "San Bruno, CA",
      period: "September 2024 - Present",
      description: "Led UI engineering for greenfield medical-grade web app enabling diabetic retinopathy imaging. Built Android prototype with React Native and micro frontends. Redesigned production camera apps, reducing bugs by 60%+. Engineered health platform with AI features and secure third-party integrations.",
      technologies: ["React", "TypeScript", "gRPC", "C++", "Kotlin", "React Native", "GCP", "Protobuf"],
      icon: "🏥"
    },
    {
      title: "Senior Software Engineer",
      company: "Target Corporation",
      location: "Minneapolis, MN",
      period: "August 2019 - September 2024",
      description: "Delivered high-impact TypeScript/React components in 12k-commit enterprise codebase serving 30+ business categories. Implemented Node GraphQL aggregation layer powering 100+ data types. Expanded automated testing, boosting coverage 200% and reducing defects 20%. Designed CI/CD and debugging tools resolving 400+ production issues.",
      technologies: ["React", "TypeScript", "Node.js", "GraphQL", "Redux", "Cypress", "Jest", "PostgreSQL", "MongoDB"],
      icon: "🎯"
    },
    {
      title: "Full Stack Software Engineer",
      company: "Target Corporation",
      location: "Minneapolis, MN",
      period: "June 2017 - August 2019",
      description: "Built file-transporter service supporting 7,000+ daily users. Co-founded React component library adopted across 100+ internal apps. Migrated legacy codebase to Apollo GraphQL and React, reducing code size 25%. Developed backend APIs with Java/Spring Boot, PostgreSQL, MongoDB, and Elasticsearch.",
      technologies: ["React", "Java", "Spring Boot", "Apollo GraphQL", "PostgreSQL", "MongoDB", "Elasticsearch", "AG Grid"],
      icon: "💼"
    },
    {
      title: "Bachelor's in Computer Science",
      company: "Michigan Technological University",
      location: "Houghton, MI",
      period: "September 2013 - May 2017",
      description: "Studied computer science fundamentals, algorithms, data structures, and software engineering principles. Built strong foundation in programming and problem-solving.",
      technologies: [],
      icon: "🎓"
    }
  ],

  // Social Media
  social: {
    facebook: "",
    instagram: "",
    telegram: "",
    youtube: "",
    github: "https://github.com/ferusb",
    twitter: "https://twitter.com/ferusb",
    linkedin: "https://linkedin.com/in/brian-ferus",
    discord: "",
    discordServer: "",
  },

  // Skills & Technologies
  skills: {
    frontend: [
      { name: "React.js", level: 95, icon: "react.svg" },
      { name: "TypeScript", level: 95, icon: "typescript.svg" },
      { name: "JavaScript", level: 95, icon: "javascript.svg" },
      { name: "Redux.js", level: 90, icon: "react.svg" },
      { name: "Next.js", level: 90, icon: "nextjs.svg" },
      { name: "GraphQL", level: 90, icon: "react.svg" },
      { name: "HTML5/CSS3", level: 95, icon: "html.svg" },
      { name: "Jest & Cypress", level: 85, icon: "react.svg" },
      { name: "Sass", level: 85, icon: "css.svg" },
      { name: "Vite & NX", level: 80, icon: "react.svg" },
      { name: "Micro Frontends", level: 80, icon: "react.svg" },
      { name: "AG Grid", level: 80, icon: "react.svg" },
    ],

    backend: [
      { name: "Node.js", level: 90, icon: "nodejs.svg" },
      { name: "Golang", level: 80, icon: "github.svg" },
      { name: "Python", level: 75, icon: "github.svg" },
      { name: "Java/Spring Boot", level: 80, icon: "github.svg" },
      { name: "gRPC & Protobuf", level: 85, icon: "nodejs.svg" },
      { name: "PostgreSQL", level: 85, icon: "mysql.svg" },
      { name: "MongoDB", level: 85, icon: "mongodb.svg" },
      { name: "REST APIs", level: 90, icon: "nodejs.svg" },
    ],

    tools: [
      { name: "Git & GitHub", level: 95, icon: "github.svg" },
      { name: "Docker", level: 85, icon: "github.svg" },
      { name: "CI/CD", level: 85, icon: "github.svg" },
      { name: "GCP", level: 80, icon: "github.svg" },
      { name: "AWS", level: 75, icon: "github.svg" },
      { name: "Kubernetes", level: 75, icon: "github.svg" },
      { name: "Grafana & Kibana", level: 80, icon: "github.svg" },
      { name: "Linux/Unix", level: 85, icon: "linux.svg" },
      { name: "Google Analytics", level: 80, icon: "github.svg" },
    ]
  },

  // Projects - Static project data
  projects: [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "Modern portfolio website built with Next.js, React, and Three.js featuring 3D animations, multi-theme support, and responsive design showcasing my professional experience and projects",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
      tags: ["React", "Next.js", "Three.js", "TypeScript"],
      liveUrl: "https://brianferus.com",
      githubUrl: "https://github.com/ferusb/ResumeWebsite",
      stars: 15,
      forks: 3,
      language: "JavaScript",
      updatedAt: "2024-01-15"
    },
    {
      id: 2,
      title: "Medical Imaging Platform",
      description: "Greenfield medical-grade web application for diabetic retinopathy camera with bi-directional gRPC streaming, complex capture flows, and real-time device control used in clinical studies",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
      tags: ["React", "gRPC", "TypeScript", "C++"],
      liveUrl: null,
      githubUrl: null,
      stars: 0,
      forks: 0,
      language: "TypeScript",
      updatedAt: "2024-10"
    },
    {
      id: 3,
      title: "Enterprise GraphQL API",
      description: "Node GraphQL aggregation layer powering 100+ Redux-managed data types across enterprise platform, replacing hundreds of bespoke microservice endpoints and improving API consistency",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      tags: ["Node.js", "GraphQL", "Apollo", "TypeScript"],
      liveUrl: null,
      githubUrl: null,
      stars: 0,
      forks: 0,
      language: "TypeScript",
      updatedAt: "2024-09"
    },
    {
      id: 4,
      title: "React Component Library",
      description: "Enterprise React component library adopted as standard across 100+ internal applications, unifying user experience and reducing duplicate development by 80% with Storybook documentation",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=400&fit=crop",
      tags: ["React", "TypeScript", "Storybook", "Design System"],
      liveUrl: null,
      githubUrl: null,
      stars: 0,
      forks: 0,
      language: "TypeScript",
      updatedAt: "2020-06"
    },
    {
      id: 5,
      title: "File Management Service",
      description: "Enterprise file-transporter service supporting 7,000+ daily users with millions of monthly operations, featuring upload/download infrastructure, versioning, and audit trails",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
      tags: ["React", "Node.js", "Express", "MongoDB", "S3"],
      liveUrl: null,
      githubUrl: null,
      stars: 0,
      forks: 0,
      language: "JavaScript",
      updatedAt: "2022-08"
    },
    {
      id: 6,
      title: "Health Platform with AI",
      description: "Cutting-edge health platform application syncing patient health data and supporting AI features including calorie estimates and chat assistants with secure third-party integrations",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop",
      tags: ["React", "Next.js", "AI/ML", "HIPAA"],
      liveUrl: null,
      githubUrl: null,
      stars: 0,
      forks: 0,
      language: "TypeScript",
      updatedAt: "2024-10"
    }
  ],

  // Goals
  goals: [
    "Build innovative software solutions that solve real-world problems and improve people's lives",
    "Stay current with modern technologies and continuously expand technical expertise",
    "Lead architectural initiatives and mentor other engineers",
    "Create exceptional user experiences that are both beautiful and functional",
    "Contribute to open-source projects and share knowledge with the community",
    "Master emerging technologies in AI, cloud computing, and distributed systems"
  ],

  // SEO & Meta
  seo: {
    title: "Brian Ferus | Senior Software Engineer",
    description: "Senior Software Engineer with 9+ years of experience specializing in React, TypeScript, Node.js, and GraphQL. Building scalable applications and exceptional user experiences.",
    keywords: "brian ferus, ferusb, software engineer, senior software engineer, react developer, typescript, node.js, graphql, full-stack developer, verily, target, web development",
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
