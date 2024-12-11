import { CheckCircle } from 'lucide-react';
import { JoinButton } from './JoinButton';

interface TopicsListProps {
  onJoinClick: () => void;
}

export function TopicsList({ onJoinClick }: TopicsListProps) {
  const topics = [
    'What is Digital Marketing?',
    'How digital marketing works?',
    'How to be successful in Digital Marketing?',
    'The right mindset',
    'The Plan of action'
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white mb-4 text-center">Topics we cover:</h3>
        <ul className="space-y-2 max-w-xl mx-auto">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-200">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
        <div className="pt-6 flex justify-center">
          <JoinButton onClick={onJoinClick} />
        </div>
      </div>
    </div>
  );
}