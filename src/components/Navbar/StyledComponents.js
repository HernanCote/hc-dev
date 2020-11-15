import styled from 'styled-components';

const Root = styled.nav`
  min-height: ${({ theme }) => theme.heights.navbar};
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: ${({ theme }) => theme.colors.navBackground};
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  padding-left: 10rem;
  position: relative;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-family: 'Lobster', cursive;
  font-weight: lighter;
`;

export {
  Logo,
  NavItem,
  NavItems,
  Root,
};
