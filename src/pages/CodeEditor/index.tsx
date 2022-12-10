import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ApolloError, gql, useMutation } from '@apollo/client';

import InputText from 'components/Form/InputText';
import Textarea from 'components/Form/Textarea';
import Menu from 'components/Menu';
import Select from 'components/Form/Select';
import CodeEditor from 'components/CodeEditor';
import ColorPicker from 'components/Form/ColorPicker';
import Button from 'components/Button';
import languages from 'utils/languages';

import * as S from './styles';
import { ProjectProps } from 'types';

type EditorDeCodigoProps = {
  project?: ProjectProps;
};

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  description: HTMLTextAreaElement;
  language: HTMLSelectElement;
  color: HTMLInputElement;
}

interface ProjectFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

const CodeEditorPage: React.FC<EditorDeCodigoProps> = ({ project }) => {
  const themeContext = useContext(ThemeContext);
  const { push } = useHistory();
  const [bgCodeColor, setbgCodeColor] = useState(themeContext.colors.defaultCodeBgColor);
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('');
  const [highlight, setHighlight] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string | ApolloError>(null);

  useEffect(() => {
    if (project) {
      setLanguage(project.language);
      setCode(project.code);
      setbgCodeColor(project.color.hex);
    }
  }, [project]);

  const [createProject, { error: createProjectError }] = useMutation(gql`
    mutation CreateProject($data: ProjectCreateInput!) {
      createProject(data: $data) {
        id
      }
    }
  `);

  const [publishProject, { error: publishProjectError }] = useMutation(gql`
    mutation PublishProject($where: ProjectWhereUniqueInput!) {
      publishProject(where: $where) {
        id
      }
    }
  `);

  const [updateProject, { error: updateProjectError }] = useMutation(gql`
    mutation UpdateProject($where: ProjectWhereUniqueInput!, $data: ProjectUpdateInput!) {
      updateProject(where: $where, data: $data) {
        id
        title
        description
        code
        language
        color {
          hex
        }
      }
    }
  `);

  const handleSubmit = (e: React.FormEvent<ProjectFormElements>) => {
    e.preventDefault();
    const formElements = e.currentTarget.elements;
    const title = formElements.title.value;
    const description = formElements.description.value;

    const formData = {
      title,
      description,
      language,
      color: {
        hex: bgCodeColor,
      },
      code,
    };

    const submitForm = async () => {
      if (project) {
        updateProject({ variables: { where: { id: project.id }, data: formData } })
          .then(() => updateProjectError && setErrorMessage(updateProjectError))
          .finally(() => push('/community'));
      } else {
        createProject({ variables: { data: formData } })
          .then(({ data }) => {
            data
              ? publishProject({ variables: { where: { id: data.createProject.id } } })
              : createProjectError && setErrorMessage(createProjectError);
          })
          .then(() => publishProjectError && setErrorMessage(publishProjectError));
      }

      setErrorMessage(null);
      setbgCodeColor(themeContext.colors.defaultCodeBgColor);
      setCode('');
      e.currentTarget.reset();
      setLanguage('');
    };

    title === ''
      ? setErrorMessage('Project name is required!')
      : description === ''
      ? setErrorMessage('Project description is required!')
      : language === ''
      ? setErrorMessage('Select a language!')
      : code === ''
      ? setErrorMessage('Write your code!')
      : submitForm();
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
          {`${highlight ? 'Without' : 'With'} highlight`}
        </Button>
        {highlight && language === '' && <S.Message>Select a language!</S.Message>}
      </S.Content>
      <S.Column>
        <form onSubmit={(e: React.FormEvent<ProjectFormElements>) => handleSubmit(e)}>
          <h6>Your project</h6>
          <InputText
            placeholder="Project name"
            name="title"
            defaultValue={project ? project.title : ''}
          />
          <Textarea
            placeholder="Project description"
            name="description"
            rows={3}
            defaultValue={project ? project.description : undefined}
          />
          <h6>Customization</h6>
          <Select
            name="language"
            options={languages}
            placeholder="Select language"
            setValue={setLanguage}
            defaultValue={project ? language : undefined}
            value={language}
          />
          <ColorPicker name="color" color={bgCodeColor} setColor={setbgCodeColor} />
          <Button variant="primary" type="submit">
            Save project
          </Button>
          {errorMessage && <S.Message>{errorMessage}</S.Message>}
        </form>
      </S.Column>
    </S.Container>
  );
};

export default CodeEditorPage;
