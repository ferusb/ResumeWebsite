import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Target() {
  const [activeProject, setActiveProject] = useState(null);

  const timeline = [
    {
      period: 'August 2019 - September 2024',
      title: 'Senior Software Engineer',
      highlight: true,
    },
    {
      period: 'June 2017 - August 2019',
      title: 'Full Stack Software Engineer',
      highlight: false,
    },
  ];

  const projects = [
    {
      id: 'graphql-layer',
      title: 'Node GraphQL Aggregation Layer',
      period: '2020-2024',
      description: 'Implemented comprehensive GraphQL aggregation layer powering hundreds of Redux-managed data types across the enterprise platform.',
      technologies: ['Node.js', 'GraphQL', 'Apollo', 'Redux.js', 'TypeScript', 'Microservices'],
      achievements: [
        'Replaced hundreds of confusing and bespoke microservice endpoints',
        'Powered 100+ Redux-managed data types across the platform',
        'Improved API consistency and developer experience',
        'Reduced API response times by consolidating requests',
        'Established GraphQL best practices for the organization',
      ],
      impact: 'Dramatically simplified backend integration for 30+ business categories, reducing development time and improving maintainability.',
      metrics: '100+ data types, 30+ business categories, 400+ deprecated endpoints',
    },
    {
      id: 'enterprise-components',
      title: 'Enterprise TypeScript/React Components',
      period: '2019-2024',
      description: 'Delivered high-impact TypeScript/React components in a massive enterprise codebase serving diverse business needs.',
      technologies: ['React', 'TypeScript', 'Redux.js', 'Jest', 'Cypress', 'Webpack'],
      achievements: [
        'Contributed to 12,000+ commit enterprise codebase',
        'Served needs of 30+ different business categories',
        'Supported hundreds of unique business partners',
        'Maintained backward compatibility across major refactors',
        'Established component patterns adopted team-wide',
      ],
      impact: 'Enabled rapid feature development across diverse business units while maintaining code quality and consistency.',
      metrics: '12,000+ commits, 30+ categories, 100s of partners',
    },
    {
      id: 'testing-infrastructure',
      title: 'Testing Infrastructure & Automation',
      period: '2020-2024',
      description: 'Expanded automated testing with Cypress and Jest, dramatically improving coverage and reducing defects.',
      technologies: ['Cypress', 'Jest', 'React Testing Library', 'CI/CD', 'Test Automation'],
      achievements: [
        'Boosted test coverage by 200%',
        'Reduced production defects by 20%',
        'Reduced end-to-end test runtime by 70%',
        'Reduced test flakiness by 50%',
        'Implemented visual regression testing',
        'Created shared testing utilities and patterns',
      ],
      impact: 'Significantly improved code quality and developer confidence, enabling faster releases with fewer bugs.',
      metrics: '200% coverage increase, 20% fewer defects, 70% faster runtime, 50% less flake',
    },
    {
      id: 'internal-tools',
      title: 'CI/CD, Network Debugging & Database Tools',
      period: '2019-2024',
      description: 'Designed and deployed comprehensive tooling for CI/CD, network debugging, and database operations.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Grafana', 'Kibana', 'PostgreSQL', 'MongoDB'],
      achievements: [
        'Resolved 400+ unique production issues',
        'Enabled other engineers with self-service debugging tools',
        'Automated deployment pipelines reducing release time',
        'Built network traffic analysis tools',
        'Created database migration and monitoring utilities',
      ],
      impact: 'Empowered engineering teams to diagnose and resolve issues independently, dramatically reducing support burden.',
      metrics: '400+ issues resolved, 100+ engineers enabled',
    },
    {
      id: 'file-transporter',
      title: 'File Transporter Service',
      period: '2019-2022',
      description: 'Built enterprise file-transporter service supporting daily operations across multiple React applications.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'S3', 'Microservices'],
      achievements: [
        'Supported 7,000+ daily users',
        'Handled millions of file operations monthly',
        'Built scalable upload/download infrastructure',
        'Implemented file versioning and audit trails',
        'Created admin dashboard for monitoring and management',
      ],
      impact: 'Replaced third-party file management tools, improving performance and reducing costs while maintaining enterprise-grade reliability.',
      metrics: '7,000+ daily users, millions of monthly operations',
    },
    {
      id: 'component-library',
      title: 'React Component Library',
      period: '2018-2020',
      description: 'Co-founded React component library that became the standard across Target\'s internal applications.',
      technologies: ['React', 'Storybook', 'TypeScript', 'Styled Components', 'NPM'],
      achievements: [
        'Adopted across 100+ internal applications',
        'Established design system and component patterns',
        'Created comprehensive documentation with Storybook',
        'Implemented accessibility standards (WCAG 2.1)',
        'Reduced duplicate component development by 80%',
      ],
      impact: 'Standardized UI components across Target, dramatically improving consistency and reducing development time.',
      metrics: '100+ apps adopted, 80% reduction in duplicate work',
    },
    {
      id: 'apollo-migration',
      title: 'Apollo GraphQL & React Migration',
      period: '2018-2019',
      description: 'Migrated legacy codebase to modern Apollo GraphQL and React architecture.',
      technologies: ['React', 'Apollo Client', 'GraphQL', 'AngularJS', 'Java', 'Spring Boot'],
      achievements: [
        'Reduced code size by 25%',
        'Eliminated 50,000+ lines of legacy code',
        'Improved application performance by 40%',
        'Modernized frontend architecture',
        'Built backend APIs in Java/Spring Boot',
        'Implemented Elasticsearch for advanced search/filtering',
      ],
      impact: 'Modernized critical business application, improving maintainability and enabling new features.',
      metrics: '25% code reduction, 50,000+ lines eliminated, 40% performance improvement',
    },
    {
      id: 'observability',
      title: 'UX Observability & Analytics',
      period: '2020-2024',
      description: 'Championed visibility into UX and user feedback through comprehensive analytics and monitoring.',
      technologies: ['Google Analytics', 'Kibana', 'Grafana', 'Datadog', 'Custom Dashboards'],
      achievements: [
        'Implemented Google Analytics across all applications',
        'Built custom Kibana dashboards for user behavior analysis',
        'Created Grafana alerts for performance monitoring',
        'Established UX metrics and KPIs',
        'Enabled data-driven product decisions',
      ],
      impact: 'Transformed product development from assumption-based to data-driven, improving user satisfaction.',
      metrics: '30+ applications monitored, 1000+ user sessions tracked daily',
    },
  ];

  const skillsGained = {
    frontend: [
      'React & TypeScript',
      'Redux.js & State Management',
      'GraphQL & Apollo Client',
      'Component Library Development',
      'Micro Frontends',
      'Cypress & Jest Testing',
      'Webpack & Build Tools',
    ],
    backend: [
      'Node.js & Express',
      'GraphQL Server Development',
      'Java & Spring Boot',
      'PostgreSQL & MongoDB',
      'Elasticsearch',
      'Microservices Architecture',
      'RESTful API Design',
    ],
    devops: [
      'CI/CD Pipeline Development',
      'Docker & Kubernetes',
      'Monitoring & Observability',
      'Grafana & Kibana',
      'Cloud Infrastructure (GCP)',
      'Database Administration',
      'Network Debugging',
    ],
    leadership: [
      'Enterprise-Scale Architecture',
      'Cross-Team Collaboration',
      'Technical Mentorship',
      'Code Review & Standards',
      'Agile/Scrum Practices',
      'Product-Engineering Partnership',
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
              Target Corporation
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl opacity-90 mb-4">
              Senior Software Engineer
            </p>
            <div className="space-y-2">
              {timeline.map((period) => (
                <p
                  key={period.period}
                  className={`text-lg sm:text-xl ${period.highlight ? 'opacity-100 font-semibold' : 'opacity-75'}`}
                >
                  {period.title} • {period.period}
                </p>
              ))}
            </div>
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
            5 Years at Target
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
              Over 5 years at Target Corporation, I evolved from a Full Stack Software Engineer to a Senior Software Engineer,
              working on enterprise-scale applications that served 30+ business categories and hundreds of business partners.
            </p>
            <p className="text-lg sm:text-xl mb-4" style={{ color: 'var(--color-text)' }}>
              I contributed to a massive 12,000+ commit codebase, built critical infrastructure, established engineering
              best practices, and mentored team members while delivering high-impact features that directly supported
              Target's business operations.
            </p>
            <p className="text-lg sm:text-xl" style={{ color: 'var(--color-text)' }}>
              Key achievements include implementing a GraphQL aggregation layer, expanding test coverage by 200%,
              resolving 400+ production issues, and co-founding a component library adopted across 100+ applications.
            </p>
          </div>
        </motion.section>

        {/* Key Metrics */}
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
            Impact by the Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '12,000+', label: 'Commits to Enterprise Codebase' },
              { number: '400+', label: 'Production Issues Resolved' },
              { number: '200%', label: 'Test Coverage Increase' },
              { number: '100+', label: 'Apps Adopted Component Library' },
              { number: '7,000+', label: 'Daily Users Supported' },
              { number: '30+', label: 'Business Categories Served' },
              { number: '70%', label: 'Faster Test Runtime' },
              { number: '20%', label: 'Reduction in Defects' },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '2px solid var(--color-accent)',
                  boxShadow: 'var(--style-shadow)',
                }}
                className="p-6 rounded-lg text-center"
              >
                <div
                  style={{
                    color: 'var(--color-accent)',
                    fontWeight: 'var(--style-headingWeight)',
                  }}
                  className="text-3xl sm:text-4xl mb-2"
                >
                  {metric.number}
                </div>
                <div style={{ color: 'var(--color-text)' }} className="text-sm sm:text-base">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Major Projects */}
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
            Major Projects & Initiatives
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: activeProject === project.id ? '2px solid var(--color-accent)' : '2px solid var(--color-primary)',
                  boxShadow: 'var(--style-shadow)',
                }}
                className="p-6 sm:p-8 rounded-lg cursor-pointer hover:scale-[1.01] transition-transform"
                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <h3
                      style={{
                        color: 'var(--color-accent)',
                        fontWeight: 'var(--style-headingWeight)',
                      }}
                      className="text-2xl sm:text-3xl mb-2"
                    >
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg opacity-75" style={{ color: 'var(--color-text)' }}>
                      {project.period}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-4">
                    <span
                      style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                      }}
                      className="px-4 py-2 rounded-full text-sm whitespace-nowrap"
                    >
                      {activeProject === project.id ? '▼ Collapse' : '▶ Expand'}
                    </span>
                  </div>
                </div>

                <p className="text-base sm:text-lg mb-2" style={{ color: 'var(--color-text)' }}>
                  {project.description}
                </p>

                {project.metrics && (
                  <div
                    style={{
                      backgroundColor: 'var(--color-background)',
                      borderLeft: '4px solid var(--color-primary)',
                    }}
                    className="p-3 rounded mt-3 mb-3"
                  >
                    <span
                      style={{ color: 'var(--color-primary)' }}
                      className="font-semibold text-sm"
                    >
                      Key Metrics:
                    </span>
                    <span style={{ color: 'var(--color-text)' }} className="ml-2 text-sm">
                      {project.metrics}
                    </span>
                  </div>
                )}

                {activeProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6"
                  >
                    <div className="mb-6">
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

                    <div className="mb-6">
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
                              className="mr-2 text-xl flex-shrink-0"
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
                        Business Impact
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

        {/* Skills Gained */}
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
            Skills & Expertise Gained
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                Frontend
              </h3>
              <ul className="space-y-2">
                {skillsGained.frontend.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start text-sm"
                    style={{ color: 'var(--color-text)' }}
                  >
                    <span style={{ color: 'var(--color-accent)' }} className="mr-2 flex-shrink-0">✓</span>
                    <span>{skill}</span>
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
                Backend
              </h3>
              <ul className="space-y-2">
                {skillsGained.backend.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start text-sm"
                    style={{ color: 'var(--color-text)' }}
                  >
                    <span style={{ color: 'var(--color-accent)' }} className="mr-2 flex-shrink-0">✓</span>
                    <span>{skill}</span>
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
                DevOps & Tools
              </h3>
              <ul className="space-y-2">
                {skillsGained.devops.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start text-sm"
                    style={{ color: 'var(--color-text)' }}
                  >
                    <span style={{ color: 'var(--color-accent)' }} className="mr-2 flex-shrink-0">✓</span>
                    <span>{skill}</span>
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
                {skillsGained.leadership.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start text-sm"
                    style={{ color: 'var(--color-text)' }}
                  >
                    <span style={{ color: 'var(--color-accent)' }} className="mr-2 flex-shrink-0">✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
