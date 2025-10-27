import Section from "./Section";
import AnimatedSection from "./AnimatedSection";
import SkillBadge from "./SkillBadge";
import skills from "../data/skills.json"

export default function Skills() {

  return (
    <Section id="skills">
      <AnimatedSection>
        <h2 className="fw-bold mb-4 text-center">Skills</h2>
        <div className="row g-3">
          {skills.map((skill, i) => (
            <div className="col-6 col-md-4 col-lg-3" key={i}>
              <SkillBadge {...skill} />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}
