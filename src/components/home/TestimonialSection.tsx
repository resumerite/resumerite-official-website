
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    testimonial: "ResumeRite helped me tailor my resume to each job application. I landed 3 interviews in my first week using it!",
    stars: 5,
    image: "bg-resumeRite-200"
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    testimonial: "The ATS optimization tool is a game-changer. I went from zero callbacks to multiple interviews after using ResumeRite.",
    stars: 5,
    image: "bg-resumeRite-300"
  },
  {
    name: "Priya Patel",
    role: "Data Analyst",
    testimonial: "I was skeptical at first, but the job description matching feature helped me understand exactly what employers were looking for.",
    stars: 5,
    image: "bg-resumeRite-400"
  }
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-resumeRite-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Success Stories</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join thousands of job seekers who've found success with ResumeRite.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className={`h-12 w-12 rounded-full ${testimonial.image} mr-3 flex items-center justify-center text-white font-medium`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm opacity-80">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="h-6 w-6 opacity-60" />
              </div>
              
              <p className="mb-4 italic opacity-90">"{testimonial.testimonial}"</p>
              
              <div className="flex">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block rounded-lg bg-white/10 backdrop-blur-sm px-4 py-2 text-sm">
            <span className="opacity-80">Trusted by</span>{" "}
            <span className="font-bold">10,000+</span>{" "}
            <span className="opacity-80">job seekers worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
