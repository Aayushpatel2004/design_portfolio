
export const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="prose prose-lg">
          <p className="text-lg text-muted-foreground mb-6">
          Hi! I'm Aayush Patel, a passionate designer and developer based in India. I'm currently studying at IIIT-Delhi, where I'm exploring the intersections of design, technology, and interactivity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">UI Design</h3>
              <p className="text-muted-foreground">Aayush Kumar Patel</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">UX Design</h3>
              <p className="text-muted-foreground">Crafting seamless user experiences</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-muted-foreground">Building fast, accessible, and visually appealing websites using React, Tailwind CSS, and modern web stacks. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
