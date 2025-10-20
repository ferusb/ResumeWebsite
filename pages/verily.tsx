import type { FC } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Verily: FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'dr-camera',
      title: 'Diabetic Retinopathy Camera System',
      role: 'Lead UI Engineer',
      period: 'September 2024 - Present',
      description: 'Led team as lead UI engineer for a greenfield, medical-grade web application enabling bi-directional streaming to/from new diabetic retinopathy camera.',
      technologies: ['React', 'gRPC', 'C++', 'TypeScript', 'Protobuf', 'WebSockets'],
      achievements: [
        'Built bi-directional streaming system using gRPC for real-time camera control',
        'Created experiences to drive capture flows for patient and operator end-to-end',
        'Developed retake flows and grading screens used in clinical studies with real patients',
        'Ensured medical-grade reliability and compliance for clinical use',
      ],
      impact: 'All code used in clinical studies with real patients, directly contributing to diabetic retinopathy detection and treatment.',
    },
    {
      id: 'android-app',
      title: 'Android/React Native Prototype',
      role: 'Cross-Platform Engineer',
      period: '2024',
      description: 'Built Android app in Kotlin and React Native to prototype potential use of tablet devices for camera.',
      technologies: ['Kotlin', 'React Native', 'Micro Frontends', 'WebView', 'Android SDK'],
      achievements: [
        'Architected micro frontend solution to maintain parity with web app',
        'Reduced engineering burden by sharing codebase between platforms',
        'Implemented WebView integration for seamless component reuse',
        'Created proof-of-concept for tablet-based medical device interface',
      ],
      impact: 'Demonstrated feasibility of tablet devices as alternative interface, expanding potential use cases.',
    },
    {
      id: 'legacy-refactor',
      title: 'Production Camera App Redesign',
      role: 'Senior Software Engineer',
      period: '2024',
      description: 'Redesigned and refactored existing, unmaintained web app for different production cameras, improving stability and usability.',
      technologies: ['React', 'TypeScript', 'Jest', 'Cypress', 'GCP'],
      achievements: [
        'Reduced production-reported bugs by over 60%',
        'Enhanced image capture and review flows based on user feedback',
        'Modernized codebase with TypeScript and improved testing coverage',
        'Implemented error handling and logging for better debugging',
      ],
      impact: 'Significantly improved stability and usability of production system used by medical professionals.',
    },
    {
      id: 'health-platform',
      title: 'AI-Powered Health Platform',
      role: 'Software Engineer III',
      period: '2024 - Present',
      description: 'Engineered cutting-edge experiences in health platform application, syncing patient health data and supporting AI features.',
      technologies: ['React', 'Next.js', 'AI/ML Integration', 'Third-party APIs', 'HIPAA Compliance'],
      achievements: [
        'Integrated AI features including calorie estimates and chat assistants',
        'Built secure third-party system integrations to collect health record data',
        'Implemented patient health data synchronization across multiple sources',
        'Ensured HIPAA compliance and data security throughout the application',
      ],
      impact: 'Gave users comprehensive view of their overall health through secure, AI-enhanced data aggregation.',
    },
  ];

  const skills = {
    technical: [
      'React & Next.js',
      'TypeScript',
      'gRPC & Protobuf',
      'React Native & Kotlin',
      'C++ Integration',
      'Micro Frontends',
      'WebSockets',
      'GCP',
    ],
    leadership: [
      'Lead UI Engineer',
      'Cross-functional Collaboration',
      'Clinical Study Integration',
      'Architecture Design',
    ],
    domain: [
      'Medical Device Software',
      'HIPAA Compliance',
      'Healthcare Data Security',
      'Clinical Workflows',
      'Real-time Streaming',
    ],
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
          boxShadow: 'var(--style-shadow)',
        }}
        className="py-12 sm:py-16 lg:py-20 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h1
              style={{
                fontWeight: 'var(--style-headingWeight)',
                textShadow: 'var(--style-glow)',
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4"
            >
              Verily (Alphabet)
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl opacity-90 mb-2">
              Software Engineer III
            </p>
            <p className="text-lg sm:text-xl opacity-75">
              September 2024 - Present
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            style={{
              color: 'var(--color-primary)',
              fontWeight: 'var(--style-headingWeight)',
            }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            About Verily
          </h2>
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '2px solid var(--color-primary)',
              boxShadow: 'var(--style-shadow)',
            }}
            className="p-6 sm:p-8 rounded-lg"
          >
            <p className="text-lg sm:text-xl mb-4" style={{ color: 'var(--color-text)' }}>
              Verily Life Sciences (an Alphabet company) is a precision health company focused on using technology
              to improve healthcare outcomes. The company develops tools and platforms for collecting and analyzing
              health data to enable personalized care and early disease detection.
            </p>
            <p className="text-lg sm:text-xl" style={{ color: 'var(--color-text)' }}>
              As a Software Engineer III, I lead UI engineering efforts for medical-grade applications, working at
              the intersection of healthcare technology, clinical studies, and cutting-edge AI features.
            </p>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            style={{
              color: 'var(--color-primary)',
              fontWeight: 'var(--style-headingWeight)',
            }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-8"
          >
            Key Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: activeProject === project.id ? '2px solid var(--color-accent)' : '2px solid var(--color-primary)',
                  boxShadow: 'var(--style-shadow)',
                }}
                className="p-6 sm:p-8 rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3
                      style={{
                        color: 'var(--color-accent)',
                        fontWeight: 'var(--style-headingWeight)',
                      }}
                      className="text-2xl sm:text-3xl mb-2"
                    >
                      {project.title}
                    </h3>
                    <p className="text-lg opacity-75" style={{ color: 'var(--color-text)' }}>
                      {project.role} • {project.period}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <span
                      style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                      }}
                      className="px-4 py-2 rounded-full text-sm"
                    >
                      {activeProject === project.id ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </div>
                </div>

                <p className="text-lg mb-4" style={{ color: 'var(--color-text)' }}>
                  {project.description}
                </p>

                {activeProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className="mb-4">
                      <h4
                        style={{ color: 'var(--color-primary)' }}
                        className="text-xl font-semibold mb-3"
                      >
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              backgroundColor: 'var(--color-primary)',
                              color: 'white',
                            }}
                            className="px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4
                        style={{ color: 'var(--color-primary)' }}
                        className="text-xl font-semibold mb-3"
                      >
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start"
                            style={{ color: 'var(--color-text)' }}
                          >
                            <span
                              style={{ color: 'var(--color-accent)' }}
                              className="mr-2 text-xl"
                            >
                              •
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      style={{
                        backgroundColor: 'var(--color-background)',
                        borderLeft: '4px solid var(--color-accent)',
                      }}
                      className="p-4 rounded"
                    >
                      <h4
                        style={{ color: 'var(--color-accent)' }}
                        className="text-xl font-semibold mb-2"
                      >
                        Impact
                      </h4>
                      <p style={{ color: 'var(--color-text)' }}>
                        {project.impact}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Developed */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              color: 'var(--color-primary)',
              fontWeight: 'var(--style-headingWeight)',
            }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-8"
          >
            Skills & Expertise Developed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '2px solid var(--color-primary)',
                boxShadow: 'var(--style-shadow)',
              }}
              className="p-6 rounded-lg"
            >
              <h3
                style={{
                  color: 'var(--color-accent)',
                  fontWeight: 'var(--style-headingWeight)',
                }}
                className="text-2xl mb-4"
              >
                Technical Skills
              </h3>
              <ul className="space-y-2">
                {skills.technical.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center"
                    style={{ color: 'var(--color-text)' }}
                  >
                    <span style={{ color: 'var(--color-accent)' }} className="mr-2">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '2px solid var(--color-primary)',
                boxShadow: 'var(--style-shadow)',
              }}
              className="p-6 rounded-lg"
            >
              <h3
                style={{
                  color: 'var(--color-accent)',
                  fontWeight: 'var(--style-headingWeight)',
                }}
                className="text-2xl mb-4"
              >
                Leadership
              </h3>
              <ul className="space-y-2">
                {skills.leadership.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center"
                    style={{ color: 'var(--color-text)' }}
                  >
                    <span style={{ color: 'var(--color-accent)' }} className="mr-2">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '2px solid var(--color-primary)',
                boxShadow: 'var(--style-shadow)',
              }}
              className="p-6 rounded-lg"
            >
              <h3
                style={{
                  color: 'var(--color-accent)',
                  fontWeight: 'var(--style-headingWeight)',
                }}
                className="text-2xl mb-4"
              >
                Domain Expertise
              </h3>
              <ul className="space-y-2">
                {skills.domain.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center"
                    style={{ color: 'var(--color-text)' }}
                  >
                    <span style={{ color: 'var(--color-accent)' }} className="mr-2">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Verily;
