import { PricingCard } from "./PricingCard";

const PricingSection = () => {
  const plans = [
    {
      id: 1, // Unique ID for each plan
      title: "Individuals",
      price: "120",
      features: [
        "24x7 Premium Support",
        "Site Optimization",
        "Monthly Report",
        "No Minimum Term",
      ],
    },
    {
      id: 2, // Unique ID for each plan
      title: "Professionals",
      price: "210",
      features: [
        "24x7 Premium Support",
        "Site Optimization",
        "Monthly Report",
        "Priority Assistance",
      ],
      isPopular: true, // Mark the plan as "Popular"
    },
    {
      id: 3, // Unique ID for each plan
      title: "Companies",
      price: "350",
      features: [
        "24x7 Premium Support",
        "Advanced Site Optimization",
        "Monthly Report",
        "Dedicated Account Manager",
      ],
    },
  ];

  return (
    <section className="md:py-16 py-8 px-6 sm:px-12 md:px-[72px] text-[#04004D]">
      {/* Section Header */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-emerald-500 text-lg font-bold mb-4">
          PLANS AND PRICING
        </h2>
        <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 leading-tight max-w-4xl">
          Transparent Pricing, No Surprises
        </p>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          Choose a plan that fits your needs. No credit card required to get
          started.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PricingCard
            key={plan.id} // Use unique `id` for each plan
            title={plan.title}
            price={plan.price}
            features={plan.features}
            isPopular={plan.isPopular}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
