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

        {/* Article: SpaceX */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 bg-background p-6 md:p-8 rounded-lg"
        >
          <div className="mb-6">
            <img src="/SpaceX.jpg" alt="SpaceX 火箭" className="w-full rounded-lg shadow-md" />
          </div>
          <div className="prose prose-slate max-w-none">
            <p className="text-text-secondary leading-relaxed mb-4">
              美国大火箭 SpaceX 即将上市，这次发行肯定会相当火爆，应该是全球投资史上的超级盛宴和历史记录！
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Elon Musk 说，假设有外星物种拜访我们，他们会用一个最客观的指标来评判我们这个文明的发展程度。就是看一个特定文明到底能够驾驭多少能量。俄罗斯物理学家卡尔达舍夫提出了这个概念，我认为这个描述非常准确。一个文明能在多大程度上驾驭其母星的可用能量，这就是 I 型文明；II 型文明是看你驾驭了多少所在恒星的能量；III 型文明则是你能驾驭多少所在星系的能量。这些都是非常客观且可量化的指标。按照目前的状况，我们的文明等级还非常低，如果要算我们驾驭了地球总能量的占比，这个数字微乎其微。我们几乎完全没有驾驭太阳的能量。要感受太阳有多大，有一种方式是将太阳的质量和太阳系中其他所有物质的总质量做个对比。太阳占据了太阳系总质量的绝大部分，它几乎就是一切。在剩下的一点点中，大部分都属于木星这一颗行星。地球的全部质量只能算在微小的其他杂项里，和太阳相比地球就像一粒微尘。投射到地球上的太阳能大约只占太阳输出总功率的十亿分之五，且其中的绝大多数我们也无法利用，因为地球 70% 的表面被水覆盖。甚至在剩下 30% 的陆地中，还有很大一部分是像南极洲、西伯利亚、加拿大北部这样的地区，环境恶劣通常不适合人类居住。
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              所以，地球表面可用的太阳能面积很有限，冷却和供电也会成为限制，但在轨道上，太阳能充足散热，可以直接向真空辐射。这样就避免了在地球上建造庞大的发电厂，并解决了散热问题。
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              文明从 I 型跨越到 II 型，难度不是一般的大。至于 III 型，我们甚至连从哪儿下手都毫无头绪。但 AI 最终会解决这些问题。
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              我们现在的构想以及打算去做的，就是努力在文明等级上攀登，成为一个相对体面的文明。"这样当外星人，希望宇宙中有外星人，最终决定和我们交流时，我们至少已经利用了相当数量的太阳能。这让我们看起来不会显得太过可悲，毕竟目前我们的处境确实有些可悲。"好可爱的发言！
            </p>
            <p className="text-text-secondary leading-relaxed">
              我们平时谈论的历史上的伟大人物，他们都在地面上研究人与人的关系。而马斯克，应该是第一个代表人类向外太空探求的传奇人物。难怪好多人喜欢他、崇拜他！至少很多人是带着些许梦想的，如果有条件还能买点儿他的股票，以后可以光荣的说：
            </p>
            <p className="text-text-secondary leading-relaxed font-serif italic mt-4">
              "我，赞助过马斯克的太空计划！"……
            </p>
          </div>
        </motion.article>

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

        {/* Learning Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="font-serif text-xl text-text-primary mb-4">学习瞬间</h3>
          <div className="bg-surface p-6 rounded-lg">
            <img
              src="/learning.jpg"
              alt="学习图片"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </motion.div>

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

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="font-serif text-xl text-text-primary mb-4">成长视频</h3>
          <div className="bg-background p-6 rounded-lg">
            <video
              controls
              className="w-full rounded-lg shadow-md"
              poster=""
            >
              <source src="/7b011e6b800b8632d2efcf48e70a243e.mp4" type="video/mp4" />
              您的浏览器不支持视频播放。
            </video>
          </div>
        </motion.div>

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
