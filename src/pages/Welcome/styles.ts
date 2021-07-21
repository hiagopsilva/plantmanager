import styled from 'styled-components/native';
import colors from '../../styles/colors';

import wateringImg from '../assets/watering.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
`;

export const Image = styled.Image.attrs({
  source: wateringImg
})`
  width: 292px;
  height: 284px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18;
  padding: 0 20px;
  color: ${colors.heading};
`;



