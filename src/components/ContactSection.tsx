
import { Github, Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="section-padding bg-secondary/80 text-white backdrop-blur-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-lg mb-8 text-gray-300">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-125"
          >
            <Github className="w-8 h-8 text-white hover:text-primary" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-125"
          >
            <Linkedin className="w-8 h-8 text-white hover:text-primary" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="transform transition-all duration-300 hover:scale-125"
          >
            <Mail className="w-8 h-8 text-white hover:text-primary" />
          </a>
        </div>
        <a
          href="mailto:your.email@example.com"
          className="inline-block bg-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};
