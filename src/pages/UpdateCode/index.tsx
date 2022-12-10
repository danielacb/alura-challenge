import EditorDeCodigo from 'pages/CodeEditor';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { ProjectProps } from 'pages/Community';

const UpdateCode: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const { data } = useQuery(
    gql`
      query GetProject($where: ProjectWhereUniqueInput!) {
        project(where: $where) {
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
    `,
    { variables: { where: { id: projectId } } }
  );

  const project = data?.project as ProjectProps;

  return <EditorDeCodigo project={project} />;
};

export default UpdateCode;
