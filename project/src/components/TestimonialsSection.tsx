import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">💬 Depoimentos Reais</h2>
        
        <div className="flex flex-wrap justify-center gap-5">
          <div className="bg-blue-600 rounded-lg p-2.5 flex-1 min-w-[300px] max-w-[320px]">
            <iframe 
              src="https://drive.google.com/file/d/17akzX6HBQQl8vsDjOHsjnfZRUcC4kaJM/preview" 
              width="100%" 
              height="250" 
              allow="autoplay" 
              className="rounded-lg border-none"
              title="Depoimento 1"
            />
          </div>

          <div className="bg-blue-600 rounded-lg p-2.5 flex-1 min-w-[300px] max-w-[320px]">
            <iframe 
              src="https://drive.google.com/file/d/1yjJbOQ23xvgTAe8QtgLn7F9YGWVTS2rH/preview" 
              width="100%" 
              height="250" 
              allow="autoplay" 
              className="rounded-lg border-none"
              title="Depoimento 2"
            />
          </div>

          <div className="bg-blue-600 rounded-lg p-2.5 flex-1 min-w-[300px] max-w-[320px]">
            <iframe 
              src="https://drive.google.com/file/d/168SDa0h8gJGrDqzJw5ggqA8tYQhQqhLF/preview" 
              width="100%" 
              height="250" 
              allow="autoplay" 
              className="rounded-lg border-none"
              title="Depoimento 3"
            />
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-lg font-semibold">
            ⭐⭐⭐⭐⭐ — Mais de 4.907 técnicos já usam!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;