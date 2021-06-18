import Author from 'components/Author';
import { FaComment, FaHeart } from 'react-icons/fa';

import * as S from './styles';

const CodeCard: React.FC = () => {
  return (
    <S.Container>
      <S.CodeContainer>
        <S.CodeBlock>
          {`const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key])`}
        </S.CodeBlock>
        <S.DotsContainer>
          <S.Dots />
        </S.DotsContainer>
      </S.CodeContainer>
      <S.CardContent>
        <h2>Título do projeto</h2>
        <p>Essa é a descrição do meu projeto.</p>
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
