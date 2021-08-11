import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Dimensions } from 'react-native'

import wateringImg from '../../assets/watering.png';
import { Feather } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
  font-family: ${fonts.heading};
  line-height: 34px;
`;

export const Image = styled.Image.attrs({
  source: wateringImg,
  resizeMode: 'contain'
})`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${colors.heading};
  font-family: ${fonts.text};
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

export const ArrowIcon = styled(Feather).attrs({
  name: "chevron-right"
})`
  font-size: 32px;
  color: ${colors.white};
`;



