import styled from 'styled-components';

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h1};
`;

const H2 = styled.h2`
  font-weight: lighter;
  font-size: ${({ theme }) => theme.fontSizes.h2};
`;

const H3 = styled.h4`
  color: ${({ theme }) => theme.colors.white};
`;

const H4 = styled.h4`
  font-weight: bold;
`;

const Span = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.shamrock};
`;

const A = styled.a`
  font-size: 1.1rem;
`;

const P = styled.p`
  padding: 3rem 0;
  color: #${({ theme }) => theme.colors.lightGray};
  font-size: 1.4rem;
  line-height: 150%;
`;

const Img = styled.img``;

export {
  Img,
  Span,
  H1,
  H2,
  H3,
  H4,
  P,
  A,
};
