import React, { useState, useMemo } from "react";
import Section from "./Section";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";
import {motion, AnimatePresence} from "framer-motion";

export default function Projects(){
    const category = ["All", ...new Set(projectsData.map(p => p.category))];
    const [active, setActive] = useState("All");

    const filtered = useMemo(() => {
        return active === "All" ? projectsData : projectsData.filter(p => p.category === active);
    }, [active]);

    return (
        <Section id="projects">
            <AnimatedSection>
                <h2 className="fw-bold mb-4 text-center">Projects</h2>

                {/* Filter Buttons */}
                <div className="text-center mb-4">
                    {category.map(cat => (
                        <button key={cat} className={`btn btn-sm me-2 mb-2 ${
                            active === cat ? "btn-primary" : "btn-outline-primary"
                        }`}
                        onClick={() => setActive(cat)}>
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div layout className="row g-4">
                    <AnimatePresence>
                        {filtered.map((proj) => (
                            <motion.div
                                layout
                                key ={proj.id}
                                className="col-12 col-sm-6 col-lg-4"
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -30}}
                                transition={{duration: 0.4}}>
                                    <ProjectCard {...proj}/>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </AnimatedSection>
        </Section>
    );
}