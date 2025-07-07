import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slideVariants = {
  initial: (i) => ({
    x: i % 2 === 0 ? "-100%" : "100%",
  }),
  animate: {
    x: "0%",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: (i) => ({
    x: i % 2 === 0 ? "100%" : "-100%",
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.1 * i },
  }),
};

const PageTransition = ({ isVisible, onComplete }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideVariants}
              className={`fixed top-0 left-0 w-full h-full z-[9999]`}
              style={{
                backgroundColor: ["#CF0F47", "#FFD2DC", "#1a0a12"][i],
                zIndex: 9999 - i,
              }}
              onAnimationComplete={i === 2 ? onComplete : undefined}
            />
          ))}
        </>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
