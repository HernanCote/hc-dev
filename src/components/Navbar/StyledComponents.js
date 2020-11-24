import styled from 'styled-components';

import { getMediaMinWidth } from '../../utils';

const Root = styled.nav`
  position: sticky;
  top: -1px;
  z-index: 1000;
  min-height: ${({ theme }) => theme.heights.navbar};
  display: flex;
  flex-direction: column;
  padding: 0 0 2rem 0;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.navBackground};

  ${getMediaMinWidth('lg')} {
    flex-direction: row;
    padding: 1rem 10rem;
  }

`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 100%;

  ${getMediaMinWidth('lg')} {
    width: 50rem;
    justify-content: flex-end;
  }
`;

const NavItem = styled.li`
  position: relative;

  ${getMediaMinWidth('lg')} {
    padding-left: 10rem;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  padding: 2rem;
  font-family: 'Lobster', cursive;
  font-weight: lighter;

  ${getMediaMinWidth('lg')} {
    padding: 0;
  }
`;

export {
  Logo,
  NavItem,
  NavItems,
  Root,
};
