import Image from 'next/image';
import { Puzzle, Rocket, BarChart2, Megaphone } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import img from '../../assets/some-features.png';

const FeaturesSection = () => {
  const features = [
    {
      icon: Puzzle,
      title: "Personalized Learning Paths",
      description: "We design custom training programs to align with your specific needs and career goals.",
      iconBgColor: "bg-pink-50",
    },
    {
      icon: Rocket,
      title: "Expert Support Team",
      description: "Our experienced mentors and support team are here to guide you every step of the way.",
      iconBgColor: "bg-blue-50",
    },
    {
      icon: BarChart2,
      title: "Data-Driven Progress",
      description: "Track your development with performance analytics to achieve your learning milestones.",
      iconBgColor: "bg-yellow-50",
    },
    {
      icon: Megaphone,
      title: "Comprehensive Resources",
      description: "Access a wide range of resources, including videos, templates, and tools for effective learning.",
      iconBgColor: "bg-green-50",
    },
  ];

  return (
    <section className="px-6 sm:px-12 md:px-[72px] py-8 md:py-16">
      <div className="space-y-6 text-center md:text-left mb-8">
        <h2 className="text-emerald-500 text-lg font-bold mb-6">OUR FEATURES</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 leading-tight">
          Empower Your Growth <br /> With Tailored Training Solutions
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
        {/* Image Section */}
        <div className="space-y-8">
          <Image
            src={img}
            alt="Training and development illustration"
            width={600}
            height={500}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Features Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBgColor={feature.iconBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
