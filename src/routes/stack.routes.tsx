import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { Confirmation } from '../pages/Confirmation';
import { UserIdentification } from '../pages/UserIdentification';
import { PlantSelect } from '../pages/PlantSelect';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';

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

      <StackRoutes.Screen
        name="PlantSelect" 
        component={PlantSelect}
      />

      <StackRoutes.Screen
        name="PlantSave" 
        component={PlantSave}
      />

      <StackRoutes.Screen
        name="MyPlants" 
        component={MyPlants}
      />
    </StackRoutes.Navigator>
  );
}

export default AppRoutes;