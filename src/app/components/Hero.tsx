import { ReviewWidget } from "./ReviewWidget";

const Hero = () => {
  return (
    <header className="px-6 sm:px-12 md:px-[72px] md:py-20 py-8 bg-gray-50 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Section (Text & Button) */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl text-[#04004D] md:text-5xl font-bold leading-tight">
            Empowering Your Future Abroad with <span className="text-[#00C389]">Care2 Training Consultancy</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            We specialize in student visa assistance, study abroad programs, and work placement opportunities. Let us guide you toward achieving your dreams!
          </p>
          <button
            className="bg-[#00C389] text-white font-bold hover:bg-teal-500 px-6 sm:px-8 py-3 rounded-full transition-transform transform hover:scale-105 focus:ring-4 focus:ring-teal-300"
            aria-label="Get in Touch with Care2 Training Consultancy"
          >
            Get in Touch
          </button>
        </div>

        {/* Right Section (Review Widget) */}
        <div className="flex justify-center items-center">
          <ReviewWidget />
        </div>
      </div>

      {/* Decorative SVG Background */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 640 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#00C389"
            fillOpacity="0.1"
            d="M0,192L1440,320L1440,320L0,320Z"
          />
        </svg>
      </div>
    </header>
  );
};

export default Hero;
