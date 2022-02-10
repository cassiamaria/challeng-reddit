import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ButtonThemeContent, HeaderContainer } from "./header";
import Switch from 'react-switch';
interface Props {
  toggleTheme(): void;
}

export function Header({toggleTheme}: Props) {
  const { colors, title } = useContext(ThemeContext);

  return(
    <HeaderContainer>
      <h1>REACT<span className="text-yellow">JS</span></h1>
      <ButtonThemeContent>
        <span>{title === 'dark' ? 'Dark' : 'Light'}</span>
        <Switch 
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={20}
          offColor="#9766e6"
          onColor="#8D8D99"
        />
      </ButtonThemeContent>
    </HeaderContainer>
  );

}