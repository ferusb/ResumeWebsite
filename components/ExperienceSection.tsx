import type { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteConfig } from '../lib/config';

const ExperienceSection: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2
            style={{ fontWeight: 'var(--style-headingWeight)' }}
            className="text-4xl md:text-5xl mb-4"
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, var(--color-primary), var(--color-secondary))`,
              }}
            >
              Experience
            </span>
          </h2>
          <p
            style={{ color: 'var(--color-textSecondary)' }}
            className="text-xl max-w-2xl mx-auto"
          >
            My journey in tech and community building
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {siteConfig.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== siteConfig.experience.length - 1 && (
                <div
                  className="absolute left-6 sm:left-8 top-16 sm:top-20 w-0.5 h-full -z-10"
                  style={{
                    background: `linear-gradient(to bottom, var(--color-primary), var(--color-secondary))`,
                  }}
                />
              )}

              <div className="flex gap-3 sm:gap-6">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold relative overflow-hidden shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
                    boxShadow: 'var(--style-glow)',
                    color: 'white',
                  }}
                >
                  {exp.icon || (index + 1)}
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: 'var(--style-cardBorder)',
                    boxShadow: 'var(--style-shadow)',
                  }}
                  className="flex-1 p-4 sm:p-6 rounded-2xl backdrop-blur-sm transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <h3
                      style={{
                        color: 'var(--color-text)',
                        fontWeight: 'var(--style-headingWeight)',
                      }}
                      className="text-xl sm:text-2xl"
                    >
                      {exp.title}
                    </h3>
                    <span
                      style={{
                        background: `linear-gradient(to right, var(--color-primary), var(--color-secondary))`,
                        color: 'white',
                      }}
                      className="px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap self-start sm:self-auto"
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    style={{ color: 'var(--color-accent)' }}
                    className="text-base sm:text-lg font-medium mb-3"
                  >
                    {exp.company}
                    {exp.location && (
                      <span style={{ color: 'var(--color-textSecondary)' }} className="ml-2 text-sm">
                        📍 {exp.location}
                      </span>
                    )}
                  </p>

                  <p
                    style={{ color: 'var(--color-textSecondary)' }}
                    className="mb-4 text-sm sm:text-base"
                  >
                    {exp.description}
                  </p>

                  {/* Technologies/Skills */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          style={{
                            backgroundColor: 'var(--color-background)',
                            color: 'var(--color-text)',
                            border: '1px solid var(--color-primary)',
                          }}
                          className="px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
