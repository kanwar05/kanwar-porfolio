import { motion } from "framer-motion";

export default function Section({ children, className = "", id }) {
  return (
    <motion.section
      id={id}
      className={`relative py-16 sm:py-20 ${className}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
