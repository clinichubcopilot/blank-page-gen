
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 flex flex-col items-center text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 py-1 px-3 bg-primary/5 border border-primary/10 rounded-full mb-6 animate-fade-in">
        <span className="text-xs font-medium">Introducing Starter</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight md:leading-tight lg:leading-tight mb-6 animate-fade-in animation-delay-200">
        A beautiful foundation for your next project
      </h1>
      
      <p className="text-lg text-muted-foreground mb-10 max-w-2xl animate-fade-in animation-delay-300">
        Build something exceptional with our meticulously crafted starter template, designed with precision and attention to detail.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
        <Button size="lg" className="group">
          Get Started 
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
      
      <div className="relative w-full h-[1px] bg-border/60 mt-20 overflow-hidden animate-fade-in animation-delay-500">
        <div className="absolute h-full w-20 bg-primary/20 animate-pulse" style={{ left: '40%' }} />
      </div>
    </section>
  );
};

export default HeroSection;
