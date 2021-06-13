import { useState } from 'react';

import Author from 'components/Author';
import Menu from 'components/Menu';
import SearchBar from 'components/SearchBar';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

import * as S from './styles';

const Header: React.FC = () => {
  const [menuisOpen, setMenuIsOpen] = useState(false);
  const [searchIsOpen, setSearchOpen] = useState(false);

  return (
    <S.Container>
      <S.Column>
        <S.Logo href="/" />
      </S.Column>

      <S.SearchToggle onClick={() => setSearchOpen(true)}>
        <FaSearch size="24px" />
      </S.SearchToggle>

      <S.Search className={searchIsOpen ? 'open' : ''}>
        <SearchBar />
        <FaTimes size="24px" onClick={() => setSearchOpen(false)} />
      </S.Search>

      <S.Column>
        <Author />
        <S.MenuToggle onClick={() => setMenuIsOpen(!menuisOpen)}>
          {menuisOpen ? <FaTimes size="24px" /> : <FaBars size="24px" />}
        </S.MenuToggle>
      </S.Column>

      <S.Drawer className={menuisOpen ? 'open' : ''} onClick={() => setMenuIsOpen(false)}>
        <Menu />
        <S.Hr />
        <Author />
      </S.Drawer>
    </S.Container>
  );
};

export default Header;
