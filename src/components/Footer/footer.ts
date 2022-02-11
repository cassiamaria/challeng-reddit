import styled from "styled-components";

export const FooterContainer = styled.footer`
  max-width: 1160px;
  margin: 0.5rem auto;
  
  background-color: ${ (theme) => theme.theme.colors.background };
  height: 70px;
  display: flex;
  flex-direction: column;
  position: sticky;
  bottom: 0px;
  -webkit-box-pack: end;
  justify-content: center;

  @media (min-width: 425px) {
    padding: 0 1rem;
  }

  button {
    width: 100%;
    height: 48px;
    border-radius: 8px;

    background-color: ${ props => props.theme.colors.purple };
    color: #FFF;
    font-size: 20px;
    font-weight: 600;

    cursor: pointer;
    border: none;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
