import React, { FC } from 'react';
import { Platform } from 'react-native';
import { Button } from '../../components/Button';

import { Container, Content, SmileIcon, Title, SubTitle, Footer } from './styles'; 


const Confirmation: FC = () => {
  return (
    <Container>
      <Content>
        <SmileIcon>😁</SmileIcon>
        <Title>
          Prontinho
        </Title>

        <SubTitle>
          Agora vamos começar a cuidar das 
          suas plantinhas com muito cuidado.
        </SubTitle>

        <Footer>
          <Button title="Confirmar" />
        </Footer>
      </Content>
    </Container>
  )
};

export { Confirmation };
