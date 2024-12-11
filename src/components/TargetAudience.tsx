import { Users, Building2, PhoneCall, Clock, Home, Briefcase } from 'lucide-react';
import { JoinButton } from './JoinButton';

interface TargetAudienceProps {
  onJoinClick: () => void;
}

export function TargetAudience({ onJoinClick }: TargetAudienceProps) {
  const audiences = [
    {
      icon: Users,
      text: 'For Students who wanted to learn Digital Marketing',
    },
    {
      icon: Building2,
      text: 'For Business owners to get more sales',
    },
    {
      icon: PhoneCall,
      text: 'For Business owners to get more Leads',
    },
    {
      icon: Clock,
      text: 'For people with a Career Gap',
    },
    {
      icon: Home,
      text: 'For a House Wife to make money online',
    },
    {
      icon: Briefcase,
      text: 'For Freelancers to get more Projects',
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white text-center">
        It's a <span className="text-green-400">NEED FOR YOU</span> 🫵🏻
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {audiences.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-green-500/30 transition-all duration-300"
          >
            <item.icon className="w-6 h-6 text-green-400 flex-shrink-0" />
            <span className="text-gray-200 text-sm">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="pt-6 flex justify-center">
        <JoinButton onClick={onJoinClick} />
      </div>
    </div>
  );
}