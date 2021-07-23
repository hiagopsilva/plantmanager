import React, { FC } from 'react';
import { Wrapper, Text } from './styles'; 

type Props = {}

const Button: FC<Props> = () => {
  return (
    <Wrapper activeOpacity={0.8}>
      <Text>
        Confirmar
      </Text>
    </Wrapper>
  )
};

export {Button}
