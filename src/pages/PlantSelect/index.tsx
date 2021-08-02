import React, { FC, useEffect, useState } from 'react';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import api from '../../services/api';

import { Wrapper, Content, Title, SubTitle, WrapperList, EnvironmentList, PlantsList, WrapperPlants } from './styles'; 

type EnvironmentProps = {
  key: string;
  title: string
}

type PlantsProps = {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string;
  frequency: {
    times: number;
    repeat_every: string
  }
}

const PlantSelect: FC = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);

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

  useEffect(() => {
    const fetchPlants = async () => {
      const { data } = await api.get('plants')
      setPlants(data);
    }

    fetchPlants()
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

      <WrapperPlants>
        <PlantsList 
          data={plants}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item} />
          )}
        />
      </WrapperPlants>
    </Wrapper>
  )
};

export { PlantSelect };
