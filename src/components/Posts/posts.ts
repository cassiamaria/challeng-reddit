import styled from "styled-components";

export const PostContainer = styled.div`
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.6rem 0 0.6rem 0.6rem;
  border-top: 1px solid #c6cbd3;

  & + PostContainer:hover {
    border-bottom: 0;
  }
`;

export const ContentLeft = styled.div`
  width: 77px;
  height: 77px;
  border-radius: 0.5rem;
  background-color: #A7B0BE;
`
export const ContentRight = styled.div`
  height: 77px;
  text-align: left;

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    padding-bottom: 0.65rem;

    span {
      color: #6324C6;
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