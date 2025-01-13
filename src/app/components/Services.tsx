import { GraduationCap, Briefcase, Globe } from 'lucide-react'
import { ServiceCard } from "./ServiceCard"

export function Services() {
    const services = [
        {
            title: "Student Visa Assistance",
            description: "Expert guidance through the entire student visa process, from documentation to interview preparation. We ensure your academic journey abroad starts smoothly.",
            icon: GraduationCap
        },
        {
            title: "Work Abroad Programs",
            description: "Connect with international employment opportunities and receive comprehensive support for work visas. We help you take the next step in your global career.",
            icon: Briefcase
        },
        {
            title: "Migration Consultancy",
            description: "Professional advice on permanent residency and immigration pathways. We guide you through every step of making your new country feel like home.",
            icon: Globe
        }
    ]

    return (
        <section id="services" className="md:py-16 px-6 sm:px-12 md:px-[72px] py-8 bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#04004D] mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive solutions for your international education and career aspirations
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}

