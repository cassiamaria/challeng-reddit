import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 94px;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${ (theme) => theme.theme.colors.header };
  color: #FFF;

  h1 {
    flex: 4;
    display: flex;
    justify-content: center;
  }

  .text-yellow {
    color: ${ (theme) => theme.theme.colors.titleHeader };;
  }
`;

export const ButtonThemeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  gap: 8px;
`;