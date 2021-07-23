import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRouter from './stack.routes'

const Routes: FC = () => {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  )
};

export default Routes;
