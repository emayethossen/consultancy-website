import Image from 'next/image';
import { BulletPoint } from './BulletPoint';
import img from '../../assets/we-are.jpg';

const BusinessSection = () => {
  return (
    <section className="px-6 sm:px-12 md:px-[72px] md:py-16 py-8">
      {/* First Section: About Care2 Training Consultancy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className='text-center md:text-left'>
            <h2 className="text-emerald-500 text-lg font-bold mb-6">ABOUT US</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#04004D] leading-tight mb-6">
              Empowering Growth Through Personalized Training Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              At Care2 Training Consultancy, we specialize in delivering{" "}
              <span className="underline font-semibold">customized training programs </span> 
               designed to meet the unique needs of businesses and individuals. 
              Our mission is to empower clients with the skills and knowledge they need to succeed.
            </p>
            <div className="space-y-4 font-bold">
              <BulletPoint text="Tailored training programs for businesses and individuals" />
              <BulletPoint text="Expert trainers with real-world experience" />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image
            src={img}
            alt="Training and development illustration"
            width={600}
            height={500}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
