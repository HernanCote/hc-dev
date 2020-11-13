import React from 'react';

import {
  A,
} from '../Foundation';

import {
  Logo,
  NavItem,
  NavItems,
  Root,
} from './StyledComponents';

const Navbar = () => (
  <Root>
    <Logo>
      <A href="#">
        Hernán Cote
      </A>
    </Logo>
    <NavItems>
      <NavItem>
        <A href="#">About Me</A>
      </NavItem>
      <NavItem>
        <A href="#">My Work</A>
      </NavItem>
      <NavItem>
        <A href="#">Contact</A>
      </NavItem>
    </NavItems>
  </Root>
);

export default Navbar;
