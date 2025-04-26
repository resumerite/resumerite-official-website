
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const ResumePreview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Resume Preview</DialogTitle>
              </DialogHeader>
              <div className="mt-4 bg-white p-8 rounded shadow">
                {/* Full-size preview content */}
                <div className="text-center text-gray-500">
                  Fill out the form to see your full resume preview
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Button size="sm" className="bg-resumeRite-600 hover:bg-resumeRite-700">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>
      
      <Card className="border rounded-lg">
        <CardContent className="p-4">
          <div className="min-h-[800px] bg-white">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-center">Your Name</h1>
              <div className="flex justify-center gap-4 text-sm mt-2 text-gray-600">
                <span>your.email@example.com</span>
                <span>•</span>
                <span>+1 234 567 890</span>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="text-center text-gray-500 mt-20">
                Fill out the form to see your resume preview here
              </div>
              
              {/* Placeholder sections */}
              <div className="opacity-30">
                <h2 className="text-lg font-semibold border-b border-gray-200 pb-1 mb-2">Summary</h2>
                <div className="h-16 bg-gray-100 rounded animate-pulse"></div>
                
                <h2 className="text-lg font-semibold border-b border-gray-200 pb-1 mb-2 mt-6">Experience</h2>
                <div className="h-32 bg-gray-100 rounded animate-pulse"></div>
                
                <h2 className="text-lg font-semibold border-b border-gray-200 pb-1 mb-2 mt-6">Education</h2>
                <div className="h-20 bg-gray-100 rounded animate-pulse"></div>
                
                <h2 className="text-lg font-semibold border-b border-gray-200 pb-1 mb-2 mt-6">Skills</h2>
                <div className="h-16 bg-gray-100 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
