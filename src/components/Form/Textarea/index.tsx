import { TextareaHTMLAttributes } from 'react';
import * as S from './styles';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<TextareaProps> = ({ ...props }) => {
  return <S.Textarea {...props} />;
};

export default Textarea;
