import Section from "../components/Section";
import AnimatedSection from "../components/AnimatedSection";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Section>
      <AnimatedSection>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </AnimatedSection>
    </Section>
  );
}
