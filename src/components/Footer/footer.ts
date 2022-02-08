import styled from "styled-components";

export const FooterContainer = styled.header`
  max-width: 1400px;
  margin: 0.5rem auto;
  
  background-color: #fff;

  height: 70px;
  display: flex;
  flex-direction: column;
  position: sticky;
  bottom: 0px;
  -webkit-box-pack: end;
  justify-content: center;

  button {
    width: 100%;
    height: 48px;
    border-radius: 8px;

    background-color: #6324C6;
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
