import React, { FC, useEffect, useState } from 'react';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import Loading from '../../components/Loading';
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
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
  const [loading, setLoading] = useState(true);

  const handleEnvironmentSelected = (environment: string) => {
    setEnvironmentSelected(environment)

    if (environment === 'all')
    return setFilteredPlants(plants)

    const filtered = plants.filter(plant => 
      plant.environments.includes(environment)
    );

    setFilteredPlants(filtered)
  }

  useEffect(() => {
    const fetchEnvironment = async () => {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc')

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
      const { data } = await api.get('plants?_sort=name&_order=asc')
      setPlants(data);
      setLoading(false)
    }

    fetchPlants()
  },[]);

  if (loading) 
    return <Loading />
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
            <EnvironmentButton 
              title={item.title} 
              active={item.key === environmentSelected} 
              onPress={() => handleEnvironmentSelected(item.key)}  
            />
          )}
        />  
      </WrapperList>

      <WrapperPlants>
        <PlantsList 
          data={filteredPlants}
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
