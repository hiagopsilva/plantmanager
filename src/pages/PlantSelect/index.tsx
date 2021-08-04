import { useNavigation } from '@react-navigation/native';
import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native'

import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import Loading from '../../components/Loading';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import { PlantProps } from '../../Libs/storage';
import api from '../../services/api';
import colors from '../../styles/colors';

import { Wrapper, Content, Title, SubTitle, WrapperList, EnvironmentList, PlantsList, WrapperPlants } from './styles'; 

type EnvironmentProps = {
  key: string;
  title: string
}



const PlantSelect: FC = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation()

  const handleEnvironmentSelected = (environment: string) => {
    setEnvironmentSelected(environment)

    if (environment == 'all')
      return setFilteredPlants(plants)

    const filtered = plants.filter(plant => 
      plant.environments.includes(environment)
    );

    setFilteredPlants(filtered)
  }

  const fetchPlants = async () => {
    const { data } = await api
      .get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`)

    if(!data)
      return setLoading(true)

    if(page > 1) {
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    }else {
      setPlants(data);
      setFilteredPlants(data);
    }
    setLoading(false);
    setLoadingMore(false);
  }

  const handleFetchMore = (distance: number) => {
    if (distance < 1)
      return;

    setLoadingMore(true)
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  }

  const handlePlantSelect = (plant: PlantsProps) => {
    navigation.navigate('PlantSave', { plant })
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
          keyExtractor={(item) => String(item.key)}
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
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => 
            handleFetchMore(distanceFromEnd)
          }
          renderItem={({ item }) => (
            <PlantCardPrimary data={item} onPress={() => handlePlantSelect(item)}/>
          )}
          ListFooterComponent={
            loadingMore
            ? <ActivityIndicator color={colors.gray} />
            : <></>
          }
        />
      </WrapperPlants>
    </Wrapper>
  )
};

export { PlantSelect };
