/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { validateEmail } from '@/utils/validation';
import { Bell } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const NotificationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
  
    setIsLoading(true);
  
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { user_email: email },
        PUBLIC_KEY
      );
  
      if (result.status === 200) {
        toast.success('Email sent! Check your inbox.');
        setEmail('');
      } else {
        toast.error('Something went wrong.');
      }
    } catch (error) {
      toast.error('Failed to send email.');
    }
  
    setIsLoading(false);
  };
  

  return (
    <div className="w-full max-w-md text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
      <form onSubmit={handleSubmit}>
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-3 w-full items-center`}>
          <div className="relative w-full">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 py-6 border-blue-light focus:border-blue-dark bg-white"
              disabled={isLoading}
              required
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-dark opacity-70">
              <Bell size={18} />
            </div>
          </div>
          <Button 
            type="submit" 
            className="bg-blue-dark hover:bg-blue-dark/90 text-white py-6 px-8 w-full sm:w-auto"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Notify Me'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NotificationForm;