
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileText, CheckCircle, Star } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-resumeRite-50 text-resumeRite-600 px-4 py-1.5 rounded-full mb-6 font-medium text-sm">
          <Star className="h-4 w-4" />
          <span>Next-gen Resume Builder</span>
        </div>
        
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">
          resumerite
        </h1>
        
        <p className="text-xl font-medium text-resumeRite-600 mb-8">
          Build. Score. Get Hired.
        </p>
        
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          Create ATS-optimized resumes that stand out to both algorithms and hiring managers. Our intelligent platform helps you build professional resumes in minutes.
        </p>
        
        <div className="mt-8 mb-12 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-resumeRite-600" />
            <span className="text-gray-700">ATS-optimized templates</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-resumeRite-600" />
            <span className="text-gray-700">Score your resume</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-resumeRite-600" />
            <span className="text-gray-700">Job description matching</span>
          </div>
        </div>
        
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {/* <Button 
            size="lg" 
            className="bg-resumeRite-600 hover:bg-resumeRite-700 text-white px-8"
            onClick={() => navigate('/resume-builder')}
          >
            <FileText className="mr-2 h-5 w-5" />
            Build Your Resume
          </Button> */}
          <Button 
            size="lg" 
            className="bg-resumeRite-600 hover:bg-resumeRite-700 text-white px-8"
            onClick={() => navigate('/')}
          >
            <FileText className="mr-2 h-5 w-5" />
            Coming Soon
          </Button>
          <Button variant="outline" size="lg">
            View Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
