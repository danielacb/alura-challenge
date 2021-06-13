import { ReactNode } from 'react';

import * as S from './styles';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ type, variant, children, disabled, onClick }) => {
  return (
    <S.Button
      type={type ? type : 'button'}
      aria-disabled={disabled}
      variant={variant ? variant : 'primary'}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};

export default Button;
