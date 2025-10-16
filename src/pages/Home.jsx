import Section from "../components/Section";
import AnimatedSection from "../components/AnimatedSection";

export default function Home() {
  return (
    <section>
      <AnimatedSection>
        <h1 className="fw-bold display-5 mb-3">Hi, I'm Huy 👋</h1>
        <p className="lead">
          A passionate Frontend Developer who loves building modern, responsive
          web applications using React and Node.js.
        </p>
      </AnimatedSection>
    </section>
  );
}
