import React, { FC, useState, useEffect } from 'react';
import { formatDistance } from 'date-fns';

import waterDrop from '../../assets/waterdrop.png'
import { loadPlant, PlantProps } from '../../Libs/storage';
import { 
  Wrapper, 
  HeaderStyled, 
  WrapperSpotLight,
  Image,
  SpotlightText,
  WrapperPlants,
  PlantsTitle,
  PlantsList
} from './styles'; 
import { pt } from 'date-fns/locale';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import Loading from '../../components/Loading';

type Props = {}

const MyPlants: FC<Props> = () => {
  const [loading, setLoading] = useState(true);
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [nextWatered, setNextWatered] = useState('');

  useEffect(() => {
    const loadStorageData = async () => {
      const plantsStoraged = await loadPlant()

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWatered(
        `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`
      )

      setMyPlants(plantsStoraged)
      setLoading(false)
    }
    loadStorageData()
  },[]);

  if (loading) 
  return <Loading />

  return (
    <Wrapper>
      <HeaderStyled />

      <WrapperSpotLight>
        <Image source={waterDrop} />

        <SpotlightText>
          {nextWatered}
        </SpotlightText>
      </WrapperSpotLight>

      <WrapperPlants>
        <PlantsTitle>
          Próximas regadas
        </PlantsTitle>

        <PlantsList 
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <PlantCardSecondary data={item} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1}}
        />
      </WrapperPlants>
    </Wrapper>
  )
};

export { MyPlants };
