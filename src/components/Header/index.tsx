import React, { FC, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Wrapper, Content, Greeting, UserName, Image } from './styles'; 
import image from '../../assets/image.png'

const Header: FC = () => {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    const loadStorageUserName = async () => {
      const user = await AsyncStorage.getItem('@plantmanager:user')

      setUserName(user || '')
    }

    loadStorageUserName();
  },[]);
  return (
    <Wrapper>
      <Content>
        <Greeting>Olá</Greeting>
        <UserName>{userName}</UserName>
      </Content>

      <Image source={image} />
    </Wrapper>
  )
};

export { Header };
