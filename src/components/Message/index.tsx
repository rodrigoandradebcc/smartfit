import { Container } from './styles';
import { FiX } from "react-icons/fi";

interface MessageProps {
  message: string;
  setError(value: boolean): void;
}

function Message({ message, setError }: MessageProps) {
  return (
    <Container>
      <p>{message}</p>
      <FiX onClick={() => setError(false)} />
    </Container>
  );
};

export default Message;
