import { RatingBadge } from './RatingBadge';
import img from '../../assets/client-img-1.jpg'
import img2 from '../../assets/client-img-2.jpg'
import { TeamMemberCard } from './TeamMemCard';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Thomas Willimes",
      role: "Senior Training Consultant",
      description: "With over 10 years of experience, Thomas specializes in creating impactful training strategies tailored to individual needs.",
      avatarBgColor: "bg-yellow-400",
      imageSrc: img,
    },
    {
      name: "Jessica Jamson",
      role: "Leadership Development Coach",
      description: "Jessica has a proven track record of mentoring professionals to enhance leadership skills and achieve career milestones.",
      avatarBgColor: "bg-blue-500",
      imageSrc: img2,
    },
  ];

  return (
    <section className="md:py-16 py-8 px-6 sm:px-12 md:px-[72px]">
      {/* Section Header */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-center md:items-center gap-6">
        <div className='text-center md:text-left'>
          <h2 className="text-emerald-500 text-lg font-bold mb-6">MEET OUR EXPERT TEAM</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 leading-tight max-w-2xl">
            Committed To Empowering You Through Expert Training
          </h3>
        </div>
        <RatingBadge />
      </div>

      {/* Team Member Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mb-24">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="text-center text-[#04004D] space-y-6">
        <p className="font-bold text-xl">MAKE THE RIGHT CHOICE</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900">
          READY TO ELEVATE YOUR SKILLS? <br /> LET US WORK TOGETHER
        </h2>
        <div>
          <button className="bg-emerald-500 text-white font-semibold hover:bg-teal-500 px-8 py-3 rounded-full transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
