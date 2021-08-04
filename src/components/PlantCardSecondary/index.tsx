import React, { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { 
  Wrapper, 
  Text, 
  Image, 
  WrapperDetails, 
  TextTimeLabel, 
  TextTime
} from './styles'; 

interface Props extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  }
}

const PlantCardSecondary: FC<Props> = ({data, ...rest}) => {
  return (
    <Wrapper {...rest}>
      <Image uri={data.photo} />
      <Text>{data.name}</Text>
      <WrapperDetails>
        <TextTimeLabel>
          Regar às 
        </TextTimeLabel>
        <TextTime>
          {data.hour}
        </TextTime>
      </WrapperDetails>
    </Wrapper>
  )
};

export { PlantCardSecondary };
