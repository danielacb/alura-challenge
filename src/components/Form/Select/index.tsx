import * as S from './styles';

type SelectProps = {
  name: string;
  id?: string;
  options: Array<string>;
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Select: React.FC<SelectProps> = ({ name, id, options, placeholder, setValue }) => {
  return (
    <S.Container>
      <S.Select
        name={name}
        id={id ? id : name}
        defaultValue=""
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
