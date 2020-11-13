import styled from 'styled-components';

const Button = styled.button`
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 2px solid ${({ theme }) => theme.colors.shamrock};
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  font-family: 'Inter', sans-serif;

  &:hover {
    background-color: ${({ theme }) => theme.colors.shamrock};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default Button;
