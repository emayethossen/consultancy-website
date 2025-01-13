import { Star } from 'lucide-react'

export function RatingBadge() {
    return (
        <div className="bg-[#00C389] rounded-full py-2 px-4 inline-flex flex-col items-center">
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-white" />
                ))}
            </div>
            <div className="text-sm font-bold text-white">
                4.9 out of 5
            </div>
        </div>
    )
}

