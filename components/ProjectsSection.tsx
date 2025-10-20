import type { FC } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteConfig } from '../lib/config';
import { HiExternalLink, HiX, HiStar } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  stars?: number;
  forks?: number;
  language?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectsSection: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  // Use static projects from config
  const projects: Project[] = siteConfig.projects || [];

  // Sadece programlama dillerini filtre olarak göster
  const allLanguages = ['all', ...new Set(projects.map(p => p.language).filter(Boolean))];

  // Filter projeleri dile göre
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.language?.toLowerCase() === filter.toLowerCase());

  return (
    <section ref={ref} id="projects" style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: 'var(--color-surface)' }}>
      <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontWeight: 'var(--style-headingWeight)', fontSize: 'clamp(2.25rem, 5vw, 3rem)', marginBottom: '1rem' }}>
            <span
              style={{
                backgroundImage: `linear-gradient(to right, var(--color-primary), var(--color-secondary))`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              My Projects
            </span>
          </h2>
          <p style={{ color: 'var(--color-textSecondary)', fontSize: '1.25rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            {projects.length} featured projects sorted by ⭐ stars
          </p>
        </motion.div>

        {/* Filter Tags - Sadece Diller */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(0.5rem, 1.5vw, 0.75rem)', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          {allLanguages.map((lang) => (
            <motion.button
              key={lang}
              onClick={() => setFilter(lang)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: filter === lang
                  ? `linear-gradient(to right, var(--color-primary), var(--color-secondary))`
                  : 'var(--color-surface)',
                color: filter === lang ? 'white' : 'var(--color-text)',
                boxShadow: filter === lang ? 'var(--style-glow)' : 'var(--style-shadow)',
                border: filter === lang ? 'none' : 'var(--style-cardBorder)',
                fontWeight: filter === lang ? 'var(--style-headingWeight)' : 'var(--style-fontWeight)',
                padding: 'clamp(0.375rem, 1.5vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)',
                borderRadius: '9999px',
                fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                transition: 'all 0.3s',
              }}
            >
              {lang === 'all' ? '🌐 All' : `💻 ${lang}`}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2rem',
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                style={{ position: 'relative', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector('.hover-overlay');
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector('.hover-overlay');
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: '16rem',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                    backgroundColor: 'var(--color-background)',
                    boxShadow: 'var(--style-shadow)',
                    border: 'var(--style-cardBorder)',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--style-glow)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--style-shadow)'}
                >
                  {/* GitHub OpenGraph Image */}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={400}
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      onError={(e) => {
                        // Fallback gradient if image fails
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}

                  {/* Fallback gradient if no image */}
                  {!project.image && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
                      }}
                    />
                  )}

                  {/* Star Count Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      zIndex: 10,
                      padding: '0.25rem 0.75rem',
                      color: 'white',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 'var(--style-headingWeight)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <HiStar style={{ color: '#facc15' }} /> {project.stars || 0}
                  </div>

                  {/* Language Badge */}
                  {project.language && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        zIndex: 10,
                        padding: '0.25rem 0.75rem',
                        color: 'white',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(8px)',
                        fontWeight: 'var(--style-headingWeight)',
                      }}
                    >
                      {project.language}
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div
                    className="hover-overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '1.5rem',
                    }}
                  >
                    <div style={{ color: 'white' }}>
                      <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>Click to view details</p>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {project.liveUrl && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem' }}>
                            <HiExternalLink /> Live Demo
                          </span>
                        )}
                        {project.githubUrl && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem' }}>
                            <FaGithub /> {project.forks || 0} Forks
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ marginTop: 'clamp(0.75rem, 2vw, 1rem)' }}>
                  <h3
                    style={{
                      color: 'var(--color-text)',
                      fontWeight: 'var(--style-headingWeight)',
                      fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--color-textSecondary)',
                      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                      marginBottom: 'clamp(0.5rem, 2vw, 0.75rem)',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Sadece forks sayısını göster */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem' }}>
                    {(project.forks ?? 0) > 0 && (
                      <span
                        style={{
                          color: 'var(--color-textSecondary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                        }}
                      >
                        <FaGithub /> {project.forks} forks
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(4px)',
              zIndex: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
                maxWidth: '48rem',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                backgroundColor: 'var(--color-surface)',
              }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.5rem',
                  borderRadius: '9999px',
                  transition: 'all 0.3s',
                  zIndex: 10,
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-text)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface)'}
              >
                <HiX style={{ width: '1.5rem', height: '1.5rem' }} />
              </button>

              {/* Project Image */}
              {selectedProject.image && (
                <div style={{
                  width: '100%',
                  height: 'clamp(12rem, 30vw, 16rem)',
                  overflow: 'hidden',
                  borderTopLeftRadius: 'clamp(0.75rem, 2vw, 1rem)',
                  borderTopRightRadius: 'clamp(0.75rem, 2vw, 1rem)',
                }}>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={800}
                    height={400}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              )}

              <div style={{ padding: 'clamp(1rem, 3vw, 2rem)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'clamp(0.5rem, 2vw, 1rem)', marginBottom: 'clamp(0.75rem, 2vw, 1rem)' }}>
                  <h2
                    style={{
                      color: 'var(--color-text)',
                      fontWeight: 'var(--style-headingWeight)',
                      fontSize: 'clamp(1.25rem, 4vw, 1.875rem)',
                    }}
                  >
                    {selectedProject.title}
                  </h2>

                  {/* Star & Language */}
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        backgroundColor: 'var(--color-background)',
                        color: 'var(--color-text)',
                        fontWeight: 'var(--style-headingWeight)',
                      }}
                    >
                      <HiStar style={{ color: '#facc15' }} /> {selectedProject.stars || 0}
                    </span>
                    {selectedProject.language && (
                      <span
                        style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontSize: '0.875rem',
                          backgroundColor: 'var(--color-primary)',
                          color: 'white',
                        }}
                      >
                        {selectedProject.language}
                      </span>
                    )}
                  </div>
                </div>

                <p
                  style={{
                    color: 'var(--color-textSecondary)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.625',
                  }}
                >
                  {selectedProject.description}
                </p>

                {/* Stats */}
                {((selectedProject.stars ?? 0) > 0 || (selectedProject.forks ?? 0) > 0) && (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: 'clamp(0.75rem, 2vw, 1rem)',
                    marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                  }}>
                    <div
                      style={{
                        textAlign: 'center',
                        padding: 'clamp(0.75rem, 2vw, 1rem)',
                        borderRadius: '0.75rem',
                        backgroundColor: 'var(--color-background)',
                        border: 'var(--style-cardBorder)',
                      }}
                    >
                      <div
                        style={{
                          color: 'var(--color-primary)',
                          fontWeight: 'var(--style-headingWeight)',
                          fontSize: '1.5rem',
                        }}
                      >
                        ⭐ {selectedProject.stars || 0}
                      </div>
                      <div style={{ color: 'var(--color-textSecondary)', fontSize: '0.875rem' }}>
                        Stars
                      </div>
                    </div>
                    <div
                      style={{
                        textAlign: 'center',
                        padding: 'clamp(0.75rem, 2vw, 1rem)',
                        borderRadius: '0.75rem',
                        backgroundColor: 'var(--color-background)',
                        border: 'var(--style-cardBorder)',
                      }}
                    >
                      <div
                        style={{
                          color: 'var(--color-primary)',
                          fontWeight: 'var(--style-headingWeight)',
                          fontSize: '1.5rem',
                        }}
                      >
                        🔱 {selectedProject.forks || 0}
                      </div>
                      <div style={{ color: 'var(--color-textSecondary)', fontSize: '0.875rem' }}>
                        Forks
                      </div>
                    </div>
                  </div>
                )}

                {/* Links */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: '0.75rem 1.5rem',
                        color: 'white',
                        borderRadius: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s',
                        background: `linear-gradient(to right, var(--color-primary), var(--color-secondary))`,
                        fontWeight: 'var(--style-headingWeight)',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--style-glow)'}
                      onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                    >
                      <HiExternalLink style={{ width: '1.25rem', height: '1.25rem' }} />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s',
                        backgroundColor: 'var(--color-background)',
                        color: 'var(--color-text)',
                        border: 'var(--style-cardBorder)',
                        fontWeight: 'var(--style-headingWeight)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-background)';
                        e.currentTarget.style.color = 'var(--color-text)';
                      }}
                    >
                      <FaGithub style={{ width: '1.25rem', height: '1.25rem' }} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
