import * as S from './styles';

type TextareaProps = {
  name: string;
  id?: string;
  placeholder: string;
  rows?: number;
};

const Textarea: React.FC<TextareaProps> = ({ name, id, placeholder, rows }) => {
  return <S.Textarea name={name} id={id ? id : name} placeholder={placeholder} rows={rows} />;
};

export default Textarea;
