
import React from 'react';
import FeatureCard from './FeatureCard';
import { Layout, Layers, Palette, Zap, Shield, LineChart } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: Layout,
      title: 'Responsive Design',
      description: 'Layouts that adapt perfectly to any device, from mobile to desktop.'
    },
    {
      icon: Layers,
      title: 'Component-Based',
      description: 'Modular architecture allowing for flexible and maintainable code.'
    },
    {
      icon: Palette,
      title: 'Beautiful Aesthetics',
      description: 'Elegant design system with harmonious colors and typography.'
    },
    {
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Built with performance in mind for lightning-fast experiences.'
    },
    {
      icon: Shield,
      title: 'Secure Foundation',
      description: 'Follows best practices for creating secure and robust applications.'
    },
    {
      icon: LineChart,
      title: 'Analytics Ready',
      description: 'Prepared for easy integration with analytics tools of your choice.'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4 animate-fade-in">Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Everything you need to build exceptional experiences, carefully crafted to save you time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
