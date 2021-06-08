import { ReactNode } from 'react';

import * as S from './styles';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ type, variant, children, disabled }) => {
  return (
    <S.Button
      type={type ? type : 'button'}
      aria-disabled={disabled}
      variant={variant ? variant : 'primary'}
    >
      {children}
    </S.Button>
  );
};

export default Button;
