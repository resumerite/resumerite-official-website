
import Header from '@/components/shared/Header';
import { ResumeForm } from '@/components/resume/ResumeForm';
import { ResumePreview } from '@/components/resume/ResumePreview';

const ResumeBuilder = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Build Your Perfect Resume</h1>
          <p className="text-gray-600 mt-2">Fill out the form below to create an ATS-optimized resume that stands out.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ResumeForm />
          <ResumePreview />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
