import React, { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Wrapper, Text } from './styles'; 

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean
}

const EnvironmentButton: FC<EnvironmentButtonProps> = ({
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

export { EnvironmentButton };
