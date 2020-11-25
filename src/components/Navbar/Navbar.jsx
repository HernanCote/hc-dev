import React from 'react';
import { Link as BaseLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import {
  Logo,
  NavItem,
  NavItems,
  Root,
  Line,
} from './StyledComponents';

const Link = styled(BaseLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <Root>
      <Logo>
        <Link to="/">
          Hernán Cote
        </Link>
      </Logo>
      <NavItems>
        <NavItem>
          <Link to="/">About Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === '/' ? '50%' : 0 }}
          />
        </NavItem>
        <NavItem>
          <Link to="/my-work">My Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === '/my-work' ? '50%' : 0 }}
          />
        </NavItem>
        <NavItem>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === '/contact' ? '50%' : 0 }}
          />
        </NavItem>
      </NavItems>
    </Root>
  );
};

export default Navbar;
