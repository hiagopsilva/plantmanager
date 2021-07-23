import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { Confirmation } from '../pages/Confirmation';
import { UserIdentification } from '../pages/UserIdentification';
import colors from '../styles/colors';

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <StackRoutes.Navigator headerMode="none" screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}>
      <StackRoutes.Screen
        name="Welcome" 
        component={Welcome}
      />
      <StackRoutes.Screen
        name="UserIdentification" 
        component={UserIdentification}
      />
      <StackRoutes.Screen
        name="Confirmation" 
        component={Confirmation}
      />
    </StackRoutes.Navigator>
  );
}

export default AppRoutes;