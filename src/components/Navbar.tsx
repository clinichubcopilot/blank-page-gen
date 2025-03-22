
import React from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <header className={cn('w-full py-4 px-6 flex items-center justify-between border-b border-border/40 backdrop-blur-md fixed top-0 z-50', className)}>
      <Logo />
      
      <nav className="hidden md:flex items-center gap-8">
        {['Features', 'About', 'Contact'].map((item, index) => (
          <a 
            key={item} 
            href="#" 
            className="text-sm text-foreground/80 hover:text-foreground transition-colors animate-fade-in"
            style={{ animationDelay: `${index * 100 + 300}ms` }}
          >
            {item}
          </a>
        ))}
      </nav>
      
      <div className="flex items-center gap-4 animate-fade-in animation-delay-500">
        <Button variant="ghost" size="sm" className="hidden md:inline-flex">
          Log in
        </Button>
        <Button size="sm">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
