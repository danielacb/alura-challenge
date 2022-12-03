import { NavLink } from 'react-router-dom';
import { FaCode, FaUsers } from 'react-icons/fa';

import * as S from './styles';

const Menu: React.FC = () => {
  return (
    <S.Container>
      <S.MenuItem>
        <NavLink exact to="/" activeClassName="active">
          <S.Icon>
            <FaCode size="16px" />
          </S.Icon>
          Code Editor
        </NavLink>
      </S.MenuItem>
      <S.MenuItem>
        <NavLink to="/community" activeClassName="active">
          <S.Icon>
            <FaUsers size="16px" />
          </S.Icon>
          Community
        </NavLink>
      </S.MenuItem>
    </S.Container>
  );
};

export default Menu;
