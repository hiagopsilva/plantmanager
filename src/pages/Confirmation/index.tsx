import React, { FC } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '../../components/Button';

import { Container, Content, SmileIcon, Title, SubTitle, Footer } from './styles'; 

type Params = {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string
}

const emojis = {
  hug: '🤗',
  smile: '😁'
}


const Confirmation: FC = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as Params;

  const handleMoveOn = () => {
    navigation.navigate(nextScreen)
  }
  
  return (
    <Container>
      <Content>
        <SmileIcon>{emojis[icon]}</SmileIcon>
        <Title>
          {title}
        </Title>

        <SubTitle>
          {subtitle}
        </SubTitle>

        <Footer>
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  )
};

export { Confirmation };
