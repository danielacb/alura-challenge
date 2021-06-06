import * as S from './styles';

type ColorPickerProps = {
  name: string;
  id?: string;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};

const ColorPicker: React.FC<ColorPickerProps> = ({ name, id, color, setColor }) => {
  return (
    <S.ColorInput
      type="color"
      value={color}
      name={name}
      id={id ? id : name}
      onChange={(e) => setColor(e.target.value)}
    />
  );
};

export default ColorPicker;
