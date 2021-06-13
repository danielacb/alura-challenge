import { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import InputText from 'components/Form/InputText';
import Textarea from 'components/Form/Textarea';
import Menu from 'components/Menu';
import Select from 'components/Form/Select';
import CodeEditor from 'components/CodeEditor';
import ColorPicker from 'components/Form/ColorPicker';
import Button from 'components/Button';
import languages from 'utils/languages';

import * as S from './styles';

const EditorDeCodigo: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const [bgCodeColor, setbgCodeColor] = useState(themeContext.colors.defaultCodeBgColor);
  const [language, setLanguage] = useState('');
  const [highlight, setHighlight] = useState(false);

  return (
    <S.Container>
      <S.Column>
        <Menu />
      </S.Column>
      <S.Content>
        <CodeEditor bgColor={bgCodeColor} language={language} highlight={highlight} />
        <Button variant="secondary" onClick={() => setHighlight(!highlight)}>
          {highlight ? 'Editar código' : 'Visualizar com o highlight'}
        </Button>
      </S.Content>
      <S.Column>
        <form>
          <h2>Seu projeto</h2>
          <InputText placeholder="Nome do seu projeto" name="projectName" />
          <Textarea placeholder="Descrição do seu projeto" name="projectDescription" rows={3} />
          <h2>Personalização</h2>
          <Select
            name="projectLanguage"
            options={languages}
            placeholder="Select language"
            setValue={setLanguage}
          />
          <ColorPicker name="projectColor" color={bgCodeColor} setColor={setbgCodeColor} />
          <Button variant="primary">Salvar projeto</Button>
        </form>
      </S.Column>
    </S.Container>
  );
};

export default EditorDeCodigo;
