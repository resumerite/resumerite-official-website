
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Briefcase, GraduationCap, Award } from 'lucide-react';

interface ResumeFormData {
  fullName: string;
  email: string;
  phone: string;
  summary: string;
  experience: string;
  education: string;
  skills: string;
  projects: string;
}

export const ResumeForm = () => {
  const form = useForm<ResumeFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      summary: '',
      experience: '',
      education: '',
      skills: '',
      projects: '',
    }
  });

  const onSubmit = (data: ResumeFormData) => {
    console.log(data);
    // TODO: Generate PDF
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6 flex items-center border-b pb-4">
        <FileText className="h-5 w-5 mr-2 text-resumeRite-600" />
        <h2 className="text-xl font-semibold">Resume Information</h2>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 234 567 890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <FileText className="h-5 w-5 mr-2 text-resumeRite-600" />
                <h3 className="text-lg font-medium">Professional Summary</h3>
              </div>
              <FormField
                control={form.control}
                name="summary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Write a brief overview of your professional background</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Brief overview of your professional background..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Briefcase className="h-5 w-5 mr-2 text-resumeRite-600" />
                <h3 className="text-lg font-medium">Work Experience</h3>
              </div>
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>List your work experience with company names, dates, and responsibilities</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Company Name | Position | Date - Date&#10;• Key responsibility or achievement&#10;• Another responsibility or achievement"
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-5 w-5 mr-2 text-resumeRite-600" />
                <h3 className="text-lg font-medium">Education</h3>
              </div>
              <FormField
                control={form.control}
                name="education"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>List your educational background</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="University Name | Degree | Graduation Date&#10;• Relevant courses or achievements&#10;• GPA if applicable"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 mr-2 text-resumeRite-600" />
                <h3 className="text-lg font-medium">Skills</h3>
              </div>
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>List your key skills (separate with commas)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="JavaScript, React, Node.js, Project Management, Communication, Teamwork"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <FileText className="h-5 w-5 mr-2 text-resumeRite-600" />
                <h3 className="text-lg font-medium">Projects</h3>
              </div>
              <FormField
                control={form.control}
                name="projects"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>List any relevant projects</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Project Name | Date&#10;• Description of project and your contribution&#10;• Technologies used or skills demonstrated"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button variant="outline" type="reset">Reset</Button>
            <Button type="submit" className="bg-resumeRite-600 hover:bg-resumeRite-700">Save & Preview</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
