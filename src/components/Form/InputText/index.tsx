import { InputHTMLAttributes } from 'react';
import * as S from './styles';

type InputTextProps = InputHTMLAttributes<HTMLInputElement>;
const InputText: React.FC<InputTextProps> = ({ ...props }) => {
  return <S.Input type="text" {...props} />;
};

export default InputText;
