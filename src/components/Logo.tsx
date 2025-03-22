
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="relative size-8">
        <div className="absolute inset-0 bg-primary rounded-md animate-fade-in" />
        <div className="absolute inset-[3px] bg-background rounded-sm animate-fade-in animation-delay-200" />
      </div>
      <span className="font-medium tracking-tight text-xl animate-slide-up">Starter</span>
    </div>
  );
};

export default Logo;
