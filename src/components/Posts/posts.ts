import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.6rem 0 0.6rem 0.6rem;
  border-top: 1px solid ${ (theme) => theme.theme.colors.line };

  & + PostContainer:hover {
    border-bottom: 0;
  }
`;

export const ContentLeft = styled.div`
  width: 77px;
  height: 77px;
  border-radius: 0.5rem;
  background-color: ${ (theme) => theme.theme.colors.purple };;

  p {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 2px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
  }

  @media (max-width: 960px) {
    display: none;
  }
`
export const ContentRight = styled.div`
  height: 77px;
  text-align: left;
  width: 90%;
  
  a, h2 {
    height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${ (theme) => theme.theme.colors.title };
  }

  p {
    padding-bottom: 0.65rem;
    color: ${ (theme) => theme.theme.colors.title };

    span {
      color: ${ (theme) => theme.theme.colors.purple };;
      font-weight: 700;
    }
  }

  a {
    text-decoration: none;
    color: #9766e6;
    font-weight: 700;
    transition: filter 0.2s;

    &:hover {
      color: #6324C6;
    }
  }
`
