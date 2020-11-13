import styled from 'styled-components';

const Button = styled.button`
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 2px solid #23d997;
  background: transparent;
  color: white;
  transition: all 0.5s ease;

  &:hover {
    background-color: #23d997;
    color: #FFF;
  }
`;

export default Button;
