import { type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon; // Icon component from Lucide
  title: string; // Title of the feature
  description: string; // Description of the feature
  iconBgColor?: string; // Optional background color for the icon container
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBgColor = "bg-pink-50", // Default background color for the icon container
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
      {/* Icon Container */}
      <div
        className={`w-12 h-12 rounded-full ${iconBgColor} flex items-center justify-center`}
      >
        <Icon className="w-12 h-12 text-navy-900" />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-navy-900">{title}</h3>
      
      {/* Description */}
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
