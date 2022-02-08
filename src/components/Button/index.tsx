import { ButtonPage } from "./button";

interface ButtonProps {
  buttonName: string;
  isActive?: boolean;
  onClick: () => void;
}

export function Button({buttonName, isActive = false, onClick}: ButtonProps){
  return(
    <ButtonPage 
      isActive={isActive}
      onClick={onClick}
    >
      {buttonName}
    </ButtonPage>
  );
}