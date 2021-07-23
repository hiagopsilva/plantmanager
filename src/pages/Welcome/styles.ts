import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { Dimensions } from 'react-native'

import wateringImg from '../../assets/watering.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
`;

export const Image = styled.Image.attrs({
  source: wateringImg,
  resizeMode: 'contain'
})`
  height: ${Dimensions.get('window').width * 0.7};
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${colors.heading};
`;


export const Button = styled.TouchableOpacity`
  background:  ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 24px;
`;



