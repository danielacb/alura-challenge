import InputText from 'components/Form/InputText';
import { Textarea } from 'components/Form/Textarea/styles';
import Menu from 'components/Menu';
import Select from 'components/Form/Select';
import CodeEditor from 'components/CodeEditor';

import * as S from './styles';

const EditorDeCodigo: React.FC = () => {
  const languages = ['clojure', 'coffeescript', 'dart', 'django', 'php', 'javascript'];

  return (
    <S.Container>
      <S.Column>
        <Menu />
      </S.Column>
      <S.Content>
        <CodeEditor />
      </S.Content>
      <S.Column>
        <form>
          <h2>Seu projeto</h2>
          <InputText placeholder="Nome do seu projeto" name="projectName" />
          <Textarea placeholder="Descrição do seu projeto" name="projectDescription" rows={3} />
          <h2>Personalização</h2>
          <Select name="projectLanguage" options={languages} placeholder="Select language" />
        </form>
      </S.Column>
    </S.Container>
  );
};

export default EditorDeCodigo;
