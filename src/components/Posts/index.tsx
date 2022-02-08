import { PostContainer, ContentLeft, ContentRight } from "./posts";

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
        <h2>{title}</h2>
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