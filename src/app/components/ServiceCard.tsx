import { type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
    title: string
    description: string
    icon: LucideIcon
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
    return (
        <div className="border-2 border-emerald-500 p-8 rounded-lg">
            <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="w-12 h-12 text-[#00C389]" />
                </div>
                <h3 className="text-xl font-bold text-[#04004D]">{title}</h3>
            </div>
            <div className="mb-4">
                <p className="text-gray-600">{description}</p>
            </div>
            <div>
                <button className="w-full py-2 px-4 border border-emerald-500 text-[#04004D] rounded-md hover:bg-blue-100">
                    Learn More
                </button>
            </div>
        </div>
    )
}
