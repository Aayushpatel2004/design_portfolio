
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const skills = [
//   {
//     id: 1,
//     name: "Web Development",
//     description: "Frontend and Backend Development",
//     background: "bg-gradient-to-r from-purple-800 to-indigo-900"
//   },
//   {
//     id: 2,
//     name: "UI/UX Design",
//     description: "Creating Beautiful User Interfaces",
//     background: "bg-gradient-to-r from-blue-800 to-cyan-900"
//   },
//   {
//     id: 3,
//     name: "Mobile Development",
//     description: "Cross-platform Mobile Applications",
//     background: "bg-gradient-to-r from-emerald-800 to-teal-900"
//   },
//   {
//     id: 4,
//     name: "Cloud Computing",
//     description: "AWS and Cloud Infrastructure",
//     background: "bg-gradient-to-r from-rose-800 to-pink-900"
//   }
// ];

// const Skills = () => {
//   const [activeSkill, setActiveSkill] = useState<number>(0);

//   return (
//     <div className={`min-h-screen transition-all duration-500 ${activeSkill ? skills[activeSkill - 1].background : 'bg-secondary'}`}>
//       <div className="container mx-auto px-4 py-16">
//         <h1 className="text-4xl font-bold text-white mb-16 text-center">My Skills</h1>
        
//         <div className="relative h-[60vh] flex items-center justify-center">
//           {/* Skills Dots */}
//           <div className="grid grid-cols-2 gap-32">
//             {skills.map((skill) => (
//               <motion.button
//                 key={skill.id}
//                 className={`w-8 h-8 rounded-full ${
//                   activeSkill === skill.id
//                     ? 'bg-primary scale-125'
//                     : 'bg-white/30 hover:bg-white/50'
//                 } transition-all duration-300`}
//                 whileHover={{ scale: 1.2 }}
//                 onClick={() => setActiveSkill(skill.id)}
//               />
//             ))}
//           </div>

//           {/* Skill Info */}
//           <motion.div
//             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: activeSkill ? 1 : 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {activeSkill > 0 && (
//               <>
//                 <h2 className="text-3xl font-bold text-white mb-4">
//                   {skills[activeSkill - 1].name}
//                 </h2>
//                 <p className="text-white/80 text-lg">
//                   {skills[activeSkill - 1].description}
//                 </p>
//               </>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  {
    id: 1,
    name: "Web Development",
    description: "Frontend and Backend Development",
    background: "bg-gradient-to-r from-purple-800 to-indigo-900",
    image: "/image1.jpg"
  },
  {
    id: 2,
    name: "UI/UX Design",
    description: "Creating Beautiful User Interfaces",
    background: "bg-gradient-to-r from-blue-800 to-cyan-900",
    image: "/image2.jpg"
  },
  {
    id: 3,
    name: "Game Development",
    description: "Cross-platform Mobile Applications",
    background: "bg-gradient-to-r from-emerald-800 to-teal-900",
    image: "/image3.png"
  },
  {
    id: 4,
    name: "Working on it",
    description: "",
    background: "bg-gradient-to-r from-rose-800 to-pink-900",
    image: "/image4.jpg"
  }
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [ripplePosition, setRipplePosition] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = skills.find(s => s.id === hoveredSkill);

  const handleMouseEnter = (e: React.MouseEvent, skillId: number) => {
    setHoveredSkill(skillId);

    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    setRipplePosition({
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden min-h-screen transition-all duration-500 ${selected?.background ?? 'bg-secondary'}`}
    >
      {/* Static current background layer */}
      <div className="absolute inset-0 z-0 opacity-100 bg-black" />

      {/* New background masked by ripple */}
      <AnimatePresence>
        {hoveredSkill && ripplePosition && selected && (
          <motion.div
            key={selected.id}
            className="absolute inset-0 z-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${selected.image})` }}
            initial={{ clipPath: `circle(0px at ${ripplePosition.x}px ${ripplePosition.y}px)` }}
            animate={{ clipPath: `circle(150% at ${ripplePosition.x}px ${ripplePosition.y}px)` }}
            exit={{ clipPath: `circle(0px at ${ripplePosition.x}px ${ripplePosition.y}px)` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-20 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-16 text-center">My Skills</h1>

        <div className="relative h-[60vh] flex items-center justify-center">
          {/* Skill Dots */}
          <div className="grid grid-cols-2 gap-32">
            {skills.map((skill) => (
              <motion.button
                key={skill.id}
                className={`w-8 h-8 rounded-full relative overflow-hidden transition-all duration-300 ${
                  hoveredSkill === skill.id ? 'bg-white/60 scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.15 }}
                onMouseEnter={(e) => handleMouseEnter(e, skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <span className="absolute inset-0 animate-ripple bg-white/40 rounded-full pointer-events-none" />
              </motion.button>
            ))}
          </div>

          {/* Skill Info */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredSkill ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {selected && (
              <>
                <h2 className="text-3xl font-bold text-white mb-4">{selected.name}</h2>
                <p className="text-white/80 text-lg">{selected.description}</p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
