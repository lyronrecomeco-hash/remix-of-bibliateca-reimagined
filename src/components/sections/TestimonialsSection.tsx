const testimonialImages = [
  "https://bibliatecamapeada.com/wp-content/uploads/2024/05/1EED60A6-184C-4D1B-80A0-7A8D12F0E7D2-1-768x768.jpeg",
  "https://bibliatecamapeada.com/wp-content/uploads/2024/05/046DBD25-B8AE-48AF-BB16-5CFE5F7E260A-1-768x768.jpeg",
  "https://bibliatecamapeada.com/wp-content/uploads/2025/04/Feedback-BibliaTeca-6-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2024/01/83F35227-A068-4FC6-9E6F-BF4301BC0CB5-768x768.jpg",
  "https://bibliatecamapeada.com/wp-content/uploads/2024/01/60DB653D-25DC-4E9E-B14A-80FBA94628D2-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2023/12/Feedback-BibliaTeca-1-768x768.jpeg",
  "https://bibliatecamapeada.com/wp-content/uploads/2024/07/Feedback-BibliaTeca-5-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2024/05/Feedback-BibliaTeca-3-1-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2024/05/D646AAEE-5108-44FD-8717-DACD26AC72B1-1-768x768.jpeg",
  "https://bibliatecamapeada.com/wp-content/uploads/2023/11/1-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2024/01/FC77F833-BE94-4B97-B9C1-1CB3F1975D48-768x768.jpeg",
  "https://bibliatecamapeada.com/wp-content/uploads/2024/01/181183FA-5BA0-4CCC-AD1A-6BECD85E1374-768x768.png",
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
