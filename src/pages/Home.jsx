import Section from "../components/Section";
import AnimatedSection from "../components/AnimatedSection";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <Section>
      <AnimatedSection>
        <Hero />
        <About />
        <Skills />
      </AnimatedSection>
    </Section>
  );
}
