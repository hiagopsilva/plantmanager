import React from 'react';
import AppLoading from 'expo-app-loading'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import * as Notifications from 'expo-notifications'

import Routes from './src/routes';
import { useEffect } from 'react';
import { PlantProps } from './src/Libs/storage';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps
        console.log(data)
      });
    
    return () => subscription.remove();
  },[]);

  if (!fontsLoaded) return <AppLoading />

  return (
    <Routes />
  );
}
