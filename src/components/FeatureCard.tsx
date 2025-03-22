
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
  delay = 0
}) => {
  return (
    <div 
      className={cn(
        'p-6 rounded-lg border border-border/60 bg-card/30 hover:bg-card/80 transition-colors animate-fade-in', 
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="size-10 flex items-center justify-center rounded-md bg-primary/5 mb-4">
        <Icon className="size-5 text-primary" />
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
