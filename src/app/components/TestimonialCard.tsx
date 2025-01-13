import Image, { StaticImageData } from "next/image";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
    name: string;
    role: string;
    image: StaticImageData;
    testimonial: string;
    bgColor: string;
    dotPosition: "left" | "right";
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    name,
    role,
    image,
    testimonial,
    dotPosition,
}) => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 items-center lg:items-start">
            {/* Image Section */}
            <div className="relative">
                <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl flex items-center justify-center">
                    <Image
                        src={image}
                        alt={name}
                        className="w-full h-full rounded-3xl object-cover"
                        loading="lazy"
                    />
                    <div className="absolute -top-4 -right-4 bg-emerald-500 rounded-full p-2">
                        <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                </div>

                {/* Decorative Dots */}
                <div
                    className={`absolute ${dotPosition === "left" ? "-left-6 sm:-left-8" : "-right-6 sm:-right-8"
                        } top-1/4`}
                >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 grid grid-cols-4 gap-1">
                        {[...Array(16)].map((_, i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-emerald-500" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1 text-center lg:text-left pt-4 lg:pt-8">
                <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-1">
                        {name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 mb-4 font-medium">{role}</p>
                    {testimonial}
                </p>
            </div>
        </div>
    );
};

export default TestimonialCard;
