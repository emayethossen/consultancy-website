import { Check } from 'lucide-react'

export function WhyUs() {
    const benefits = [
        "98% Visa Success Rate",
        "Dedicated Personal Consultant",
        "Free Initial Consultation",
        "Expert Documentation Support",
        "University & Employment Partners",
        "Post-Landing Assistance"
    ]

    return (
        <section id="why-us" className="py-8 bg-white px-6 sm:px-12 md:px-[72px]">
            <div className="container mx-auto">
                <div className="">
                    <div className="text-center md:text-left mb-12">
                    <h2 className="text-emerald-500 text-lg font-bold mb-6">WHY US</h2>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#04004D] mb-4">
                            Why Choose Care2?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600">
                            We are committed to making your international journey successful
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-6 rounded-lg border shadow-md bg-white transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <Check className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-gray-700 font-medium text-lg sm:text-xl">
                                    {benefit}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
