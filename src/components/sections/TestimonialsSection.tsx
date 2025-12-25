const testimonialImages = [
  "https://i.imgur.com/LonowUG.png",
  "https://i.imgur.com/WFsovgf.png",
  "https://i.imgur.com/6RhikdJ.png",
  "https://i.imgur.com/zJSFqGL.png",
  "https://i.imgur.com/qFHVtww.png",
  "https://i.imgur.com/3UXs1iH.png",
  "https://i.imgur.com/iLXFN0Q.png",
  "https://i.imgur.com/IedJDIj.png",
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          O que estão falando sobre o material?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonialImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={image} 
                alt={`Depoimento ${index + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
