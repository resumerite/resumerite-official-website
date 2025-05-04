/* eslint-disable @typescript-eslint/no-unused-vars */
import AnimatedBackground from '@/components/shared/AnimatedBackground';
import CountdownTimer from '@/components/shared/CountdownTimer';
import NotificationForm from '@/components/shared/NotificationForm';
import SocialLinks from '@/components/shared/SocialLinks';
import { useIsMobile } from '@/hooks/use-mobile';
import React from 'react'
import { Toaster } from 'sonner';

const ComingSoon = () => {

   // Set launch date to 30 days from now
   const launchDate = new Date();
   launchDate.setDate(launchDate.getDate() + 30);
   
   const isMobile = useIsMobile();
 
   return (
     <div className="min-h-screen flex flex-col items-center justify-center py-8 md:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
       <AnimatedBackground />
       
       <div className="w-full max-w-4xl mx-auto z-10 text-center">
         {/* Logo and title */}
         <div className="animate-fade-in-left" style={{ animationDelay: '0.1s' }}>
           <div className="flex items-center justify-center mb-4 md:mb-6">
             {/* <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-dark rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold animate-float">
               resumerite
             </div> */}
           </div>
           
           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-dark mb-3 md:mb-4">
             Coming Soon
           </h1>
         </div>
         
         {/* Subtitle */}
         <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-10 max-w-2xl mx-auto animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
           We're creating something amazing. Stay tuned for our launch!
         </p>
         
         {/* Countdown timer */}
         <div className="mb-8 md:mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
           <CountdownTimer targetDate={launchDate} />
         </div>
         
         {/* Notification form */}
         <div className="mb-6 md:mb-8">
           <h2 className="text-lg md:text-xl font-semibold text-blue-dark mb-3 md:mb-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
             Get notified when we launch
           </h2>
           <div className="flex justify-center">
             <NotificationForm />
           </div>
         </div>
         
         {/* Social links */}
         <SocialLinks />
         
         {/* Footer */}
         <div className="mt-10 md:mt-16 text-xs md:text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '1s' }}>
           <p>&copy; {new Date().getFullYear()} resumerite. All rights reserved.</p>
         </div>
       </div>
       
       <Toaster position="top-center" richColors />
     </div>
   );
}

export default ComingSoon