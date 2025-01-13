import { Check } from 'lucide-react'

interface FeatureHighlightProps {
    text: string
}

export function FeatureHighlight({ text }: FeatureHighlightProps) {
    return (
        <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Check className="w-10 h-10 text-emerald-500" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-navy-900">
                {text}
            </h3>
        </div>
    )
}

