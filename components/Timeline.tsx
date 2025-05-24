'use client'
import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Senior Tech Lead",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    description: "Leading a team of 12 developers in building enterprise-scale applications. Architecting cloud-native solutions and implementing best practices across the organization.",
    achievements: [
      "Reduced deployment time by 70% through CI/CD implementation",
      "Led migration of legacy systems to microservices architecture", 
      "Mentored 20+ junior developers"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Inc.",
    period: "2019 - 2023",
    description: "Developed and maintained multiple client projects using React, Node.js, and AWS. Collaborated with cross-functional teams to deliver high-quality solutions.",
    achievements: [
      "Built 15+ production applications serving millions of users",
      "Improved application performance by 40%",
      "Implemented automated testing reducing bugs by 60%"
    ]
  },
  {
    title: "Frontend Developer", 
    company: "Creative Web Agency",
    period: "2015 - 2019",
    description: "Specialized in creating responsive, user-friendly interfaces for various clients. Worked closely with designers to implement pixel-perfect designs.",
    achievements: [
      "Delivered 30+ responsive websites",
      "Introduced modern JavaScript frameworks to the team",
      "Reduced page load times by 50% on average"
    ]
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Hub", 
    period: "2010 - 2015",
    description: "Started my professional journey building websites and learning modern web technologies. Gained hands-on experience with HTML, CSS, JavaScript, and PHP.",
    achievements: [
      "Contributed to 10+ startup projects",
      "Learned agile development methodologies",
      "Received \"Rising Star\" award in 2012"
    ]
  }
]

export default function Timeline() {
  return (
    <section className="timeline-section" id="experience">
      <div className="timeline-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Experience</p>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-description">My career evolution from junior developer to tech lead</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.title}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="timeline-content">
                <h3 className="job-title">{exp.title}</h3>
                <p className="company-name">{exp.company}</p>
                <p className="job-description">{exp.description}</p>
                <ul className="job-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-date">{exp.period}</div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}