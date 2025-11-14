import JobExperience from "../components/JobExperience";
import TechnicalSkills from "../components/TechnicalSkills";

export default function About() {
  return (
    <div className="container py-5">
      <h1 className="display-4 fw-bold mb-4">About Me</h1>
      <section className="mb-5">
        <h2 className="h3 fw-bold mb-3">Education</h2>
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="h5 fw-bold">Dalhousie University</h3>
            <p className="text-muted mb-2">Bachelor of Computer Science</p>
            <p className="mb-2">
              <strong>GPA:</strong> 4.16/4.30
            </p>
            <p className="text-muted mb-0">Sep 2023 - Sep 2027</p>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <h2 className="h3 fw-bold mb-3">Experience</h2>
        <div className="row g-3">
          <JobExperience
            title="Incoming Data Engineering Intern"
            company="BDO Canada"
            startDate="Jan 2026"
            endDate="May 2026"
          />
          <JobExperience
            title="Software Developer Intern"
            company="Jazz Aviation"
            startDate="May 2025"
            endDate="Sep 2025"
          />
          <JobExperience
            title="Software Developer Intern"
            company="Ditech Testing"
            startDate="Jun 2024"
            endDate="Aug 2024"
          />
        </div>
      </section>
      <section className="mb-5">
        <h2 className="h3 fw-bold mb-3">Technical Skills</h2>
        <div className="row g-4">
          <TechnicalSkills
            title="Languages"
            skills={[
              "Java",
              "Python",
              "C#",
              "C",
              "JavaScript",
              "TypeScript",
              "HTML",
              "CSS",
              "PHP",
              "SQL",
            ]}
            badgeColor="primary"
          />
          <TechnicalSkills
            title="Frameworks & Libraries"
            skills={[
              "React",
              "Next.js",
              "Express.js",
              ".NET",
              "Node.js",
              "Bootstrap",
              "Flask",
              "Scikit",
              "PyTorch",
            ]}
            badgeColor="success"
          />
        </div>
      </section>
      <section className="mb-5">
        <h2 className="h3 fw-bold mb-3">Career Goals</h2>
        <div className="card shadow-sm">
          <div className="card-body">
            <p className="mb-3">
              For my career goals, I'm interested in all things Software
              Engineering, Data Engineering, and AI/ML. I hope to continue to
              expand my knowledge and skills through my next co-ops, and
              eventually land a full-time role in one of these fields after
              graduation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
