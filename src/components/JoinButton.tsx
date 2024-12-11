import { ActionButton } from './ActionButton';

interface JoinButtonProps {
  onClick: () => void;
}

export function JoinButton({ onClick }: JoinButtonProps) {
  return (
    <ActionButton onClick={onClick} variant="primary">
      Join WhatsApp Group
    </ActionButton>
  );
}