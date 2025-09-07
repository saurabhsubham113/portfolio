"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "projects","blog","connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Subham
                  <br />
                  <span className="text-muted-foreground">Saurabh</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Senior Frontend Engineer with 6.75+ years building scalable, high-performance web applications and
                  leveraging
                  <span className="text-foreground"> AI-first tooling</span> to deliver products faster.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>Bangalore, India</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Senior Frontend Engineer</div>
                  <div className="text-muted-foreground">@ Lenskart</div>
                  <div className="text-xs text-muted-foreground">July 2022 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Next.js", "Redux Toolkit", "TanStack Query", "Cypress", "LangChain"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Professional Experience</h2>
              <div className="text-sm text-muted-foreground font-mono">2019 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2022",
                  role: "Senior Front End Engineer",
                  company: "Lenskart Solutions",
                  description:
                    "Developed complex UI components for warehouse management system handling ~60,000 orders/day. Built in-house WMS reducing vendor dependency. Migrated codebases from Webpack to Vite, cutting deployment times by 80%.",
                  tech: ["React", "TypeScript", "Vite", "Cypress"],
                  achievements: [
                    "Cut deployment times by ~80%",
                    "Reduced production downtime with automated testing",
                    "Delivered trainer roster system in 1/3rd estimated time using AI tools",
                  ],
                },
                {
                  year: "2021",
                  role: "Senior Front End Engineer",
                  company: "Tata Consultancy Services",
                  description:
                    "Remodeled existing loan applications in React.js. Implemented file upload module with camera access for mobile devices. Proposed and implemented Testcafe for end-to-end testing automation.",
                  tech: ["React", "JavaScript", "Testcafe"],
                  achievements: ["Improved customer completion rate by 400 basis points"],
                },
                {
                  year: "2019",
                  role: "Front End Developer",
                  company: "Wipro Technologies",
                  description:
                    "Migrated legacy loan application system to React.js, improving performance and maintainability. Built customer-facing and admin portals. Developed custom JIRA automation dashboard.",
                  tech: ["React", "JavaScript", "JIRA API"],
                  achievements: ["Successfully migrated legacy system to modern React architecture"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                    {job.achievements && (
                      <div className="space-y-1">
                        {job.achievements.map((achievement, i) => (
                          <div key={i} className="text-sm text-muted-foreground/80 flex items-start gap-2">
                            <span className="text-foreground mt-1">•</span>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Featured Projects</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "AI-Powered Code Review Bot",
                  excerpt:
                    "Built an in-house GitLab merge request reviewer using OpenAI/Gemini APIs. Automatically analyzes code changes and posts inline comments.",
                  tech: ["OpenAI API", "Gemini API", "GitLab CI/CD", "Node.js"],
                  impact: "Improved code review speed and consistency across teams",
                },
                {
                  title: "PDF RAG Application",
                  excerpt:
                    "Developed a Retrieval-Augmented Generation system using LangChain.js, Ollama, and Qdrant for natural language search over PDF documents.",
                  tech: ["LangChain.js", "Ollama", "Qdrant", "RAG"],
                  impact: "Reduced manual lookup time in internal knowledge systems",
                },
              ].map((project, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{project.excerpt}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs border border-border rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="text-sm text-foreground font-medium">{project.impact}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="blog"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Blog & Insights</h2>
              <div className="text-sm text-muted-foreground font-mono">THOUGHTS & LEARNINGS</div>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              <div className="lg:col-span-2 space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  I write about frontend engineering, AI-powered development workflows, and lessons learned from
                  building scalable web applications. Sharing insights on modern React patterns, performance
                  optimization, and the future of AI in software development.
                </p>

                <div className="flex flex-col flex-wrap sm:flex-row gap-4">
                  <Link
                    href="https://blogs.saurabhsubham.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-4 py-2 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <span className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                      Visit Blog
                    </span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>

                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-sm text-muted-foreground">Topics:</span>
                    {[
                      "Codemods",
                      "AST",
                      "Cypress",
                      "CI/CD",
                      "AI",
                      "LLMs",
                      "RAG",
                      "Embeddings",
                      "Frontend"
                    ].map((topic) => (
                      <span
                      key={topic}
                      className="px-2 py-1 text-xs border border-border rounded-full text-muted-foreground"
                      >
                      {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "JS Refactors at Scale? Meet Codemods + AST",
                    excerpt: "A deep dive into using codemods and Abstract Syntax Trees (AST) for large-scale JavaScript refactoring projects.",
                    readTime: "7 min read",
                    link:"https://blogs.saurabhsubham.in/creating-your-own-codemod"
                  },
                  {
                    title: "Easy Setup and Execution of Cypress Tests in GitLab CI",
                    excerpt:
                      "A step-by-step guide to integrating Cypress end-to-end tests into your GitLab CI/CD pipeline for robust test automation.",
                    readTime: "5 min read",
                    link:"https://blogs.saurabhsubham.in/easy-setup-and-execution-of-cypress-tests-in-gitlab-ci"
                  },
                  {
                    title: "Decoding AI Jargons: LLMs, RAG, Embeddings, and More",
                    excerpt: "A beginner-friendly guide to understanding key AI concepts and their applications in software development.",
                    readTime: "11 min read",
                    link:"https://blogs.saurabhsubham.in/decoding-ai-jargons"
                  },
                ].map((post, index) => (
                  <Link
                    key={index}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-3">
                      <h3 className="text-base font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                      <div className="text-xs text-muted-foreground/80">{post.readTime}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[4] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let&apos;s Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about frontend engineering
                  and AI-powered development.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:saurabhsubham113@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">saurabhsubham113@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <Link
                    href="tel:+916204635192"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">+91-6204635192</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@saurabhsubham113", url: "https://github.com/saurabhsubham113" },
                  { name: "LinkedIn", handle: "subham-saurabh", url: "#" }
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Education", handle: "B.Tech ECE - 76.86%"},
                  { name: "Award", handle: "Customer Obsession - Lenskart"}
                ].map((social) => (
                  <div
                    key={social.name}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Subham Saurabh. All rights reserved.</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
