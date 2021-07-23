import React, { FC } from 'react';

import { Container, Title, SubTitle, Image, Button, ButtonText, ArrowIcon } from './styles'

const Welcome: FC = () => {
  return (
    <Container>
      <Title>
        Gerencie {'\n'} 
        suas plantas {'\n'}
        de forma fácil
      </Title>

      <Image />

      <SubTitle>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </SubTitle>

      <Button activeOpacity={0.8}>
        <ButtonText>
         <ArrowIcon />
        </ButtonText>
      </Button>
    </Container>
  )
};

export {Welcome};
