import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  price: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, price, description }) => {
  return (
    <div className="glass-card p-8 rounded-lg transform hover:scale-105 transition-all duration-300 group">
      <Icon className="w-8 h-8 mx-auto mb-4 text-amber-300 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-xl mb-2">{title}</h3>
      <p className="text-amber-300 mb-2">{price}</p>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};