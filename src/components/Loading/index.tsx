import { LoaderContainer } from './loading';

import ReactLoading from 'react-loading';

interface LoadingProps {
  type?: any;
  color?: string;
  height?: string;
  width?: string;
}

const Loading = ({ type, color, height, width }: LoadingProps) => (
  <LoaderContainer>
    <ReactLoading 
      type={type} 
      color={color} 
      height={height} 
      width={width}
    />
  </LoaderContainer>
);

export default Loading;
