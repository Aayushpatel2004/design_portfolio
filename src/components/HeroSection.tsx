
import { motion } from "framer-motion";
import { Scene3D } from "./Scene3D";

export const HeroSection = () => {
  return (
    <section className="section-padding min-h-[80vh] flex items-center relative overflow-hidden bg-secondary/95">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        >
          Aayush Kumar Patel
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Hi, I'm a designer passionate about creating beautiful and functional digital experiences.
        </motion.p>
      </div>
      <Scene3D />
    </section>
  );
};
