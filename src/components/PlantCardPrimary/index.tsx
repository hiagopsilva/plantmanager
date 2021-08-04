import React, { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Wrapper, Text, Image } from './styles'; 

interface Props extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

const PlantCardPrimary: FC<Props> = ({data, ...rest}) => {
  return (
    <Wrapper {...rest}>
      <Image uri={data.photo} />
      <Text>{data.name}</Text>
    </Wrapper>
  )
};

export default PlantCardPrimary;
