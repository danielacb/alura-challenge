import Menu from 'components/Menu';
import * as S from './styles';

const EditorDeCodigo: React.FC = () => {
  return (
    <S.Container>
      <S.Column>
        <Menu />
      </S.Column>
      <S.Content>
        <h1>Editor de Código</h1>
      </S.Content>
      <S.Column></S.Column>
    </S.Container>
  );
};

export default EditorDeCodigo;
