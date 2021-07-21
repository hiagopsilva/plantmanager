import React, { FC } from 'react';
import { Button } from '../../components/Button';

import { Container, Title, SubTitle, Image } from './styles'

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

      <Button />
    </Container>
  )
};

export {Welcome};
