import { PostContainer, ContentLeft, ContentRight, Title } from "./posts";

interface PostProps {
  author: string;
  created_utc?: string;
  title: string;
  url: string;
}

export function Posts({ author, created_utc, title, url}: PostProps){
  return(
    <PostContainer>
      <ContentLeft></ContentLeft>
      <ContentRight>
        <Title>
          <h2>{title}</h2>
        </Title>
        <p>{created_utc} <span>{author}</span> </p>
        <a
          href={url}
          target="_blank"
        >
          {url}
        </a>
      </ContentRight>
  </PostContainer>
  );
}