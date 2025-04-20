
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <Link to="/skills">
          <Button
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-lg transform transition-all duration-300 hover:scale-105"
          >
            My Skills
          </Button>
        </Link>
      </div>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
