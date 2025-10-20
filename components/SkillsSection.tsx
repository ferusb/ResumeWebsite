import type { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteConfig } from '../lib/config';
import { useState } from 'react';

const SkillsSection: FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'tools', label: 'Tools', icon: '🛠️' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} id="skills" style={{ backgroundColor: 'var(--color-surface)', padding: '5rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
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
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Skills & Technologies
            </span>
          </h2>
          <p
            style={{ color: 'var(--color-textSecondary)', fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto' }}
          >
            Here are the technologies and tools I work with
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                ...(activeCategory === category.id ? {
                  background: `linear-gradient(to right, var(--color-primary), var(--color-secondary))`,
                  color: 'white',
                  boxShadow: 'var(--style-glow)',
                  border: 'none',
                  fontWeight: 'var(--style-headingWeight)',
                } : {
                  background: 'var(--color-surface)',
                  color: 'var(--color-text)',
                  boxShadow: 'var(--style-shadow)',
                  border: 'var(--style-cardBorder)',
                  fontWeight: 'var(--style-fontWeight)',
                }),
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                transition: 'all 0.3s',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              <span style={{ marginRight: '0.5rem' }}>{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {siteConfig.skills[activeCategory]?.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--style-glow)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--style-shadow)'}
              style={{
                background: 'var(--color-background)',
                border: 'var(--style-cardBorder)',
                boxShadow: 'var(--style-shadow)',
                padding: '1.5rem',
                borderRadius: '1rem',
                transition: 'all 0.3s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    boxShadow: 'var(--style-shadow)',
                    width: '48px',
                    height: '48px',
                    borderRadius: '0.5rem',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={`/assets/techs/${skill.icon}`}
                    alt={skill.name}
                    style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      color: 'var(--color-text)',
                      fontWeight: 'var(--style-headingWeight)',
                      fontSize: '0.875rem',
                    }}
                  >
                    {skill.name}
                  </h3>
                  <p
                    style={{ color: 'var(--color-textSecondary)', fontSize: '0.875rem' }}
                  >
                    {skill.level}% Proficiency
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div
                style={{
                  backgroundColor: 'var(--color-surface)',
                  position: 'relative',
                  height: '0.5rem',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{
                    background: `linear-gradient(to right, var(--color-primary), var(--color-secondary))`,
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    borderRadius: '9999px',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
