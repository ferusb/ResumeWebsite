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
    <section ref={ref} style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: 'var(--color-background)' }}>
      <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2
            style={{ fontWeight: 'var(--style-headingWeight)', fontSize: 'clamp(2.25rem, 5vw, 3rem)', marginBottom: '1rem' }}
          >
            <span
              style={{
                backgroundImage: `linear-gradient(to right, var(--color-primary), var(--color-secondary))`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Experience
            </span>
          </h2>
          <p
            style={{ color: 'var(--color-textSecondary)', fontSize: '1.25rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}
          >
            My journey in tech and community building
          </p>
        </motion.div>

        <div style={{ maxWidth: '56rem', marginLeft: 'auto', marginRight: 'auto' }}>
          {siteConfig.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              style={{ position: 'relative', marginBottom: index === siteConfig.experience.length - 1 ? 0 : '3rem' }}
            >
              {/* Timeline Line */}
              {index !== siteConfig.experience.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    left: 'clamp(1.5rem, 5vw, 2rem)',
                    top: 'clamp(4rem, 5vw, 5rem)',
                    width: '2px',
                    height: '100%',
                    zIndex: -10,
                    background: `linear-gradient(to bottom, var(--color-primary), var(--color-secondary))`,
                  }}
                />
              )}

              <div style={{ display: 'flex', gap: 'clamp(0.75rem, 2vw, 1.5rem)' }}>
                {/* Icon */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 'clamp(3rem, 5vw, 4rem)',
                    height: 'clamp(3rem, 5vw, 4rem)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                    fontWeight: 'bold',
                    position: 'relative',
                    overflow: 'hidden',
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
                    flex: 1,
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                    borderRadius: '1rem',
                    backdropFilter: 'blur(4px)',
                    transition: 'all 0.3s',
                    backgroundColor: 'var(--color-surface)',
                    border: 'var(--style-cardBorder)',
                    boxShadow: 'var(--style-shadow)',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <h3
                      style={{
                        color: 'var(--color-text)',
                        fontWeight: 'var(--style-headingWeight)',
                        fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                      }}
                    >
                      {exp.title}
                    </h3>
                    <span
                      style={{
                        background: `linear-gradient(to right, var(--color-primary), var(--color-secondary))`,
                        color: 'white',
                        padding: 'clamp(0.25rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)',
                        borderRadius: '9999px',
                        fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                        alignSelf: 'flex-start',
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    style={{
                      color: 'var(--color-accent)',
                      fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                      fontWeight: 500,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {exp.company}
                    {exp.location && (
                      <span style={{ color: 'var(--color-textSecondary)', marginLeft: '0.5rem', fontSize: '0.875rem' }}>
                        📍 {exp.location}
                      </span>
                    )}
                  </p>

                  <p
                    style={{
                      color: 'var(--color-textSecondary)',
                      marginBottom: '1rem',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Technologies/Skills */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          style={{
                            backgroundColor: 'var(--color-background)',
                            color: 'var(--color-text)',
                            border: '1px solid var(--color-primary)',
                            padding: 'clamp(0.25rem, 1vw, 0.25rem) clamp(0.5rem, 2vw, 0.75rem)',
                            borderRadius: '0.5rem',
                            fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                          }}
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
