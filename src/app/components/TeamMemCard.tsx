import Image, { StaticImageData } from "next/image";
import { Facebook } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  avatarBgColor: string;
  imageSrc: StaticImageData;
}

export function TeamMemberCard({
  name,
  role,
  description,
  avatarBgColor,
  imageSrc,
}: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        {/* Avatar Section */}
        <div className={`relative w-36 h-36 sm:w-44 sm:h-44 rounded-full ${avatarBgColor}`}>
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover rounded-full"
          />
        </div>

        {/* Content Section */}
        <div className="text-center sm:text-left flex-1">
          <div className="text-emerald-500 text-lg font-bold mb-1">{role}</div>
          <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2">{name}</h3>
          <p className="text-gray-600 text-sm sm:text-base mb-4">{description}</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Facebook className="w-6 h-6 p-1 rounded-full bg-blue-400" />
            <span className="text-sm sm:text-base">Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
}
