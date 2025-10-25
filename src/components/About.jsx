import { useEffect, useState } from "react";
import Section from "./Section";
import AnimatedSection from "./AnimatedSection";
import about from "../data/about.json"

export default function About() {
//   const [about, setAbout] = useState(null);

//   useEffect(() => {
//     fetch("/data/about.json")
//       .then((res) => res.json())
//       .then((data) => setAbout(data));
//   }, []);

//   if (!about) return null;

  return (
    <Section id="about">
      <AnimatedSection>
        <h2 className="fw-bold mb-4 text-center">About me</h2>
        <div className="row align-items-center">
          <div className="col-md-8 mx-auto">
            <p className="lead">{about.bio}</p>
            <ul className="list-unstyled mt-3">
              <li>
                📍 <strong>Location:</strong> {about.location}
              </li>
              <li>
                💼 <strong>Experience:</strong> {about.experience}
              </li>
            </ul>

            <div className="mt-4">
              <h5 className="fw-semibold">Interests:</h5>
              {about.interests.map((item, i) => (
                <span key={i} className="badge bg-secondary me-2">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
