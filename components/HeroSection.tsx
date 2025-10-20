import type { FC } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { siteConfig } from '../lib/config';
import { HiDownload, HiArrowDown } from 'react-icons/hi';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('./3d/Scene3D'), {
  ssr: false,
  loading: () => (
    <div style={{
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    }} />
  ),
});

const HeroSection: FC = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* 3D Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0,
        opacity: 0.4,
      }}>
        <Scene3D />
      </div>

      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.05), var(--color-background))',
        zIndex: 0,
      }} />

      {/* Content */}
      <div style={{
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        zIndex: 10,
        paddingTop: '5rem',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem',
        }}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              flex: 1,
              textAlign: 'center',
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
                fontWeight: 500,
                color: 'var(--color-primary)',
                marginBottom: '1rem',
              }}
            >
              👋 Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                fontWeight: 'var(--style-headingWeight)',
                fontSize: 'clamp(2.25rem, 8vw, 4.5rem)',
                marginBottom: '1.5rem',
              }}
            >
              <span
                style={{
                  backgroundImage: `linear-gradient(to right, var(--color-primary), var(--color-secondary), var(--color-accent))`,
                  textShadow: 'var(--style-glow)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {siteConfig.personal.name}
              </span>
            </motion.h1>

            <div
              style={{
                color: 'var(--color-text)',
                fontWeight: 'var(--style-headingWeight)',
                fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
                marginBottom: '1.5rem',
                height: '5rem',
              }}
            >
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'Content Creator',
                  2000,
                  'Community Manager',
                  2000,
                  'Tech Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                color: 'var(--color-textSecondary)',
                fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
                marginBottom: '2rem',
                maxWidth: '42rem',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              dangerouslySetInnerHTML={{ __html: siteConfig.about.intro }}
            />

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '1rem',
                marginBottom: '2rem',
                maxWidth: '32rem',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {siteConfig.about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    padding: '0.75rem',
                    borderRadius: '0.75rem',
                    backdropFilter: 'blur(4px)',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    backgroundColor: 'var(--color-surface)',
                    border: 'var(--style-cardBorder)',
                    boxShadow: 'var(--style-shadow)',
                    color: 'var(--color-text)',
                  }}
                >
                  {highlight}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
              }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                  color: 'white',
                  borderRadius: '9999px',
                  transition: 'all 0.3s',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  background: `linear-gradient(to right, var(--color-primary), var(--color-secondary))`,
                  boxShadow: 'var(--style-shadow)',
                  fontWeight: 'var(--style-headingWeight)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--style-glow)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--style-shadow)'}
              >
                View My Work
              </motion.a>

              {siteConfig.personal.resumeUrl && (
                <motion.a
                  href={siteConfig.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                    borderRadius: '9999px',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text)',
                    border: 'var(--style-cardBorder)',
                    boxShadow: 'var(--style-shadow)',
                    fontWeight: 'var(--style-headingWeight)',
                  }}
                >
                  <HiDownload style={{ width: '1.25rem', height: '1.25rem' }} />
                  Download CV
                </motion.a>
              )}
            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'relative',
                width: 'clamp(16rem, 30vw, 24rem)',
                height: 'clamp(16rem, 30vw, 24rem)',
              }}
            >
              {/* Glow Effect */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  borderRadius: '50%',
                  opacity: 0.2,
                  filter: 'blur(48px)',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  background: `linear-gradient(to right, var(--color-primary), var(--color-secondary))`,
                }}
              />

              {/* Avatar Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid',
                  borderColor: 'var(--color-surface)',
                  boxShadow: 'var(--style-glow)',
                }}
              >
                <img
                  src={siteConfig.personal.avatar}
                  alt={siteConfig.personal.name}
                  width={384}
                  height={384}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Animated Ring */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  borderRadius: '50%',
                  border: '4px solid',
                  borderColor: 'var(--color-primary)',
                  opacity: 0.3,
                  animation: 'spin 20s linear infinite',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            color: 'var(--color-textSecondary)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-textSecondary)'}
        >
          <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Scroll Down</span>
          <HiArrowDown style={{ width: '1.5rem', height: '1.5rem' }} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
