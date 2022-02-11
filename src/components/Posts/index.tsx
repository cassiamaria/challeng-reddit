import { PostContainer, ContentLeft, ContentRight } from "./posts";

interface PostProps {
  author: string;
  created_utc?: string;
  title?: string;
  url?: string;
  link_flair_text?: string;
}

export function Posts({ author, created_utc, title, url, link_flair_text}: PostProps){
  return(
    <PostContainer>
      <ContentLeft>
        <p>{link_flair_text}</p>
      </ContentLeft>
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