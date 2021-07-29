import React, { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Wrapper, Text } from './styles'; 

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean
}

const EnviromentButton: FC<EnviromentButtonProps> = ({
  title, 
  active = false, 
  ...rest
}) => {
  return (
    <Wrapper active={active} { ...rest }>
      <Text active={active}>{title}</Text>
    </Wrapper>
  )
};

export { EnviromentButton };
