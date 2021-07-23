import React, { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Wrapper, Text } from './styles'; 

interface Props extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...rest }: Props) => {
  return (
    <Wrapper activeOpacity={0.8} {...rest}>
      <Text>
        {title}
      </Text>
    </Wrapper>
  )
};

export {Button}
