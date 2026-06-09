import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronRight, Book, Briefcase, GraduationCap, Heart, User } from 'lucide-react'
import { siteConfig } from './config/site'
import { cn } from './lib/utils'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-serif text-lg font-medium text-text-primary hover:text-accent transition-colors">
            {siteConfig.name}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-text-secondary hover:text-accent transition-colors link-underline"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-surface mt-4"
          >
            {siteConfig.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-text-secondary hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent text-sm mb-4 tracking-wide"
        >
          {siteConfig.hero.welcome}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6 whitespace-pre-line"
        >
          {siteConfig.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed"
        >
          {siteConfig.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-full text-sm text-text-muted"
        >
          <Book size={14} />
          {siteConfig.hero.styleNote}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-text-muted rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <User className="text-accent" size={24} />
          <h2 className="font-serif text-3xl text-text-primary">{siteConfig.about.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basics */}
          <div className="bg-surface p-6 rounded-lg card-hover">
            <h3 className="font-serif text-lg text-text-primary mb-4">
              {siteConfig.about.basics.label}
            </h3>
            <div className="space-y-3">
              {siteConfig.about.basics.items.map((item) => (
                <div key={item.label} className="flex justify-between text-sm">
                  <span className="text-text-muted">{item.label}</span>
                  <span className="text-text-secondary">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personality */}
          <div className="bg-surface p-6 rounded-lg card-hover">
            <h3 className="font-serif text-lg text-text-primary mb-4">
              {siteConfig.about.personality.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {siteConfig.about.personality.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-background rounded-full text-sm text-text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="bg-surface p-6 rounded-lg card-hover">
            <h3 className="font-serif text-lg text-text-primary mb-4">
              {siteConfig.about.hobbies.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {siteConfig.about.hobbies.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-accent-light rounded-full text-sm text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="bg-surface/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="text-accent" size={24} />
          <h2 className="font-serif text-3xl text-text-primary">{siteConfig.work.title}</h2>
        </div>

        {/* Experiences */}
        <div className="space-y-6 mb-12">
          {siteConfig.work.experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-2 border-accent pl-6 py-2"
            >
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h3 className="font-serif text-xl text-text-primary">{exp.role}</h3>
                <span className="text-text-muted">@</span>
                <span className="text-text-secondary">{exp.company}</span>
              </div>
              <p className="text-sm text-accent mb-3">{exp.period}</p>
              <p className="text-text-secondary leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {siteConfig.work.skills.items.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-5 rounded-lg"
            >
              <h4 className="font-serif text-sm text-text-primary mb-3">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-surface rounded text-xs text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div>
          <h3 className="font-serif text-lg text-text-primary mb-4">
            {siteConfig.work.achievements.title}
          </h3>
          <div className="space-y-3">
            {siteConfig.work.achievements.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <ChevronRight className="text-accent mt-0.5 flex-shrink-0" size={18} />
                <p className="text-text-secondary">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function Study() {
  return (
    <section id="study">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="text-accent" size={24} />
          <h2 className="font-serif text-3xl text-text-primary">{siteConfig.study.title}</h2>
        </div>

        {/* Education */}
        <div className="space-y-6 mb-12">
          {siteConfig.study.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface p-6 rounded-lg"
            >
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h3 className="font-serif text-xl text-text-primary">{edu.school}</h3>
                <span className="text-text-muted">·</span>
                <span className="text-text-secondary">{edu.degree}</span>
              </div>
              <p className="text-sm text-accent mb-3">{edu.period}</p>
              <p className="text-text-secondary leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Direction */}
          <div>
            <h3 className="font-serif text-lg text-text-primary mb-4">
              {siteConfig.study.direction.title}
            </h3>
            <div className="space-y-3">
              {siteConfig.study.direction.items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-text-secondary">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Growth */}
          <div>
            <h3 className="font-serif text-lg text-text-primary mb-4">
              {siteConfig.study.growth.title}
            </h3>
            <div className="space-y-3">
              {siteConfig.study.growth.items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-text-secondary">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function Life() {
  return (
    <section id="life" className="bg-surface/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Heart className="text-accent" size={24} />
          <h2 className="font-serif text-3xl text-text-primary">{siteConfig.life.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Daily */}
          <div className="bg-background p-6 rounded-lg">
            <h3 className="font-serif text-lg text-text-primary mb-4">
              {siteConfig.life.daily.title}
            </h3>
            <div className="space-y-3">
              {siteConfig.life.daily.items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-accent mt-1">•</span>
                  <p className="text-text-secondary text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="bg-background p-6 rounded-lg">
            <h3 className="font-serif text-lg text-text-primary mb-4">
              {siteConfig.life.interests.title}
            </h3>
            <div className="space-y-3">
              {siteConfig.life.interests.items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-accent mt-1">•</span>
                  <p className="text-text-secondary text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Records */}
          <div className="bg-background p-6 rounded-lg">
            <h3 className="font-serif text-lg text-text-primary mb-4">
              {siteConfig.life.records.title}
            </h3>
            <div className="space-y-3">
              {siteConfig.life.records.items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-accent mt-1">•</span>
                  <p className="text-text-secondary text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-surface py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-text-muted text-sm mb-2">
          {siteConfig.footer.copyright}
        </p>
        <p className="text-text-muted text-xs">
          {siteConfig.footer.note}
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="grain-overlay">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <Study />
        <Life />
      </main>
      <Footer />
    </div>
  )
}

export default App
