import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';

import { Container, Content, SmileIcon, Title, SubTitle, Footer } from './styles'; 


const Confirmation: FC = () => {
  const navigation = useNavigation()

  const handleMoveOn = () => {
    navigation.navigate('PlantSelect')
  }
  
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
          <Button title="Confirmar" onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  )
};

export { Confirmation };
