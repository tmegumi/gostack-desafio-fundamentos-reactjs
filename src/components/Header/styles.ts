import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

interface NavLinkProps {
  $isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavLink = styled(Link)<NavLinkProps>`
  border-bottom: ${({ $isActive }) =>
    $isActive ? '2px solid #FF872C' : 'none'};
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0.8')};
  padding-bottom: 10px;
  transition: opacity 0.2s;

  & + a {
    margin-left: 32px;
  }

  &:hover {
    opacity: 1;
  }
`;
