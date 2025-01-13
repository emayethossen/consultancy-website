import Image from 'next/image'

interface ProcessStepProps {
    number: string
    title: string
    description: string
    imageSrc: string
}

export function ProcessStep({ number, title, description, imageSrc }: ProcessStepProps) {
    return (
        <div className="flex flex-col text-[#04004D] items-start">
            <div className="border-b border-emerald-500 border-b-4 text-lg font-bold mb-4">{number}</div>
            <h3 className="text-2xl font-extrabold text-navy-900 mb-4">{title}</h3>
            <p className="text-gray-600 mb-8">{description}</p>
            <div className="relative w-full aspect-square">
                <div className="absolute inset-0 rounded-full border-8 border-emerald-500">
                    <div className="relative w-full h-full p-8">
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className="object-contain rounded-full"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

