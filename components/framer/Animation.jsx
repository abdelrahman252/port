import { motion } from "framer-motion";

const spanVariants = {
  visible: { y: 0, x: 0, scaleY: 1, scaleX: 1 },
  hover: {
    scaleY: [1, 0.55, 1.25, 0.85, 1.05, 1],
    scaleX: [1, 1.4, 0.75, 1.25, 0.9, 1],
    color: "#AA367C",
    transition: {
      duration: 0.5,
    },
  },
};
const Animation = ({ children }) => {
  return (
    <motion.span variants={spanVariants} whileHover="hover">
      {children}
    </motion.span>
  );
};

export default Animation;
