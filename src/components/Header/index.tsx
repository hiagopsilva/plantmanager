import React, { FC } from 'react';

import { Wrapper, Content, Greeting, UserName, Image } from './styles'; 
import image from '../../assets/image.png'

const Header: FC = () => {
  return (
    <Wrapper>
      <Content>
        <Greeting>Olá</Greeting>
        <UserName>Hiago</UserName>
      </Content>

      <Image source={image} />
    </Wrapper>
  )
};

export { Header };
