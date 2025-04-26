
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="rounded-3xl bg-resumeRite-50 p-8 md:p-12 lg:p-16 overflow-hidden relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-resumeRite-300 blur-3xl"></div>
            <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-resumeRite-400 blur-3xl"></div>
          </div>
          
          <div className="relative grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-resumeRite-100 px-3 py-1 text-sm text-resumeRite-600">
                Limited Time Offer
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Get Started with ResumeRite <span className="resumeRite-gradient-text">Today</span>
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Join thousands of job seekers who are landing interviews with our ATS-optimized resumes.
                Free to get started!
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Create unlimited resumes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Access to 10+ ATS-friendly templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Basic ATS score checking</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-resumeRite-600 hover:bg-resumeRite-700">
                  Coming Soon
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                {/* <Button size="lg" className="bg-resumeRite-600 hover:bg-resumeRite-700">
                  Build Your Resume Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button> */}
                <Button size="lg" variant="outline">
                  <Link to="/pricing" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
                    View Pricing
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative bg-white rounded-xl shadow-xl p-6 border">
              <div className="absolute -top-4 -right-4 bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-medium border border-green-200">
                FREE
              </div>
              <h3 className="text-xl font-semibold mb-4">ResumeRite Starter</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b">
                  <span>Resume Creation</span>
                  <span className="text-green-600">Unlimited</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b">
                  <span>Templates</span>
                  <span>10+</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b">
                  <span>ATS Score Checker</span>
                  <span>Basic</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b">
                  <span>Job Description Matching</span>
                  <span>3 per month</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b">
                  <span>Export Options</span>
                  <span>PDF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
