interface BulletPointProps {
    text: string
  }
  
  export function BulletPoint({ text }: BulletPointProps) {
    return (
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <span className="text-gray-600">{text}</span>
      </div>
    )
  }
  
  