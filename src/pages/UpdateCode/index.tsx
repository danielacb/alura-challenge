import { useEffect, useState } from 'react';
import { api } from 'services/api';

import EditorDeCodigo from 'pages/CodeEditor';
import { useParams } from 'react-router-dom';

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  language: string;
  color: string;
  code: string;
};

const UpdateCode: React.FC = () => {
  const [project, setProject] = useState<ProjectProps>();
  const { projectId } = useParams<{ projectId: string }>();

  useEffect(() => {
    const getProjects = async () => {
      const { data } = await api.get(`projects/${projectId}`);
      setProject(data);
    };

    getProjects();
  }, [projectId]);

  return <EditorDeCodigo project={project} />;
};

export default UpdateCode;
