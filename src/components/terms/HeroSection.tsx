import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Star } from "lucide-react";

export const TermsHeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 bg-resumeRite-50 text-resumeRite-600 px-4 py-1.5 rounded-full mb-6 font-medium text-sm">
          <Star className="h-4 w-4" />
          <span>Next-Gen Resume Builder</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">
            resumerite
        </h1>

        {/* Subheading */}
        <p className="text-xl font-medium text-resumeRite-600 mb-8">
            Build. Score. Get Hired.
        </p>

        {/* Description */}
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          Create professional, ATS-optimized resumes in minutes. Our intelligent platform helps you stand out to both hiring managers and algorithms.
        </p>

        {/* Feature Highlights */}
        <div className="mt-8 mb-12 flex flex-wrap justify-center gap-4">
          {[
            "ATS-optimized templates",
            "Real-time resume scoring",
            "Job description matching",
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-resumeRite-600" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <Button
            size="lg"
            className="bg-resumeRite-600 hover:bg-resumeRite-700 text-white px-8"
            onClick={() => navigate("/")}
          >
            View Pricing
          </Button>
        </div> */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <Button
            size="lg"
            className="bg-resumeRite-600 hover:bg-resumeRite-700 text-white px-8"
            onClick={() => navigate("/")}
          >
            Learn Terms & Conditions
          </Button>
        </div>
      </div>
    </section>
  );
};
