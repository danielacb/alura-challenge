import Author from 'components/Author';
import { FaComment, FaHeart } from 'react-icons/fa';

import * as S from './styles';

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  language: string;
  color: string;
  code: string;
};

type CodeCardProps = {
  project: ProjectProps;
};

const CodeCard: React.FC<CodeCardProps> = ({ project }) => {
  return (
    <S.Container>
      <S.CodeContainer color={project.color}>
        <S.CodeBlock>{project.code}</S.CodeBlock>
        <S.DotsContainer>
          <S.Dots />
        </S.DotsContainer>
      </S.CodeContainer>
      <S.CardContent>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <S.CardActions>
          <span>
            <FaComment size="24px" /> 9
          </span>
          <span>
            <FaHeart size="24px" /> 9
          </span>
          <Author size="small" />
        </S.CardActions>
      </S.CardContent>
    </S.Container>
  );
};

export default CodeCard;
