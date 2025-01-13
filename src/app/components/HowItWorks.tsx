import { ProcessStep } from "./ProcessSetup";

const HowItWorks = () => {
  const steps = [
    {
      number: "01.",
      title: "Contact Us to Discuss Your Needs",
      description:
        "Reach out to Care2 Training Consultancy to share your goals and training requirements. We are here to tailor solutions just for you.",
      imageSrc: "https://i.ibb.co/2knqsCR/service-1.jpg",
    },
    {
      number: "02.",
      title: "Receive a Customized Training Plan",
      description:
        "Our expert team will design a personalized training program aligned with your objectives, ensuring measurable results.",
      imageSrc: "https://i.ibb.co/6DDHcGx/service-2.jpg",
    },
    {
      number: "03.",
      title: "Achieve Your Goals with Our Support",
      description:
        "Experience high-quality training sessions and support from our experienced trainers, helping you achieve your personal or business goals.",
      imageSrc: "https://i.ibb.co/Lgc7hzg/service-3.jpg",
    },
  ];

  return (
    <section className="md:py-16 py-8 px-6 sm:px-12 md:px-[72px]">
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-emerald-500 text-lg font-bold mb-6">
          <span className="underline">HOW</span> IT WORKS
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl text-[#04004D] font-bold leading-tight max-w-3xl">
          Empowering You with Tailored Training Solutions
        </h3>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            imageSrc={step.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
