import profile from "./assets/profile.jpg";
import { Github, Linkedin, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="space-y-32 py-24">
      {/* HERO */}
      <section className="section grid md:grid-cols-2 gap-20 items-center px-6">
        <div>
          <p className="text-primary font-medium mb-3">
            Backend Developer · Security Enthusiast
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <h1 className="text-5xl font-bold">Humza Anwar Khan</h1>

            <a
              href="/my-portfolio/cv.pdf"
              target="_blank"
              className="text-primary border border-primary px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition"
            >
              View Resume
            </a>

            <a
              href="/my-portfolio/cv.pdf"
              download
              className="text-muted border border-gray-300 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
            >
              Download Resume
            </a>
          </div>

          <p className="text-muted mt-6 max-w-xl leading-relaxed">
            I build secure backend systems with a strong focus on authentication,
            API design, and real-world security practices. I approach development
            with an attacker’s mindset to minimize vulnerabilities and design
            resilient applications.
          </p>

          <div className="flex gap-6 mt-8 text-primary">
            <a href="https://github.com/humzaanwarkhan" target="_blank">
              <Github />
            </a>
            <a href="https://linkedin.com/in/humza-anwar-khan" target="_blank">
              <Linkedin />
            </a>
            <a href="mailto:humzaanwarkhan@gmail.com">
              <Mail />
            </a>
          </div>
        </div>

        <img src={profile} className="rounded-3xl w-[300px] shadow-xl" />
      </section>

      {/* EXPERIENCE */}
      <section className="section px-6">
        <h2 className="text-3xl font-semibold mb-12">Experience</h2>

        <div className="space-y-10 max-w-3xl">
          <ExperienceItem
            role="Backend Developer Intern"
            company="Shutter Troops"
            duration="June 2025 – Sept 2025"
            points={[
              "Implemented secure authentication flows using Firebase, Express & JWT.",
              "Built protected APIs with validation and role-based access.",
              "Designed password reset flows and handled production deployment.",
            ]}
          />

          <ExperienceItem
            role="Web Developer"
            company="Sukhanvar Studio"
            duration="Oct 2025 – Dec 2025"
            points={[
              "Developed and maintained production website.",
              "Handled performance optimization and real-world bug fixes.",
              "Managed independent deployments and feature updates.",
            ]}
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section px-6">
        <h2 className="text-3xl font-semibold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* FEATURED */}
          <div className="md:col-span-2">
            <Project
              featured
              title="Memento — Private Memory System"
              desc="Designed a privacy-first personal memory application with strict access control and secure authentication. Implemented session protection strategies and minimized data exposure by design."
              website="https://memento-frontend-phi.vercel.app"
              tech={["React", "Node.js", "MongoDB", "Firebase", "JWT"]}
              highlight="Security-first architecture"
            />
          </div>

          <Project
            title="Secure Auth Backend"
            desc="Built a production-ready authentication system with JWT, refresh token rotation, CSRF protection, rate limiting, and input validation to mitigate common web attacks."
            link="https://github.com/humzaanwarkhan/secure-auth-repo"
            tech={["Node.js", "Express", "JWT", "Firebase"]}
            highlight="Auth · API Security"
          />

          <Project
            title="Sukhanvar Studio Website"
            desc="Developed a live e-commerce website with optimized frontend performance and clean content flow for better user experience."
            website="https://sukhanvar.com"
            tech={["React", "Tailwind"]}
            highlight="Production deployment"
          />

          <Project
            title="SubEnum"
            desc="Built a Python-based subdomain enumeration tool for extracting subdomains from wildcard scopes during reconnaissance."
            link="https://github.com/humzaanwarkhan/subEnum"
            tech={["Python"]}
            highlight="Automation tool"
          />

          <Project
            title="OneRecon"
            desc="Automated multiple reconnaissance processes into a unified workflow, reducing manual effort and improving efficiency."
            link="https://github.com/humzaanwarkhan/oneRecon"
            tech={["Python"]}
            highlight="Workflow automation"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ExperienceItem({ role, company, duration, points }) {
  return (
    <div className="flex gap-6">
      <div className="w-32 text-sm text-muted">{duration}</div>

      <div className="border-l-2 border-primary pl-6">
        <h3 className="font-semibold text-lg">
          {role} — <span className="text-primary">{company}</span>
        </h3>

        <ul className="list-disc ml-5 mt-3 text-muted space-y-2">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Project({ title, desc, link, website, tech, featured, highlight }) {
  return (
    <div
      className={`card p-8 flex flex-col justify-between transition duration-300 
      hover:-translate-y-2 hover:shadow-xl ${
        featured ? "border-2 border-primary bg-gray-50" : ""
      }`}
    >
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>

        {highlight && (
          <p className="text-xs text-primary mt-2 font-medium">
            {highlight}
          </p>
        )}

        <p className="text-muted mt-3 text-sm leading-relaxed">{desc}</p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tech?.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        {link && (
          <a href={link} target="_blank" className="text-primary text-sm">
            GitHub →
          </a>
        )}
        {website && (
          <a href={website} target="_blank" className="text-primary text-sm">
            Live →
          </a>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-200 pt-10 pb-6 text-center text-sm text-muted">
      <p>© {new Date().getFullYear()} Humza Anwar Khan</p>
      <p className="mt-2">
        Built with React & Tailwind · Security-focused development
      </p>
    </footer>
  );
}