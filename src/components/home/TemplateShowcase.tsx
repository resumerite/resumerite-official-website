
import React from 'react';
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const templates = [
  {
    name: "Modern Professional",
    preview: "bg-gradient-to-br from-white to-gray-100",
    category: "Modern",
    popularity: "Popular"
  },
  {
    name: "Clean Minimal",
    preview: "bg-gradient-to-br from-white to-resumeRite-50",
    category: "Simple",
    popularity: null
  },
  {
    name: "Executive Elite",
    preview: "bg-gradient-to-br from-white to-blue-50",
    category: "Executive",
    popularity: null
  },
  {
    name: "Creative Tech",
    preview: "bg-gradient-to-br from-white to-purple-50",
    category: "Creative",
    popularity: "New"
  }
];

const TemplateShowcase = () => {
  return (
    <section id="templates" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Recruiter-Approved Templates</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stand out with modern, ATS-friendly resume templates designed to get you noticed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <div key={index} className="group relative overflow-hidden border rounded-lg bg-background shadow-md transition-all hover:shadow-lg">
              <div className={`h-80 ${template.preview} p-6 flex flex-col`}>
                {/* Simulated resume layout */}
                <div className="h-10 bg-white rounded mb-3 shadow-sm"></div>
                <div className="h-5 bg-white rounded w-1/2 mb-3 shadow-sm"></div>
                <div className="h-4 bg-white rounded w-3/4 mb-1 shadow-sm"></div>
                <div className="h-4 bg-white rounded w-2/3 mb-3 shadow-sm"></div>
                <div className="h-6 bg-white rounded mb-2 shadow-sm"></div>
                <div className="h-3 bg-white rounded mb-1 shadow-sm"></div>
                <div className="h-3 bg-white rounded mb-1 shadow-sm"></div>
                <div className="h-3 bg-white rounded mb-3 shadow-sm"></div>
                <div className="h-6 bg-white rounded mb-2 shadow-sm"></div>
                <div className="h-3 bg-white rounded mb-1 shadow-sm"></div>
                <div className="h-3 bg-white rounded mb-1 shadow-sm"></div>
              </div>
              
              {/* Template info */}
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{template.name}</h3>
                  {template.popularity && (
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      template.popularity === 'Popular' ? 'bg-resumeRite-100 text-resumeRite-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {template.popularity}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{template.category}</p>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-resumeRite-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="secondary" size="sm" className="flex items-center gap-1">
                  <Eye className="h-4 w-4 mr-1" />
                  Preview
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button className="bg-resumeRite-600 hover:bg-resumeRite-700">
            View All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;
