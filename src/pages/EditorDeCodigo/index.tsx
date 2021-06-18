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
  title: HTMLInputElement;
  description: HTMLTextAreaElement;
  language: HTMLSelectElement;
  color: HTMLInputElement;
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
      formElements.title.value,
      formElements.description.value,
      formElements.language.value,
      formElements.color.value,
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
          <h6>Seu projeto</h6>
          <InputText placeholder="Nome do seu projeto" name="title" />
          <Textarea placeholder="Descrição do seu projeto" name="description" rows={3} />
          <h6>Personalização</h6>
          <Select
            name="language"
            options={languages}
            placeholder="Selecione a linguagem"
            setValue={setLanguage}
          />
          <ColorPicker name="color" color={bgCodeColor} setColor={setbgCodeColor} />
          <Button variant="primary" type="submit">
            Salvar projeto
          </Button>
        </form>
      </S.Column>
    </S.Container>
  );
};

export default EditorDeCodigo;
