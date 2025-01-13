import img from "../../assets/client-img-1.jpg";
import img2 from "../../assets/client-img-2.jpg";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Willimes Clark",
      role: "PROJECT MANAGER",
      image: img,
      testimonial:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vel arcu vitae ex tincidunt dictum a id lorem.",
      bgColor: "bg-blue-600",
      dotPosition: "right" as const,
    },
    {
      name: "Jonson Walkar",
      role: "PROJECT MANAGER",
      image: img2,
      testimonial:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vel arcu vitae ex tincidunt dictum a id lorem.",
      bgColor: "bg-yellow-400",
      dotPosition: "left" as const,
    },
  ];

  return (
    <section className="md:py-16 py-8 px-6 sm:px-12 md:px-[72px]">
      {/* Section Heading */}
      <div className="md:mb-16 mb-8 text-center md:text-left">
        <h2 className="text-emerald-500 text-lg font-bold md:mb-6 mb-2">
          CLIENTS REVIEWS
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 leading-tight max-w-lg">
          What Our Awesome Clients Say
        </h3>
      </div>

      {/* Testimonials */}
      <div className="md:space-y-16">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            image={testimonial.image}
            testimonial={testimonial.testimonial}
            bgColor={testimonial.bgColor}
            dotPosition={testimonial.dotPosition}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
