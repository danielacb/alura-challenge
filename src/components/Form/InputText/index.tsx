import * as S from './styles';

type InputTextProps = {
  name: string;
  id?: string;
  placeholder: string;
};

const InputText: React.FC<InputTextProps> = ({ name, id, placeholder }) => {
  return <S.Input type="text" name={name} id={id ? id : name} placeholder={placeholder} />;
};

export default InputText;
