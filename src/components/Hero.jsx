import { motion } from "framer-motion";
import Button from "./Button";
import Section from "./Section";

export default function Hero() {
  return (
    <Section id="hero">
      <div className="row align-items-center">
        <div className="col-md-7 text-center text-md-start">
          <motion.h1
            className="display-4 fw-bold mb-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-primary">Huy</span>
          </motion.h1>

          <motion.p
            className="lead mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I'm a passionate Frontend Developer building modern and responsive
            web experience with React.
          </motion.p>

          <motion.div
            className="col-md-5 text-center mt-5 mt-md-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <img
              src="./img/ava.jpg"
              alt="Profile"
              width="180"
              height="180"
              className="rounded-circle shadow-sm"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
