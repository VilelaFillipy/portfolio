import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Skills.css'

const skills = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', category: 'Frontend' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', category: 'Linguagem' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', category: 'Mobile' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', category: 'Linguagem' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', category: 'Linguagem' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', category: 'Backend' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', category: 'Backend' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', category: 'Backend' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'Cloud' },
  { name: 'N8N', icon: null, category: 'Automacao' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', category: 'DevOps' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', category: 'Ferramentas' },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="skills-section">
      <div className="container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="divider" />
          <h2 className="section-title">Tech <span>Stack</span></h2>
          <p className="section-subtitle">
            Ferramentas e tecnologias que uso para construir produtos modernos.
          </p>
        </motion.div>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 48, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.06,
              }}
              whileHover={{
                y: -8,
                boxShadow: '0 12px 40px var(--accent-glow), 0 0 0 1px var(--border-hover)',
                borderColor: 'var(--border-hover)',
              }}
            >
              <div className="skill-card__icon-wrap">
                {skill.icon ? (
                  <>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-card__icon"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="skill-card__icon-fallback" style={{ display: 'none' }}>
                      {skill.name.slice(0, 2).toUpperCase()}
                    </div>
                  </>
                ) : (
                  <div className="skill-card__icon-fallback" style={{ display: 'flex' }}>
                    {skill.name.slice(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              <p className="skill-card__name">{skill.name}</p>
              <span className="skill-card__category">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
