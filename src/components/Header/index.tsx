import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Container, NavLink } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { path } = useRouteMatch();

  const isActiveLink = (to: string): boolean => to === path;

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <NavLink to="/" $isActive={isActiveLink('/')}>
            Listagem
          </NavLink>
          <NavLink to="/import" $isActive={isActiveLink('/import')}>
            Importar
          </NavLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
