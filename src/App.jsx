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
          <h1 className="text-5xl font-bold">Humza Anwar Khan</h1>
          <p className="text-muted mt-6 max-w-xl leading-relaxed">
            I am a final year B.Tech Computer Science student with hands-on
            experience in backend development and application security. I
            specialize in building secure authentication systems, designing
            production-grade APIs, and thinking from an attacker’s mindset while
            writing server-side code.
            <br />
            <br />
            Alongside development, I actively practice bug hunting through CTF
            competitions and vulnerability research, with a strong interest in
            OWASP Top 10, authentication bypasses, and API security.
          </p>

          <div className="flex gap-6 mt-8 text-primary">
            <a
              href="https://github.com/humzaanwarkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/humza-anwar-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition"
            >
              <Linkedin />
            </a>

            <a
              href="mailto:humzaanwarkhan@gmail.com"
              className="hover:opacity-70 transition"
            >
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
              "Designed and implemented secure authentication flows using Firebase, Express & JWT.",
              "Built protected APIs with role-based access and validation.",
              "Handled email workflows, password reset logic and deployment.",
            ]}
          />

          <ExperienceItem
            role="Web Developer"
            company="Sukhanvar Studio"
            duration="Oct 2025 – Dec 2025"
            points={[
              "Built and maintained the production website of sukhanvar.studio.",
              "Managed independent development, fixes and feature updates.",
              "Optimized performance and handled live production issues.",
            ]}
          />

          <ExperienceItem
            role="Bug Bounty Hunter"
            company="Bugcrowd Platform"
            duration="Feb 2025 – Dec 2025"
            points={[
              "Actively tested real-world web applications for vulnerabilities on the Bugcrowd platform.",
              "Performed reconnaissance, endpoint mapping, and authentication testing using Burp Suite.",
              "Practiced identifying OWASP Top 10 issues including IDOR, authentication flaws, and API misconfigurations.",
            ]}
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section px-6">
        <h2 className="text-3xl font-semibold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
          <Project
            title="Memento - Your private space"
            desc="A secure personal memory & notes management application built with a strong focus on privacy. Designed to minimize data exposure, implement strict access controls, and follow secure authentication principles to protect user information."
            website="https://memento-frontend-phi.vercel.app"
          />

          <Project
            title="Sukhanvar Studio's Website"
            desc="An e-commerce website developed for a lifestyle brand, sukhanvar.studio, handling product showcase, content flow, and frontend performance optimization."
            website="https://sukhanvar.com"
          />
          <Project
            title="Secure Auth Backend"
            desc="A security-first backend authentication system implementing JWT-based access control, Firebase authentication, CSRF protection, rate limiting, and input validation to defend against common web vulnerabilities."
            link="https://github.com/humzaanwarkhan/secure-auth-repo"
          />

          <Project
            title="SubEnum"
            desc="A Python-based subdomain enumeration tool to extract subdomains from wildcard scopes, assisting in information gathering and reconnaissance during penetration testing."
            link="https://github.com/humzaanwarkhan/subEnum"
          />

          <Project
            title="OneRecon"
            desc="A Python automation tool that combines five critical reconnaissance processes into a single streamlined workflow, reducing manual effort during bug hunting."
            link="https://github.com/humzaanwarkhan/oneRecon"
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

function Project({ title, desc, link, website }) {
  return (
    <div className="card p-8 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-muted mt-3 text-sm leading-relaxed">{desc}</p>
      </div>

      {link && (
        <a href={link} target="_blank" className="text-primary mt-4">
          View on GitHub →
        </a>
      )}

      {website && (
        <a href={website} target="_blank" className="text-primary mt-4">
          Visit Website →
        </a>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-200 pt-10 pb-6 text-center text-sm text-muted">
      <p>© {new Date().getFullYear()} Humza Anwar Khan. All rights reserved.</p>
      <p className="mt-2">
        Built with React & Tailwind · Security-first mindset
      </p>
    </footer>
  );
}
