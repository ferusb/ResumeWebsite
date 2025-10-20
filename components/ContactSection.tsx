import type { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteConfig } from '../lib/config';
import { HiMail } from 'react-icons/hi';
import type { IconType } from 'react-icons';
import {
  FaFacebook, FaInstagram, FaYoutube, FaGithub,
  FaTelegram, FaTwitter, FaLinkedin
} from 'react-icons/fa';

const ContactSection: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialIcons: Record<string, IconType> = {
    github: FaGithub,
    linkedin: FaLinkedin,
  };

  return (
    <section ref={ref} id="contact" style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: 'var(--color-background)' }}>
      <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div style={{ maxWidth: '56rem', marginLeft: 'auto', marginRight: 'auto' }}>
          {/* Email Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
              boxShadow: 'var(--style-glow)',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              borderRadius: '1rem',
              color: 'white',
              marginBottom: '2rem',
              textAlign: 'center',
            }}
          >
            <h3
              style={{
                fontWeight: 'var(--style-headingWeight)',
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                marginBottom: '1rem',
              }}
            >
              Let's Connect!
            </h3>
            <p style={{
              marginBottom: '1.5rem',
              opacity: 0.9,
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            }}>
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(1rem, 3vw, 2rem)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <HiMail style={{ width: 'clamp(1.5rem, 3vw, 1.75rem)', height: 'clamp(1.5rem, 3vw, 1.75rem)' }} />
                <a
                  href={`mailto:${siteConfig.personal.email}`}
                  style={{
                    fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                >
                  {siteConfig.personal.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)' }}>📍</span>
                <span style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)' }}>{siteConfig.personal.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3
              style={{
                color: 'var(--color-text)',
                fontWeight: 'var(--style-headingWeight)',
                fontSize: 'clamp(1.5rem, 4vw, 1.875rem)',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}
            >
              Follow Me On Social Media
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: 'clamp(1rem, 3vw, 1.5rem)',
            }}>
              {Object.entries(siteConfig.social).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                if (!Icon || !url) return null;
                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 'clamp(0.75rem, 2vw, 1rem)',
                      padding: 'clamp(1.5rem, 3vw, 2rem)',
                      borderRadius: '1rem',
                      transition: 'all 0.3s',
                      backgroundColor: 'var(--color-surface)',
                      border: 'var(--style-cardBorder)',
                      boxShadow: 'var(--style-shadow)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`;
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.boxShadow = 'var(--style-glow)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--color-surface)';
                      e.currentTarget.style.color = 'var(--color-text)';
                      e.currentTarget.style.boxShadow = 'var(--style-shadow)';
                    }}
                  >
                    <Icon
                      style={{
                        color: 'inherit',
                        width: 'clamp(2.5rem, 5vw, 3rem)',
                        height: 'clamp(2.5rem, 5vw, 3rem)',
                        transition: 'color 0.3s',
                      }}
                    />
                    <span
                      style={{
                        color: 'inherit',
                        fontWeight: 'var(--style-headingWeight)',
                        fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                        textTransform: 'capitalize',
                      }}
                    >
                      {platform}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
