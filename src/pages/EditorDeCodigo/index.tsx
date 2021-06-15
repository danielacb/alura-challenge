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

interface FormElements extends HTMLFormControlsCollection {
  projectName: HTMLInputElement;
  projectDescription: HTMLTextAreaElement;
  projectLanguage: HTMLSelectElement;
  projectColor: HTMLInputElement;
}

interface ProjectFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

const EditorDeCodigo: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const [bgCodeColor, setbgCodeColor] = useState(themeContext.colors.defaultCodeBgColor);
  const [language, setLanguage] = useState('');
  const [highlight, setHighlight] = useState(false);
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent<ProjectFormElements>) => {
    e.preventDefault();
    const formElements = e.currentTarget.elements;
    console.log(
      formElements.projectName.value,
      formElements.projectDescription.value,
      formElements.projectLanguage.value,
      formElements.projectColor.value,
      code
    );
  };

  return (
    <S.Container>
      <S.Column>
        <Menu />
      </S.Column>
      <S.Content>
        <CodeEditor
          bgColor={bgCodeColor}
          language={language}
          highlight={highlight}
          code={code}
          setCode={setCode}
        />
        <Button variant="secondary" onClick={() => setHighlight(!highlight)}>
          {highlight ? 'Visualizar sem o highlight' : 'Visualizar com o highlight'}
        </Button>
        {highlight && language === '' && <S.Message>Selecione uma linguagem!</S.Message>}
      </S.Content>
      <S.Column>
        <form onSubmit={(e: React.FormEvent<ProjectFormElements>) => handleSubmit(e)}>
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
          <Button variant="primary" type="submit">
            Salvar projeto
          </Button>
        </form>
      </S.Column>
    </S.Container>
  );
};

export default EditorDeCodigo;
