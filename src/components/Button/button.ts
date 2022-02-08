import styled from "styled-components";

type ButtonProps = {
  isActive: boolean;
};

export const ButtonPage = styled.button<ButtonProps>`
  width: 200px;
  height: 48px;
  border-radius: 0.5rem;

  border: none;
  cursor: pointer;

  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;

  background-color: ${({ isActive }) => isActive ? "#6324C6" : "#A7B0BE"};
  color: #FFF;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

`;