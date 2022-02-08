import Loading from "../Loading";
import { FooterContainer } from "./footer";

interface FooterProps {
  onClick: () => void;
  nextPageLoading?: boolean;
}

export function Footer({ onClick, nextPageLoading }: FooterProps){
  return(
    <FooterContainer>
      <button onClick={onClick}>
        {nextPageLoading ? (
          <Loading
            type={'bars'} 
            height={'3%'} 
            width={'3%'}
          />
        ): (
          <>
            + Ver mais
          </>
        )}
      </button>
    </FooterContainer>
  );
}