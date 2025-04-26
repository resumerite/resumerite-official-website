
import React from 'react';
import { FileText, BarChart2, Search, Layout, Clock, Download } from 'lucide-react';

const features = [
  {
    icon: <FileText className="h-8 w-8 text-resumeRite-600" />,
    title: "Smart Resume Builder",
    description: "Drag & drop interface with real-time previews. Build beautiful resumes without any design skills."
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-resumeRite-600" />,
    title: "ATS Score Checker",
    description: "Know how your resume ranks with real-time ATS compatibility scoring and feedback."
  },
  {
    icon: <Search className="h-8 w-8 text-resumeRite-600" />,
    title: "Job Description Matching",
    description: "Optimize your resume for specific job descriptions with our smart keyword analysis."
  },
  {
    icon: <Layout className="h-8 w-8 text-resumeRite-600" />,
    title: "Professional Templates",
    description: "Choose from dozens of ATS-friendly templates designed by HR professionals."
  },
  {
    icon: <Clock className="h-8 w-8 text-resumeRite-600" />,
    title: "Real-time Feedback",
    description: "Get actionable suggestions to improve your resume's content and structure."
  },
  {
    icon: <Download className="h-8 w-8 text-resumeRite-600" />,
    title: "Multi-format Export",
    description: "Download your resume as PDF, DOCX or share via a professional web link."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-16 bg-resumeRite-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Why Choose ResumeRite</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines beautiful design with powerful technology to create resumes that get results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="resumeRite-card bg-white flex flex-col items-start"
            >
              <div className="mb-4 p-2 bg-resumeRite-100 rounded-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
