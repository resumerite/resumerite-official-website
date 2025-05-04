import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { validateEmail } from '@/utils/validation';
import { Bell } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const NotificationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you! We will notify you when we launch.');
      setEmail('');
      setIsLoading(false);
    }, 1500);
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