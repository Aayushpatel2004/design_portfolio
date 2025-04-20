
// import { Card } from "@/components/ui/card";
// import { Gamepad, Gavel } from "lucide-react";

// const projects = [
//   {
//     title: "Angry Birds Game",
//     description: "Interactive Gaming Experience",
//     icon: Gamepad
//   },
//   {
//     title: "Online Auction System",
//     description: "Real-time Bidding Platform",
//     icon: Gavel
//   }
// ];

// export const ProjectsSection = () => {
//   return (
//     <section className="section-padding bg-secondary/90 backdrop-blur-lg">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-12 text-white">Featured Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <Card key={index} className="hover-card overflow-hidden bg-secondary/50 border-gray-800">
//               <div className="aspect-video relative bg-secondary/30 flex items-center justify-center">
//                 <project.icon className="w-16 h-16 text-primary transition-all duration-300 hover:scale-110" />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
//                 <p className="text-gray-400">{project.description}</p>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
import { Card } from "@/components/ui/card";
import { Gamepad, Gavel } from "lucide-react";

const projects = [
  {
    title: "Angry Birds Game",
    description: "Interactive Gaming Experience",
    icon: Gamepad,
    image: "/angrybirds.png" // ✅ Correct image name
  },
  {
    title: "Online Auction System",
    description: "Real-time Bidding Platform",
    icon: Gavel,
    image: "/auctionhub.jpeg" // ✅ Correct image name
  }
];

export const ProjectsSection = () => {
  return (
    <section className="section-padding bg-secondary/90 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover-card overflow-hidden bg-secondary/50 border-gray-800">
              <div className="aspect-video relative bg-secondary/30 flex items-center justify-center">
                {/* Icon: shown initially */}
                <project.icon className="w-16 h-16 text-primary transition-opacity duration-300 group-hover:opacity-0" />
                
                {/* Image: shown on hover */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
