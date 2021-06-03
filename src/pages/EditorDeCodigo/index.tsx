import InputText from 'components/Form/InputText';
import { Textarea } from 'components/Form/Textarea/styles';
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
      <S.Column>
        <h2>Seu projeto</h2>
        <InputText placeholder="Nome do seu projeto" name="projectName" />
        <Textarea placeholder="Descrição do seu projeto" name="projectDescription" rows={3} />
      </S.Column>
    </S.Container>
  );
};

export default EditorDeCodigo;
