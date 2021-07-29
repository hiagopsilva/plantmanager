import React, { FC, useEffect, useState } from 'react';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import api from '../../services/api';

import { Wrapper, Content, Title, SubTitle, WrapperList, EnvironmentList } from './styles'; 

type EnvironmentProps = {
  key: string;
  title: string
}

const PlantSelect: FC = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);

  useEffect(() => {
     const fetchEnvironment = async () => {
      const { data } = await api.get('plants_environments')

      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data
      ]);
    }

    fetchEnvironment()
  },[]);
  return (
    <Wrapper>
      <Content>
        <Header />
        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </Content>

    <WrapperList>
      <EnvironmentList 
        data={environments}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <EnvironmentButton title={item.title} />
        )}
      />  
    </WrapperList>
    </Wrapper>
  )
};

export { PlantSelect };
