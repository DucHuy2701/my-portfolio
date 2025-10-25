import { motion } from "framer-motion";
import Button from "./Button";

export default function ProjectCard({
  title,
  description,
  image,
  github,
  demo,
  category,
}) {
  return (
    <motion.div
      className="card h-100 shadow-sm border-0 overflow-hidden"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="fw-bold mb-2">{title}</h5>
        <p className="text-muted small flex-grow-1">{description}</p>
        <div className="d-flex justify-content-between mt-3">
          <a href={github} target="_blank" rel="noreferrer">
            <Button variant="secondary">
              Github
            </Button>
          </a>
          <a href={demo} target="_blank" rel="noreferrer">
            <Button variant="secondary">Live Demo</Button>
          </a>
        </div>
      </div>
      <span className="position-absolute top-0 start-0 m-2 badge bg-primary">
        {category}
      </span>
    </motion.div>
  );
}
