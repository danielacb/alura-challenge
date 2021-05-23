import { NavLink } from 'react-router-dom';
import { FaCode, FaUsers } from 'react-icons/fa';

import * as S from './styles';

const Menu: React.FC = () => {
  return (
    <S.Container>
      <S.MenuItem>
        <NavLink exact to="/" activeClassName="active">
          <S.Icon>
            <FaCode size="1rem" />
          </S.Icon>
          Editor de Código
        </NavLink>
      </S.MenuItem>
      <S.MenuItem>
        <NavLink to="/comunidade" activeClassName="active">
          <S.Icon>
            <FaUsers size="1rem" />
          </S.Icon>
          Comunidade
        </NavLink>
      </S.MenuItem>
    </S.Container>
  );
};

export default Menu;
