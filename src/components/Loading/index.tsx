import React, { FC } from 'react';
import loadAnimation from '../../assets/load.json'

import { Wrapper, LoadAnimation } from './styles'; 

const Loading: FC = () => {
  return (
    <Wrapper>
      <LoadAnimation source={loadAnimation} autoPlay loop />
    </Wrapper>
  )
};

export default Loading;
