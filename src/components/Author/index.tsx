import * as S from './styles';

type AuthorProps = {
  size?: 'medium' | 'small';
};

const Author: React.FC<AuthorProps> = ({ size }) => {
  return (
    <S.Container size={size ? size : 'medium'}>
      <S.ProfilePicture>
        <img src="/profile-picture.jpg" alt="Foto de perfil do autor" />
      </S.ProfilePicture>
      <span>Harry</span>
    </S.Container>
  );
};

export default Author;
