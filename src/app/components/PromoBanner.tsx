import Image from 'next/image';
import img from '../../assets/discount.png';

const PromoBanner = () => {
  return (
    <section className="px-6 sm:px-12 md:px-[72px] py-8">
      <div className="relative bg-purple-700 rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1400')] opacity-10" />
        </div>

        {/* Main Content */}
        <div className="relative px-8 py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Right Image */}
          <div className="relative md:order-last w-full max-w-[400px]">
            <Image
              src={img}
              alt="Training collaboration illustration"
              width={400}
              height={400}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          {/* Left Content */}
          <div className="max-w-2xl space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Transform Your Skills!{' '}
              <span className="text-yellow-400">50% Off</span> for New Members
            </h2>
            <p className="text-lg text-white/90">
              Unlock your potential with Care2 Training Consultancy. Sign up now to experience tailored training programs designed to help you achieve your goals.
            </p>
            <button className="bg-emerald-500 text-white font-semibold hover:bg-teal-500 px-8 py-3 rounded-full transition-colors">
              Get Your Free Consultation
            </button>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
