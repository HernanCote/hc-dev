import React from 'react';
import { Link as BaseLink } from 'react-router-dom';
import styled from 'styled-components';

import {
  Logo,
  NavItem,
  NavItems,
  Root,
} from './StyledComponents';

const Link = styled(BaseLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;

const Navbar = () => (
  <Root>
    <Logo>
      <Link to="/">
        Hernán Cote
      </Link>
    </Logo>
    <NavItems>
      <NavItem>
        <Link to="/">About Me</Link>
      </NavItem>
      <NavItem>
        <Link to="/my-work">My Work</Link>
      </NavItem>
      <NavItem>
        <Link to="/contact">Contact</Link>
      </NavItem>
    </NavItems>
  </Root>
);

export default Navbar;
