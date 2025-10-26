import Projects from "../components/Projects";
import Section from "../components/Section";

export default function ProjectsPage() {
  return (
    <Section id="projects-page">
      <div className="container py-5 mt-5">
        <h2 className="container text-center mb-5">All Projects</h2>
        <Projects />
      </div>
    </Section>
  );
}
