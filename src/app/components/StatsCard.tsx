interface StatsCardProps {
    number: string
    label: string
  }
  
  export function StatsCard({ number, label }: StatsCardProps) {
    return (
      <div className="text-center">
        <div className="text-5xl font-bold text-emerald-500 mb-2">{number}</div>
        <div className="text-gray-600">{label}</div>
      </div>
    )
  }
  
  