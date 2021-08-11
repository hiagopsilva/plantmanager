import React, { FC, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker'
import { Alert, Platform } from 'react-native';
import { format, isBefore } from 'date-fns';

import waterDrop from '../../assets/waterdrop.png'
import { loadPlant, PlantProps, savePlant } from '../../Libs/storage';
import { 
  Container,
  Wrapper, 
  PlantName, 
  PlantAbout, 
  WrapperController, 
  TipContainer, 
  Image,
  TipText,
  AlertLabel,
  ButtonStyled,
  ImagePlant,
  DateTimePickerText,
  DateTimePickerButton,
  ScrollView
} from './styles'; 

interface Params {
  plant: PlantProps
}

const PlantSave: FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios');

  const navigation = useNavigation()

  const route = useRoute()
  const { plant } = route.params as Params;

  const handleChangeTime = (event: Event, dateTime: Date | undefined) => {
    if (Platform.OS === "android") {
      setShowDatePicker(oldState => !oldState)
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert("Escolha uma hora no futuro! ⏰")
    }

    if (dateTime) setSelectedDateTime(dateTime)
  }

  const handleOpenDatetimePickerForAndroid = () => {
    setShowDatePicker(oldState => !oldState)
  }

  const handleSave = async () => {
    try {
      await savePlant({...plant, dateTimeNotification: selectedDateTime})

      navigation.navigate('Confirmation', {
        title: 'Tudo certo ',
        subtitle: 
          'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants'
      })
    } catch {
      Alert.alert("Não foi possível salvar. 😢")
    }
  }
  
  return (
    <ScrollView>
      <Container>
        <Wrapper>
          <ImagePlant uri={plant.photo} />
          <PlantName>{plant.name}</PlantName>
          <PlantAbout> 
          {plant.about}
          </PlantAbout>
        </Wrapper>

        <WrapperController>
          <TipContainer>
            <Image source={waterDrop} />
            <TipText>
            {plant.water_tips}
            </TipText>

          </TipContainer>
          <AlertLabel>Escolha o melhor horário pra ser lembrado:</AlertLabel>

          {
            showDatePicker && (
              <DateTimePicker 
                value={selectedDateTime} 
                mode="time" 
                display="spinner"
                onChange={handleChangeTime}
              />
            )
          }

          {
            Platform.OS === 'android' && (
              <DateTimePickerButton onPress={handleOpenDatetimePickerForAndroid}>
                <DateTimePickerText>
                  {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                </DateTimePickerText>
              </DateTimePickerButton>
            )
          } 

          <ButtonStyled title="Cadastrar planta" onPress={handleSave}/>
        </WrapperController>
      </Container>
    </ScrollView>
  )
};

export { PlantSave };
