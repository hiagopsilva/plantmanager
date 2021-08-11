import { Feather } from '@expo/vector-icons';
import React, { FC } from 'react';
import { Animated, View } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../../styles/colors';

import { 
  Wrapper, 
  Text, 
  Image, 
  WrapperDetails, 
  TextTimeLabel, 
  TextTime,
  ButtonRemove
} from './styles'; 

interface Props extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  }
  handleRemove: () => void;
}

const PlantCardSecondary: FC<Props> = ({data, handleRemove, ...rest}) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <ButtonRemove onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </ButtonRemove>
          </View>
        </Animated.View>
      )}
    >
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
    </Swipeable>

  )
};

export { PlantCardSecondary };
