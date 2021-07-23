import React, { FC } from 'react';

import { Container, Title, SubTitle, Image, Button, ArrowIcon, Content } from './styles'

const Welcome: FC = () => {
  return (
    <Container>
      <Content>
        <Title>
          Gerencie {'\n'} 
          suas plantas de {'\n'}
          forma fácil
        </Title>

        <Image />

        <SubTitle>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </SubTitle>

        <Button activeOpacity={0.8}>
          <ArrowIcon />
        </Button>
      </Content>
    </Container>
  )
};

export {Welcome};
