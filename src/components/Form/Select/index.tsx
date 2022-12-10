import { SelectHTMLAttributes } from 'react';
import * as S from './styles';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Array<string>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Select: React.FC<SelectProps> = ({
  options,
  defaultValue,
  placeholder,
  value,
  setValue,
  ...props
}) => {
  return (
    <S.Container>
      <S.Select
        {...props}
        value={defaultValue ? options[options.indexOf(String(defaultValue))] : value}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setValue(e.target.value)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, key) => (
          <option key={key} value={option}>
            {option}
          </option>
        ))}
      </S.Select>
    </S.Container>
  );
};

export default Select;
