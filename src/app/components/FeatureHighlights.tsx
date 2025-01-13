import { FeatureHighlight } from './FeatureHighlight'

const FeatureHighlights = () => {
    const features = [
        "State of the art facility",
        "Superior world class services",
        "Certified consultants."
    ]

    return (
        <div className="px-6 sm:px-12 md:px-[72px] py-8 md:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
                {features.map((feature, index) => (
                    <FeatureHighlight key={index} text={feature} />
                ))}
            </div>
        </div>
    )
}

export default FeatureHighlights
