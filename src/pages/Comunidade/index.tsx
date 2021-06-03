import Menu from 'components/Menu';
import * as S from './styles';

const Comunidade: React.FC = () => {
  return (
    <S.Container>
      <S.Column>
        <Menu />
      </S.Column>
      <S.Content>
        <h1>Comunidade</h1>
      </S.Content>
      <S.Column></S.Column>
    </S.Container>
  );
};

export default Comunidade;
