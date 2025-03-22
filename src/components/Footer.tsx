
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              A minimalist foundation for your next exceptional project.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium">Product</h3>
              {['Features', 'Pricing', 'Documentation'].map(item => (
                <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium">Company</h3>
              {['About', 'Blog', 'Careers'].map(item => (
                <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium">Legal</h3>
              {['Privacy', 'Terms', 'Security'].map(item => (
                <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Starter. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {['Twitter', 'GitHub', 'LinkedIn'].map(platform => (
              <a 
                key={platform} 
                href="#" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
