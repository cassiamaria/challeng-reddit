import { useCallback, useEffect, useState } from "react";

import { Button } from "../Button";
import { Header } from "../Header";
import { Posts } from "../Posts";
import { Footer } from "../Footer";

import { api } from "../../services/api";
import { toast } from "react-hot-toast";

import GlobalStyle  from "../../styles/globalStyle";
import Loading from "../Loading";
import { HomeContainer, HandlePostContainer } from "./home";

const hot = "hot";
const news = "new";
const rising = "rising";

export interface InfosPostProps {
  id: string;
  author: string;
  created_utc: number;
  title: string;
  url: string;
}

interface Post {
  data: Array<InfosPostProps>;
}

export function Home(){
  const [page, setPage] = useState("hot");
  const [post, setPost] = useState<Post[]>([]);
  const [nextPage, setNextPage] = useState("");
  const [nextPageLoading, setNextPageLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const callEndpoint = useCallback(async() => {
    try {
      setIsLoading(true);
      const {data: response} = await api.get(page);

      setPost(response.data.children);
      setNextPage(response.data.after);
    } catch(error) {
      toast.error(`This didn't work!`);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    callEndpoint();
  }, [callEndpoint]);

  const convertTime = (timeDate:number) => {
    const time = new Date(timeDate * 1000).getTime();
    const date = new Date().getTime();
    
    let differenceCalc = date - time;
  
    const days = Math.floor(differenceCalc / 1000 / 60 / 60 / 24);
    differenceCalc -= days * 1000 * 60 * 60 * 24;
  
    const hours = Math.floor(differenceCalc / 1000 / 60 / 60);
    differenceCalc -= hours * 1000 * 60 * 60;
  
    const minutes = Math.floor(differenceCalc / 1000 / 60);
    differenceCalc -= minutes * 1000 * 60;
  
    const handleMessage = {
      days: `Enviado há ${days} dias e ${hours}h por `,
      hours: `Enviado há ${hours}h por `,
    };

    if(days > 0) handleMessage.days;
    
    return handleMessage.hours;
  };

  async function handleMorePosts() {
    try {
      setNextPageLoading(true);
      
      const params = {
        limit: 5, 
        after: nextPage
      };

      const { data: response } = await api.get(page, {params});

      setNextPage(response.data.after);
      setPost((post) => [...post, ...response.data.children]);
    } catch (error) {
      toast.error(`This didn't work!`);
    } finally {
      setNextPageLoading(false);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header/>
      <HomeContainer>
        <Button 
          buttonName="Hot"
          isActive={page === hot ? true : false}
          onClick={() => setPage('hot')}
        />
        <Button 
          buttonName="New"
          isActive={page === news ? true : false}
          onClick={() => setPage('new')}
        />
        <Button 
          buttonName="Rising"
          isActive={page === rising ? true : false}
          onClick={() => setPage('rising')}
        />
      </HomeContainer>

      {isLoading ? (
        <Loading 
          color="#6324C6" 
          type={'bars'} 
          height={'5%'} 
          width={'5%'}
        />
      ) : (
        <>
          {post.map((response: any) => {
            const datas = convertTime(response.data.created_utc);
            return(
              <HandlePostContainer key={response.data.id}>
                <Posts
                  author={response.data.author}
                  created_utc={datas}
                  title={response.data.title}
                  url={response.data.url}  
                />
              </HandlePostContainer>
            );
        })}
        </>
      )}
      <Footer 
        onClick={handleMorePosts}
        nextPageLoading={nextPageLoading}
      />
    </>
  );
}  