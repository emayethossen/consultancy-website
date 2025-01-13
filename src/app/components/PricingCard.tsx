import { Rocket } from 'lucide-react'

interface PricingCardProps {
    title: string
    price: string
    features: string[]
    isPopular?: boolean
}

export function PricingCard({
    title,
    price,
    features,
    isPopular = false
}: PricingCardProps) {
    return (
        <div className={`relative ${isPopular ? 'bg-[#5800A0] text-white' : 'bg-[#F3F6FA]'} p-6 rounded-lg shadow-lg`}>
            <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto flex items-center justify-center mb-6">
                    <Rocket className={`w-6 h-6 ${isPopular ? 'text-emerald-500' : 'text-purple-400'}`} />
                </div>
                <h3 className={`text-xl font-bold ${isPopular ? 'text-white' : 'text-navy-900'}`}>
                    {title}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-navy-900'}`}>
                        ${price}
                    </span>
                    <span className={`text-sm ${isPopular ? 'text-white/90' : 'text-gray-600'}`}>
                        / month
                    </span>
                </div>
            </div>
            <ul className="space-y-4 mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${isPopular ? 'bg-white' : 'bg-gray-400'}`} />
                        <span className={isPopular ? 'text-white/90' : 'text-gray-600'}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
            <button
                className={`w-full py-2 px-4 rounded-lg ${isPopular
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                    : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                }`}
            >
                Select Now
            </button>
        </div>
    )
}
