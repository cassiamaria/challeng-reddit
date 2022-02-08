import { HeaderContainer, HeaderLeftContent } from "./header";
import Switch from 'react-switch';

export function Header() {
  
  return(
    <HeaderContainer>
      <HeaderLeftContent>
        <h1>REACT<span className="text-yellow">JS</span></h1>
        {/* <Switch 
          onChange={toggleTheme}
          checked={theme.title === 'darkColor'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={20}
          offColor="#9d6"
          onColor={theme.colors.background}
        /> */}
      </HeaderLeftContent>
    </HeaderContainer>
  );

}