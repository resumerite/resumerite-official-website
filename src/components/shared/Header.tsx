
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LogoImg from '../../assets/logo.png'
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 bg-transparent">
        <img src={LogoImg} className='w-32 bg-transparent' alt='' />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/#features" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Features
          </Link>
          <Link to="/#templates" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Templates
          </Link>
          <Link to="/#testimonials" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Testimonials
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Pricing
          </Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* <Button variant="outline" size="sm" onClick={() => navigate('/login')}>Login</Button> */}
          {/* <Button 
            size="sm" 
            className="bg-resumeRite-600 hover:bg-resumeRite-700"
            onClick={() => navigate('/signup')}
          >
            Sign Up Free
          </Button> */}
          <Button 
            size="sm" 
            className="bg-resumeRite-600 hover:bg-resumeRite-700"
            onClick={() => navigate('/')}
          >
            Coming Soon
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background border-b border-border/40 p-4 animate-fade-in">
          <nav className="flex flex-col gap-4 mb-6">
            <Link to="/#features" className="text-sm font-medium py-2" onClick={toggleMenu}>Features</Link>
            <Link to="/#templates" className="text-sm font-medium py-2" onClick={toggleMenu}>Templates</Link>
            <Link to="/#testimonials" className="text-sm font-medium py-2" onClick={toggleMenu}>Testimonials</Link>
            <Link to="/#pricing" className="text-sm font-medium py-2" onClick={toggleMenu}>Pricing</Link>
          </nav>
          <div className="flex flex-col gap-2">
            <Button variant="outline" onClick={() => { navigate('/login'); toggleMenu(); }}>Login</Button>
            <Button 
              className="bg-resumeRite-600 hover:bg-resumeRite-700" 
              onClick={() => { navigate('/signup'); toggleMenu(); }}
            >
              Sign Up Free
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
