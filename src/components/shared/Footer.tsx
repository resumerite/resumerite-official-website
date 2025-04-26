import LogoImg from '../../assets/resumerite.svg'
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={LogoImg} className='w-32 bg-transparent mix-blend-multiply' alt='' />
            </div>
            <p className="text-muted-foreground text-sm">
              Build ATS-optimized resumes that stand out to both algorithms and recruiters.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-muted-foreground hover:text-resumeRite-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a> */}
              <a href="#" className="text-muted-foreground hover:text-resumeRite-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-resumeRite-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              {/* <a href="#" className="text-muted-foreground hover:text-resumeRite-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a> */}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-3 text-muted-foreground">Features</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground hover:text-resumeRite-600">Resume Builder</a></li>
              <li><a href="#" className="text-foreground hover:text-resumeRite-600">ATS Score Checker</a></li>
              <li><a href="#" className="text-foreground hover:text-resumeRite-600">Job Description Matcher</a></li>
              <li><a href="#" className="text-foreground hover:text-resumeRite-600">Templates</a></li>
              {/* <li><a href="#" className="text-foreground hover:text-resumeRite-600">Export Options</a></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-3 text-muted-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              {/* <li><a href="#" className="text-foreground hover:text-resumeRite-600">Resume Tips</a></li> */}
              <li><a href="#" className="text-foreground hover:text-resumeRite-600">Career Blog</a></li>
              <li><a href="#" className="text-foreground hover:text-resumeRite-600">Interview Prep</a></li>
              <li><a href="#" className="text-foreground hover:text-resumeRite-600">Job Search Guide</a></li>
              {/* <li><a href="#" className="text-foreground hover:text-resumeRite-600">Tutorials</a></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-3 text-muted-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/aboutus" className="text-foreground hover:text-resumeRite-600">About Us</a></li>
              <li><a href="/pricing" className="text-foreground hover:text-resumeRite-600">Pricing</a></li>
              <li><a href="#" className="text-foreground hover:text-resumeRite-600">Contact</a></li>
              <li><a href="/privacy" className="text-foreground hover:text-resumeRite-600">Privacy Policy</a></li>
              <li><a href="/terms" className="text-foreground hover:text-resumeRite-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} resumerite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
