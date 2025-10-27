import { motion } from "framer-motion";

export default function SkillBadge({name}) {
  return (
    <motion.div
      className="p-3 bg-light rounded shadow-sm text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
        <h6 className="fw-semibold mb-1">{name}</h6>
    </motion.div>
  );
}
